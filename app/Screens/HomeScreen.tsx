import * as React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import InputField from "../../components/InputField";
import { useRouter } from "expo-router";
import Button from "@/components/Button";
import DividerWithText from "../../components/DividerWithText";
import GoogleButton from "../../components/GoogleButton";
import AppleButton from "@/components/AppleButton";
import HomeSelect from "@/components/HomeSelect";

const HomeScreen: React.FC = () => {
    const router = useRouter();
	return (
        
        <View style={styles.container}>
            <View style={styles.content}>
                <View>
                    <Text style={styles.titulo}>Efetue seu login</Text>
                </View>
                <View style={styles.inputContainer}>
                    <InputField 
                    label="Email" 
                    inputType="email" 
                    secureTextEntry={false} />

                    <InputField
                    label="Senha"
                    inputType="password"
                    secureTextEntry={true}/>
                </View>
                <Button onPress={() => router.push('/Screens/InfoCovidScreen')} titulo="Acessar" />

                <TouchableOpacity onPress={() => router.push('/Screens/InfoCovidScreen')}>
                    <Text style={styles.esqueciSenhaText}>Esqueci minha senha</Text>
                </TouchableOpacity>    

                <TouchableOpacity onPress={() => router.push('/Screens/InfoCovidScreen')}>
                    <Text style={styles.cadastrarText}>Cadastrar</Text>
                </TouchableOpacity>

                <DividerWithText text="Entrar com" />

                <View style={styles.entrarComContainer}>
                    <GoogleButton />
                    <AppleButton />
                </View>  

                <View style={styles.areaDeSelecao}>
                    <View style={styles.primeiraLinha}>
                        <HomeSelect
                            imageSource={require("../../assets/images/covidIcon.png")}
                            label="COVID-19"
                            label2=" "
                            onPress={() =>
                                router.push("/Screens/InfoCovidScreen")  
                            }
                        />
                        <HomeSelect
                            imageSource={require("../../assets/images/guiaPosCovid.png")}
                            label="GUIA"
                            label2="PÓS-COVID"
                            onPress={() =>
                                router.push("/Screens/InfoCovidScreen")  
                            }
                        />
                        <HomeSelect
                            imageSource={require("../../assets/images/reabilitacaoPosCovid.png")}
                            label="REABILITAÇÃO"
                            label2="PÓS-COVID"
                            onPress={() =>
                                router.push("/Screens/ReabilitacaoScreen")  
                            }
                        />
                        <HomeSelect
                            imageSource={require("../../assets/images/suportePsi.png")}
                            label="SUPORTE"
                            label2="PSICOLÓGICO"
                            onPress={() =>
                                router.push("/Screens/InfoCovidScreen")  
                            }
                        />
                    </View>

                    <View style={styles.segundaLinha}>
                        <HomeSelect
                            imageSource={require("../../assets/images/perguntasFrequentes.png")}
                            label="PERGUNTAS"
                            label2="FREQUENTES"
                            onPress={() =>
                                router.push("/Screens/InfoCovidScreen")  
                            }
                        />
                        <HomeSelect
                            imageSource={require("../../assets/images/depoimentos.png")}
                            label="DEPOIMENTOS"
                            label2=" "
                            onPress={() =>
                                router.push("/Screens/InfoCovidScreen")  
                            }
                        />
                        <HomeSelect
                            imageSource={require("../../assets/images/contato.png")}
                            label="CONTATOS"
                            label2=" "
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
        width: 302,
      },
    titulo: {
        marginBottom: 25,
        color: "#333",
        fontFamily: "Open Sans",
        fontSize: 20,
        textAlign: "center",
        justifyContent: "center",
    },
    inputContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        marginBottom: 25,
        gap: 25,
      },

    esqueciSenhaText: {
        color: "#747373",
        fontFamily: "Alumni Sans SC",
        fontSize: 12,
        textAlign: "center",
        justifyContent: "center",
        marginBottom: 25,
    },
    cadastrarText: {
        color: "#747373",
        fontFamily: "Alumni Sans SC",
        fontSize: 16,
        textAlign: "center",
        justifyContent: "center",
        marginBottom: 25,
    },
    entrarComContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        marginBottom: 15,
    },
    areaDeSelecao: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginBottom: 20,
        width: "140%",
        height: 373,
        flexShrink: 0,
        borderRadius: "12%",
        backgroundColor: "#012B78",
        paddingLeft: 11,
        paddingRight: 3,
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
});
export default HomeScreen;