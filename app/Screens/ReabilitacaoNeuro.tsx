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
  ImageBackground,
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
            
            <View style={styles.textBlock}>
              <Text style={styles.subTitle}>
                Aspectos Psicossociais e Neuropsicológicos
              </Text>
              <Text style={styles.sectionTitle}>
                Distúrbios do Sono
              </Text>
              <Text style={styles.paragraph}>
                Pacientes pós-COVID frequentemente relatam alterações no sono,
                como insônia, sono fragmentado e fadiga diurna excessiva, que
                impactam a recuperação neurológica porque o sono é fundamental
                para:Consolidação da memória e aprendizadoRegulação do humor e
                controle emocionalRecuperação física e neurológica
              </Text>
              <Text style={styles.paragraph}>
                Consequências da privação do sono:Piora de sintomas cognitivos
                ("névoa cerebral"), aumento do risco de ansiedade e depressão,
                redução da capacidade de socialização.
              </Text>
              <Text style={styles.paragraph}>
                Manejo na reabilitação:Avaliação detalhada dos padrões de sono
                (questionários, polissonografia se indicado)Educação em higiene
                do sono (rotinas regulares, evitar telas antes de dormir,
                ambiente escuro e silencioso)Técnicas comportamentais para
                relaxamento antes de dormir (meditação guiada, respiração
                diafragmática)Intervenção medicamentosa feita por médico quando
                necessário, sempre acompanhada da reabilitação
              </Text>
              <Text style={styles.sectionTitle}>
                Dificuldade de Socialização e Ansiedade
              </Text>
              <Text style={styles.paragraph}>
                Pacientes pós-COVID apresentam sintomas neuropsiquiátricos
                como:Ansiedade e ataques de pânicoDepressãoIsolamento social
                devido à fadiga, falta de motivação e medo de
                recaídasDificuldade em retomar interações sociais e
                profissionais
              </Text>
              <Text style={styles.paragraph}>
                Esses sintomas podem resultar da inflamação cerebral, impacto da
                doença grave, isolamento prolongado e sequelas cognitivas que
                prejudicam comunicação e funcionamento social.
              </Text>
              <Text style={styles.paragraph}>
                Abordagem na reabilitação:Apoio psicológico e psicoterapia
                (Terapias Cognitivas Comportamentais para ansiedade e depressão,
                sessões individuais e em grupo)Treinamento em habilidades
                sociais (comunicação, autoconfiança, interação
                interpessoal)Atividades em grupo na reabilitação para estimular
                convívio social e apoio mútuoOrientação familiar para
                compreensão das dificuldades e apoio à reintegração social
              </Text>
              <Text style={styles.sectionTitle}>
                A Importância da Equipe Multidisciplinar
              </Text>
              <Text style={styles.paragraph}>
                A complexidade das sequelas exige uma equipe integrada para
                atender todas as dimensões do paciente.
              </Text>
              <Text style={styles.paragraph}>
                Principais profissionais envolvidos:Neurologista (avaliação e
                acompanhamento neurológico)Fisioterapeuta (neurológico e
                respiratório)Terapeuta ocupacional (independência e
                reintegração social)Psicólogo (suporte emocional e tratamento
                de sintomas)Psiquiatra (tratamento medicamentoso)Fonoaudiólogo
                (linguagem e funções orais, se necessário)Assistente social
                (suporte para reinserção social)Enfermeiro (educação e
                acompanhamento)Nutricionista (suporte nutricional para
                recuperação)
              </Text>
              <Text style={styles.paragraph}>
                Trabalho integrado:Reuniões periódicas para discutir evolução,
                ajustar plano terapêutico e garantir atendimento completo.
              </Text>
              <Text style={styles.subTitle}>
                Aspectos Psicossociais
              </Text>
              <Text style={styles.sectionTitle}>
                Intervenções para Distúrbios do Sono
              </Text>
              <Text style={styles.paragraph}>
                Higiene do sono:Estabelecer rotina fixa para dormir e
                acordarEvitar eletrônicos pelo menos 1 hora antes de
                dormirAmbiente confortável, escuro, silencioso e temperatura
                adequadaEvitar cafeína e refeições pesadas à noiteTécnicas de
                relaxamento para indução do sono:Respiração diafragmática lenta
                (ex: inspirar 4s, expirar 6s)Meditação guiada ou mindfulness
                (apps podem ajudar)Relaxamento muscular progressivo (tensão e
                relaxamento alternados dos músculos)Monitoramento do
                sono:Diário de sono para registrar horários e
                qualidadeAvaliação profissional se insônia persistir (possível
                encaminhamento para polissonografia ou especialista)
              </Text>
              <Text style={styles.sectionTitle}>
                Intervenções para Ansiedade e Dificuldade de Socialização
              </Text>
              <Text style={styles.paragraph}>
                Terapia Cognitivo-Comportamental (TCC):Identificação e
                reestruturação de pensamentos ansiososTécnicas de exposição
                gradual para medo social (ex: pequenas interações antes de
                grupos maiores)Treinamento em habilidades sociais:Role-playing
                (simulação de situações sociais)Exercícios para comunicação
                verbal e não-verbalDesenvolvimento da assertividadeAtividades
                grupais na reabilitação:Sessões de grupo para troca de
                experiências Oficinas temáticas (arte, música, exercícios
                físicos em grupo) Atividades físicas regulares: Caminhadas,
                yoga, alongamentos para redução do estresse e melhora do humor
              </Text>
              <Text style={styles.sectionTitle}>
                Sugestões para a Equipe Multidisciplinar
              </Text>
              <Text style={styles.paragraph}>
                Comunicação integrada:Reuniões semanais para discutir evolução
                e ajustar plano terapêuticoCompartilhamento de informações
                sobre ansiedade, sono e dificuldades cognitivasEducação para
                paciente e família:Explicar causas das dificuldades pós-COVID
                para reduzir medo e frustraçãoEnvolver familiares no suporte
                social e emocional
              </Text>
              <Text style={styles.paragraph}>
                Planejamento individualizado:Adaptar intervenções conforme
                evolução clínica e preferências do pacienteMonitorar efeitos
                das medicações e impactos no sono e humorApoio emocional
                contínuo:Psicólogo e psiquiatra acessíveis para
                acompanhamentoEncorajar expressão de sentimentos e dúvidas
              </Text>
              <Text style={styles.sectionTitle}>
                Guia Rápido para Pacientes e Familiares
              </Text>
              <Text style={styles.guideTitle}>
                Entendendo os desafios pós-COVID: Sono, Ansiedade e Relações
                Sociais
              </Text>
              <Text style={styles.guideParagraph}>
                <Text style={styles.guideSubTitle}>
                  Distúrbios do Sono:
                </Text>
                <Text style={styles.guideText}>
                  Dificuldade para dormir ou cansaço excessivo são
                  comuns.Melhore com rotina fixa para dormir, evitar luz azul
                  antes de dormir, ambiente silencioso e exercícios de
                  respiração para relaxar.
                </Text>
              </Text>
              <Text style={styles.guideParagraph}>
                <Text style={styles.guideSubTitle}>
                  Ansiedade e Medo:
                </Text>
                <Text style={styles.guideText}>
                  Medo do futuro, preocupação excessiva e sensação de aperto no
                  peito são comuns.Use técnicas simples: respiração profunda,
                  caminhada leve, conversar com pessoas de confiança e buscar
                  ajuda profissional se necessário.
                </Text>
              </Text>
              <Text style={styles.guideParagraph}>
                <Text style={styles.guideSubTitle}>
                  Dificuldade para Socializar:
                </Text>
                <Text style={styles.guideText}>
                  Cansaço e medo dificultam encontros e conversas.Comece
                  devagar com pequenas conversas e participe de grupos ou
                  atividades que gosta.
                </Text>
              </Text>
              <Text style={styles.guideParagraph}>
                <Text style={styles.guideSubTitle}>
                  Apoio da Família:
                </Text>
                <Text style={styles.guideText}>
                  Seja paciente e compreensivo.Crie um ambiente tranquilo e
                  encoraje o paciente a seguir orientações profissionais.
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    
  },
  mainContainer: {
    width: 393, // Considerando que o layout original tem um width fixo
    height: 852, // Considerando que o layout original tem um height fixo
    backgroundColor: '#ffffff',
    position: 'relative',
    overflow: 'hidden',
    marginTop: 0,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
  },
  contentContainer: {
    display: 'flex',
    width: 393,
    height: 748,
    gap: 16,
    alignItems: 'center',
    flexWrap: 'nowrap',
    position: 'relative',
    marginTop: 90,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
  },
  titleSection: {
    display: 'flex',
    gap: 26,
    alignItems: 'center',
    alignSelf: 'stretch',
    flexShrink: 0,
    flexWrap: 'nowrap',
    position: 'relative',
    zIndex: 1,
  },
  mainTitle: {
    height: 20,
    alignSelf: 'stretch',
    flexShrink: 0,
    flexBasis: 'auto',
    fontFamily: 'Alumni Sans SC',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 20,
    color: '#5b5b5b',
    position: 'relative',
    textAlign: 'center',
    zIndex: 2,
  },
  separatorImage: {
    width: 393,
    height: 1,
    flexShrink: 0,
    position: 'relative',
    zIndex: 3,
  },
  textBlock: {
    display: 'flex',
    width: 362,
    gap: 15,
    alignItems: 'flex-start',
    flexShrink: 0,
    flexWrap: 'nowrap',
    position: 'relative',
    zIndex: 4,
  },
  subTitle: {
    height: 20,
    alignSelf: 'stretch',
    flexShrink: 0,
    flexBasis: 'auto',
    fontFamily: 'Quicksand',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    color: '#000000',
    position: 'relative',
    textAlign: 'left',
    zIndex: 5,
  },
  sectionTitle: {
    height: 20,
    alignSelf: 'stretch',
    flexShrink: 0,
    flexBasis: 'auto',
    fontFamily: 'Quicksand',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: '#000000',
    position: 'relative',
    textAlign: 'left',
    zIndex: 10, 
  },
  paragraph: {
    display: 'flex',
    width: 362,

    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    flexShrink: 0,
    fontFamily: 'Quicksand',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    color: '#000000',
    position: 'relative',
    textAlign: 'left',

  },
  guideTitle: {
    height: 40,
    alignSelf: 'stretch',
    flexShrink: 0,
    fontFamily: 'Quicksand',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    color: '#000000',
    position: 'relative',
    textAlign: 'left',
    zIndex: 27,
  },
  guideParagraph: {
    alignSelf: 'stretch',
    flexShrink: 0,
    fontFamily: 'Quicksand',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    position: 'relative',
    textAlign: 'left',
    // zIndex varies, handled by flow
  },
  guideSubTitle: {
    fontFamily: 'Quicksand',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: '#000000',
    position: 'relative',
    textAlign: 'left',
  },
  guideText: {
    fontFamily: 'Quicksand',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    color: '#000000',
    position: 'relative',
    textAlign: 'left',
  },
});
export default ReabilitacaoNeuroScreen;