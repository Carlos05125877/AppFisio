import * as React from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import InfoCovidSelect from "@/components/InfoCovidSelect";
import TituloCovid from "@/components/TituloCovid";
import Header from "@/components/Header";

const infoCovidScreen: React.FC = () => {
    const router = useRouter();
    const [activeSection, setActiveSection] = React.useState('INFORMACOES_GERAIS');

    const renderContent = () => {
        switch (activeSection) {
            case 'INFORMACOES_GERAIS':
                return (
                    <>
                        <View style={styles.container}>
                            <View style={styles.fullWidth}>
                            </View>
                            <TituloCovid />
                            <View style={styles.areaText}>
                                <Text style={styles.pargrafo}>A COVID-19 é uma doença infecciosa causada pelo coronavírus SARS-CoV-2. Identificado pela primeira vez em dezembro de 2019, na China, o vírus rapidamente se espalhou pelo mundo, levando a Organização Mundial da Saúde (OMS) a declarar estado de pandemia em março de 2020​.</Text>
                                <Text style={styles.pargrafo}>A transmissão acontece principalmente por meio de gotículas respiratórias expelidas ao falar, tossir ou espirrar, além do contato com superfícies contaminadas​.</Text>
                            </View>
                            
                            <View style={styles.areaText2}>
                                <Text style={styles.textArea2}>O SARS-CoV-2, integrante do subgênero Sarbecovírus, pertence à família Coronaviridae e é o sétimo coronavírus identificado capaz de infectar seres humanos.</Text>
                            </View>
                            <Image
                                source={require('../../assets/images/covidImage.jpg')}
                                style={styles.image}
                            />

                         </View>

                    </>
                );
           
            case 'EFEITOS_COVID':
                return (
                    <>
                        <Text style={styles.titulo}>Efeitos da COVID no Corpo</Text>
                        <Text style={styles.subtitulo}>Sistema Respiratório</Text>
                        <Text style={styles.pargrafo}>
                            O vírus afeta principalmente os pulmões, causando inflamação e dificuldade respiratória.
                        </Text>

                        <Text style={styles.subtitulo}>Sistema Cardiovascular</Text>
                        <Text style={styles.pargrafo}>
                            Pode causar problemas cardíacos e formação de coágulos sanguíneos.
                        </Text>

                        <Text style={styles.subtitulo}>Sistema Nervoso</Text>
                        <Text style={styles.pargrafo}>
                            Alguns pacientes relatam perda de olfato e paladar, além de outros sintomas neurológicos.
                        </Text>

                        <Text style={styles.subtitulo}>COVID Longa</Text>
                        <Text style={styles.pargrafo}>
                            Alguns sintomas podem persistir por meses após a infecção inicial.
                        </Text>
                    </>
                );
            case 'ATUALIZACOES':
                return (
                    <>
                        <Text style={styles.titulo}>Atualizações e Novidades</Text>
                        <Text style={styles.subtitulo}>Variantes</Text>
                        <Text style={styles.pargrafo}>
                            Novas variantes do vírus continuam surgindo e sendo monitoradas pela OMS.
                        </Text>

                        <Text style={styles.subtitulo}>Tratamentos</Text>
                        <Text style={styles.pargrafo}>
                            Pesquisas continuam avançando no desenvolvimento de tratamentos mais eficazes.
                        </Text>

                        <Text style={styles.subtitulo}>Recomendações</Text>
                        <Text style={styles.pargrafo}>
                            As diretrizes de saúde são atualizadas conforme novas evidências científicas surgem.
                        </Text>
                    </>
                );
            case 'FAKE_NEWS':
                return (
                    <>
                        <Text style={styles.titulo}>Fake News e Desinformação</Text>
                        <Text style={styles.subtitulo}>Mitos Comuns</Text>
                        <Text style={styles.pargrafo}>
                            É importante verificar informações em fontes confiáveis e não compartilhar conteúdo sem verificação.
                        </Text>

                        <Text style={styles.subtitulo}>Fontes Confiáveis</Text>
                        <Text style={styles.bulletPoint}>• Organização Mundial da Saúde (OMS)</Text>
                        <Text style={styles.bulletPoint}>• Ministério da Saúde</Text>
                        <Text style={styles.bulletPoint}>• Instituições de pesquisa reconhecidas</Text>

                        <Text style={styles.subtitulo}>Como Identificar Fake News</Text>
                        <Text style={styles.bulletPoint}>• Verifique a fonte da informação</Text>
                        <Text style={styles.bulletPoint}>• Procure por data de publicação</Text>
                        <Text style={styles.bulletPoint}>• Desconfie de conteúdo alarmista</Text>
                    </>
                );
           
            default:
                return null;
        }
    };

    return (
        <GestureHandlerRootView style={styles.mainContainer}>
            <Header />
            <View style={styles.container}>
                <View style={styles.content}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scroll}>
                        <InfoCovidSelect onSelect={setActiveSection} activeSection={activeSection} />
                    </ScrollView>
                    <View style={styles.Container}>
                        <ScrollView>
                            {renderContent()}
                        </ScrollView>
                    </View>
                </View>
            </View>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    container: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: "#ffffff",
    },
    content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    scroll: {
        display: "flex",
    },
    Container: {
        display: "flex",
        marginTop: 10,
        height: 700,

    
    },
    areaText: {
        marginTop: 10,
        width: 400,
        padding: 20,
        backgroundColor: "#ffffff",
        marginLeft: "auto",
        marginRight: "auto",
    },

    areaText2: {
        alignItems: "flex-start",
        justifyContent: "center",
        width: 300,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        marginLeft: "auto",
        marginRight: "auto",
        borderWidth: 1,
        borderColor: "#000000",
    },
    textArea2: {
        fontFamily: "Alumni Sans SC",
        fontSize: 13,
        lineHeight: 20,
        fontStyle: "normal",
        fontWeight: 500,
        color: "#000000A8",
        marginBottom: 10,
        textAlign: "center",
    },
    image: {
        width: 229,
        height: 229,
        aspectRatio: 1/1,
        borderRadius: 40,
        marginTop: 20,
        marginLeft: "auto",
        marginRight: "auto",
    },
    fullWidth: {
        width: '100%',
        alignSelf: 'stretch',
    },
    titulo: {
        alignItems: "center",
        fontFamily: "Alumni Sans SC",
        textAlign: "center",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 24,
        lineHeight: 33,
        color: "#000000",
        marginBottom: 20,
    },
    subtitulo: {
        fontFamily: "Alumni Sans SC",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 28,
        color: "#000000",
        marginTop: 20,
        marginBottom: 10,
    },
    pargrafo: {
        fontFamily: "Alumni Sans SC",
        fontSize: 16,
        lineHeight: 22,
        color: "#000000",
        marginBottom: 10,
    },
    bulletPoint: {
        fontFamily: "Alumni Sans SC",
        fontSize: 16,
        lineHeight: 22,
        color: "#000000",
        marginLeft: 20,
        marginBottom: 5,
    },
});

export default infoCovidScreen;