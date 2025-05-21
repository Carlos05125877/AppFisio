import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';

const Sus: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.containerPrincipal}>
          <Text style={styles.titulo}>
            O Papel Fundamental do SUS Durante a Pandemia da COVID-19
          </Text>

          <View style={styles.card}>
            <Text style={styles.subtitulo}>
              O SUS como rede de proteção social
            </Text>
            <Text style={styles.paragrafo}>
              A pandemia da COVID-19 foi um dos maiores desafios enfrentados pela humanidade no século XXI. No Brasil, ela escancarou desigualdades, colocou à prova estruturas públicas e, ao mesmo tempo, revelou a importância vital de um sistema universal de saúde: o Sistema Único de Saúde (SUS). Presente em todos os municípios do país, o SUS foi essencial para garantir que milhões de brasileiros tivessem acesso a diagnóstico, tratamento e, principalmente, à vacinação. Mais do que um sistema de atendimento, o SUS se mostrou uma rede de proteção social.
            </Text>
            <ImageBackground
              style={styles.imagem}
              source={{
                uri: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-21/bDgj8dBcfD.png',
              }}
              resizeMode="cover"
            />
          </View>

          <View style={styles.card}>
            <Text style={styles.subtitulo}>
              A Capilaridade do SUS: uma força silenciosa
            </Text>
            <Text style={styles.paragrafo}>
              Desde antes da pandemia, o SUS já era responsável por atender cerca de 75% da população brasileira, fornecendo desde atendimentos básicos até procedimentos de alta complexidade. Com a chegada do coronavírus, essa estrutura mostrou sua força. A presença do SUS em todos os cantos do Brasil permitiu que a resposta fosse rápida e coordenada, ainda que com desafios. Em estados como Sergipe, por exemplo, a quantidade de leitos de UTI foi ampliada em mais de 400%, com a criação de hospitais de campanha, centros de triagem e aquisição de equipamentos de urgência. Esse tipo de resposta só foi possível graças à estrutura pré-existente do SUS, aos profissionais da saúde pública e à atuação coordenada entre União, estados e municípios. É importante ressaltar que, sem o SUS, o impacto da pandemia no Brasil teria sido ainda mais devastador.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.subtitulo}>
              Investimentos, estrutura e ações emergenciais
            </Text>
            <Text style={styles.paragrafo}>
              Durante a pandemia, o Governo Federal destinou bilhões de reais para o fortalecimento do SUS. Esses recursos foram utilizados para: ampliação de leitos hospitalares (principalmente UTIs); aquisição de insumos essenciais, como oxigênio, EPIs e medicamentos; criação e ampliação de laboratórios para diagnóstico via RT-PCR; envio de kits intubação para estados em colapso; treinamento emergencial de profissionais da saúde para atuação em UTIs; distribuição de mais de 600 milhões de doses de vacinas contra a COVID-19. Essas ações demonstraram como o SUS pode ser mobilizado em larga escala para respostas rápidas, mesmo diante de um cenário global de escassez de recursos.
            </Text>
            <ImageBackground
              style={styles.imagemGrande}
              source={{
                uri: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-21/5J3GU9ZH8L.png',
              }}
              resizeMode="cover"
            />
          </View>

          <View style={styles.card}>
            <Text style={styles.subtitulo}>
              A maior campanha de vacinação da história do Brasil
            </Text>
            <Text style={styles.paragrafo}>
              Um dos grandes marcos da pandemia foi a vacinação em massa. Conduzida integralmente pelo SUS, a campanha de imunização contra a COVID-19 envolveu a distribuição, logística, aplicação e registro de milhões de doses em tempo recorde. Utilizando sua ampla rede de unidades básicas de saúde, o SUS vacinou a população em todas as regiões do Brasil, de centros urbanos a aldeias indígenas em áreas remotas. A experiência acumulada em campanhas anteriores, como a do H1N1 e da Influenza, permitiu que o Brasil figurasse entre os países com maiores taxas de vacinação em pouco tempo, mesmo com os desafios logísticos enfrentados em um país de dimensões continentais.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.subtitulo}>
              Profissionais da linha de frente: os heróis do SUS
            </Text>
            <Text style={styles.paragrafo}>
              Médicos, enfermeiros, técnicos, agentes comunitários, motoristas de ambulância, profissionais da limpeza hospitalar, todos foram essenciais para a engrenagem funcionar. A pandemia colocou esses trabalhadores sob enorme pressão, exigindo jornadas exaustivas, exposição constante ao risco de contaminação e uma demanda emocional sem precedentes. Apesar de todas as adversidades, esses profissionais seguiram firmes, garantindo que o sistema não colapsasse. Muitos pagaram com a própria vida. O reconhecimento a esses trabalhadores é parte fundamental da valorização do SUS.
            </Text>
            <ImageBackground
              style={styles.imagemMedia}
              source={{
                uri: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-21/UJqxd7fEhc.png',
              }}
              resizeMode="cover"
            />
          </View>

          <View style={styles.card}>
            <Text style={styles.subtitulo}>
              O SUS como agente de vigilância, prevenção e informação
            </Text>
            <Text style={styles.paragrafo}>
              Além da assistência direta, o SUS teve papel central na vigilância epidemiológica, no monitoramento de casos, na produção de dados e na comunicação com a sociedade. O sistema InfoGripe, da Fiocruz, e os boletins epidemiológicos diários do Ministério da Saúde foram pilares para decisões políticas e de saúde pública.
            </Text>
            <ImageBackground
              style={styles.imagemMedia}
              source={{
                uri: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-21/ie5kawEYfT.png',
              }}
              resizeMode="cover"
            />
            <View style={styles.cardSecundario}>
              <Text style={styles.paragrafoSecundario}>
                A atuação da Atenção Primária à Saúde foi igualmente relevante: unidades básicas serviram como porta de entrada, triagem e monitoramento de pacientes leves, evitando a sobrecarga dos hospitais e contribuindo para o controle da disseminação do vírus.
              </Text>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.subtitulo}>
              Um legado de aprendizado e desafios
            </Text>
            <Text style={styles.paragrafo}>
              A pandemia escancarou também as fragilidades do sistema, como a dependência de insumos importados, a desigualdade no acesso à saúde e a necessidade urgente de valorização dos profissionais da área. Contudo, também deixou um legado de aprendizados: a importância de investir continuamente em ciência, tecnologia, infraestrutura e governança pública de saúde. Especialistas apontam que o fortalecimento do SUS no pós-pandemia é mais do que necessário, é uma questão de sobrevivência social. Em um mundo onde novas emergências sanitárias podem surgir a qualquer momento, o Brasil precisa de um SUS forte, estruturado e resiliente.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.subtitulo}>
              Conclusão: o SUS salva vidas
            </Text>
            <Text style={styles.paragrafo}>
              O SUS se revelou o verdadeiro protagonista do enfrentamento à pandemia da COVID-19. Apesar de todas as dificuldades, foi ele quem acolheu, tratou, vacinou, monitorou e educou a população. Um sistema público, gratuito e universal que garantiu dignidade em um dos momentos mais difíceis da nossa história recente. É preciso reconhecer o valor do SUS não apenas em tempos de crise, mas todos os dias. E, mais do que reconhecer, é preciso defendê-lo e fortalecê-lo, porque onde há SUS, há esperança, há equidade, há vida.
            </Text>
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
  containerPrincipal: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  titulo: {
    fontFamily: 'Alumni Sans SC',
    fontSize: 28,
    fontWeight: '700',
    color: '#012B78',
    marginBottom: 24,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardSecundario: {
    backgroundColor: '#f6f6f6',
    borderRadius: 10,
    padding: 12,
    marginTop: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#bdb2b2',
  },
  subtitulo: {
    fontFamily: 'Quicksand',
    fontSize: 18,
    fontWeight: '700',
    color: '#012B78',
    marginBottom: 8,
    textAlign: 'left',
  },
  paragrafo: {
    fontFamily: 'Quicksand',
    fontSize: 13,
    lineHeight: 20,
    color: '#000',
    marginBottom: 10,
    textAlign: 'left',
  },
  paragrafoSecundario: {
    fontFamily: 'Alumni Sans',
    fontSize: 13,
    lineHeight: 20,
    color: '#8c8b8b',
    textAlign: 'left',
  },
  imagem: {
    width: '100%',
    height: 138,
    borderRadius: 10,
    marginTop: 16,
    marginBottom: 8,
    overflow: 'hidden',
  },
  imagemGrande: {
    width: '100%',
    height: 224,
    borderRadius: 10,
    marginTop: 16,
    marginBottom: 8,
    overflow: 'hidden',
  },
  imagemMedia: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginTop: 16,
    marginBottom: 8,
    overflow: 'hidden',
  },
});

export default Sus;