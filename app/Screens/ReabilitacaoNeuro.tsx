/**
 * Codia React Native App
 * https://codia.ai
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Header from '@/components/Header';
import { useRouter } from 'expo-router';

const ReabilitacaoNeuroScreen: React.FC = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title='REABILITAÇÃO NEUROLÓGICA'/>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior='automatic'
        style={styles.scrollView}
      >
        <View style={styles.mainContainer}>
          <View style={styles.contentContainer}>
            {/* BLOCO 1 */}
            <View style={styles.textBlock}>
              <Text style={styles.subTitle}>
                Aspectos Psicossociais e Neuropsicológicos
              </Text>
              <Text style={styles.sectionTitle}>
                Distúrbios do Sono
              </Text>
              <Text style={styles.paragraph}>
                Pacientes pós-COVID frequentemente relatam alterações no sono, como insônia, sono fragmentado e fadiga diurna excessiva, que impactam a recuperação neurológica porque o sono é fundamental para:
                {"\n"}Consolidação da memória e aprendizado
                {"\n"}Regulação do humor e controle emocional
                {"\n"}Recuperação física e neurológica
              </Text>
              <Text style={styles.paragraph}>
                Consequências da privação do sono:
                {"\n"}Piora de sintomas cognitivos ("névoa cerebral")
                {"\n"}Aumento do risco de ansiedade e depressão
                {"\n"}Redução da capacidade de socialização
              </Text>
              <Text style={styles.sectionTitle}>
                Manejo na reabilitação
              </Text>
              <Text style={styles.paragraph}>
                Avaliação detalhada dos padrões de sono (questionários, polissonografia se indicado)
                {"\n"}Educação em higiene do sono (rotinas regulares, evitar telas antes de dormir, ambiente escuro e silencioso)
                {"\n"}Técnicas comportamentais para relaxamento antes de dormir (meditação guiada, respiração diafragmática)
                {"\n"}Intervenção medicamentosa feita por médico quando necessário, sempre acompanhada da reabilitação
              </Text>
              <Text style={styles.sectionTitle}>
                Dificuldade de Socialização e Ansiedade
              </Text>
              <Text style={styles.paragraph}>
                Pacientes pós-COVID apresentam sintomas neuropsiquiátricos como:
                {"\n"}Ansiedade e ataques de pânico
                {"\n"}Depressão
                {"\n"}Isolamento social devido à fadiga, falta de motivação e medo de recaídas
                {"\n"}Dificuldade em retomar interações sociais e profissionais
              </Text>
              <Text style={styles.paragraph}>
                Esses sintomas podem resultar da inflamação cerebral, impacto da doença grave, isolamento prolongado e sequelas cognitivas que prejudicam comunicação e funcionamento social.
              </Text>
              <Text style={styles.sectionTitle}>
                Abordagem na reabilitação
              </Text>
              <Text style={styles.paragraph}>
                Apoio psicológico e psicoterapia (Terapias Cognitivas Comportamentais para ansiedade e depressão, sessões individuais e em grupo)
                {"\n"}Treinamento em habilidades sociais (comunicação, autoconfiança, interação interpessoal)
                {"\n"}Atividades em grupo na reabilitação para estimular convívio social e apoio mútuo
                {"\n"}Orientação familiar para compreensão das dificuldades e apoio à reintegração social
              </Text>
              <Text style={styles.sectionTitle}>
                A Importância da Equipe Multidisciplinar
              </Text>
              <Text style={styles.paragraph}>
                A complexidade das sequelas exige uma equipe integrada para atender todas as dimensões do paciente.
              </Text>
              <Text style={styles.paragraph}>
                Principais profissionais envolvidos:
                {"\n"}Neurologista (avaliação e acompanhamento neurológico)
                {"\n"}Fisioterapeuta (neurológico e respiratório)
                {"\n"}Terapeuta ocupacional (independência e reintegração social)
                {"\n"}Psicólogo (suporte emocional e tratamento de sintomas)
                {"\n"}Psiquiatra (tratamento medicamentoso)
                {"\n"}Fonoaudiólogo (linguagem e funções orais, se necessário)
                {"\n"}Assistente social (suporte para reinserção social)
                {"\n"}Enfermeiro (educação e acompanhamento)
                {"\n"}Nutricionista (suporte nutricional para recuperação)
              </Text>
              <Text style={styles.paragraph}>
                Trabalho integrado:
                {"\n"}Reuniões periódicas para discutir evolução, ajustar plano terapêutico e garantir atendimento completo.
              </Text>

              <Text style={styles.subTitle}>
                Aspectos Psicossociais
              </Text>
              <Text style={styles.sectionTitle}>
                Intervenções para Distúrbios do Sono
              </Text>
              <Text style={styles.paragraph}>
                Higiene do sono:
                {"\n"}Estabelecer rotina fixa para dormir e acordar
                {"\n"}Evitar eletrônicos pelo menos 1 hora antes de dormir
                {"\n"}Ambiente confortável, escuro, silencioso e temperatura adequada
                {"\n"}Evitar cafeína e refeições pesadas à noite
                {"\n"}Técnicas de relaxamento para indução do sono:
                {"\n"}Respiração diafragmática lenta (ex: inspirar 4s, expirar 6s)
                {"\n"}Meditação guiada ou mindfulness (apps podem ajudar)
                {"\n"}Relaxamento muscular progressivo (tensão e relaxamento alternados dos músculos)
                {"\n"}Monitoramento do sono:
                {"\n"}Diário de sono para registrar horários e qualidade
                {"\n"}Avaliação profissional se insônia persistir (possível encaminhamento para polissonografia ou especialista)
              </Text>
              <Text style={styles.sectionTitle}>
                Intervenções para Ansiedade e Dificuldade de Socialização
              </Text>
              <Text style={styles.paragraph}>
                Terapia Cognitivo-Comportamental (TCC):
                {"\n"}Identificação e reestruturação de pensamentos ansiosos
                {"\n"}Técnicas de exposição gradual para medo social (ex: pequenas interações antes de grupos maiores)
                {"\n"}Treinamento em habilidades sociais:
                {"\n"}Role-playing (simulação de situações sociais)
                {"\n"}Exercícios para comunicação verbal e não-verbal
                {"\n"}Desenvolvimento da assertividade
                {"\n"}Atividades grupais na reabilitação:
                {"\n"}Sessões de grupo para troca de experiências
                {"\n"}Oficinas temáticas (arte, música, exercícios físicos em grupo)
                {"\n"}Atividades físicas regulares:
                {"\n"}Caminhadas, yoga, alongamentos para redução do estresse e melhora do humor
              </Text>
              <Text style={styles.sectionTitle}>
                Sugestões para a Equipe Multidisciplinar
              </Text>
              <Text style={styles.paragraph}>
                Comunicação integrada:
                {"\n"}Reuniões semanais para discutir evolução e ajustar plano terapêutico
                {"\n"}Compartilhamento de informações sobre ansiedade, sono e dificuldades cognitivas
                {"\n"}Educação para paciente e família:
                {"\n"}Explicar causas das dificuldades pós-COVID para reduzir medo e frustração
                {"\n"}Envolver familiares no suporte social e emocional
              </Text>
              <Text style={styles.paragraph}>
                Planejamento individualizado:
                {"\n"}Adaptar intervenções conforme evolução clínica e preferências do paciente
                {"\n"}Monitorar efeitos das medicações e impactos no sono e humor
                {"\n"}Apoio emocional contínuo:
                {"\n"}Psicólogo e psiquiatra acessíveis para acompanhamento
                {"\n"}Encorajar expressão de sentimentos e dúvidas
              </Text>
              <Text style={styles.sectionTitle}>
                Guia Rápido para Pacientes e Familiares
              </Text>
              <Text style={styles.guideTitle}>
                Entendendo os desafios pós-COVID: Sono, Ansiedade e Relações Sociais
              </Text>
              <Text style={styles.guideParagraph}>
                <Text style={styles.guideSubTitle}>
                  Distúrbios do Sono:{" "}
                </Text>
                <Text style={styles.guideText}>
                  Dificuldade para dormir ou cansaço excessivo são comuns.{"\n"}
                  Melhore com rotina fixa para dormir, evitar luz azul antes de dormir, ambiente silencioso e exercícios de respiração para relaxar.
                </Text>
              </Text>
              <Text style={styles.guideParagraph}>
                <Text style={styles.guideSubTitle}>
                  Ansiedade e Medo:{" "}
                </Text>
                <Text style={styles.guideText}>
                  Medo do futuro, preocupação excessiva e sensação de aperto no peito são comuns.{"\n"}
                  Use técnicas simples: respiração profunda, caminhada leve, conversar com pessoas de confiança e buscar ajuda profissional se necessário.
                </Text>
              </Text>
              <Text style={styles.guideParagraph}>
                <Text style={styles.guideSubTitle}>
                  Dificuldade para Socializar:{" "}
                </Text>
                <Text style={styles.guideText}>
                  Cansaço e medo dificultam encontros e conversas.{"\n"}
                  Comece devagar com pequenas conversas e participe de grupos ou atividades que gosta.
                </Text>
              </Text>
              <Text style={styles.guideParagraph}>
                <Text style={styles.guideSubTitle}>
                  Apoio da Família:{" "}
                </Text>
                <Text style={styles.guideText}>
                  Seja paciente e compreensivo.{"\n"}
                  Crie um ambiente tranquilo e encoraje o paciente a seguir orientações profissionais.
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 0,
    paddingBottom: 32,
  },
  contentContainer: {
    width: 340,
    alignItems: 'flex-start',
    marginTop: 32,
    marginBottom: 32,
    gap: 32,
  },
  textBlock: {
    width: '100%',
    gap: 18,
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  subTitle: {
    fontFamily: 'Quicksand',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 28,
    color: '#000',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    width: '100%',
    letterSpacing: 0.5,
  },
  sectionTitle: {
    fontFamily: 'Quicksand',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    color: '#000',
    textAlign: 'left',
    marginBottom: 6,
    marginTop: 18,
    width: '100%',
  },
  paragraph: {
    fontFamily: 'Quicksand',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#000',
    textAlign: 'left',
    marginBottom: 8,
    width: '100%',
  },
  bulletList: {
    marginLeft: 12,
    marginBottom: 8,
    gap: 2,
  },
  bulletItem: {
    fontFamily: 'Quicksand',
    fontSize: 16,
    color: '#000',
    lineHeight: 24,
    textAlign: 'left',
    marginBottom: 2,
  },
  bold: {
    fontWeight: '700',
    color: '#000',
  },
  guideBlock: {
    width: '100%',
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    padding: 16,
    marginTop: 24,
    marginBottom: 8,
  },
  guideTitle: {
    fontFamily: 'Quicksand',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
    color: '#000',
    textAlign: 'left',
    marginBottom: 12,
    width: '100%',
  },
  guideList: {
    gap: 8,
  },
  guideParagraph: {
    fontFamily: 'Quicksand',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    color: '#000',
    textAlign: 'left',
    marginBottom: 8,
    width: '100%',
  },
  guideSubTitle: {
    fontFamily: 'Quicksand',
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  guideText: {
    fontFamily: 'Quicksand',
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
  },
});

export default ReabilitacaoNeuroScreen;