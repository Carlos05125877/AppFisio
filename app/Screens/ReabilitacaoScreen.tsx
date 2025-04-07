import * as React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import InputField from "../../components/InputField";
import { useRouter } from "expo-router";
import Button from "@/components/Button";
import DividerWithText from "../../components/DividerWithText";
import GoogleButton from "../../components/GoogleButton";
import AppleButton from "@/components/AppleButton";
import ReabilitacaoSelect from "@/components/ReabilitacaoSelect";

const HomeScreen: React.FC = () => {
    const router = useRouter();
	return (
        
        <View style={styles.container}>
            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>REABILTALÇÃO FISIOTERAPÊUTICA</Text>
                </View>

                <View style={styles.areaDeSelecao}>
                    <View style={styles.primeiraLinha}>
                        <ReabilitacaoSelect
                            imageSource={require("../../assets/images/fisio.png")}
                            label="FISIOTERAPIA"
                            label2=" "
                            onPress={() =>
                                router.push("/Screens/InfoCovidScreen")  
                            }
                        />
                        <ReabilitacaoSelect
                            imageSource={require("../../assets/images/avaliacao.png")}
                            label="AVALIAÇÃO"
                            label2=""
                            onPress={() =>
                                router.push("/Screens/InfoCovidScreen")  
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
                            label2="FADIGA PÓS-C"
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
            </View>
        </View>
        
        
	);

}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 50,
        paddingBottom: 10,
        backgroundColor: "#ffffff",
    },
    content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 356,
      },
    title: {
        marginBottom: 25,
        color: "#333",
        fontFamily: "Open Sans",
        fontSize: 20,
        textAlign: "center",
        justifyContent: "center",
    },
    areaDeSelecao: {
        display: "flex",
        
        flexDirection: "column",
        alignItems: "center",
        width: 356,
        height: 450,
        marginTop: 20,
        backgroundColor: "#060606",
        borderRadius: 10,
        
    },
 
    primeiraLinha: {
        gap:5,
        marginTop: "7%",
        marginBottom: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginLeft: "5%",
        
    },
    segundaLinha: {
        gap:5,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 20,
        marginLeft: "5%",
        
    },
    terceiraLinha: {
        gap:5,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 20,
        marginLeft: "5%",
        
    },
});
export default HomeScreen;