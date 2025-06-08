import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
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
import { auth, db } from '../firebase/config';
import { doc, getDoc, collection, addDoc, getDocs, orderBy, query } from 'firebase/firestore';

export default function DepoimentosScreen(): React.JSX.Element {
  const navigation = useNavigation();
  const [depoimentos, setDepoimentos] = useState<any[]>([]);
  const [novoComentario, setNovoComentario] = useState('');
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [loading, setLoading] = useState(true);

  // Busca nome do usuário
  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const usuario = auth.currentUser;
        if (usuario) {
          const userDocRef = doc(db, 'users', usuario.uid);
          const userDocSnap = await getDoc(userDocRef);
          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            const nome = userData.nome || userData.name || usuario.displayName || 'Usuário';
            setNomeUsuario(nome);
          } else {
            setNomeUsuario(usuario.displayName || 'Usuário');
          }
        } else {
          setNomeUsuario('Usuário Anônimo');
        }
      } catch (error) {
        setNomeUsuario('Usuário');
      }
    };
    fetchUserName();
  }, []);

  // Busca depoimentos do Firestore
  useEffect(() => {
    const fetchDepoimentos = async () => {
      try {
        const depoimentosRef = collection(db, 'depoimentos');
        const depoimentosQuery = query(depoimentosRef, orderBy('criadoEm', 'desc'));
        const querySnapshot = await getDocs(depoimentosQuery);
        const lista: any[] = [];
        querySnapshot.forEach((doc) => {
          lista.push(doc.data());
        });
        setDepoimentos(lista);
      } catch (error) {
        console.error('Erro ao buscar depoimentos:', error);
        Alert.alert('Erro', 'Não foi possível carregar os depoimentos. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };
    fetchDepoimentos();
  }, []);



  // Envia depoimento para o Firestore
  const handleEnviar = async () => {
    if (!novoComentario.trim()) {
      Alert.alert('Atenção', 'Por favor, digite seu comentário!');
      return;
    }
    if (!nomeUsuario.trim()) {
      Alert.alert('Erro', 'Nome do usuário não foi carregado. Tente novamente.');
      return;
    }
    const novoDepoimento = {
      nome: nomeUsuario,
      texto: novoComentario.trim(),
      criadoEm: new Date(),
    };
    try {
      await addDoc(collection(db, 'depoimentos'), novoDepoimento);
      setDepoimentos([novoDepoimento, ...depoimentos]);
      setNovoComentario('');
      Alert.alert('Sucesso!', 'Seu comentário foi enviado com sucesso.');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar seu comentário. Tente novamente.');
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Header title='DEPOIMENTOS'/>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Carregando...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title='DEPOIMENTOS'/>
      <View style={{ flex: 1 }} >
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
          >
            <View style={styles.contentWrapper}>
              <View style={styles.comentarioArea}>
                <View style={styles.comentarioBox}>
                  <Text style={styles.comentarioLabel}>
                    Olá, {nomeUsuario}! Deixe seu comentário:
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Digite seu feedback..."
                    placeholderTextColor="#888"
                    value={novoComentario}
                    onChangeText={setNovoComentario}
                    multiline
                    maxLength={300}
                  />
                  <View style={styles.buttonContainer}>
                    <Text style={styles.caractereCount}>
                      {novoComentario.length}/300
                    </Text>
                    <TouchableOpacity
                      style={[
                        styles.enviarButton,
                        { opacity: novoComentario.trim() ? 1 : 0.5 },
                      ]}
                      onPress={handleEnviar}
                      disabled={!novoComentario.trim()}
                    >
                      <Text style={styles.enviarButtonText}>Enviar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.depoimentosContainer}>
                {depoimentos.map((item, idx) => (
                  <View key={idx} style={styles.depoimentoBox}>
                    <Text style={styles.depoimentoNome}>
                      {item.nome}
                    </Text>
                    <Text style={styles.depoimentoTexto}>
                      {item.texto}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: '#666',
  },
  contentWrapper: {
    width: '95%',
    maxWidth: 420,
    alignSelf: 'center',
    gap: 24,
    alignItems: 'center',
    paddingVertical: 16,
    paddingBottom: 32,
  },
  comentarioArea: {
    width: '100%',
    backgroundColor: '#ffffff',
  },
  comentarioBox: {
    width: '100%',
    gap: 12,
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  comentarioLabel: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: '#333333',
    textAlign: 'left',
  },
  input: {
    minHeight: 80,
    maxHeight: 120,
    width: '100%',
    borderColor: '#d0d0d0',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#333',
    backgroundColor: '#fafafa',
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  caractereCount: {
    fontSize: 12,
    color: '#888',
    fontFamily: 'Inter',
  },
  enviarButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#012a78',
    borderRadius: 8,
  },
  enviarButtonText: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
  },
  depoimentosContainer: {
    width: '100%',
    gap: 12,
    alignItems: 'flex-start',
  },
  sectionTitle: {
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  depoimentoBox: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  depoimentoNome: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '600',
    color: '#012a78',
    textAlign: 'left',
  },
  depoimentoTexto: {
    fontFamily: 'Inter',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    color: '#444444',
    textAlign: 'left',
  },
});