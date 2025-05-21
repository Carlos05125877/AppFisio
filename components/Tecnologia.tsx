import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';

const Tecnologia: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.containerPrincipal}>
          <Text style={styles.titulo}>
            Tecnologia e Inovação no Combate à COVID-19: Uma Revolução em Tempo Real
          </Text>

          <View style={styles.card}>
            <Text style={styles.subtitulo}>
              Vacinas de Nova Geração: Acelerando a Ciência
            </Text>
            <Text style={styles.paragrafo}>
              A pandemia impulsionou o desenvolvimento de vacinas em tempo recorde, graças a tecnologias como o RNA mensageiro (mRNA). Essa abordagem permitiu a criação de imunizantes eficazes em menos de um ano, algo inédito na história da medicina. A disponibilização rápida do genoma do SARS-CoV-2 em janeiro de 2020 possibilitou que cientistas iniciassem o desenvolvimento de vacinas quase imediatamente.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.subtitulo}>
              Equipamentos Médicos: Inovação Salvando Vidas
            </Text>
            <Text style={styles.paragrafo}>
              A pressão por salvar vidas levou a avanços significativos em dispositivos médicos. Foram desenvolvidos, em tempo recorde, testes para diagnóstico, medicamentos e equipamentos inovadores para atendimento emergencial e em Unidades de Terapia Intensiva (UTIs). Além disso, foram produzidas máscaras e revestimentos para proteger a população e reduzir a disseminação do vírus.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.subtitulo}>
              Digitalização e Inclusão Tecnológica
            </Text>
            <Text style={styles.paragrafo}>
              A pandemia intensificou o uso de tecnologias digitais no Brasil, com o acesso à internet aumentando de 71% dos domicílios em 2019 para 83% em 2020, correspondendo a 61,8 milhões de lares conectados. Essa conectividade foi essencial para a continuidade de atividades empresariais, ensino remoto, telemedicina e serviços públicos. No entanto, a crise também evidenciou desigualdades no acesso à tecnologia, com disparidades significativas entre diferentes classes sociais. Enquanto o computador está presente em 100% dos domicílios da classe A, ele está em apenas 13% das classes D e E, destacando a necessidade de políticas públicas para promover a inclusão digital.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.subtitulo}>
              Ciência, Tecnologia e Inovação em Saúde
            </Text>
            <Text style={styles.paragrafo}>
              A pandemia destacou a importância estratégica das instituições públicas de pesquisa e de fomento na organização e coordenação das atividades de ciência, tecnologia e inovação em saúde. A crescente incorporação de novas plataformas tecnológicas associadas à 4ª Revolução Tecnológica nessas atividades reforçou a percepção sobre as assimetrias existentes na produção de conhecimento científico em âmbito mundial. Isso evidencia a necessidade de atuação estratégica do Estado na articulação entre os interesses públicos e privados em prol da produção em saúde e da garantia de acesso à população.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.subtitulo}>
              O Legado Tecnológico da Pandemia
            </Text>
            <Text style={styles.paragrafo}>
              A pandemia de COVID-19 acelerou uma transformação digital sem precedentes, demonstrando que a tecnologia e a inovação são fundamentais para enfrentar crises sanitárias. O legado deixado por esse período inclui não apenas avanços científicos e tecnológicos, mas também lições sobre a importância da colaboração global, da inclusão digital e do investimento contínuo em ciência e tecnologia para a construção de um futuro mais resiliente e equitativo.
            </Text>
            <ImageBackground
              style={styles.imagemGrande}
              source={{
                uri: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-21/af8izbiVAj.png',
              }}
              resizeMode="cover"
            />
          </View>

          <View style={styles.card}>
            <Text style={styles.subtitulo}>
              Acelerando a Ciência
            </Text>
            <Text style={styles.paragrafo}>
              Antes: Desenvolver uma vacina levava anos. Agora: RNA mensageiro, simulações em IA e colaboração global permitiram avanços em meses. A ciência se tornou mais ágil, conectada e colaborativa.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.subtitulo}>
              Saúde Digital é Realidade
            </Text>
            <Text style={styles.paragrafo}>
              De consultas online a prontuários acessíveis por aplicativos, a tecnologia entrou de vez na rotina médica. Benefícios: Agilidade no diagnóstico, acesso remoto a especialistas, monitoramento contínuo de pacientes.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.subtitulo}>
              Inclusão Digital: O Desafio que Permanece
            </Text>
            <Text style={styles.paragrafo}>
              A pandemia revelou um abismo: enquanto uns estudavam e se tratavam online, milhões ficaram desconectados. Para o futuro, é essencial: internet acessível, dispositivos disponíveis, alfabetização digital em todos os níveis.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.subtitulo}>
              A Ciência Voltou a Ser Protagonista
            </Text>
            <Text style={styles.paragrafo}>
              A confiança em dados, estudos e especialistas foi resgatada. A pandemia provou: Ciência salva. Informação importa. Investir em pesquisa é investir em vidas.
            </Text>
          </View>

          <View style={styles.cardSecundario}>
            <ImageBackground
              style={styles.imagemMedia}
              source={{
                uri: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-21/6EaxSS7fV6.png',
              }}
              resizeMode="cover"
            />
            <Text style={styles.paragrafoSecundario}>
              A tecnologia não foi só resposta, ela se tornou caminho.
            </Text>
            <Text style={styles.subtituloSecundario}>
              E O QUE FICA PARA O FUTURO?
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
    fontSize: 24,
    fontWeight: '700',
    color: '#012A78',
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
    padding: 16,
    marginBottom: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#bdb2b2',
  },
  subtitulo: {
    fontFamily: 'Quicksand',
    fontSize: 18,
    fontWeight: '700',
    color: '#012A78',
    marginBottom: 8,
    textAlign: 'left',
  },
  subtituloSecundario: {
    fontFamily: 'Quicksand',
    fontSize: 16,
    fontWeight: '700',
    color: '#012A78',
    marginTop: 16,
    textAlign: 'center',
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
    textAlign: 'center',
    marginTop: 8,
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
    width: 180,
    height: 180,
    borderRadius: 10,
    marginTop: 16,
    marginBottom: 8,
    overflow: 'hidden',
    alignSelf: 'center',
  },
});

export default Tecnologia;