import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Platform, KeyboardAvoidingView } from 'react-native';
import { Stack } from 'expo-router';
import { GoogleGenAI } from "@google/genai";
import  Header  from '@/components/Header';

// --- Constantes para facilitar a manutenção ---
const GEMINI_API_KEY = "AIzaSyC-N2m8jB0zVxB55mIrxuy0-hvKqA5Gi9s";
const GEMINI_MODEL = "gemini-2.0-flash";
const LOADING_DOTS_INTERVAL = 500; // ms
const PLACEHOLDER_TEXT = "Qual a sua dúvida sobre a COVID?";
const APP_TITLE = 'FISIO IA';

// Cores
const COLORS = {
  white: '#fff',
  black: '#000',
  lightGray: '#e0e0e0',
  darkBlue: '#001f3f',
  primaryBlue: '#007bff',
  mediumGray: '#ccc',
};

const FisioIa = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'ai' }[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingDots, setLoadingDots] = useState('.');
  const loadingIntervalRef = useRef<number | null>(null);

  // Inicializa a API do Gemini com a chave definida em constante
  const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

  // Função auxiliar para renderizar texto com negrito (markdown **)
  const renderFormattedText = (text: string, isAiMessage: boolean) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      // Verifica se a parte é um texto em negrito
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <Text key={index} style={[{ fontWeight: 'bold' }, { color: isAiMessage ? COLORS.white : COLORS.black }]}>
            {part.substring(2, part.length - 2)}
          </Text>
        );
      }
      // Renderiza texto normal
      return <Text key={index} style={{ color: isAiMessage ? COLORS.white : COLORS.black }}>{part}</Text>;
    });
  };

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const newUserMessage = { text: input, sender: 'user' as 'user' };
    // Adiciona a mensagem do usuário ao histórico
    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    setInput('');

    setLoading(true);
    setLoadingDots('.'); // Reseta os pontos do indicador de carregamento
    // Inicia a animação dos pontos de carregamento
    loadingIntervalRef.current = setInterval(() => {
      setLoadingDots(prevDots => {
        if (prevDots === '...') return '.';
        return prevDots + '.';
      });
    }, LOADING_DOTS_INTERVAL);

    try {
      // Envia o histórico completo da conversa para a API do Gemini
      const aiResponse = await callGeminiApi([...messages, newUserMessage]);
      setMessages(prevMessages => [...prevMessages, { text: aiResponse, sender: 'ai' }]);
    } catch (error) {
      console.error("Erro ao chamar a API do Gemini:", error);
      setMessages(prevMessages => [...prevMessages, { text: "Ocorreu um erro ao processar sua solicitação.", sender: 'ai' }]);
    } finally {
      // Finaliza o carregamento e limpa o intervalo da animação
      setLoading(false);
      if (loadingIntervalRef.current !== null) {
        clearInterval(loadingIntervalRef.current);
        loadingIntervalRef.current = null;
      }
    }
  };

  // Função para chamar a API do Gemini e obter a resposta
  const callGeminiApi = async (conversationHistory: { text: string; sender: 'user' | 'ai' }[]) => {
    try {
      // Prompt inicial para direcionar a IA a responder apenas perguntas relacionadas ao app
      const initialPrompt = {
        role: 'user',
        parts: [{ text: "Você é um assistente virtual para um aplicativo de fisioterapia. Responda apenas a perguntas relacionadas a fisioterapia, saúde, exercícios, recuperação e funcionalidades do aplicativo. Se a pergunta não for sobre esses tópicos, peça ao usuário para reformular." }],
      };

      // Mapeia o histórico da conversa para o formato de `contents` esperado pela API do Gemini
      // e adiciona o prompt inicial
      const contents = [initialPrompt, ...conversationHistory.map(message => ({
        role: message.sender === 'user' ? 'user' : 'model',
        parts: [{ text: message.text }],
      }))];

      const response = await ai.models.generateContent({
        model: GEMINI_MODEL,
        contents: contents,
      });
      
      // Extrai o texto da resposta da IA ou retorna uma string vazia
      if (response.candidates && response.candidates[0] && response.candidates[0].content && response.candidates[0].content.parts && response.candidates[0].content.parts[0]) {
           return response.candidates[0].content.parts[0].text || ""; 
      } else {
           console.error("Resposta da API sem texto esperado:", response);
           return "Não foi possível obter uma resposta da IA.";
      }
    } catch (error) {
      console.error("Erro na chamada da API do Gemini:", error);
      throw error;
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
    >
      
      <Header title="FISIO IA"/>
      
      <ScrollView style={styles.messageList}>
        <Text style={styles.greeting}>Olá!</Text>
        <Text style={styles.greeting}>Vamos começar seus estudos sobre COVID?</Text>

        {/* Renderiza todas as mensagens da conversa */}
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.messageBubble,
              message.sender === 'user' ? styles.userBubble : styles.aiBubble,
            ]}>
            {/* Usa a função auxiliar para renderizar o texto com formatação (negrito) */}
            <Text style={styles.messageText}>
                {renderFormattedText(message.text, message.sender === 'ai')}
            </Text>
          </View>
        ))}

        {/* Indicador de carregamento/digitando da IA */}
        {loading && (
          <View style={[styles.messageBubble, styles.aiBubble]}>
            <Text style={[styles.messageText, styles.aiMessageText]}>{loadingDots}</Text>
          </View>
        )}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={PLACEHOLDER_TEXT}
          placeholderTextColor={COLORS.black} // Garante que o placeholder seja preto
          value={input}
          onChangeText={setInput}
          onSubmitEditing={sendMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  messageList: {
    flex: 1,
    padding: 10,
  },
  greeting: {
    fontSize: 18,
    marginBottom: 5,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '80%',
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: COLORS.lightGray,
  },
  aiBubble: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.darkBlue, // Cor azul escura
    color: COLORS.white, // Texto branco para contraste
  },
   messageText: {
    fontSize: 16,
    color: COLORS.black, // Cor do texto padrão para bolhas de usuário
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: COLORS.mediumGray,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.mediumGray,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
    textAlignVertical: 'center',
    paddingVertical: 0,
    // @ts-ignore: Propriedade específica do Android para correção de padding de fonte
    includeFontPadding: false,
    color: COLORS.black, // Garante que o texto do input seja preto
  },
  sendButton: {
    backgroundColor: COLORS.primaryBlue, // Cor azul do botão
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  sendButtonText: {
    color: COLORS.white,
    fontSize: 16,
  },
  aiMessageText: {
    color: COLORS.white, // Cor do texto para mensagens da IA
  },
});

export default FisioIa;
