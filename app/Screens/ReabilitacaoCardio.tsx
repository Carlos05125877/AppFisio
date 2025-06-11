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
      <Header title='REABILITAÇÃO CARDIORESPIRATÓRIA'/>
      <ScrollView 
        scrollEnabled={true}
        contentInsetAdjustmentBehavior='automatic'
        style={styles.scrollView}
      >
        <View style={styles.conteiner}>
          <View style={styles.content}>
            <Text style={[styles.title, {alignItems: 'center', justifyContent: 'center'}]}>
              Um novo fôlego para sua vida
            </Text>
            <Text style={styles.text}>
              Mesmo após superar a fase aguda da COVID-19, é comum sentir cansaço, falta de ar, fraqueza e dificuldade para retomar a rotina. Se você está passando por isso, saiba que não está sozinho(a).
            </Text>
            <Text style={styles.text}>
              A Reabilitação Cardiorrespiratória é um caminho seguro e eficaz para retomar sua autonomia, melhorar a respiração, aumentar a força muscular e recuperar sua qualidade de vida.
            </Text>
            <Text style={[{alignItems: 'flex-start', justifyContent: 'flex-start', marginRight:"auto"}, styles.title ]}>
              Como funciona o processo?
            </Text>
            <Text style={styles.text}>
              O programa é dividido em 3 etapas progressivas, com foco em:
              {'\n'}Reeducação respiratória
              {'\n'}Ganho de força muscular
              {'\n'}Recuperação funcional
              {'\n'}Segurança e autonomia nas atividades do dia a dia
            </Text>
            <View style={[{backgroundColor: '#9747FF38', borderColor:'#5818AD'},styles.contentColorido]}>
              <Text style={[styles.title]}>
                ETAPA 1 - FASE INICIAL
              </Text>
              <Text style={styles.text}>
                Duração: 1 a 2 semanas
              </Text>
              <Text style={styles.text}>
                Objetivo: Reduzir a falta de ar, melhorar o controle respiratório e iniciar a mobilidade leve.
              </Text>
              <Text style={styles.text}>
                 Passo a Passo:
              </Text>
              <View style={styles.contentBranco}>
                <Text style={styles.title}>
                  Respiração Diafragmática (Abdominal)
                </Text>
                <Text style={styles.text}>
                  5 a 10 minutos |  2 a 3x por dia
                  {'\n'}
                </Text>
                <Text style={styles.text}>
                  Sentar ou deitar confortavelmente
                </Text>
                <Text style={styles.text}>
                  Colocar uma mão no peito e outra no abdômen
                </Text>
                <Text style={styles.text}>
                  Inspirar lentamente pelo nariz, sentindo o abdômen subir
                </Text>
                <Text style={styles.text}>
                  Expirar suavemente pela boca
                </Text>
                <Text style={styles.text}>
                  Repetir calmamente por alguns minutos
                </Text>
                <Image
                  source={require('@/assets/images/RespDiaf.png')}
                  style={{ width: '100%', height: 200, marginTop: 10 }}
                  resizeMode='contain'
                />
              </View>
              <View style={styles.contentBranco}>
                <Text style={styles.title}>
                  Mobilização na cadeira ou cama
                </Text>
                <Text style={styles.text}>
                  1x ao dia (ou conforme tolerância)
                  {'\n'}
                </Text>
                <Text style={styles.text}>
                  Elevação alternada de braços — 10x
                </Text>
                <Text style={styles.text}>
                  Marcha estacionária sentado — 1 min
                </Text>
                <Text style={styles.text}>
                  Extensão de joelhos (cada perna) — 10x
                </Text>
                <Image
                  source={require('@/assets/images/MobilizacaoCadeira.png')}
                  style={{ width: '100%', height: 200, marginTop: 10 }}
                  resizeMode='contain'
                />
              </View>
              <View style={styles.contentBranco}>
                <Text style={styles.title}>
                  Exercício com Incentivador Respiratório (se houver)
                </Text>
                <Text style={styles.text}>
                  3 séries de 10 respirações profundas
                  {'\n'}
                </Text>
                <Text style={styles.text}>
                  Sentar com postura ereta
                </Text>
                <Text style={styles.text}>
                  Inspirar profundamente no aparelho
                </Text>
                <Text style={styles.text}>
                  Descansar entre as séries
                </Text>
                <Image
                  source={require('@/assets/images/TreinoRespiratorio.png')}
                  style={{ width: '100%', height: 200, marginTop: 10 }}
                  resizeMode='contain'
                />
              </View>
            </View>
            <View style={[{backgroundColor: '#0556ED57', borderColor:'#012B78'},styles.contentColorido]}>
              <Text style={[styles.title]}>
                ETAPA 2 — FASE INTERMEDIÁRIA
              </Text>
              <Text style={styles.text}>
                Duração: 3 a 4 semanas
              </Text>
              <Text style={styles.text}>
                Objetivo: Melhorar força muscular e resistência cardiovascular de forma segura.
              </Text>
              <Text style={styles.text}>
                 Passo a Passo:
              </Text>
              <View style={styles.contentBranco}>
                <Text style={styles.title}>
                  Treino com Cicloergômetro 
                  {'\n'}(ou pedalinho portátil)
                </Text>
                <Text style={styles.text}>
                  10 a 15 minutos/dia |  5x por semana
                  {'\n'}
                </Text>
                <Text style={styles.text}>
                  5 a 10 min para membros inferiores
                </Text>
                <Text style={styles.text}>
                  5 min para membros superiores
                </Text>
                <Image
                  source={require('@/assets/images/TreinoPedalinho.png')}
                  style={{ width: '100%', height: 200, marginTop: 10 }}
                  resizeMode='contain'
                />
              </View>
              <View style={styles.contentBranco}>
                <Text style={styles.title}>
                  Fortalecimento com peso do corpo ou objetos leves
                </Text>
                <Text style={styles.text}>
                  3 séries | 1x ao dia
                  {'\n'}
                </Text>
                <Text style={styles.text}>
                  Agachamento com apoio (cadeira ou parede) — 3x10
                </Text>
                <Text style={styles.text}>
                  Elevação de braços com garrafinhas de água — 3x10
                </Text>
                <Text style={styles.text}>
                  Flexão plantar sentado — 3x15
                </Text>
                <Image
                  source={require('@/assets/images/Fortalecimento.png')}
                  style={{ width: '100%', height: 200, marginTop: 10 }}
                  resizeMode='contain'
                />
              </View>
              <View style={styles.contentBranco}>
                <Text style={styles.title}>
                  Caminhada leve (se possível)
                </Text>
                <Text style={styles.text}>
                  Comece com 5 min e aumente gradualmente até 15 min
                  {'\n'}
                </Text>
                <Text style={styles.text}>
                  Usar tênis confortável
                </Text>
                <Text style={styles.text}>
                  Caminhar em local seguro
                </Text>
                <Text style={styles.text}>
                  Monitorar esforço (Escala de Borg 2 a 3)
                </Text>
                <Image
                  source={require('@/assets/images/CaminhadaLeve.png')}
                  style={{ width: '100%', height: 200, marginTop: 10 }}
                  resizeMode='contain'
                />
              </View>
            </View>
            <View style={[{backgroundColor: '#49F0505E', borderColor:'#06910C'},styles.contentColorido]}>
              <Text style={[styles.title]}>
                ETAPA 3 — FASE AVANÇADA
              </Text>
              <Text style={styles.text}>
                Duração: A partir da 5ª semana
              </Text>
              <Text style={styles.text}>
                Objetivo: Recuperar autonomia, resistência e condicionamento funcional.
              </Text>
              <Text style={styles.text}>
                 Passo a Passo:
              </Text>
              <View style={styles.contentBranco}>
                <Text style={styles.title}>
                  Caminhada Moderada
                </Text>
                <Text style={styles.text}>
                  10 a 15 minutos/dia |  5x por semana
                  {'\n'}
                </Text>
                <Text style={styles.text}>
                  Caminhar ao ar livre, em esteira ou quintal
                </Text>
                <Text style={styles.text}>
                  Usar roupas leves e monitorar esforço (Borg 3 a 4)
                </Text>
                <Image
                  source={require('@/assets/images/CaminhadaModerada.png')}
                  style={{ width: '100%', height: 200, marginTop: 10 }}
                  resizeMode='contain'
                />
              </View>
              <View style={styles.contentBranco}>
                <Text style={styles.title}>
                  Exercícios de Resistência com leve carga
                </Text>
                <Text style={styles.text}>
                  2 a 3x por semana
                  {'\n'}
                </Text>
                <Text style={styles.text}>
                  Trabalhar grandes grupos musculares
                </Text>
                <Text style={styles.text}>
                  Usar elásticos, pesinhos leves ou peso do corpo
                </Text>
                <Image
                  source={require('@/assets/images/CargaLeve.png')}
                  style={{ width: '100%', height: 200, marginTop: 10 }}
                  resizeMode='contain'
                />
              </View>
              <View style={styles.contentBranco}>
                <Text style={styles.title}>
                  Alongamentos Respiratórios e Posturais
                </Text>
                <Text style={styles.text}>
                  1x ao dia
                  {'\n'}
                </Text>
                <Text style={styles.text}>
                  Alongamento de cadeia posterior (costas e pernas)
                </Text>
                <Text style={styles.text}>
                  Abertura de peitoral com bastão ou toalha
                </Text>
                <Text style={styles.text}>
                  Mobilidade torácica com respiração profunda
                </Text>
                <Image
                  source={require('@/assets/images/Alongamento.png')}
                  style={{ width: '100%', height: 200, marginTop: 10 }}
                  resizeMode='contain'
                />
              </View>
            </View>
            <View style={[{justifyContent: 'flex-start', alignItems: 'flex-start'}]}>
              <View style={[{marginTop:20, display: 'flex', flexDirection: 'row', gap: 10, justifyContent: 'center', alignItems: 'flex-start', marginLeft:'auto', marginRight: 'auto'}]}>
                <Image source={require('@/assets/images/Alerta.png')}/>
                <Text style={styles.title}>
                   CUIDADOS IMPORTANTES:
                </Text>
              </View>    
              <Text style={styles.title}>
                Sempre monitore:
              </Text>
              <Text style={styles.text}>
                Frequência cardíaca
                {'\n'}Saturação de oxigênio
                {'\n'}Saturação de oxigênio
                {'\n'}Percepção de esforço (Escala de Borg)
              </Text>
              <Text style={styles.title}>
                Interrompa o exercício se sentir:
              </Text>
              <Text style={styles.text}>
                  Dor no peito
                  {'\n'}Falta de ar intensa
                {'\n'}Tontura ou mal-estar
              </Text>
              <Text style={[styles.title, {marginTop: 20}]}>
                O acompanhamento com um(a) fisioterapeuta é essencial para garantir segurança e bons resultados!
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
  conteiner: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    width: '98%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Quicksand',
    color: '#000000',

  },
  text: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#000000',
    marginBottom: 20,
  },
  contentColorido: {
    alignItems: 'flex-start',
    width: '100%',
    height: "auto",
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
  },
  contentBranco: {
    marginLeft: "auto",
    marginRight: "auto",
    width: '99%',
    height: "auto",
    backgroundColor: '#ffffff',
    padding: 5,
    borderRadius: 10,
    marginTop: 10,
  },
  
});
export default ReabilitacaoCardioScreen;