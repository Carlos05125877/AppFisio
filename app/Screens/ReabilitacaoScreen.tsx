import * as React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView, Animated } from "react-native";
import { useRouter } from "expo-router";
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import ReabilitacaoSelect from "@/components/ReabilitacaoSelect";
import Header from "@/components/Header";
import BtPerguntasFrequentes from "@/components/btPerguntasFrequentes"; 

const HomeScreen: React.FC = () => {
    const router = useRouter();
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

	return (
        <GestureHandlerRootView style={styles.container}>
            <Header/>
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
                        <View style={{ width: 500 }}>
                            <Text style={styles.titulo}>REABILITAÇÃO FISIOTERAPÊUTICA</Text>
                            <View style={styles.line}></View>
                        </View>

                        <View style={styles.areaDeSelecao}>
                            <View style={styles.primeiraLinha}>
                                <ReabilitacaoSelect
                                    imageSource={require("../../assets/images/fisio.png")}
                                    label="FISIOTERAPIA"
                                    label2=" "
                                    onPress={() =>
                                        router.push("../Screens/FisioScreen")  
                                    }
                                />
                                <ReabilitacaoSelect
                                    imageSource={require("../../assets/images/avaliacao.png")}
                                    label="AVALIAÇÃO"
                                    label2=""
                                    onPress={() =>
                                        router.push("../Screens/AvaliacaoScreen")  
                                    }
                                />
                                <ReabilitacaoSelect
                                    imageSource={require("../../assets/images/reabilitacaoCardio.png")}
                                    label="REABILITAÇÃO"
                                    label2="CARDIORESPIRATÓRIA"
                                    onPress={() =>
                                        router.push("/Screens/InfoCovidScreen")  
                                    }
                                />
                                
                            </View>

                            <View style={styles.segundaLinha}>
                            <ReabilitacaoSelect
                                    imageSource={require("../../assets/images/reabilitacaoMusculo.png")}
                                    label="REABILITAÇÃO"
                                    label2="MUSCULOESQUELÉTICA"
                                    onPress={() =>
                                        router.push("/Screens/InfoCovidScreen")  
                                    }
                                />
                                <ReabilitacaoSelect
                                    imageSource={require("../../assets/images/reabilitacaoNeuro.png")}
                                    label="REABILITAÇÃO"
                                    label2="NEUROLÓGICA"
                                    onPress={() =>
                                        router.push("/Screens/InfoCovidScreen")  
                                    }
                                />
                                <ReabilitacaoSelect
                                    imageSource={require("../../assets/images/fadigaPos.png")}
                                    label="MANEJO DA"
                                    label2="FADIGA PÓS-COVID"
                                    onPress={() =>
                                        router.push("/Screens/InfoCovidScreen")  
                                    }
                                />
                            </View>
                            <View style={styles.terceiraLinha}>
                            <ReabilitacaoSelect
                                    imageSource={require("../../assets/images/educacaoAutocuidado.png")}
                                    label="EDUCAÇÃO E"
                                    label2="AUTOCUIDADO"
                                    onPress={() =>
                                        router.push("/Screens/InfoCovidScreen")  
                                    }
                                />
                                <ReabilitacaoSelect
                                    imageSource={require("../../assets/images/telereabilitacao.png")}
                                    label="TELEREABILITAÇÃO"
                                    label2=" "
                                    onPress={() =>
                                        router.push("/Screens/InfoCovidScreen")  
                                    }
                                />
                                <ReabilitacaoSelect
                                    imageSource={require("../../assets/images/monitoramento.png")}
                                    label="MONITORAMENTO E"
                                    label2="PROGRESSÃO"
                                    onPress={() =>
                                        router.push("/Screens/InfoCovidScreen")  
                                    }
                                />
                            </View>
                        </View> 
                            <View style={styles.btStyle}>
                                <BtPerguntasFrequentes onPress={() =>
                                        router.push("/Screens/InfoCovidScreen")  
                                    }
                                />
                            </View>
                    </View>
                </Animated.View>
            </PanGestureHandler>
        </GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#ffffff",
        height: "100%",
        width: "100%",
    },
    content: {
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },

    titulo: {
        marginBottom: 25,
        color: "#5B5B5B",
        fontFamily: "Alumni Sans SC",
        fontSize: 20,
        textAlign: "center",
        justifyContent: "center",
        fontWeight: 600,
        lineHeight: 20,
    },
    line:{
        height: 1,
        backgroundColor: "#5B5B5B80",
    },
    areaDeSelecao: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 390,
        height: 450,
        marginTop: 40,
        backgroundColor: "#F8F8F8",
        borderRadius: 10,
        
    },
 
    primeiraLinha: {
        
        marginTop: "7%",
        marginBottom: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        
        
    },
    segundaLinha: {
        marginTop: "7%",
        marginBottom: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        
        
    },
    terceiraLinha: {
        marginTop: "7%",
        marginBottom: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        
        
    },
    btStyle: {
        marginTop: 20,
        width: "100%",
    }

});
export default HomeScreen;