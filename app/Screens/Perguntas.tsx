import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  PanResponder,
} from 'react-native';
import Header from '@/components/Header';
import { useNavigation } from '@react-navigation/native';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const perguntasRespostas = [
  {
    pergunta: 'O que é a síndrome pós-COVID e como a fisioterapia pode ajudar?',
    resposta:
      'A síndrome pós-COVID, ou "long COVID", é um conjunto de sintomas persistentes que continuam após a recuperação da infecção pelo coronavírus. A fisioterapia pode ajudar a melhorar a função respiratória, reduzir a fadiga muscular, aliviar dores articulares e melhorar o bem-estar geral, através de exercícios respiratórios, alongamentos e fortalecimento muscular.',
    icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/GhiT8qNRvt.png',
  },
  {
    pergunta: 'Quais sintomas da síndrome pós-COVID podem ser tratados com fisioterapia?',
    resposta:
      'Fisioterapia pode ser útil para tratar sintomas como fadiga, falta de ar, dores musculares, dificuldades de mobilidade, e redução da força. A reabilitação fisioterapêutica visa melhorar a função respiratória, a força muscular e a flexibilidade, além de aliviar o estresse nas articulações.',
    icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/SeJAapDVND.png',
  },
  {
    pergunta: 'Eu posso começar a fisioterapia logo após ter COVID-19?',
    resposta:
      'Sim! A fisioterapia pode começar assim que você for liberado por um médico. Em casos mais leves, pode-se iniciar com exercícios respiratórios e alongamentos leves. Para pacientes com sintomas mais graves, a fisioterapia será adaptada à condição atual de saúde.',
    icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/f3TiDrStw8.png',
  },
  {
    pergunta: 'Como a fisioterapia respiratória pode ajudar na recuperação pós-COVID?',
    resposta:
      'A fisioterapia respiratória ajuda a melhorar a capacidade pulmonar e a função respiratória. Técnicas de respiração, como a respiração diafragmática, e exercícios para fortalecimento dos músculos respiratórios são fundamentais para quem está lidando com falta de ar ou dificuldade para respirar após a COVID-19.',
    icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/Of4eGu95Vp.png',
  },
  {
    pergunta: 'Eu estou com dores nas articulações e músculos, a fisioterapia pode ajudar?',
    resposta:
      'Sim, a fisioterapia pode ajudar a aliviar as dores musculares e articulares. Através de exercícios de alongamento, fortalecimento muscular e técnicas de mobilização, a fisioterapia pode melhorar a flexibilidade e reduzir a dor, facilitando o movimento.',
    icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/xCW4rTFLfP.png',
  },
  {
    pergunta: 'Como os exercícios de fisioterapia podem reduzir a fadiga pós-COVID?',
    resposta:
      'Exercícios físicos leves e progressivos são essenciais para combater a fadiga. A fisioterapia pode desenvolver um programa de exercícios específico para aumentar gradualmente a resistência, melhorar a circulação sanguínea e promover o fortalecimento muscular sem sobrecarregar o corpo.',
    icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/KRyCaCiqeJ.png',
  },
  {
    pergunta: 'Como posso melhorar a minha força muscular após a COVID-19 com a ajuda da fisioterapia?',
    resposta:
      'A fisioterapia pode prescrever um programa gradual de fortalecimento muscular, começando com exercícios de baixo impacto e progressivamente aumentando a intensidade. Isso ajuda a recuperar a força muscular perdida durante a infecção e a hospitalização, além de prevenir a fraqueza muscular.',
    icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/Df9pmkMVve.png',
  },
  {
    pergunta: 'Devo praticar exercícios físicos por conta própria ou seguir um plano com fisioterapeuta?',
    resposta:
      'Embora exercícios simples, como caminhadas leves, possam ser benéficos, é recomendado seguir um plano de reabilitação supervisionado por um fisioterapeuta. Isso garantirá que você esteja fazendo os exercícios corretos e na intensidade adequada, evitando lesões e promovendo a recuperação eficiente.',
    icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/YBFSNag5s9.png',
  },
  {
    pergunta: 'A fisioterapia pode ajudar na "névoa mental" e dificuldades cognitivas pós-COVID?',
    resposta:
      'A fisioterapia pode melhorar a saúde geral, e exercícios físicos regulares são conhecidos por beneficiar a função cerebral. Embora a fisioterapia não trate diretamente questões cognitivas, ela pode ajudar a melhorar o foco e a clareza mental ao melhorar a circulação e reduzir a fadiga física.',
    icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/V1uuagSXUx.png',
  },
  {
    pergunta: 'A fisioterapia pode ser combinada com outros tratamentos para a síndrome pós-COVID?',
    resposta:
      'Sim, a fisioterapia pode ser combinada com outros tratamentos, como acompanhamento psicológico, tratamento médico e técnicas de relaxamento. O trabalho em equipe entre fisioterapeutas, médicos e outros profissionais de saúde é essencial para a recuperação completa.',
    icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/5776g5vZdw.png',
  },
  {
    pergunta: 'Como posso saber se estou pronto para retomar minhas atividades normais após a COVID-19?',
    resposta:
      'O fisioterapeuta pode avaliar sua recuperação e ajudá-lo a definir metas realistas para retornar às atividades diárias. A recuperação deve ser gradual e adaptada às suas necessidades. O fisioterapeuta irá monitorar seu progresso e orientá-lo sobre quando é seguro intensificar a atividade física.',
    icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/HZvquWRg2T.png',
  },
  {
    pergunta: 'A fisioterapia pode ajudar a melhorar o meu sono após a COVID-19?',
    resposta:
      'Sim, a fisioterapia pode ajudar com técnicas de relaxamento e respiração, o que pode melhorar a qualidade do sono. Além disso, o aumento da atividade física regular, quando feito de maneira controlada, pode favorecer um sono mais reparador.',
    icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/LmYaX9e3f4.png',
  },
  {
    pergunta: 'Quanto tempo leva para ver os resultados da fisioterapia no pós-COVID?',
    resposta:
      'O tempo para ver resultados varia de pessoa para pessoa, dependendo da gravidade dos sintomas e da condição física geral. A maioria dos pacientes começa a sentir melhorias nas primeiras semanas de tratamento, mas a recuperação completa pode levar vários meses.',
    icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/r2rY39khnG.png',
  },
  {
    pergunta: 'Quais tipos de fisioterapia são usados para tratar a síndrome pós-COVID?',
    resposta:
      'A fisioterapia respiratória, exercícios de mobilização articular, alongamento muscular, fortalecimento físico e técnicas de relaxamento são frequentemente utilizados para tratar a síndrome pós-COVID. O fisioterapeuta personaliza o tratamento conforme os sintomas específicos do paciente.',
    icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/JcPd1gmkms.png',
  },
  {
    pergunta: 'O que devo fazer se sentir dor durante os exercícios de fisioterapia?',
    resposta:
      'A dor durante os exercícios pode ser normal no início, especialmente se você estiver começando a se exercitar após um período de inatividade. No entanto, se a dor for intensa ou persistente, pare o exercício imediatamente e consulte o seu fisioterapeuta para ajustar a rotina de acordo com as suas necessidades.',
    icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/xY2JuRWg2F.png',
  },
  {
    pergunta: 'Quais exercícios de fisioterapia são mais eficazes para melhorar a respiração após a COVID-19?',
    resposta:
      'Exercícios de respiração diafragmática, exercícios de respiração lenta e controlada, além de técnicas como a respiração com os lábios franzidos, são eficazes para melhorar a função pulmonar e reduzir a falta de ar. O fisioterapeuta pode recomendar um plano específico para ajudá-lo a recuperar a capacidade respiratória.',
    icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/m6JJMvEXdN.png',
  },
  {
    pergunta: 'É seguro fazer exercícios de fortalecimento muscular enquanto me recupero da síndrome pós-COVID?',
    resposta:
      'Sim, é seguro, mas os exercícios devem ser feitos com cautela e de forma gradual. O fisioterapeuta ajudará a desenvolver um programa de fortalecimento personalizado, começando com exercícios leves e aumentando progressivamente a intensidade à medida que seu corpo se adapta.',
    icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/CTf4878mNz.png',
  },
  {
    pergunta: 'A fisioterapia pode me ajudar a melhorar minha resistência física pós-COVID?',
    resposta:
      'Sim, a fisioterapia pode incluir exercícios cardiovasculares de baixo impacto, como caminhadas e bicicleta ergométrica, que ajudam a melhorar a resistência física de forma gradual e segura, sem causar sobrecarga ao corpo.',
    icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/jo3WXTGadi.png',
  },
  {
    pergunta: 'Como posso saber se estou progredindo bem na minha recuperação com a fisioterapia?',
    resposta:
      'O fisioterapeuta irá monitorar seu progresso por meio de avaliações periódicas e ajustar seu plano de tratamento conforme necessário. Melhorias na sua mobilidade, força, capacidade respiratória e redução de sintomas como fadiga são indicadores positivos de progresso.',
    icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/0ZnbOPjYps.png',
  },
  {
    pergunta: 'Existem exercícios específicos para aliviar a dor no peito ou falta de ar?',
    resposta:
      'Sim, exercícios de respiração profunda e alongamento suave do tórax, realizados sob orientação de um fisioterapeuta, podem aliviar a tensão no peito e melhorar a ventilação pulmonar, reduzindo a falta de ar.',
    icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/VaYbCpYchs.png',
  },
  {
    pergunta: 'Posso fazer fisioterapia sozinho em casa ou preciso de acompanhamento profissional?',
    resposta:
      'Embora alguns exercícios simples possam ser feitos em casa, é altamente recomendável ter acompanhamento profissional, especialmente no início. O fisioterapeuta pode fornecer orientações personalizadas e garantir que você esteja realizando os exercícios corretamente e com segurança.',
    icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/pmspKFYWeQ.png',
  },
  {
    pergunta: 'Quais são os benefícios de fazer fisioterapia para a saúde mental pós-COVID?',
    resposta:
      'A fisioterapia não só ajuda a melhorar a saúde física, mas também pode reduzir os níveis de estresse e ansiedade. Exercícios regulares liberam endorfinas, que são hormônios responsáveis por melhorar o humor e aliviar o estresse, ajudando no equilíbrio emocional durante a recuperação.',
    icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/q2KTVHCZpf.png',
  },
  {
    pergunta: 'Quanto tempo devo dedicar aos exercícios de fisioterapia diariamente?',
    resposta:
      'O tempo recomendado varia de acordo com o seu plano de tratamento individual. No início, pode ser necessário dedicar de 20 a 30 minutos diários aos exercícios, aumentando gradualmente a duração conforme a sua resistência e capacidade aumentam.',
    icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/AjkueGu4fY.png',
  },
  {
    pergunta: 'Quais são os riscos de não fazer fisioterapia após a COVID-19?',
    resposta:
      'A falta de fisioterapia pode levar a uma recuperação mais lenta e aumentar o risco de complicações, como fraqueza muscular, perda de mobilidade, dificuldades respiratórias persistentes e aumento da fadiga. A fisioterapia acelera a recuperação e melhora a qualidade de vida pós-COVID.',
    icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/BQXDzg5uSj.png',
  },
  {
    pergunta: 'A fisioterapia ajuda a prevenir complicações após a COVID-19?',
    resposta:
      'Sim, a fisioterapia ajuda a prevenir complicações como atrofia muscular, diminuição da capacidade pulmonar e rigidez articular. A realização de exercícios adequados pode melhorar a recuperação e reduzir o risco de problemas de longo prazo.',
    icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/Xsu8WDsRVp.png',
  },
  {
    pergunta: 'É possível retornar ao trabalho ou atividades esportivas após a fisioterapia?',
    resposta:
      'A fisioterapia ajuda a preparar seu corpo para um retorno gradual às atividades cotidianas e esportivas. O fisioterapeuta irá orientá-lo sobre quando é seguro retornar ao trabalho ou atividades físicas, com base em sua evolução.',
    icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/iRugTq0otY.png',
  },
  {
    pergunta: 'Devo ajustar minha dieta durante a recuperação pós-COVID?',
    resposta:
      'Embora a fisioterapia se concentre na reabilitação física, uma dieta balanceada também desempenha um papel importante na recuperação. O fisioterapeuta pode sugerir que você trabalhe em conjunto com um nutricionista para garantir que sua alimentação contribua para a recuperação muscular e a saúde geral.',
    icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/q2EQNkGA5C.png',
  },
  {
    pergunta: 'A fisioterapia pode ajudar a melhorar a qualidade do sono durante a recuperação pós-COVID?',
    resposta:
      'Sim, a fisioterapia pode ajudar a melhorar o sono, por meio de técnicas de relaxamento, alongamentos e exercícios que reduzem a tensão muscular e promovem um estado de calma. A prática de atividades físicas também favorece um sono mais profundo e reparador.',
    icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/Lihb7X7qSn.png',
  },
  {
    pergunta: 'Quais são as metas típicas de fisioterapia no pós-COVID?',
    resposta:
      'As metas incluem melhorar a capacidade respiratória, aumentar a força muscular, reduzir a fadiga, melhorar a mobilidade articular e, em geral, restaurar a função física e a qualidade de vida. A fisioterapia será adaptada às necessidades individuais de cada paciente.',
    icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/BeWsViuKyz.png',
  },
];

const Perguntas: React.FC = () => {
  const [abertas, setAbertas] = useState<number[]>([]);
  const navigation = useNavigation();
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (_, gestureState) => true,
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return gestureState.x0 < 40;
      },
      onPanResponderMove: (_, gestureState) => {},
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 80 && gestureState.x0 < 40) {
          navigation.goBack();
        }
      },
    })
  ).current;

  const togglePergunta = (index: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setAbertas((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Header title="PERGUNTAS FREQUENTES"/>
      <View style={{ flex: 1 }} {...panResponder.panHandlers}>
        <ScrollView scrollEnabled contentInsetAdjustmentBehavior="automatic">
          <View style={styles.container}>
            <View style={styles.content}>
              <View style={styles.questionsContainer}>
                {perguntasRespostas.map((item, idx) => (
                  <View key={idx} style={styles.questionBox}>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.questionText}>{item.pergunta}</Text>
                      {abertas.includes(idx) && (
                        <Text style={styles.answerText}>{item.resposta}</Text>
                      )}
                    </View>
                    <TouchableOpacity onPress={() => togglePergunta(idx)}>
                      <ImageBackground
                        style={styles.questionIcon}
                        source={{ uri: item.icon }}
                        resizeMode="cover"
                      >
                        <Text style={styles.iconArrow}>
                          {abertas.includes(idx) ? '▲' : '▼'}
                        </Text>
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    minHeight: undefined,
    backgroundColor: '#ffffff',
    position: 'relative',
    overflow: 'hidden',
    marginTop: 0,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 24,
  },
  content: {
    width: '95%',
    maxWidth: 420,
    alignSelf: 'center',
    minHeight: undefined,
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
  questionsContainer: {
    gap: 12,
    alignItems: 'center',
    alignSelf: 'stretch',
    position: 'relative',
    marginTop: 8,
    marginBottom: 16,
  },
  questionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#000000',
    backgroundColor: '#fff',
    marginBottom: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  questionText: {
    flex: 1,
    fontFamily: 'Quicksand',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    color: '#000000',
    textAlign: 'left',
    marginBottom: 2,
  },
  answerText: {
    fontFamily: 'Quicksand',
    fontSize: 15,
    color: '#444',
    marginTop: 8,
    marginBottom: 4,
    lineHeight: 20,
  },
  questionIcon: {
    width: 32,
    height: 32,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
  },
  iconArrow: {
    position: 'absolute',
    bottom: 2,
    right: 6,
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
});

export default Perguntas;