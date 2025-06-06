import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Header from '@/components/Header';
import { useRouter } from 'expo-router';



const ReabilitacaoCardioScreen: React.FC = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title='REABILITAÇÃO CODIORESPIRATÓRIA'/>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior='automatic'
        style={styles.scrollView}
      >
        <View style={styles.mainContainer}>
          <View style={styles.contentWrapper}>
            
            <View style={styles.introSection}>
              <View style={styles.placeholderIcon} />
              <Text style={styles.subtitle}>
                Um novo fôlego para sua vida
              </Text>
              <Text style={styles.description}>
                Mesmo após superar a fase aguda da COVID-19, é comum sentir
                cansaço, falta de ar, fraqueza e dificuldade para retomar a
                rotina. Se você está passando por isso, saiba que não está
                sozinho(a).
              </Text>
              <Text style={styles.description}>
                A Reabilitação Cardiorrespiratória é um caminho seguro e eficaz
                para retomar sua autonomia, melhorar a respiração, aumentar a
                força muscular e recuperar sua qualidade de vida.
              </Text>
              <Text style={styles.sectionTitle}>
                Como funciona o processo?
              </Text>
              <Text style={styles.processDescription}>
                O programa é dividido em 3 etapas progressivas, com foco
                em:Reeducação respiratóriaGanho de força muscularRecuperação
                funcionalSegurança e autonomia nas atividades do dia a dia
              </Text>
              <View style={[styles.stageContainer, { height: 1290 }]}>
                <View style={[styles.stageBox, styles.stagePurple, { height: 1290 }]} />
                <View style={styles.stageContent}>
                  <View style={styles.stageHeader}>
                    <Text style={styles.stageTitle}>
                      ETAPA 1 — FASE INICIAL

                    </Text>
                    <Text style={styles.stageDetails}>
                      Duração: 1 a 2 semanas
                      Objetivo: Reduzir a falta de ar, melhorar ocontrole respiratório e iniciar a mobilidade leve.
                      
                      Passo a Passo:
                    </Text>
                  </View>
                  <View style={styles.exerciseCard}>
                    <Text style={styles.exerciseDescription}>
                      5 a 10 minutos |  2 a 3x por dia
                      Sentar ou deitar confortavelmente
                      Colocar uma mão no peito e outra no abdômen
                      Inspirar lentamente pelo nariz, sentindo o abdômen subir
                      Expirar suavemente pela boca
                      Repetir calmamente por alguns minutos
                    </Text>
                    <Text style={styles.exerciseTitle}>
                      Respiração Diafragmática (Abdominal)
                    </Text>
                    <Image
                      style={styles.exerciseImageSmall}
                      source={{ uri:'https://picsum.photos/200/300'}}
                      resizeMode='cover'
                    />
                  </View>
                  <View style={styles.exerciseCard}>
                    <Text style={styles.exerciseDescription}>
                      1x ao dia (ou conforme tolerância)
                      Elevação alternada de braços — 10x
                      Marcha estacionária sentado — 1 min
                      Extensão de joelhos (cada perna) — 10x
                    </Text>
                    <Text style={styles.exerciseTitle}>
                      Mobilização na cadeira ou cama
                    </Text>
                    <Image
                      style={styles.exerciseImageMedium}
                      source={{ uri:'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-04/tr0NMjogAk.png'}}
                      resizeMode='cover'
                    />
                  </View>
                  <View style={styles.exerciseCard}>
                    <Text style={styles.exerciseDescription}>
                      3 séries de 10 respirações profundas
                      Sentar com postura ereta
                      Inspirar profundamente no aparelho
                      Descansar entre as séries
                    </Text>
                    <Text style={styles.exerciseTitle}>
                      Exercício com Incentivador Respiratório (se houver)
                    </Text>
                    <Image
                      style={styles.exerciseImageMedium}
                      source={{ uri:'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-04/ZJZPansLsE.png'}}
                      resizeMode='cover'
                    />
                  </View>
                </View>
              </View>
              <View style={[styles.stageContainer, { height: 1320 }]}>
                <View style={[styles.stageBox, styles.stageBlue, { height: 1320 }]} />
                <View style={styles.stageContent}>
                  <View style={styles.stageHeader}>
                    <Text style={styles.stageTitle}>
                      ETAPA 2 — FASE INTERMEDIÁRIA


                    </Text>
                    <Text style={styles.stageDetails}>
                      Duração: 3 a 4 semanas

                      Objetivo: Melhorar força muscular e resistência cardiovascular de forma segura.

                      Passo a Passo:
                    </Text>
                  </View>
                  <View style={styles.exerciseCard}>
                    <Text style={styles.exerciseDescription}>
                      10 a 15 minutos/dia |  5x por semana
                      5 a 10 min para membros inferiores
                      5 min para membros superiores
                    </Text>
                    <Text style={styles.exerciseTitle}>
                      Treino com Cicloergômetro (ou pedalinho portátil)
                    </Text>
                    <Image
                      style={styles.exerciseImageLarge}
                      source={{ uri:'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-04/bCE6TvMrPT.png'}}
                      resizeMode='cover'
                    />
                  </View>
                  <View style={styles.exerciseCard}>
                    <Text style={styles.exerciseDescription}>
                      3 séries | 1x ao dia
                      Agachamento com apoio (cadeira ou parede) — 3x10
                      Elevação de braços com garrafinhas de água — 3x10
                      Flexão plantar sentado — 3x15
                    </Text>
                    <Text style={styles.exerciseTitle}>
                      Fortalecimento com peso do corpo ou objetos leves
                    </Text>
                    <Image
                      style={styles.exerciseImageLarge}
                      source={{ uri:'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-04/bdcyXHfTPQ.png'}}
                      resizeMode='cover'
                    />
                  </View>
                  <View style={styles.exerciseCard}>
                    <Text style={styles.exerciseDescription}>
                      Comece com 5 min e aumente gradualmente até 15 min
                      Usar tênis confortável
                      Caminhar em local seguro
                      Monitorar esforço (Escala de Borg 2 a 3)
                    </Text>
                    <Text style={styles.exerciseTitle}>
                      Caminhada leve (se possível)
                    </Text>
                    <Image
                      style={styles.exerciseImageXLarge}
                      source={{ uri:'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-04/05wuKZvWzA.png'}}
                      resizeMode='cover'
                    />
                  </View>
                </View>
              </View>
              <View style={[styles.stageContainer, { height: 1430 }]}>
                <View style={[styles.stageBox, styles.stageGreen, { height: 1430 }]} />
                <View style={styles.stageContent}>
                  <View style={styles.stageHeader}>
                    <Text style={styles.stageTitle}>
                      ETAPA 2 — FASE INTERMEDIÁRIA


                    </Text>
                    <Text style={styles.stageDetails}>
                      Duração: 3 a 4 semanas

                      Objetivo: Melhorar força muscular e resistência
                      cardiovascular de forma segura.

                      Passo a Passo:
                    </Text>
                  </View>
                  <View style={styles.exerciseCard}>
                    <Text style={styles.exerciseTitle}>
                      Caminhada Moderada
                    </Text>
                    <Text style={styles.exerciseDescription}>
                      15 a 30 min/dia |  5x por semana
                      Caminhar ao ar livre, em esteira ou quintal
                      Usar roupas leves e monitorar esforço (Borg 3 a 4)
                    </Text>
                    
                    <Image
                      style={styles.exerciseImageXXL}
                      source={{ uri:'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-04/CnEHg2isk9.png'}}
                      resizeMode='cover'
                    />
                  </View>
                  <View style={styles.exerciseCard}>
                    <Text style={styles.exerciseDescription}>
                      2 a 3x por semana
                      Trabalhar grandes grupos musculares
                      Usar elásticos, pesinhos leves ou peso do corpo
                    </Text>
                    <Text style={styles.exerciseTitle}>
                      Exercícios de Resistência com leve carga
                    </Text>
                    <Image
                      style={styles.exerciseImageXXL}
                      source={{ uri:'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-04/XvVF13OJ86.png'}}
                      resizeMode='cover'
                    />
                  </View>
                  <View style={styles.exerciseCard}>
                    <Text style={styles.exerciseDescription}>
                      1x ao dia
                      Alongamento de cadeia posterior (costas e pernas)
                      Abertura de peitoral com bastão ou toalha
                      Mobilidade torácica com respiração profunda
                    </Text>
                    <Text style={styles.exerciseTitle}>
                      Alongamentos Respiratórios e Posturais
                    </Text>
                    <Image
                      style={styles.exerciseImageXXL}
                      source={{ uri:'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-04/cj2rHhV6ev.png'}}
                      resizeMode='cover'
                    />
                  </View>
                </View>
              </View>
              <View style={styles.careSection}>
                <Image
                  style={styles.careIcon}
                  source={{ uri:'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-04/PkbYw2COT8.png'}}
                  resizeMode='cover'
                />
                <Text style={styles.careTitle}>
                  CUIDADOS IMPORTANTES:
                </Text>
              </View>
              <Text style={styles.monitoringTextBase}>
                <Text style={styles.monitoringTitle}>
                  Sempre monitore:
                </Text>
                <Text style={styles.monitoringDetails}>
                  Frequência cardíaca
                  Saturação de oxigênio
                  Percepção de esforço (Escala de Borg)
                </Text>
                <Text style={styles.monitoringTitle}>
                  Interrompa o exercício se sentir:
                </Text>
                <Text style={styles.monitoringDetails}>
                  Dor no peito{"/n"}
                  Falta de ar intensa{"/n"}
                  Tontura ou mal-estar{"/n"}
                </Text>
              </Text>
              <Text style={styles.physiotherapistText}>
                O acompanhamento com um(a) fisioterapeuta é essencial para
                garantir segurança e bons resultados!
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
    flexGrow: 1,
  },
  mainContainer: {
    backgroundColor: '#ffffff',
    position: 'relative',
    overflow: 'hidden',
    marginTop: 0,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
    width: '100%',
  },
  contentWrapper: {
    width: '100%',
    display: 'flex',
    gap: 5,
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
    position: 'relative',
    marginTop: 10, // Adjusted margin to account for header
    marginRight: 0,
    marginBottom: 0,
    marginLeft: -5,
  },
  titleSection: {
    display: 'flex',
    gap: 26,
    alignItems: 'center',
    alignSelf: 'stretch',
    flexShrink: 0,
    flexWrap: 'nowrap',
    position: 'relative',
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
  },
  divider: {
    width: 390.501,
    height: 1,
    flexShrink: 0,
    position: 'relative',
  },
  introSection: {
    display: 'flex',
    gap: 15,
    alignItems: 'center',
    alignSelf: 'stretch',
    flexShrink: 0,
    flexWrap: 'nowrap',
    position: 'relative',
  },
  placeholderIcon: {
    width: 32,
    height: 32,
    flexShrink: 0,
    position: 'relative',
    overflow: 'hidden',
  },
  subtitle: {
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
    textAlign: 'center',
  },
  description: {
    display: 'flex',
    width: 361,
    height: 100,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexShrink: 0,
    fontFamily: 'Quicksand',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    color: '#000000',
    position: 'relative',
    textAlign: 'center',
  },
  sectionTitle: {
    display: 'flex',
    width: 361,
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
  },
  processDescription: {
    display: 'flex',
    width: 361,
    height: 140,
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
  },
  stageContainer: {
    display: 'flex',
    width: 335,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexShrink: 0,
    flexWrap: 'nowrap',
    position: 'relative',
  },
  stageBox: {
    width: 335,
    flexShrink: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    position: 'relative',
  },
  stagePurple: {
    backgroundColor: 'rgba(151, 71, 255, 0.22)',
    borderColor: '#5817ac',
  },
  stageBlue: {
    backgroundColor: 'rgba(5, 86, 236, 0.34)',
    borderColor: '#012a78',
  },
  stageGreen: {
    backgroundColor: 'rgba(73, 239, 80, 0.37)',
    borderColor: '#06910b',
  },
  stageContent: {
    display: 'flex',
    width: 314,
    height: 'auto', // Adjusted height to auto
    gap: 14,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    flexWrap: 'nowrap',
    position: 'absolute',
    top: 11,
    left: 10,
  },
  stageHeader: {
    display: 'flex',
    flexDirection: 'column', // Changed to column for better stacking of title/details
    gap: 10,
    justifyContent: 'center',
    alignItems: 'flex-start', // Aligned to flex-start
    alignSelf: 'stretch',
    flexShrink: 0,
    flexWrap: 'nowrap',
    position: 'relative',
  },
  stageTitle: {
    fontFamily: 'Quicksand',
    fontSize: 14,
    fontWeight: '500', // Bold for titles
    lineHeight: 20,
    color: '#000000',
    textAlign: 'left',
  },
  stageDetails: {
    fontFamily: 'Quicksand',
    fontSize: 14,
    fontWeight: '400', // Regular for details
    lineHeight: 20,
    color: '#000000',
    textAlign: 'left',
  },
  exerciseCard: {
    display: 'flex',
    flexDirection: 'column', // Arrange items vertically
    width: 302,
    gap: 8, 
    alignItems: 'center', // Changed to flex-start to match image
    flexShrink: 0,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15, // Increased padding for better visual separation
    marginBottom: 10, // Add margin bottom for separation
    elevation: 3, // Add shadow for Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  exerciseDescription: {
    width: '100%', // Occupy full width of the card
    fontFamily: 'Quicksand',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
    color: '#000000',
    textAlign: 'left', // Changed to left
    marginBottom: 10, // Space between description and image
  },
  exerciseTitle: {
    width: '100%', // Occupy full width of the card
    fontFamily: 'Quicksand',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 19,
    color: '#000000',
    textAlign: 'left', // Changed to left
    marginBottom: 5, // Space between title and description
  },
  exerciseImageSmall: {
    width: 123.875,
    height: 148,
    flexShrink: 0,
    marginTop: 10, // Add margin top for separation from text
  },
  exerciseImageMedium: {
    width: 133.333,
    height: 200,
    flexShrink: 0,
    marginTop: 10, // Add margin top for separation from text
  },
  exerciseImageLarge: {
    width: 200,
    height: 200,
    flexShrink: 0,
    marginTop: 10, // Add margin top for separation from text
  },
  exerciseImageXLarge: {
    width: 159.333,
    height: 239,
    flexShrink: 0,
    marginTop: 10, // Add margin top for separation from text
  },
  exerciseImageXXL: {
    width: 172,
    height: 258,
    flexShrink: 0,
    marginTop: 10, // Add margin top for separation from text
  },
  careSection: {
    display: 'flex',
    width: 335,
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    flexWrap: 'nowrap',
    position: 'relative',
  },
  careIcon: {
    width: 26.667,
    height: 21.334,
    flexShrink: 0,
    position: 'relative',
  },
  careTitle: {
    display: 'flex',
    width: 202,
    height: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexShrink: 0,
    flexBasis: 'auto',
    fontFamily: 'Quicksand',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    color: '#000000',
    position: 'relative',
    textAlign: 'left',
  },
  monitoringTextBase: {
    display: 'flex',
    width: 361,
    fontFamily: 'Quicksand',
    fontSize: 16,
    lineHeight: 20,
    flexWrap: 'nowrap',
    textAlign: 'left',
    flexDirection: "column", // Changed to column for better stacking
  },
  monitoringTitle: {
    fontWeight: '500', // Bold for titles
    color: '#000000',
  },
  monitoringDetails: {
    fontWeight: '400', // Regular for details
    color: '#000000',
  },
  physiotherapistText: {
    display: 'flex',
    width: 361,
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexShrink: 0,
    fontFamily: 'Quicksand',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: '#000000',
    position: 'relative',
    textAlign: 'left',
  },
});
export default ReabilitacaoCardioScreen;