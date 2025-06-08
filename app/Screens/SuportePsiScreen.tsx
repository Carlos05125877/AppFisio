import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import Header from '@/components/Header';
import Svg, { Rect, Path, Text as SvgText, TSpan, G } from 'react-native-svg';
import { useRouter } from 'expo-router';
import BtFisioIa from '@/components/btFisioIa';

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
  const router = useRouter();

  const openModal = (key: string) => setModal(key);
  const closeModal = () => setModal(null);

  const modalInfo = informativos.find((i) => i.key === modal);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header title="SUPORTE PSICOLÓGICO" />
      <View style={styles.container}>
        <View style={styles.brainWrapper}>
          <View style={styles.brainContainer}>
            <Svg width={369} height={413} viewBox="0 0 369 413" fill="none">
              <Rect width="369" height="413" rx="10" fill="#fff" />
              {/* Paths do cérebro */}
              <Path d="M177.588 185.039C169.875 187.103 163.9 190.253 158.794 194.924C155.644 197.857 153.146 198.944 148.366 199.704C131.636 202.42 117.406 210.676 110.779 221.539C107.955 225.993 87.2839 241.286 100 246.5C102.282 259.536 124.358 266.458 138.154 269.5C145.541 271.238 151.19 266.404 165.53 262.059C175.85 259.017 179.434 258.908 189.754 261.081C209.851 265.318 233.967 260.755 238.639 251.847C242.549 244.243 240.377 239.681 228.21 229.904C223.213 225.884 223.213 225.884 210.177 226.102C201.378 226.21 196.707 225.884 195.62 225.015C194.1 223.712 193.231 223.603 186.821 223.495C185.083 223.386 181.281 224.689 178.131 226.319C174.111 228.492 170.092 229.469 163.9 230.012C156.296 230.664 155.21 231.099 152.82 233.923C151.299 235.77 149.343 238.812 148.366 240.658C146.519 244.352 143.586 245.547 143.586 242.614C143.586 241.745 144.781 239.246 146.302 237.073C150.973 230.23 149.561 226.21 142.065 225.015C139.241 224.581 138.154 223.82 138.154 222.408C138.154 219.584 139.892 219.801 146.954 223.277C152.059 225.776 154.015 226.21 161.51 225.993C168.897 225.776 171.396 225.233 177.914 222.082C185.518 218.497 185.518 218.497 193.665 220.561C203.007 222.951 215.283 222.951 220.28 220.67C222.778 219.584 224.408 217.628 226.037 213.609C228.97 206.548 228.97 202.854 225.929 197.532C222.778 192.1 217.13 189.601 208.548 189.71C204.202 189.819 200.726 189.167 196.598 187.32C188.777 183.735 184.323 183.192 177.588 185.039Z" fill="#516BFB"/>
              <Path d="M168.778 98.1007C167.267 98.7481 163.49 98.9639 160.469 98.5323C147.737 97.0217 136.192 102.309 134.681 110.509C134.034 113.746 134.681 114.609 141.587 121.623C147.09 127.234 149.895 129.284 151.945 129.284C155.506 129.284 155.614 131.765 152.161 133.384C149.464 134.571 148.708 137.16 147.629 151.187C146.982 158.093 147.198 159.172 149.14 160.898C150.327 161.977 152.593 163.272 154.319 163.704C158.527 164.783 158.959 167.049 154.858 167.049C152.053 167.049 151.514 167.588 150.542 171.041C149.895 173.307 149.356 176.004 149.356 177.083C149.356 178.378 148.708 178.918 147.521 178.702C146.442 178.486 145.795 177.515 146.011 176.652C148.708 166.293 148.277 161.654 144.284 161.654C143.529 161.654 139.645 164.135 135.652 167.049C128.962 172.228 126.697 173.091 126.049 170.717C125.833 170.178 128.962 167.588 132.847 164.891C142.45 158.417 143.745 156.367 144.392 146.44C144.716 141.908 145.255 137.484 145.687 136.513C146.766 133.6 142.018 125.291 136.839 121.083C127.776 113.638 116.986 112.667 103.498 118.062C85.1551 125.507 70.6965 141.153 76.4152 147.519C78.0337 149.245 79.7601 149.461 91.5212 149.353C104.793 149.245 104.793 149.245 109.972 145.037C113.964 141.692 115.259 141.153 116.015 142.34C116.662 143.311 116.446 144.174 115.259 144.929C114.18 145.469 112.238 146.979 110.727 148.274C107.922 150.54 107.922 150.54 111.806 154.532C113.857 156.69 116.338 158.417 117.417 158.417C119.575 158.417 119.683 161.546 117.525 162.409C116.554 162.733 115.259 162.301 114.504 161.438C113.749 160.575 111.159 158.309 108.785 156.475C104.253 153.022 104.146 153.022 91.4133 153.022C73.9335 153.022 63.8988 156.043 54.8352 164.028C45.0163 172.66 46.171 185.875 51.0002 196.5C52.6186 200.061 54.8352 201.61 56.7774 205.893C60.0002 213 60.2302 220.243 66.1647 225.638C71.0202 230.062 75.552 231.249 84.5077 230.386C92.816 229.631 98.1031 226.825 104.577 219.488C115.799 206.864 119.036 203.843 124.754 200.606C130.689 197.261 145.148 192.945 150.435 192.945C152.377 192.945 153.995 192.082 155.182 190.247C156.153 188.737 157.556 187.55 158.311 187.55C158.959 187.55 161.548 186.039 163.814 184.313C166.188 182.478 168.67 181.076 169.317 181.076C170.072 181.076 171.475 180.105 172.554 178.918C174.388 176.976 174.388 176.22 173.094 170.933C170.072 158.093 174.065 143.095 182.589 135.65C184.747 133.708 187.876 129.607 189.387 126.478C192.408 120.544 193.595 118.817 197.695 114.717C202.982 109.43 200.608 101.769 192.624 98.4244C188.415 96.698 172.878 96.4822 168.778 98.1007ZM125.618 172.767C125.618 173.631 121.733 176.004 116.986 178.162C110.296 181.184 108.138 182.694 107.167 185.068C106.627 186.687 105.764 188.305 105.332 188.629C103.498 190.031 99.7216 199.203 99.7216 202.332C99.7216 206.432 98.211 206.756 94.3266 203.735C91.6291 201.577 91.6291 201.577 94.4345 199.203C96.053 197.8 97.5636 195.966 97.9952 195.103C98.3189 194.24 99.8295 191.542 101.34 189.168C103.282 185.931 103.822 183.881 103.282 181.292C102.743 178.055 102.851 177.839 106.088 177.839C109.541 177.839 109.972 177.731 117.525 173.739C122.488 171.041 125.618 170.717 125.618 172.767Z" fill="#4239C6"/>
              <Path d="M289.225 177.726C286.959 178.589 281.349 183.875 274.552 191.536C271.639 194.772 270.991 194.988 264.302 194.88C248.119 194.664 236.035 203.835 236.035 216.35C236.035 221.097 239.596 227.247 243.264 228.866C247.148 230.7 249.198 235.555 249.521 244.402C249.953 253.896 251.248 255.73 258.584 256.917C265.058 257.888 278.652 254.759 284.154 251.091C292.138 245.481 292.03 242.136 283.291 233.828C279.623 230.268 276.386 227.355 276.062 227.355C275.631 227.355 273.473 228.11 271.099 228.973C268.726 229.837 265.921 230.484 264.842 230.592C261.281 230.592 264.842 226.492 268.618 226.06C271.207 225.845 272.502 224.981 273.581 222.716C275.091 219.587 277.033 218.832 277.033 221.313C277.033 223.363 287.93 233.828 292.677 236.31C303.251 241.92 305 225.5 314 214C312.382 207.742 304.869 204.914 305.948 200.922C306.703 198.225 313.5 195.55 313.5 193.5C308.5 186 298.18 174.165 289.225 177.726Z" fill="#03A1FA"/>
              <Path d="M217.358 107.293C210.237 109.882 201.389 119.593 200.095 126.282C199.555 128.98 197.721 131.785 194.376 135.022C184.665 144.301 183.047 147.97 183.047 158.975C183.047 170.412 186.931 175.052 198.476 176.886C202.253 177.426 206.892 178.612 209.05 179.476C211.1 180.339 214.661 181.094 217.034 181.094C219.3 181.094 222.969 181.849 225.019 182.713C231.385 185.302 235.701 181.634 235.701 173.649C235.701 167.499 237.535 166.636 238.722 172.139C239.801 177.318 240.124 177.641 245.411 178.181C247.677 178.397 249.835 179.152 250.051 179.799C250.482 181.202 243.361 182.713 241.635 181.634C239.909 180.555 235.161 185.302 235.161 188.107C235.161 191.884 239.153 196.2 242.714 196.2C244.44 196.2 246.167 195.66 246.598 195.013C248.001 192.747 257.172 189.51 260.841 190.157C266.02 190.913 268.178 188.323 269.041 179.691C270.443 166.744 267.207 160.702 255.554 154.983C250.051 152.394 233.435 147.646 229.874 147.646C228.903 147.754 226.206 149.372 223.832 151.422C219.624 155.091 219.516 155.199 219.732 161.673C219.948 167.391 219.732 168.254 218.113 167.931C216.819 167.715 216.171 166.312 215.955 162.967C215.632 158.004 212.179 154.551 208.834 155.846C207.755 156.278 207.108 155.954 207.108 154.875C207.108 153.688 208.295 153.365 212.179 153.58C216.927 153.904 217.574 153.688 221.782 149.48C225.45 145.704 226.314 144.301 225.99 141.388C225.882 139.446 224.911 136.964 223.724 135.669C221.998 133.835 221.998 133.296 223.292 132.54C225.666 131.03 227.069 131.785 227.393 134.806C228.256 141.496 230.414 144.085 236.132 145.057C246.059 146.783 258.5 153 260 154C260.998 154.665 261.5 154.888 261.92 155.199C263 156 265.156 156.494 266.775 158.112C272.278 163.939 274.112 172.031 271.954 181.094C270.12 188.971 272.925 189.618 278.644 182.713C280.909 180.015 284.686 176.886 287.06 175.699C295.583 171.276 284 154.12 289 151.422C289.5 150 301.971 144.409 301 141.388C300.029 138.367 279.183 136.101 278.104 134.375C275.083 130.167 264.293 123.153 258.467 121.643C254.798 120.78 266.795 119.766 265.5 117.5C259.89 108.005 225 100 217.358 107.293Z" fill="#1C46F5"/>
              {/* Áreas interativas */}
              <G onPress={() => openModal('ansiedade')}>
                <Rect
                  x={5}
                  y={160}
                  width={95}
                  height={36}
                  rx={8}
                  fill="#4239C6"
                />
                <SvgText
                  x={5 + 95 / 2}
                  y={160 + 36 / 2 + 3}
                  fontSize={9}
                  fontWeight="bold"
                  fill="#fff"
                  textAnchor="middle"
                  fontFamily="Quicksand"
                >
                  <TSpan x={5 + 95 / 2} dy={-7}>ANSIEDADE</TSpan>
                  <TSpan x={5 + 95 / 2} dy={13}>E DEPRESSÃO</TSpan>
                </SvgText>
              </G>
              <G onPress={() => openModal('brainfog')}>
                <Rect
                  x={240}
                  y={113}
                  width={101}
                  height={33}
                  rx={8}
                  fill="#1C46F5"
                />
                <SvgText
                  x={240 + 101 / 2}
                  y={113 + 33 / 2 + 3}
                  fontSize={9}
                  fontWeight="bold"
                  fill="#fff"
                  textAnchor="middle"
                  fontFamily="Quicksand"
                >
                  <TSpan x={240 + 101 / 2} dy={-7}>BRAIN FOG</TSpan>
                  <TSpan x={240 + 101 / 2} dy={13}>(NÉVOA CEREBRAL)</TSpan>
                </SvgText>
              </G>
              <G onPress={() => openModal('insonia')}>
                <Rect
                  x={56}
                  y={237}
                  width={89}
                  height={38}
                  rx={8}
                  fill="#516BFB"
                />
                <SvgText
                  x={56 + 89 / 2}
                  y={237 + 38 / 2 - 3}
                  fontSize={9}
                  fontWeight="bold"
                  fill="#fff"
                  textAnchor="middle"
                  fontFamily="Quicksand"
                >
                  <TSpan x={56 + 89 / 2} dy={-7}>INSÔNIA E</TSpan>
                  <TSpan x={56 + 89 / 2} dy={13}>DISTÚRBIOS</TSpan>
                  <TSpan x={56 + 89 / 2} dy={13}>DO HUMOR</TSpan>
                </SvgText>
              </G>
              <G onPress={() => openModal('tept')}>
                <Rect
                  x={277}
                  y={184}
                  width={92}
                  height={38}
                  rx={8}
                  fill="#03A1FA"
                />
                <SvgText
                  x={277 + 92 / 2}
                  y={184 + 38 / 2 - 3}
                  fontSize={9}
                  fontWeight="bold"
                  fill="#fff"
                  textAnchor="middle"
                  fontFamily="Quicksand"
                >
                  <TSpan x={277 + 92 / 2} dy={-7}>ESTRESSE</TSpan>
                  <TSpan x={277 + 92 / 2} dy={13}>PÓS-TRAUMÁTICO</TSpan>
                  <TSpan x={277 + 92 / 2} dy={13}>(TEPT)</TSpan>
                </SvgText>
              </G>
            </Svg>
          </View>
        </View>
      </View>
      <View style={styles.btStyle}>
        <BtFisioIa onPress={() =>
          router.push("/Screens/FisioIa")  
        }/>
      </View>
      {/* Modal do balão */}
      <Modal
        visible={!!modal}
        transparent
        animationType="fade"
        onRequestClose={closeModal}
      >
        <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={closeModal}>
          <View style={styles.balloon}>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>×</Text>
            </TouchableOpacity>
            {modalInfo && (
              <>
                <Text style={styles.balloonTitle}>{modalInfo.balloon.title}</Text>
                {modalInfo.balloon.content.map((text, idx) => (
                  <Text key={idx} style={styles.balloonText}>{text}</Text>
                ))}
              </>
            )}
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    paddingBottom: 24,
  },
  brainWrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brainContainer: {
    width: '100%',
    maxWidth: 420,
    height: 413,
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
    padding: 0,
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
  btStyle: {
    marginTop: 20,
    padding: 10,
    width: "100%",
  }
});

export default SuportePsiScreen;