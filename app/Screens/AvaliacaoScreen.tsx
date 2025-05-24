import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';

const AvaliacaoScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.containerPrincipal}>
          <Text style={styles.titulo}>
            REABILITAÇÃO FISIOTERAPÊUTICA
          </Text>
          <View style={styles.divisor} />
          <Text style={styles.citacao}>
            “O primeiro passo para cuidar de você é entender como você está.”
          </Text>
          <Text style={styles.paragrafo}>
            Após a infecção por COVID-19, muitas pessoas enfrentam sintomas que permanecem por semanas ou meses. A avaliação fisioterapêutica é essencial para mapear os impactos físicos e funcionais da COVID e guiar o tratamento com base em evidências.
          </Text>
          <Text style={styles.subtitulo}>
            Por que fazer uma avaliação pós-COVID?
          </Text>
          <Text style={styles.paragrafo}>
            A COVID longa pode afetar vários sistemas do corpo, como o respiratório, cardiovascular, muscular e neurológico. A avaliação serve para identificar:
            {'\n'}Fadiga persistente
            {'\n'}Falta de ar (dispneia)
            {'\n'}Dores musculares ou articulares
            {'\n'}Perda de força e resistência
            {'\n'}Déficits cognitivos e emocionais
            {'\n'}Dificuldades nas AVDs (Atividades da Vida Diária)
          </Text>
          <ImageBackground
            style={styles.imagem}
            source={{ uri: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-21/eusMiFkQyA.png' }}
            resizeMode="cover"
          />
          <Text style={styles.subtitulo}>
            Essa análise permite traçar metas reais e seguras de reabilitação.
          </Text>
          <Text style={styles.subtitulo}>
            O que a avaliação inclui?
          </Text>
          <Text style={styles.paragrafo}>
            Segundo a ASSOBRAFIR, a avaliação funcional pós-COVID deve conter:
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardTitulo}>Entrevista clínica aprofundada</Text>
            <Text style={styles.cardTexto}>
              História da COVID-19 (data, gravidade, internação)
              {'\n'}Sintomas atuais e progressão
              {'\n'}Comorbidades (diabetes, hipertensão, asma, etc.)
              {'\n'}Impacto nas atividades cotidianas
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitulo}>Exame físico</Text>
            <Text style={styles.cardTexto}>
              Frequência respiratória e padrão ventilatório
              {'\n'}Ausculta pulmonar
              {'\n'}Saturação de oxigênio em repouso e esforço
              {'\n'}Frequência cardíaca e pressão arterial
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitulo}>Testes funcionais</Text>
            <Text style={styles.cardTexto}>
              Teste de Caminhada de 6 Minutos (TC6): avalia resistência física
              {'\n'}Teste do Sentar e Levantar: força de membros inferiores
              {'\n'}Escalas de percepção de esforço e dispneia (Borg, MRC)
              {'\n'}Post-COVID-19 Functional Status Scale (PCFS): avalia o nível de limitação funcional
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitulo}>Avaliação da força muscular</Text>
            <Text style={styles.cardTexto}>
              Dinamometria manual (se disponível)
              {'\n'}Testes funcionais simples (ex: subir degraus, agachar)
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitulo}>Avaliação das Atividades da Vida Diária (AVD)</Text>
            <Text style={styles.cardTexto}>
              Capacidade de se vestir, tomar banho, preparar alimentos, caminhar em casa, subir escadas
              {'\n'}Avaliação do risco de quedas
            </Text>
          </View>

          <Text style={styles.subtitulo}>
            Evidência científica
          </Text>
          <Text style={styles.paragrafo}>
            Segundo a ASSOBRAFIR, a avaliação deve ser feita por fisioterapeutas capacitados, usando protocolos clínicos baseados em evidência. A reabilitação deve ser individualizada e considerar o nível funcional, histórico da doença e o que o paciente deseja recuperar.
          </Text>
          <Text style={styles.paragrafo}>
            Referência: ASSOBRAFIR – Recomendações para Reabilitação Funcional de Pacientes Pós-COVID-19
          </Text>
          <Text style={styles.link}>
            (Link para o documento oficial)
          </Text>
          <Text style={styles.subtitulo}>
            E depois da avaliação?
          </Text>
          <Text style={styles.paragrafo}>
            Você recebe um plano terapêutico personalizado, com metas claras como:
            {'\n'}Melhorar a capacidade pulmonar
            {'\n'}Reduzir a fadiga
            {'\n'}Recuperar força e resistência muscular
            {'\n'}Aumentar a independência nas AVDs
            {'\n'}Retomar sua qualidade de vida
          </Text>
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
  containerPrincipal: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  titulo: {
    fontFamily: 'Alumni Sans SC',
    fontSize: 15,
    fontWeight: '600',
    color: '#5b5b5b',
    marginBottom: 16,
    textAlign: 'center',
  },

  divisor: {
    width: 1000,
    height: 1,
    marginBottom: 16,
    alignSelf: 'center',
    backgroundColor: '#5b5b5b',
    opacity: 0.2,
  },
  citacao: {
    fontFamily: 'Quicksand',
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
    marginBottom: 12,
    textAlign: 'center',
    width: 338,
  },
  subtitulo: {
    fontFamily: 'Quicksand',
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  paragrafo: {
    fontFamily: 'Quicksand',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 20,
    color: '#000',
    marginBottom: 10,
    textAlign: 'justify',
    width: 358,
    alignSelf: 'flex-start',
  },
  imagem: {
    width: 270,
    height: 180,
    borderRadius: 20,
    marginVertical: 16,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  card: {
    backgroundColor: '#fcfcfc',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ffc107',
    padding: 16,
    marginBottom: 16,
    width: 335,
    alignSelf: 'center',
  },
  cardTitulo: {
    fontFamily: 'Quicksand',
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    marginBottom: 6,
  },
  cardTexto: {
    fontFamily: 'Quicksand',
    fontSize: 13,
    fontWeight: '400',
    color: '#000',
    lineHeight: 20,
  },
  link: {
    fontFamily: 'Quicksand',
    fontSize: 16,
    fontWeight: '400',
    color: '#0000EE',
    textDecorationLine: 'underline',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
});

export default AvaliacaoScreen;