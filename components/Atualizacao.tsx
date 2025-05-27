import * as React from "react";
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';

const Atualizacao = (): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior="automatic"
      >
        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.title}>
              Situação Atual da COVID-19 no Brasil (2025)
            </Text>
            <Text style={styles.description}>
              Casos confirmados: Mais de 130 mil até o final de fevereiro.
              Óbitos: 664 mortes registradas no mesmo período.Média
              diária de mortes: Aproximadamente 13 por dia, equivalente a 89
              por semana.Hospitalizações por Síndrome Respiratória Aguda
              Grave (SRAG): 3.980 até a 7ª semana epidemiológica de 2025,
              sendo 48% por COVID-19.
            </Text>
            <ImageBackground
              style={[styles.image, {width: 350, height: 500}]}
              source={require('../assets/images/covid-stats.png')}
              resizeMode="cover"
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.title}>Variantes em Circulação</Text>
            <Text style={styles.text}>
              <Text style={styles.boldText}>LP.8.1:</Text>
              <Text style={styles.regularText}>
                Identificada como a variante dominante no Brasil, responsável
                por aproximadamente 44% dos casos de Síndrome Respiratória
                Aguda Grave (SRAG) até a semana epidemiológica 8 de 2025.
              </Text>
              <Text style={styles.boldText}>XBB.1.16 (Arcturus):</Text>
              <Text style={styles.regularText}>
                Subvariante da Ômicron detectada no país desde maio de 2023,
                associada a sintomas como conjuntivite viral.
              </Text>
              <Text style={styles.boldText}>XEC:</Text>
              <Text style={styles.regularText}>
                Outra subvariante sob monitoramento pela Organização Mundial
                da Saúde (OMS), com presença registrada no Brasil.
              </Text>
            </Text>
            <ImageBackground
              style={styles.variantImage}
              source={require('../assets/images/variants.png')}
              resizeMode="cover"
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.title}>Vacinação</Text>
            <Text style={styles.text}>
              <Text style={styles.boldText}>Doses Aplicadas:</Text>
              <Text style={styles.regularText}>
                Desde o início da campanha de imunização em 2021, mais de
                568,8 milhões de doses foram aplicadas no Brasil.
              </Text>
              <Text style={styles.boldText}>Novas Aquisições:</Text>
              <Text style={styles.regularText}>
                Em abril de 2025, o Ministério da Saúde adquiriu 57 milhões de
                doses da vacina contra a COVID-19, com a primeira remessa de
                1,3 milhão de doses recebida em 1º de maio. A previsão é
                aplicar mais de 15 milhões de doses ao longo do ano.
              </Text>
              <Text style={styles.boldText}>Público-Alvo:</Text>
              <Text style={styles.regularText}>
                A vacinação é recomendada para crianças menores de 5 anos,
                idosos, gestantes, imunocomprometidos, ribeirinhos,
                quilombolas e pessoas com comorbidades. Adultos não vacinados
                também devem se imunizar.
              </Text>
              <Text style={styles.boldText}>Esquema Vacinal Infantil:&nbsp;</Text>
              <Text style={styles.regularText}>
                Para crianças, a vacinação está recomendada com esquema de
                duas doses (aos 6 e 7 meses de idade), podendo ser
                administrada até 4 anos, 11 meses e 29 dias, conforme
                histórico vacinal.
              </Text>
            </Text>
            <ImageBackground
              style={styles.vaccineImage}
              source={require('../assets/images/vaccine.png')}
              resizeMode="cover"
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.title}>Tratamento</Text>
            <Text style={styles.text}>
              <Text style={styles.boldText}>Antivirais no SUS</Text>
              <Text style={styles.regularText}>
                : O Sistema Único de Saúde (SUS) incorporou a combinação dos
                antivirais nirmatrelvir e ritonavir (NMV/r) para o tratamento
                de pacientes com alto risco de evolução para formas graves da
                doença, com diagnóstico confirmado de COVID-19 e sintomas
                leves a moderados.
              </Text>
            </Text>
            <ImageBackground
              style={styles.treatmentImage}
              source={require('../assets/images/treatment.png')}
              resizeMode="cover"
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.title}>Testagem e Vigilância</Text>
            <Text style={styles.text}>
              <Text style={styles.boldText}>Testagem:&nbsp;</Text>
              <Text style={styles.regularText}>
                Na semana epidemiológica 4 de 2025, foram realizados 30.600
                exames RT-PCR para diagnóstico da COVID-19, com 925 resultados
                positivos.
              </Text>
              <Text style={styles.boldText}>Vigilância Genômica:&nbsp;</Text>
              <Text style={styles.regularText}>
                O Brasil mantém a vigilância genômica ativa para monitoramento
                de variantes do SARS-CoV-2, com boletins informativos
                periódicos.
              </Text>
            </Text>
            <ImageBackground
              style={styles.surveillanceImage}
              source={require('../assets/images/surveillance.png')}
              resizeMode="cover"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
  },
  section: {
    marginBottom: 32,
  },
  title: {
    fontFamily: 'Alumni Sans SC',
    fontSize: 22,
    fontWeight: '600',
    color: '#012a78',
    marginBottom: 16,
  },
  description: {
    fontFamily: 'Alumni Sans SC',
    fontSize: 14,
    lineHeight: 25,
    color: '#5b5b5b',
    marginBottom: 16,
  },
  text: {
    fontFamily: 'Alumni Sans SC',
    fontSize: 14,
    lineHeight: 25,
    color: '#000000',
    marginBottom: 16,
  },
  boldText: {
    fontWeight: '600',
  },
  regularText: {
    fontWeight: '400',
  },
  image: {
    width: '100%',
    height: "100%",
    marginBottom: 16,
  },
  variantImage: {
    width: 222.88,
    height: 215,
    alignSelf: 'center',
  },
  vaccineImage: {
    width: 247,
    height: 213,
    alignSelf: 'center',
  },
  treatmentImage: {
    width: 248,
    height: 239,
    alignSelf: 'center',
  },
  surveillanceImage: {
    width: 240,
    height: 215,
    alignSelf: 'center',
  },
});

export default Atualizacao;
