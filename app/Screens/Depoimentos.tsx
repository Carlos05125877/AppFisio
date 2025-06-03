/**
 * Codia React Native App
 * https://codia.ai
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  PanResponder,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '@/components/Header';
import { auth } from '../firebase/config';

const depoimentosIniciais = [
  {
    nome: 'Marcelo',
    texto:
      '“O aplicativo é uma ferramenta essencial para ampliar o conhecimento da população e empoderar pacientes. Com linguagem acessível e conteúdo baseado em evidências, ele promove a conscientização sobre sintomas persistentes e orienta sobre práticas fisioterapêuticas que auxiliam na reabilitação respiratória, funcional e emocional. Uma iniciativa valiosa que une tecnologia, saúde e informação de forma prática e humanizada.”',
  },
  {
    nome: 'Joaquim',
    texto:
      'Aplicativo bem estruturado, com informações claras e confiáveis sobre a Covid Longa. Destaca com excelência a importância da fisioterapia na recuperação, oferecendo suporte educativo e acessível para pacientes e profissionais.',
  },
  {
    nome: 'João',
    texto:
      'Aplicativo intuitivo e educativo, que esclarece de forma eficaz os desafios da Covid Longa e mostra como a fisioterapia pode transformar a jornada de recuperação.',
  },
  {
    nome: 'Maria',
    texto:
      'Uma plataforma informativa e atualizada, que valoriza o cuidado contínuo e orienta com precisão sobre o papel da fisioterapia no restabelecimento da saúde pós-Covid.',
  },
];

export default function DepoimentosScreen(): React.JSX.Element {
  const navigation = useNavigation();
  const [depoimentos, setDepoimentos] = useState(depoimentosIniciais);
  const [novoComentario, setNovoComentario] = useState('');
  const [nome, setNome] = useState('');

  useEffect(() => {
    const usuario = auth.currentUser;
    if (usuario) {
      setNome(usuario.displayName || usuario.email || '');
    }
  }, []);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (_, gestureState) => true,
      onMoveShouldSetPanResponder: (_, gestureState) => gestureState.x0 < 40,
      onPanResponderMove: () => {},
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 80 && gestureState.x0 < 40) {
          navigation.goBack();
        }
      },
    })
  ).current;

  const handleEnviar = () => {
    if (!novoComentario.trim() || !nome.trim()) {
      Alert.alert('Preencha seu nome e comentário!');
      return;
    }
    setDepoimentos([
      {
        nome: nome.trim(),
        texto: novoComentario.trim(),
      },
      ...depoimentos,
    ]);
    setNovoComentario('');
    setNome('');
    Alert.alert('Comentário enviado!', 'Seu feedback foi registrado.');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Header title='DEPOIMENTOS'/>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={0}
      >
        <ScrollView
          scrollEnabled={true}
          contentInsetAdjustmentBehavior="automatic"
          keyboardShouldPersistTaps="handled"
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start' }}
          {...panResponder.panHandlers}
        >
          <View style={styles.container}>
            <View style={styles.content}>
              <View style={styles.comentarioArea}>
                <View style={styles.comentarioBox}>
                  <Text style={styles.comentarioLabel} numberOfLines={1}>
                    Deixe seu comentário!!
                  </Text>
                  <TextInput
                    style={[styles.input, { minHeight: 40, maxHeight: 80 }]}
                    placeholder="Digite seu feedback..."
                    placeholderTextColor="#888"
                    value={novoComentario}
                    onChangeText={setNovoComentario}
                    multiline
                    maxLength={300}
                  />
                  <TouchableOpacity
                    style={[
                      styles.enviarButton,
                      { opacity: novoComentario.trim() && nome.trim() ? 1 : 0.5 },
                    ]}
                    onPress={handleEnviar}
                    disabled={!novoComentario.trim() || !nome.trim()}
                  >
                    <Text style={styles.enviarButtonText}>Enviar</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.depoimentosContainer}>
                {depoimentos.map((item, idx) => (
                  <View key={idx} style={styles.depoimentoBox}>
                    <Text style={styles.depoimentoNome} numberOfLines={1}>
                      {item.nome}
                    </Text>
                    <Text style={styles.depoimentoTexto}>
                      {item.texto}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#ffffff',
    position: 'relative',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 44,
    paddingTop: 19,
    paddingRight: 17,
    paddingBottom: 19,
    paddingLeft: 17,
    backgroundColor: '#ffffff',
    position: 'relative',
    zIndex: 18,
    marginTop: 16,
  },
  backButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  backButtonText: {
    fontSize: 24,
    color: '#222',
    fontWeight: 'bold',
  },
  headerIcon: {
    width: 32,
    height: 32,
    position: 'relative',
    overflow: 'hidden',
    zIndex: 19,
  },
  content: {
    width: '95%',
    maxWidth: 420,
    alignSelf: 'center',
    gap: 32,
    alignItems: 'center',
    position: 'relative',
    marginTop: 0,
    marginBottom: 0,
  },
  titleContainer: {
    gap: 18,
    alignItems: 'center',
    alignSelf: 'stretch',
    position: 'relative',
    marginTop: 16,
    marginBottom: 8,
  },
  title: {
    fontFamily: 'Alumni Sans SC',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 28,
    color: '#5b5b5b',
    textAlign: 'center',
    marginBottom: 2,
  },
  divider: {
    width: '100%',
    height: 1,
    alignSelf: 'stretch',
    backgroundColor: '#e0e0e0',
  },
  depoimentosContainer: {
    width: '100%',
    minHeight: 200,
    gap: 10,
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  depoimentoBox: {
    minHeight: 60,
    paddingVertical: 8,
    paddingHorizontal: 18,
    gap: 5,
    alignItems: 'flex-start',
    width: '100%',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#000000',
    backgroundColor: '#fff',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  depoimentoNome: {
    fontFamily: 'Quicksand',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 20,
    color: '#000000',
    textAlign: 'left',
  },
  depoimentoTexto: {
    fontFamily: 'Quicksand',
    fontSize: 12,
    fontWeight: '300',
    lineHeight: 18,
    color: '#000000',
    textAlign: 'left',
  },
  comentarioArea: {
    width: '100%',
    backgroundColor: '#ffffff',
    paddingBottom: 10,
    paddingTop: 10,
  },
  comentarioBox: {
    width: '100%',
    maxWidth: 420,
    gap: 13,
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ececec',
    elevation: 2,
    alignSelf: 'center',
  },
  comentarioLabel: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#5e5e66',
    textAlign: 'left',
    marginBottom: 6,
  },
  input: {
    minHeight: 36,
    maxHeight: 80,
    width: '100%',
    borderColor: '#27272a',
    borderWidth: 1,
    borderRadius: 6,
    padding: 8,
    fontFamily: 'Inter',
    fontSize: 15,
    color: '#222',
    backgroundColor: '#f7f7f7',
    marginBottom: 8,
  },
  enviarButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: '#012a78',
    borderRadius: 8,
    position: 'relative',
    zIndex: 23,
  },
  enviarButtonText: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#ffffff',
    textAlign: 'left',
  },
});
