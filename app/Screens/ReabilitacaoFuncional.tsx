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

const ReabilitacaoFuncionalScreen: React.FC = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title='REABILITAÇÃO FUNCIONAL' />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <Text style={styles.subtitle}>O que é?</Text>
          <Text style={styles.paragraph}>
            A Reabilitação Funcional Pós-COVID-19 é um processo terapêutico
            individualizado, que visa restaurar a autonomia, funcionalidade
            e qualidade de vida de pessoas que desenvolveram sintomas
            persistentes ou limitações após a infecção pelo SARS-CoV-2.
            {'\n\n'}Ela busca minimizar os efeitos físicos, respiratórios, cognitivos e
            psicossociais causados pela doença — especialmente em pacientes
            com quadros moderados a graves.
          </Text>
          <Text style={styles.subtitle}>Objetivos</Text>
          <Text style={styles.paragraph}>
            Recuperar a capacidade funcional;
            {'\n'}Promover independência nas atividades diárias;
            {'\n'}Reduzir sintomas como fadiga, fraqueza, dispneia, dor e ansiedade;
            {'\n'}Melhorar a qualidade de vida e bem-estar geral;
            {'\n'}Prevenir complicações secundárias à inatividade.
          </Text>
          <Text style={styles.subtitle}>Quem deve fazer?</Text>
          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>Pacientes que:</Text>
            {'\n'}Apresentam sintomas persistentes após 4 a 12 semanas
            {'\n'}Têm limitações nas atividades da vida diária
            {'\n'}Sofreram internações ou ficaram acamados
            {'\n'}Sentem dificuldade para voltar ao trabalho, estudar ou se movimentar normalmente
          </Text>
          <Text style={styles.subtitle}>Avaliação prévia</Text>
          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>
              A reabilitação deve sempre começar com uma avaliação global e
              individualizada, considerando:
            </Text>
            {'\n'}Grau de limitação funcional
            {'\n'}Capacidade respiratória e muscular
            {'\n'}Equilíbrio, cognição e mobilidade
            {'\n'}Presença de comorbidades ou sequelas neurológicas
          </Text>
          <Text style={styles.subtitle}>Como funciona?</Text>
          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>
              A intervenção pode ocorrer em:
            </Text>
            {'\n'}Ambulatórios de fisioterapia
            {'\n'}Atendimento domiciliar
            {'\n'}Teleatendimento ou telereabilitação
            {'\n\n'}
            <Text style={styles.boldText}>E envolve:</Text>
            {'\n'}Exercícios graduais de mobilidade e fortalecimento
            {'\n'}Treinamento de funções respiratórias
            {'\n'}Estímulos cognitivos e psicológicos
            {'\n'}Orientação sobre retorno às atividades ocupacionais e sociais
          </Text>
          <Text style={styles.subtitle}>Cuidados importantes</Text>
          <Text style={styles.paragraph}>
            A progressão deve ser lenta e supervisionada
            {'\n'}Monitorar saturação, frequência cardíaca e esforço
            {'\n'}Pausar caso ocorra falta de ar intensa, dor ou tontura
            {'\n'}É fundamental a equipe multidisciplinar: fisioterapeutas, médicos, psicólogos,
            terapeutas ocupacionais, entre outros
          </Text>
          <Text style={styles.centeredSubtitle}>
            A reabilitação funcional é um caminho possível
          </Text>
          <Text style={styles.paragraph}>
            Mesmo que os sintomas persistam, há recuperação!
            {'\n'}Com apoio especializado, o paciente pode reconquistar autonomia e
            qualidade de vida.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 0,
  },
  content: {
    width: 340,
    alignItems: 'flex-start',
    gap: 32,
  },
  subtitle: {
    fontFamily: 'Quicksand',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000', 
    marginBottom: 8,
    textAlign: 'left',
    width: '100%',
    letterSpacing: 0.5,
  },
  paragraph: {
    fontFamily: 'Quicksand',
    fontSize: 16,
    fontWeight: '400',
    color: '#000', 
    lineHeight: 24,
    textAlign: 'left',
    width: '100%',
    marginBottom: 0,
  },
  boldText: {
    fontFamily: 'Quicksand',
    fontSize: 16,
    fontWeight: '700',
    color: '#000', // letras pretas
  },
  centeredSubtitle: {
    fontFamily: 'Quicksand',
    fontSize: 18,
    fontWeight: '600',
    color: '#000', // letras pretas
    textAlign: 'center',
    width: '100%',
    marginVertical: 16,
    letterSpacing: 0.5,
  },
});

export default ReabilitacaoFuncionalScreen;