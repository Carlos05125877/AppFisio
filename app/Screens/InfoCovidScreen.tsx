import * as React from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import InfoCovidSelect from "@/components/InfoCovidSelect";
import TituloCovid from "@/components/TituloCovid";
import Header from "@/components/Header";
import DividerWithText from "@/components/DividerWithText";

const infoCovidScreen: React.FC = () => {
    const router = useRouter();
    const [activeSection, setActiveSection] = React.useState('INFORMACOES_GERAIS');

    const renderContent = () => {
        switch (activeSection) {
            case 'INFORMACOES_GERAIS':
                return (
                    <>
                        <View style={styles.container}>
                            <TituloCovid />
                            <View style={styles.areaText}>
                                <Text style={styles.pargrafo}>A COVID-19 é uma doença infecciosa causada pelo coronavírus SARS-CoV-2. Identificado pela primeira vez em dezembro de 2019, na China, o vírus rapidamente se espalhou pelo mundo, levando a Organização Mundial da Saúde (OMS) a declarar estado de pandemia em março de 2020​.</Text>
                                <Text style={styles.pargrafo}>A transmissão acontece principalmente por meio de gotículas respiratórias expelidas ao falar, tossir ou espirrar, além do contato com superfícies contaminadas​.</Text>
                            
                            
                                <View style={styles.areaText2}>
                                    <Text style={styles.textArea2}>O SARS-CoV-2, integrante do subgênero Sarbecovírus, pertence à família Coronaviridae e é o sétimo coronavírus identificado capaz de infectar seres humanos.</Text>
                                </View>
                            
                                <Image
                                    source={require('../../assets/images/covidImage.jpg')}
                                    style={styles.image}
                                />
                            
                                <DividerWithText text="Sinais e Sintomas" />
                                <Text style={styles.pargrafo}>
                                    A COVID-19 pode se manifestar de diferentes formas, desde pessoas sem sintomas até quadros graves que exigem cuidados intensivos. A classificação dos casos se dá conforme a gravidade:
                                </Text>
                                <Text style={styles.subtitulo}>
                                    Casos Assintomáticos
                                </Text>
                                <Text style={styles.pargrafo}>
                                    A pessoa testa positivo para o vírus, mas não apresenta nenhum sintoma.
                                </Text>
                                <Text style={styles.subtitulo}>
                                    Casos Leves
                                </Text>
                                <Text style={styles.pargrafo}>
                                    Presença de um ou mais sintomas como: Tosse; Dor de garganta; Coriza (nariz escorrendo); Febre; Mal-estar; Dor de cabeça; Dores musculares (mialgia); Náuseas, vômitos ou diarreia; Perda do olfato (anosmia) e/ou paladar (ageusia). Não há falta de ar nem alterações nas imagens do tórax.
                                </Text>
                                <Text style={styles.subtitulo}>
                                    Casos Moderados
                                </Text>
                                <Text style={styles.pargrafo}>
                                    Apresentam os sintomas descritos nos casos leves. A saturação de oxigênio no sangue (SpO₂) é igual ou maior que 94% em ar ambiente. A avaliação precisa ser confirmada em unidade de saúde.
                                </Text>
                                <Text style={styles.subtitulo}>
                                    Casos Graves
                                </Text>
                                <Text style={styles.pargrafo}>
                                    O paciente apresenta um ou mais sinais de alerta: Falta de ar ou dificuldade para respirar (dispneia); Pressão persistente no peito; Saturação de oxigênio igual ou inferior a 94%; Coloração azulada nos lábios ou no rosto.
                                </Text>
                                <Text style={styles.subtitulo}>                                
                                Casos Críticos
                                </Text>
                                <Text style={styles.pargrafo}>
                                    O paciente pode desenvolver condições muito graves, como: Síndrome do Desconforto Respiratório Agudo (SDRA); Sepse e choque séptico; Trombose aguda; Falência de múltiplos órgãos.
                                </Text>

                                <DividerWithText text="Transmissão" />
                                <Text style={styles.pargrafo}>
                                    A COVID-19 é uma doença altamente transmissível e qualquer pessoa pode ser infectada. Mesmo aqueles que não apresentam sintomas podem transmitir o vírus para outras pessoas. Por isso, as medidas de prevenção são essenciais para todos​.
                                </Text>
                                <Text style={styles.subtitulo}>
                                    O vírus SARS-CoV-2 é transmitido de três principais maneiras:
                                </Text>
                                <View style={styles.tranBallon}>
                                    <Image style={{ marginTop: 8, marginRight: 5 }}
                                        source={require('../../assets/images/Polygon.png')}
                                        />
                                    <Text style={styles.pargrafo2}>Contato Direto: Acontece quando uma pessoa toca diretamente uma pessoa infectada ou superfícies contaminadas e, em seguida, leva as mãos ao rosto (boca, nariz ou olhos), facilitando a entrada do vírus no organismo.
                                        
                                    </Text>
                                </View>

                                <View style={styles.tranBallon}>
                                    <Image style={{ marginTop: 8, marginRight: 5 }}
                                        source={require('../../assets/images/Polygon.png')}
                                        />
                                    <Text style={styles.pargrafo2}>Gotículas Respiratórias: Gotículas maiores são liberadas quando uma pessoa infectada tosse, espirra ou fala. Essas gotículas podem atingir outra pessoa que esteja a menos de 1 metro de distância.
                                        
                                    </Text>
                                </View>

                                <View style={styles.tranBallon}>
                                    <Image style={{ marginTop: 8, marginRight: 5 }}
                                        source={require('../../assets/images/Polygon.png')}
                                        />
                                    <Text style={styles.pargrafo2}>Aerossóis: São partículas ainda menores e mais leves que gotículas, capazes de permanecer no ar por várias horas. Podem se espalhar em distâncias superiores a 1 metro, especialmente: Em locais fechados e mal ventilados; Durante atividades que aumentam o esforço respiratório, como gritar, cantar ou praticar exercícios físicos em grupo.
                                        
                                    </Text>
                                </View>

                                <Image
                                    source={require('../../assets/images/covidImage2.png')}
                                    style={styles.image}
                                />

                                
                            </View>
                            <View style={styles.incucacaoArea}>
                                <View style={styles.tranBallon2}>
                                    <Text style={styles.titulo}>Incubação:
                                    </Text>
                                
                                    <Text style={styles.pargrafo2}>Com a circulação da variante Ômicron, o tempo médio entre o contato com o vírus e o surgimento dos primeiros sintomas passou a ser de 3 a 4 dias, podendo variar de 1 a 10 dias​.
                                    </Text>
                                </View>
                                <View style={styles.tranBallon2}>
                                    <Text style={styles.titulo}>Transmissão:
                                    </Text>                                  
                                    <Text style={styles.pargrafo2}>Diretamente, pelo contato próximo com uma pessoa infectada;Indiretamente, por meio do contato com superfícies ou objetos contaminados.
                                    </Text>
                                </View>
                            </View>
                            <Image
                                source={require('../../assets/images/Ouvidoria.png')}
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
        color: "#012B78",
        marginTop: 20,
        marginBottom: 10,
    },
    pargrafo: {
        fontFamily: "Alumni Sans SC",
        fontSize: 13,
        lineHeight: 22,
        color: "#000000",
        marginBottom: 10,
    },
    pargrafo2: {
        fontFamily: "Alumni Sans SC",
        fontSize: 13,
        lineHeight: 22,
        color: "#000000",
        marginBottom: 10,
        width: "99%",
    },
    tranBallon: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        width: "100%",
        borderRadius: 10,
        height: "auto",
        marginLeft: "auto",
        marginRight: "auto",
        borderWidth: 1,
        borderColor: "#4CAF50",
        paddingLeft: 10,
        marginBottom: 10,
        
    },
    incucacaoArea: {
        marginTop: 10,
        width: "100%",
        padding: 20,
        backgroundColor: "#4CAF5033",
        marginLeft: "auto",
        marginRight: "auto",
    },
    tranBallon2: {
        alignItems: "flex-start",
        justifyContent: "center",
        width: "90%",
        borderRadius: 10,
        height: "auto",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#ffffff",
        paddingLeft: 10,
        marginBottom: 10,
    },
    RiscosArea: {
        marginTop: 10,
        width: "100%",
        padding: 20,
        backgroundColor: "#E5E5E580",
        marginLeft: "auto",
        marginRight: "auto",
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