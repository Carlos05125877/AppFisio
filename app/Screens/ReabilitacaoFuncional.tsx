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
  Button,
} from 'react-native';
import Header from '@/components/Header';
import { useRouter } from 'expo-router';

const ReabilitacaoFuncionalScreen: React.FC = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior='automatic'
      >
        <View style={styles.container}>
          <Header title='REABILITAÇÃO FUNCIONAL' />
          <View style={styles.contentContainer}>
            
            <View style={styles.mainContent}>
              <Text style={styles.subtitle}>O que é?</Text>
              <Text style={styles.paragraph}>
                A Reabilitação Funcional Pós-COVID-19 é um processo terapêutico
                individualizado, que visa restaurar a autonomia, funcionalidade
                e qualidade de vida de pessoas que desenvolveram sintomas
                persistentes ou limitações após a infecção pelo SARS-CoV-2.Ela
                busca minimizar os efeitos físicos, respiratórios, cognitivos e
                psicossociais causados pela doença — especialmente em pacientes
                com quadros moderados a graves.
              </Text>
              <Text style={styles.subtitle}>Objetivos</Text>
              <Text style={styles.paragraph}>
                Recuperar a capacidade funcionalPromover independência nas
                atividades diáriasReduzir sintomas como fadiga, fraqueza,
                dispneia, dor e ansiedadeMelhorar a qualidade de vida e
                bem-estar geralPrevenir complicações secundárias à inatividade
              </Text>
              <Text style={styles.subtitle}>Quem deve fazer?</Text>
              <Text style={styles.paragraph}>
                <Text style={styles.boldText}>Pacientes que:</Text>
                Apresentam sintomas persistentes após 4 a 12 semanasTêm
                limitações nas atividades da vida diáriaSofreram internações
                ou ficaram acamadosSentem dificuldade para voltar ao
                trabalho, estudar ou se movimentar normalmente
              </Text>
              <Text style={styles.subtitle}>Avaliação prévia</Text>
              <Text style={styles.paragraph}>
                <Text style={styles.boldText}>
                  A reabilitação deve sempre começar com uma avaliação global e
                  individualizada, considerando:&nbsp;
                </Text>
                Grau de limitação funcionalCapacidade respiratória e
                muscularEquilíbrio, cognição e mobilidadePresença de
                comorbidades ou sequelas neurológicas
              </Text>
              <Text style={styles.subtitle}>Como funciona?</Text>
              <Text style={styles.paragraph}>
                <Text style={styles.boldText}>
                  A intervenção pode ocorrer em:&nbsp;
                </Text>
                Ambulatórios de fisioterapiaAtendimento
                domiciliarTeleatendimento ou telereabilitação
                <Text style={styles.boldText}>E envolve:&nbsp;</Text>
                Exercícios graduais de mobilidade e fortalecimentoTreinamento
                de funções respiratóriasEstímulos cognitivos e
                psicológicosOrientação sobre retorno às atividades
                ocupacionais e sociais
              </Text>
              <Text style={styles.subtitle}>Cuidados importantes</Text>
              <Text style={styles.paragraph}>
                A progressão deve ser lenta e supervisionadaMonitorar
                saturação, frequência cardíaca e esforçoPausar caso ocorra
                falta de ar intensa, dor ou tonturaÉ fundamental a equipe
                multidisciplinar: fisioterapeutas, médicos, psicólogos,
                terapeutas ocupacionais, entre outros
              </Text>
              <Text style={styles.centeredSubtitle}>
                A reabilitação funcional é um caminho possível
              </Text>
              <Text style={styles.paragraph}>
                Mesmo que os sintomas persistam, há recuperação!Com apoio
                especializado, o paciente pode reconquistar autonomia e
                qualidade de vida.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 393,
    height: 852,
    backgroundColor: '#ffffff',
    position: 'relative',
    overflow: 'hidden',
    marginHorizontal: 'auto',
  },
  contentContainer: {
    display: 'flex',
    width: 398,
    height: 762,
    gap: 13,
    alignItems: 'center',
    flexWrap: 'nowrap',
    position: 'relative',
    marginTop: 90,
    marginLeft: -2,
  },
  headerSection: {
    display: 'flex',
    gap: 26,
    alignItems: 'center',
    alignSelf: 'stretch',
    flexShrink: 0,
    flexWrap: 'nowrap',
    position: 'relative',
    zIndex: 1,
  },
  title: {
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
  divider: {
    width: 392.501,
    height: 1,
    flexShrink: 0,
    position: 'relative',
    zIndex: 3,
  },
  mainContent: {
    display: 'flex',
    height: 701,
    gap: 15,
    alignItems: 'center',
    alignSelf: 'stretch',
    flexShrink: 0,
    flexWrap: 'nowrap',
    position: 'relative',
    zIndex: 4,
  },
  subtitle: {
    display: 'flex',
    width: 362,
    height: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
  paragraph: {
    display: 'flex',
    width: 361,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexShrink: 0,
    fontFamily: 'Quicksand',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    color: '#000000',
    position: 'relative',
    textAlign: 'left',
    zIndex: 6,
  },
  boldText: {
    fontFamily: 'Quicksand',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: '#000000',
    position: 'relative',
    textAlign: 'left',
  },
  centeredSubtitle: {
    display: 'flex',
    width: 362,
    height: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexShrink: 0,
    flexBasis: 'auto',
    fontFamily: 'Quicksand',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    color: '#000000',
    position: 'relative',
    textAlign: 'center',
    zIndex: 17,
  },
});
export default ReabilitacaoFuncionalScreen;