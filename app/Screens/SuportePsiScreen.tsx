import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Pressable,
} from 'react-native';
import Header from '@/components/Header';

interface GuiaScreenProps {}

const informativos = [
  {
    key: 'ansiedade',
    label: 'ANSIEDADE E DEPRESSÃO',
    color: '#4239c6',
    position: { top: 160, left: 5 },
    balloon: {
      title: 'ANSIEDADE E DEPRESSÃO',
      content: [
        'O que é:\nSentimentos persistentes de medo, angústia e tristeza que surgem mesmo após a recuperação da COVID-19.',
        'O que dizem os estudos:\nSegundo a Fiocruz, até 35% dos pacientes pós-COVID relatam sintomas ansiosos ou depressivos mesmo meses após a infecção.',
        'Por que isso acontece?\nA infecção pode afetar áreas do cérebro ligadas à regulação das emoções e ao estresse.',
        'E agora?\nBuscar apoio psicológico é fundamental! Exercícios físicos, contato social e terapia são grandes aliados na recuperação emocional.',
      ],
    },
  },
  {
    key: 'brainfog',
    label: 'BRAIN FOG\n(NÉVOA CEREBRAL)',
    color: '#1c46f5',
    position: { top: 113, left: 240 },
    balloon: {
      title: 'BRAIN FOG (NÉVOA CEREBRAL)',
      content: [
        'O que é:\nVocê sente que está mais esquecido, lento para pensar ou com dificuldade de concentração? Isso é o "brain fog".',
        'O que dizem os estudos:\nPesquisas de Harvard mostram que 1 em cada 4 pessoas têm sintomas cognitivos 6 meses após a COVID.',
        'Por que isso acontece?\nA inflamação provocada pela COVID afeta as conexões cerebrais, impactando foco e memória.',
        'E agora?\nOrganize sua rotina, evite multitarefas e pratique atividades que estimulem o cérebro — como leitura ou jogos cognitivos.',
      ],
    },
  },
  {
    key: 'insonia',
    label: 'INSÔNIA E DISTÚRBIOS\nDO HUMOR',
    color: '#516bfb',
    position: { top: 237, left: 56 },
    balloon: {
      title: 'INSÔNIA E DISTÚRBIOS DO HUMOR',
      content: [
        'O que é:\nDificuldade para dormir, sono leve ou acordar várias vezes à noite, acompanhados de irritabilidade e mudanças bruscas de humor.',
        'O que dizem os estudos:\nSegundo o Ministério da Saúde, mais de 40% das pessoas com COVID longa relatam problemas no sono.',
        'Por que isso acontece?\nO sistema nervoso autônomo pode ficar desregulado após a infecção, afetando o ciclo natural do sono.',
        'E agora?\nCrie uma rotina de sono saudável, evite telas à noite e, se necessário, procure ajuda profissional para uma avaliação.',
      ],
    },
  },
  {
    key: 'tept',
    label: 'ESTRESSE\nPÓS-TRAUMÁTICO (TEPT)',
    color: '#03a1fa',
    position: { top: 184, left: 277 },
    balloon: {
      title: 'ESTRESSE PÓS-TRAUMÁTICO (TEPT)',
      content: [
        'O que é:\nCrises de pânico, pesadelos ou lembranças repetitivas de momentos difíceis vividos durante a COVID — como internação ou medo da morte.',
        'O que dizem os estudos:\nA OMS aponta aumento significativo de casos de TEPT desde a pandemia, principalmente entre pacientes internados.',
        'Por que isso acontece?\nO cérebro grava eventos traumáticos com muita intensidade, e a COVID pode ter sido um desses gatilhos.',
        'E agora?\nÉ importante conversar sobre o que sentiu. Terapias como a cognitivo-comportamental ou EMDR ajudam muito nesse processo.',
      ],
    },
  },
];

const SuportePsiScreen: React.FC<GuiaScreenProps> = () => {
  const [modal, setModal] = useState<null | string>(null);

  const openModal = (key: string) => setModal(key);
  const closeModal = () => setModal(null);

  const currentInfo = informativos.find((i) => i.key === modal);

  return (
    <View>
      <Header title="SUPORTE PSICOLÓGICO" />
      <ScrollView scrollEnabled contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          
          <View style={styles.brainContainer}>
            {/* Botões das áreas do cérebro */}
            {informativos.map((info) => (
              <TouchableOpacity
                key={info.key}
                style={[
                  styles.brainButton,
                  {
                    backgroundColor: info.color,
                    top: info.position.top,
                    left: info.position.left,
                  },
                ]}
                onPress={() => openModal(info.key)}
                activeOpacity={0.8}
              >
                <Text style={styles.brainButtonText}>{info.label}</Text>
              </TouchableOpacity>
            ))}
            <ImageBackground
    style={styles.brainImage}
    source={require('../../assets/images/Cerebro.png')}
    resizeMode="contain"
  />
          </View>
          <View style={styles.articlesContainer}>
            <View style={styles.articlesBox} />
            <Text style={styles.articlesText} numberOfLines={1}>
              veja artigos científicos
            </Text>
            <ImageBackground
    style={styles.articlesIcon}
    source={{ uri: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/ciVUEdeAsy.png' }}
    resizeMode="cover"
  />
          </View>
        </View>
        {/* Modal do balão informativo */}
        <Modal
          visible={!!modal}
          transparent
          animationType="fade"
          onRequestClose={closeModal}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.balloon}>
              <Pressable style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.closeButtonText}>✕</Text>
              </Pressable>
              <Text style={styles.balloonTitle}>{currentInfo?.balloon.title}</Text>
              {currentInfo?.balloon.content.map((line, idx) => (
                <Text key={idx} style={styles.balloonText}>
                  {line}
                </Text>
              ))}
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff',
    position: 'relative',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 24,
    height: 770,
  },
  headerIcon: {
    width: 32,
    height: 32,
    position: 'relative',
    overflow: 'hidden',
    zIndex: 18,
  },
  titleContainer: {
    width: '100%',
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
  brainContainer: {
    width: '100%',
    maxWidth: 420,
    height: 413,
    paddingTop: 0,
    paddingRight: 5,
    paddingBottom: 0,
    paddingLeft: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    position: 'relative',
    overflow: 'hidden',
    zIndex: 4,
    marginLeft: 0,
    marginBottom: 0,
  },
  brainButton: {
    position: 'absolute',
    borderRadius: 8,
    paddingVertical: 24,
    paddingHorizontal: 10,
    minWidth: 85,
    maxWidth: 110,
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brainButtonText: {
    color: '#fff',
    fontFamily: 'Quicksand',
    fontSize: 10,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 14,
  },
  brainImage: {
    width: '100%',
    aspectRatio: 266.622 / 172.863,
  },
  articlesContainer: {
    width: '95%',
    maxWidth: 420,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: 32,
    marginLeft: 0,
    marginBottom: 0,
  },
  articlesBox: {
    height: 103,
    alignSelf: 'stretch',
    backgroundColor: '#1c46f5',
    borderRadius: 10,
    position: 'relative',
    zIndex: 1,
  },
  articlesText: {
    width: 159,
    height: 20,
    fontFamily: 'Alumni Sans SC',
    fontSize: 21,
    fontWeight: '600',
    lineHeight: 20,
    color: '#ffffff',
    position: 'absolute',
    top: 52,
    left: 66,
    textAlign: 'center',
    zIndex: 2,
  },
  articlesIcon: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 37,
    left: 272,
    overflow: 'hidden',
    zIndex: 3,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  balloon: {
    width: 320,
    backgroundColor: '#f5f5f5',
    borderRadius: 14,
    padding: 18,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    alignItems: 'flex-start',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
    padding: 4,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#222',
    fontWeight: 'bold',
  },
  balloonTitle: {
    fontFamily: 'Quicksand',
    fontWeight: '700',
    fontSize: 13,
    color: '#222',
    alignSelf: 'center',
    marginBottom: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  balloonText: {
    fontFamily: 'Quicksand',
    fontSize: 13,
    color: '#222',
    marginBottom: 7,
    lineHeight: 18,
  },
});

export default SuportePsiScreen;