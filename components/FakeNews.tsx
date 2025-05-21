import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const FakeNews: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cuidado com as Fake News</Text>
      <View style={styles.infoBox}>
        <Image
          style={styles.infoImage}
          source={require('../assets/images/fake-news.png')}
        />
        <View style={styles.infoTextBox}>
          <Text style={styles.infoTitle}>Desinformação também adoece</Text>
          <Text style={styles.description}>
            <Text style={styles.boldText}>A desinformação sobre a COVID-19 </Text>
            <Text style={styles.normalText}>
              ainda circula forte e pode colocar vidas em risco. Boatos como "existe um plano para criar uma nova pandemia" ou "vacina causa doenças graves" não têm nenhuma base científica e já foram desmentidos por órgãos oficiais como o Ministério da Saúde, Fiocruz e veículos de checagem como o G1 Fato ou Fake.
              {"\n\n"}
              As fake news se espalham rápido, mas a verdade também pode. Por isso, sempre que receber uma mensagem duvidosa, pergunte:
              {"\n"}• Quem está dizendo isso?
              {"\n"}• Há fonte confiável?
              {"\n"}• Está em sites como gov.br, Fiocruz, ou checado por jornalistas?
              {"\n\n"}
              Não compartilhe se tiver dúvida. Cheque antes. Desinformar é perigoso, especialmente em tempos de pandemia.
            </Text>
          </Text>
        </View>
      </View>

      <View style={styles.fakeNewsSection}>
        <Text style={styles.sectionTitle}>Principais Fake News sobre COVID-19</Text>

        <View style={styles.newsItem}>
          <Text style={styles.falseTag}>FALSO</Text>
          <Text style={styles.newsTitle}>Estão planejando uma nova pandemia em 2025!</Text>
          <Text style={styles.newsDescription}>
            Não existe nenhum plano secreto de pandemia. Esse boato foi criado para causar medo e desconfiança nas autoridades de saúde.
          </Text>
        </View>

        <View style={styles.newsItem}>
          <Text style={styles.falseTag}>FALSO</Text>
          <Text style={styles.newsTitle}>A vacina contra a COVID-19 altera o DNA.</Text>
          <Text style={styles.newsDescription}>
            Nenhuma vacina tem a capacidade de modificar o seu código genético. As vacinas apenas ensinam o corpo a se proteger.
          </Text>
        </View>

        <View style={styles.newsItem}>
          <Text style={styles.falseTag}>FALSO</Text>
          <Text style={styles.newsTitle}>Quem tomou vacina vai morrer em dois anos.</Text>
          <Text style={styles.newsDescription}>
            Essa teoria absurda surgiu de uma distorção de fala de um cientista e não tem NENHUM respaldo científico.
          </Text>
        </View>

        <View style={styles.newsItem}>
          <Text style={styles.falseTag}>FALSO</Text>
          <Text style={styles.newsTitle}>Máscara faz mal e causa intoxicação por CO2.</Text>
          <Text style={styles.newsDescription}>
            Máscaras são seguras e eficazes. Não causam intoxicação, profissionais de saúde usam por horas sem problemas.
          </Text>
        </View>

        <View style={styles.newsItem}>
          <Text style={styles.falseTag}>FALSO</Text>
          <Text style={styles.newsTitle}>Se você pegou COVID uma vez, está imune pra sempre</Text>
          <Text style={styles.newsDescription}>
            A reinfecção é possível, principalmente com novas variantes. A proteção natural diminui com o tempo.
          </Text>
        </View>

        <View style={styles.newsItem}>
          <Text style={styles.falseTag}>FALSO</Text>
          <Text style={styles.newsTitle}>Remédios caseiros curam COVID-19.</Text>
          <Text style={styles.newsDescription}>
            Chá de limão com alho pode até aliviar sintomas leves, mas não substitui tratamento médico nem vacina.
          </Text>
        </View>

        <View style={styles.newsItem}>
          <Text style={styles.falseTag}>FALSO</Text>
          <Text style={styles.newsTitle}>Quem tomou vacina não precisa mais usar máscara.</Text>
          <Text style={styles.newsDescription}>
            Não existe nenhum estudo sério que comprove isso. É um boato infundado que circula desde o início da pandemia.
          </Text>
        </View>

        <View style={styles.newsItem}>
          <Text style={styles.falseTag}>FALSO</Text>
          <Text style={styles.newsTitle}>COVID é só uma gripe forte.</Text>
          <Text style={styles.newsDescription}>
            A COVID-19 pode causar complicações graves, sequelas prolongadas e morte, inclusive em pessoas jovens e saudáveis.
          </Text>
        </View>

        <View style={styles.newsItem}>
          <Text style={styles.falseTag}>FALSO</Text>
          <Text style={styles.newsTitle}>Vacina causa magnetismo no corpo.</Text>
          <Text style={styles.newsDescription}>
            Isso é tão absurdo quanto parece. Nenhuma substância presente nas vacinas tem propriedades magnéticas.
          </Text>
        </View>

        <View style={styles.newsItem}>
          <Text style={styles.falseTag}>FALSO</Text>
          <Text style={styles.newsTitle}>O vírus não sobrevive em países quentes, então o Brasil está seguro.</Text>
          <Text style={styles.newsDescription}>
            A COVID-19 se espalhou amplamente em regiões tropicais, incluindo todo o Brasil.
          </Text>
        </View>

        <View style={styles.newsItem}>
          <Text style={styles.falseTag}>FALSO</Text>
          <Text style={styles.newsTitle}>Álcool acima de 70% cura COVID se ingerido</Text>
          <Text style={styles.newsDescription}>
            Ingerir álcool de limpeza pode matar. Ele só é eficaz para higienizar as mãos e superfícies, não para tratar o vírus.
          </Text>
        </View>

        <View style={styles.newsItem}>
          <Text style={styles.falseTag}>FALSO</Text>
          <Text style={styles.newsTitle}>A vacina é uma forma de controle populacional.</Text>
          <Text style={styles.newsDescription}>
            Essa teoria da conspiração é completamente sem fundamento. Vacinas salvam vidas, não manipulam ninguém.
          </Text>
        </View>

        <View style={styles.newsItem}>
          <Text style={styles.falseTag}>FALSO</Text>
          <Text style={styles.newsTitle}>Já acabou a pandemia, não preciso mais me preocupar.</Text>
          <Text style={styles.newsDescription}>
            Apesar de controlada, a COVID-19 ainda circula e pode causar surtos, principalmente em grupos vulneráveis.
          </Text>
        </View>

        <View style={styles.newsItem}>
          <Text style={styles.falseTag}>FALSO</Text>
          <Text style={styles.newsTitle}>Quem tomou vacina vai testar positivo pra COVID pra sempre.</Text>
          <Text style={styles.newsDescription}>
            A vacina não interfere no resultado dos testes. Testar positivo significa que a pessoa está com o vírus ativo, não que tomou vacina.
          </Text>
        </View>

        <View style={styles.newsItem}>
          <Text style={styles.falseTag}>FALSO</Text>
          <Text style={styles.newsTitle}>Se eu já tive COVID, posso me reunir com qualquer um sem risco.</Text>
          <Text style={styles.newsDescription}>
            A reinfecção existe, e a pessoa ainda pode transmitir o vírus. Proteção total só com vacinação e cuidados.
          </Text>
        </View>

        <View style={styles.newsItem}>
          <Text style={styles.falseTag}>FALSO</Text>
          <Text style={styles.newsTitle}>Cloroquina e ivermectina curam COVID.</Text>
          <Text style={styles.newsDescription}>
            Esses medicamentos não têm eficácia comprovada contra o coronavírus e podem causar efeitos colaterais sérios.
          </Text>
        </View>

        <View style={styles.newsItem}>
          <Text style={styles.falseTag}>FALSO</Text>
          <Text style={styles.newsTitle}>A pandemia foi uma invenção para vender vacinas.</Text>
          <Text style={styles.newsDescription}>
            Mais de 7 milhões de mortes no mundo não são invenção. A vacina veio depois para salvar vidas, não para gerar lucro.
          </Text>
        </View>

        <View style={styles.newsItem}>
          <Text style={styles.falseTag}>FALSO</Text>
          <Text style={styles.newsTitle}>Beber água a cada 15 minutos impede a infecção por COVID.</Text>
          <Text style={styles.newsDescription}>
            Manter-se hidratado é importante, mas isso não evita a infecção pelo vírus. A prevenção real é com máscara, vacina e higiene.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#012a78",
    marginBottom: 16,
    textAlign: "center",
  },
  infoBox: {
    flexDirection: "row",
    backgroundColor: "#fff2f2",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
    marginBottom: 20,
  },
  infoImage: {
    width: 60,
    height: 60,
    marginRight: 12,
    resizeMode: "contain",
  },
  infoTextBox: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#d90000",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#222",
  },
  boldText: {
    fontWeight: "bold",
    color: "#000",
  },
  normalText: {
    color: "#000",
  },
  fakeNewsSection: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#012a78",
    marginBottom: 10,
  },
  newsItem: {
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#eee",
  },
  falseTag: {
    color: "#fff",
    backgroundColor: "#d90000",
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    fontWeight: "bold",
    marginBottom: 4,
    fontSize: 12,
  },
  newsTitle: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#012a78",
    marginBottom: 2,
  },
  newsDescription: {
    fontSize: 13,
    color: "#222",
  },
});

export default FakeNews;