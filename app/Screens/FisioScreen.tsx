import * as React from "react";
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, ScrollView } from "react-native";
import Header from "@/components/Header";
import { useRouter } from "expo-router";

const FisioScreen: React.FC = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.containerPrincipal}>
          <Text style={styles.titulo}>FISIOTERAPIA</Text>
          <ImageBackground
            style={styles.divisor}
            source={{ uri: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-23/7ShVUpqSiJ.png" }}
            resizeMode="cover"
          />
          <Text style={styles.citacao}>“Seu corpo sente. A fisioterapia entende.”</Text>
          <Text style={styles.subtitulo}>O que é fisioterapia?</Text>
          <Text style={styles.paragrafo}>
            Fisioterapia é uma profissão da saúde regulamentada pela Lei nº 6.316/1975 e orientada por diretrizes do Conselho Federal de Fisioterapia e Terapia Ocupacional (COFFITO). Mas além da definição formal, ela é sobre cuidar do movimento, da função e da qualidade de vida.
          </Text>
          <Text style={styles.subtitulo}>E na prática?</Text>
          <Text style={styles.paragrafo}>
            É o fisioterapeuta que vai te ajudar a: Respirar melhor, recuperar sua força muscular, controlar a fadiga e as dores, voltar a fazer suas atividades com autonomia. E o mais importante: se reconectar com o seu corpo.
          </Text>
          <Text style={styles.paragrafo}>
            Pós-COVID, isso é essencial. Muitos sintomas persistem mesmo depois do vírus ir embora. A fisioterapia atua exatamente nesses desafios, de forma personalizada, respeitando o seu tempo e a sua história.
          </Text>
          <Text style={styles.subtitulo}>POR QUE A FISIOTERAPIA É ESSENCIAL NA RECUPERAÇÃO PÓS-COVID?</Text>
          <ImageBackground
            style={styles.imagem}
            source={{ uri: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-23/vmY6brN1bc.png" }}
            resizeMode="cover"
          />
          <Text style={styles.citacaoSecundaria}>“A recuperação vai além do teste negativo.”</Text>
          <Text style={styles.paragrafo}>
            A COVID-19 afetou milhões de pessoas no mundo, mas o que muitos não sabem é que, para muita gente, os sintomas não terminam quando o vírus vai embora. É o que chamamos de síndrome pós-COVID ou COVID longa.
          </Text>
          <Text style={styles.paragrafo}>
            E é aqui que a fisioterapia entra com força total. Ela não trata só o “depois” da doença — ela transforma a forma como seu corpo reage à nova rotina, aos novos limites e aos novos desafios.
          </Text>
          <Text style={styles.subtitulo}>Como a COVID impacta o corpo?</Text>
          <Text style={styles.paragrafo}>
            Muitos pacientes, mesmo com quadros leves, podem apresentar: Cansaço extremo e persistente (fadiga crônica), falta de ar mesmo em atividades simples, dores articulares e musculares, tonturas, desequilíbrios e fraqueza, redução da capacidade funcional e respiratória, dificuldade para caminhar, subir escadas, trabalhar ou estudar.
          </Text>
          <Text style={styles.subtitulo}>O que a fisioterapia faz?</Text>
          <Text style={styles.paragrafo}>
            Com uma abordagem baseada em evidências e personalizada, a fisioterapia atua em várias frentes:
            {"\n"}• Reabilitação cardiorrespiratória: melhora da oxigenação e da capacidade pulmonar
            {"\n"}• Fortalecimento muscular e neuromotor: para devolver autonomia e resistência
            {"\n"}• Treinamento das Atividades da Vida Diária (AVD): como vestir-se, cozinhar, andar
            {"\n"}• Manejo da fadiga e da dor: com técnicas que respeitam o ritmo de recuperação
            {"\n"}• Reeducação postural e equilíbrio: principalmente em casos de tontura e instabilidade
            {"\n"}• Acolhimento emocional: promovendo confiança e segurança no próprio corpo
          </Text>
          <ImageBackground
            style={styles.imagem}
            source={{ uri: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-23/xxPwYU7UfY.png" }}
            resizeMode="cover"
          />
          <Text style={styles.subtitulo}>A importância da continuidade</Text>
          <Text style={styles.paragrafo}>
            Ignorar os sintomas persistentes ou postergar a reabilitação pode levar à cronificação dos problemas, interferindo na qualidade de vida, no sono, no trabalho e nas relações pessoais.
          </Text>
          <Text style={styles.paragrafo}>
            A fisioterapia não promete “cura mágica” — mas oferece um caminho seguro, com base na ciência e no cuidado integral.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerPrincipal: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
  },
  titulo: {
    fontFamily: "Alumni Sans SC",
    fontSize: 24,
    fontWeight: "600",
    color: "#5b5b5b",
    marginBottom: 16,
    textAlign: "center",
  },
  divisor: {
    width: 393,
    height: 1,
    marginBottom: 16,
    alignSelf: "center",
  },
  citacao: {
    fontFamily: "Quicksand",
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
    marginBottom: 12,
    textAlign: "center",
    width: 338,
  },
  citacaoSecundaria: {
    fontFamily: "Quicksand",
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 8,
    textAlign: "left",
    alignSelf: "flex-start",
  },
  subtitulo: {
    fontFamily: "Quicksand",
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginTop: 16,
    marginBottom: 8,
    textAlign: "left",
    alignSelf: "flex-start",
  },
  paragrafo: {
    fontFamily: "Quicksand",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 20,
    color: "#000",
    marginBottom: 10,
    textAlign: "left",
    width: 358,
    alignSelf: "flex-start",
  },
  imagem: {
    width: 268,
    height: 179,
    borderRadius: 10,
    marginVertical: 16,
    alignSelf: "center",
    overflow: "hidden",
  },
});

export default FisioScreen;