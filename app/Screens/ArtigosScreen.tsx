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
  Linking,
  TouchableOpacity,
} from 'react-native';
import Header from '@/components/Header'; // ajuste o caminho se necessário

const artigos = [
  {
    titulo: 'Síndrome pós-COVID-19 entre hospitalizados por COVID-19: estudo de coorte após 6 e 12 meses da alta hospitalar',
    imagem: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/wDtfeBgYVO.png',
    link: 'https://doi.org/10.1590/0102-311XPT027423',
  },
  {
    titulo: 'Manifestações clínicas e repercussões dos sintomas prolongados e sequelas pós-COVID-19 em homens: netnografia',
    imagem: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/vxcLLFs18K.png',
    link: 'https://doi.org/10.37689/acta-ape/2023AO018532',
  },
  {
    titulo: 'Reabilitação Pulmonar na Síndrome Pós-COVID-19: Estratégias e Benefícios',
    imagem: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/zUjFe7tq3V.png',
    link: 'https://doi.org/10.1590/1809-2950/00000029012022PT',
  },
  {
    titulo: 'Alterações Cognitivas e Funcionais na COVID Longa em Idosos: Revisão Integrativa',
    imagem: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/tY7KyrFYPq.png',
    link: 'https://doi.org/10.1590/ce.v29i0.93477',
  },
  {
    titulo: 'Reabilitação Pulmonar Pós-COVID-19: Estratégias para a Recuperação Funcional',
    imagem: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/wAKzAyhTrt.png',
    link: 'https://doi.org/10.36416/1806-3756/e20210034',
  },
  {
    titulo: 'Covid Longa: A Pandemia que Não Terminou',
    imagem: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/E6uPLUJm0o.png',
    link: 'https://doi.org/10.1590/1806-9983e700601',
  },
  {
    titulo: 'COVID Longa no Brasil: Uma Agenda Inacabada para o SUS',
    imagem: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/3uoWbcKykG.png',
    link: 'https://doi.org/10.1590/0102-311XPT008724',
  },
  {
    titulo: 'Complicações Pós-COVID-19: Novos Desafios para o SUS',
    imagem: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/H8x3Sce6pf.png',
    link: 'https://doi.org/10.47820/recima21.v2i10.885',
  },
  {
    titulo: 'Atenção à Saúde Mental na Pandemia de COVID-19: Desafios e Perspectivas',
    imagem: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/7TmnEJaXTm.png',
    link: 'https://doi.org/10.1590/1413-81232025301.05682023',
  },
  {
    titulo: 'Complicações Neurológicas em Pacientes Pós-COVID-19',
    imagem: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/0tss9bkLMz.png',
    link: 'https://doi.org/10.1590/fm.2024.37135.0',
  },
  {
    titulo: 'Itinerários Terapêuticos de Sobreviventes da Covid-19 Pós-Alta Hospitalar',
    imagem: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/gERueHKFer.png',
    link: 'https://doi.org/10.1590/S0103-7331202434082pt',
  },
  {
    titulo: 'Disautonomias Pós-COVID: Importância do Reconhecimento Precoce e da Implementação de Programas de Recuperação',
    imagem: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/dBxgeuYah3.png',
    link: 'https://doi.org/10.36660/abc.20230110',
  },
  {
    titulo: 'Qualidade de Vida dos Profissionais de Saúde Pós-COVID-19: Um Estudo Transversal',
    imagem: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/yty0MwWj0n.png',
    link: 'https://doi.org/10.5380/ce.v26i0.78275',
  },
  {
    titulo: 'Riscos de Adoecimento de Enfermeiros Docentes na Pandemia de COVID-19',
    imagem: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-31/720tZ4JmFr.png',
    link: 'https://doi.org/10.5380/ce.v26i0.78275',
  },
];

const ArtigosScreen = (): React.JSX.Element => {
  return (
    <View> 
      <Header title="ARTIGOS"/>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior="automatic"
      >
        <View style={styles.container}>
          
          <View style={styles.articlesArea}>
            {artigos.map((artigo, idx) => (
              <View key={idx} style={styles.articleBox}>
                <View style={styles.articleLeft}>
                  <Text style={styles.articleTitle}>{artigo.titulo}</Text>
                  <View style={styles.saibaMaisBox}>
                    <TouchableOpacity onPress={() => Linking.openURL(artigo.link)}>
                      <Text style={styles.saibaMaisText} numberOfLines={1}>
                        Saiba mais +
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.articleImageArea}>
                  <ImageBackground
                    style={styles.articleImage}
                    source={{ uri: artigo.imagem }}
                    resizeMode="cover"
                  />
                </View>
              </View>
            ))}
          </View>
        </View>
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
  articlesArea: {
    width: '90%',
    maxWidth: 420,
    gap: 12,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  articleBox: {
    width: '100%',
    minHeight: 120,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    backgroundColor: '#fff',
    marginBottom: 16,
    paddingVertical: 12,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 1,
  },
  articleLeft: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: 12,
  },
  articleTitle: {
    fontFamily: 'Quicksand',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 20,
    color: '#000000',
    textAlign: 'left',
    marginBottom: 10,
  },
  saibaMaisBox: {
    width: '50%',
    alignSelf: 'flex-start',
    backgroundColor: '#012a78',
    borderRadius: 8,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  saibaMaisText: {
    fontFamily: 'Quicksand',
    fontSize: 13,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
  },
  articleImageArea: {
    width: 100,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
  },
  articleImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});

export default ArtigosScreen;