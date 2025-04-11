import * as React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView, Animated } from "react-native";
import { useRouter } from "expo-router";
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import InfoCovidSelect from "@/components/InfoCovidSelect";
import Header from "@/components/Header";

const infoCovidScreen: React.FC = () => {
    const router = useRouter();
    const [activeSection, setActiveSection] = React.useState('INFORMACOES_GERAIS');
    const translateX = new Animated.Value(0);

    const onGestureEvent = Animated.event(
        [{ nativeEvent: { translationX: translateX } }],
        { useNativeDriver: true }
    );

    const onHandlerStateChange = (event: any) => {
        if (event.nativeEvent.oldState === 4) {
            const { translationX } = event.nativeEvent;
            
            if (translationX > 50) {
                router.back();
            } else {
                Animated.spring(translateX, {
                    toValue: 0,
                    useNativeDriver: true,
                }).start();
            }
        }
    };

    
    const renderContent = () => {
        switch (activeSection) {
            case 'INFORMACOES_GERAIS':
                return (
                    <>
                        <Text style={styles.titulo}>Informações Gerais</Text>
                        <Text style={styles.pargrafo}>
                            A COVID-19 é uma doença infecciosa causada pelo coronavírus SARS-CoV-2. Os principais sintomas incluem:
                        </Text>
                        <Text style={styles.bulletPoint}>• Febre</Text>
                        <Text style={styles.bulletPoint}>• Tosse seca</Text>
                        <Text style={styles.bulletPoint}>• Cansaço</Text>
                        <Text style={styles.bulletPoint}>• Dores musculares</Text>
                        <Text style={styles.bulletPoint}>• Perda de olfato ou paladar</Text>
                        
                        <Text style={styles.subtitulo}>Transmissão</Text>
                        <Text style={styles.pargrafo}>
                            O vírus se espalha principalmente através de gotículas respiratórias quando uma pessoa infectada tosse, espirra ou fala.
                        </Text>
                        
                        <Text style={styles.subtitulo}>Período de Incubação</Text>
                        <Text style={styles.pargrafo}>
                            O tempo entre a exposição ao vírus e o início dos sintomas pode variar de 1 a 14 dias, sendo em média 5-6 dias.
                        </Text>
                    </>
                );
            case 'PREVENCAO_CUIDADOS':
                return (
                    <>
                        <Text style={styles.titulo}>Prevenção e Cuidados</Text>
                        <Text style={styles.subtitulo}>Medidas de Proteção</Text>
                        <Text style={styles.bulletPoint}>• Use máscara em locais fechados</Text>
                        <Text style={styles.bulletPoint}>• Lave as mãos frequentemente</Text>
                        <Text style={styles.bulletPoint}>• Mantenha distanciamento social</Text>
                        <Text style={styles.bulletPoint}>• Evite aglomerações</Text>
                        <Text style={styles.bulletPoint}>• Mantenha ambientes ventilados</Text>

                        <Text style={styles.subtitulo}>Higienização</Text>
                        <Text style={styles.pargrafo}>
                            Use álcool 70% para higienizar as mãos quando não puder lavá-las. Limpe superfícies frequentemente tocadas.
                        </Text>

                        <Text style={styles.subtitulo}>Vacinação</Text>
                        <Text style={styles.pargrafo}>
                            Mantenha seu calendário vacinal atualizado. As vacinas são seguras e eficazes na prevenção de casos graves.
                        </Text>
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
            case 'ARTIGOS':
                return (
                    <>
                        <Text style={styles.titulo}>Artigos Científicos</Text>
                        <Text style={styles.subtitulo}>Artigos Recomendados</Text>
                        <Text style={styles.pargrafo}>
                            
                        </Text>

                        <Text style={styles.subtitulo}> </Text>
                        <Text style={styles.bulletPoint}>• Artigo 1</Text>
                        <Text style={styles.bulletPoint}>• Artigo 2</Text>
                        <Text style={styles.bulletPoint}>• Artigo 3</Text>

                        <Text style={styles.subtitulo}></Text>
                        <Text style={styles.pargrafo}>
                            
                        </Text>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <GestureHandlerRootView style={styles.mainContainer}>
            <Header />
            <PanGestureHandler
                onGestureEvent={onGestureEvent}
                onHandlerStateChange={onHandlerStateChange}
            >
                <Animated.View style={[
                    styles.container,
                    {
                        transform: [{ translateX }]
                    }
                ]}>
                    <View style={styles.content}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scroll}>
                            <InfoCovidSelect onSelect={setActiveSection} activeSection={activeSection} />
                        </ScrollView>
                        <View style={styles.areaText}>
                            <ScrollView>
                                {renderContent()}
                            </ScrollView>
                        </View>
                    </View>
                </Animated.View>
            </PanGestureHandler>
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
        paddingHorizontal: 20,
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
    areaText: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginTop: 10,
        width: 368,
        height: 668,
        padding: 20,
        backgroundColor: "#012B78",
        borderRadius: 20,
    },
    titulo: {
        alignItems: "center",
        fontFamily: "Alumni Sans SC",
        textAlign: "center",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 24,
        lineHeight: 33,
        color: "#ffffff",
        marginBottom: 20,
    },
    subtitulo: {
        fontFamily: "Alumni Sans SC",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 28,
        color: "#ffffff",
        marginTop: 20,
        marginBottom: 10,
    },
    pargrafo: {
        fontFamily: "Alumni Sans SC",
        fontSize: 16,
        lineHeight: 22,
        color: "#ffffff",
        marginBottom: 10,
    },
    bulletPoint: {
        fontFamily: "Alumni Sans SC",
        fontSize: 16,
        lineHeight: 22,
        color: "#ffffff",
        marginLeft: 20,
        marginBottom: 5,
    },
});

export default infoCovidScreen;