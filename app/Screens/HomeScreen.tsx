import * as React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, Alert, SafeAreaView } from "react-native";
import InputField from "../../components/InputField";
import { useRouter } from "expo-router";
import Button from "@/components/Button";
import DividerWithText from "../../components/DividerWithText";
import GoogleButton from "../../components/GoogleButton";
import HomeSelect from "@/components/HomeSelect";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const HomeScreen: React.FC = () => {
    const router = useRouter();
    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoggedIn(!!user);
        });

        return () => unsubscribe();
    }, []);

    const handleLogin = async () => {
        if (!email || !senha) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos');
            return;
        }

        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, senha);
            setIsLoggedIn(true);
        } catch (error: any) {
            console.error(error);
            let errorMessage = 'Erro ao fazer login';
            if (error.code === 'auth/invalid-email') {
                errorMessage = 'Email inválido';
            } else if (error.code === 'auth/user-not-found') {
                errorMessage = 'Usuário não encontrado';
            } else if (error.code === 'auth/wrong-password') {
                errorMessage = 'Senha incorreta';
            }
            Alert.alert('Erro de login', errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const renderLoginContent = () => {
        if (isLoggedIn) {
            return (
                <View style={styles.loggedInContainer}>
                    <Text style={styles.loggedInText}>Você já está logado no sistema</Text>
                    <Button 
                        onPress={() => auth.signOut()} 
                        titulo="Sair" 
                    />
                </View>
            );
        }

        return (
            <>
                <View>
                    <Text style={styles.titulo}>Efetue seu login</Text>
                </View>
                <View style={styles.inputContainer}>
                    <InputField 
                        label="Email" 
                        inputType="email" 
                        secureTextEntry={false}
                        value={email}
                        onChangeText={setEmail}
                    />

                    <InputField
                        label="Senha"
                        inputType="password"
                        secureTextEntry={true}
                        value={senha}
                        onChangeText={setSenha}
                    />
                </View>
                <Button onPress={handleLogin} titulo={loading ? "Carregando..." : "Acessar"} />

                {/*<TouchableOpacity onPress={() => router.push('/Screens/InfoCovidScreen')}>
                    <Text style={styles.esqueciSenhaText}>Esqueci minha senha</Text>
                </TouchableOpacity>*/}
                <Text style={styles.esqueciSenhaText}>Esqueci minha senha</Text>

                <TouchableOpacity onPress={() => router.push('/Screens/CadastrarScreen')}>
                    <Text style={styles.cadastrarText}>Cadastrar</Text>
                </TouchableOpacity>


            </>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#012B78" }}>
            <View style={styles.container}>
                <View style={styles.content}>
                    {renderLoginContent()}

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
                                    router.push("/Screens/GuiaScreen")  
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
                                    router.push("/Screens/SuportePsiScreen")
                                }
                            />
                        </View>

                        <View style={styles.segundaLinha}>
                            <HomeSelect
                                imageSource={require("../../assets/images/perguntasFrequentes.png")}
                                label="PERGUNTAS"
                                label2="FREQUENTES"
                                onPress={() =>
                                    router.push("/Screens/Perguntas")  
                                }
                            />
                            <HomeSelect
                                imageSource={require("../../assets/images/depoimentos.png")}
                                label="DEPOIMENTOS"
                                label2=" "
                                onPress={() =>
                                    router.push("/Screens/Depoimentos")  
                                }
                            />
                            <HomeSelect
                                imageSource={require("../../assets/images/fisioIA.png")}
                                label="FISIO IA"
                                label2=" "
                                onPress={() =>
                                    router.push("/Screens/FisioIa")  
                                }
                            />
                            <HomeSelect
                                imageSource={require("../../assets/images/artigos.png")}
                                label="ARTIGOS"
                                label2=" "
                                onPress={() =>
                                    router.push("/Screens/ArtigosScreen")  
                                }
                            />
                        </View>
                    </View> 
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingTop: 150,
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
        marginBottom: '8%',
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
        width: "140%",
        height: 300,
        flexShrink: 0,
        borderTopLeftRadius:"12%",
        borderTopRightRadius:"12%",
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
    loggedInContainer: {
        alignItems: 'center',
        marginBottom: 25,
        width: 300,
        height: 400,
    },
    loggedInText: {
        color: "#333",
        fontFamily: "Open Sans",
        fontSize: 18,
        textAlign: "center",
        marginBottom: 15,
    },
});

export default HomeScreen;