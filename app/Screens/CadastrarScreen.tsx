import * as React from "react";
import { View, Text, StyleSheet, Alert, Animated } from "react-native";
import InputField from "../../components/InputField";
import { useRouter } from "expo-router";
import Button from "@/components/Button";
import { auth, db } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState, useRef } from "react";
import { GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler";
import Header from "@/components/Header";

const CadastroScreen: React.FC = () => {
    const router = useRouter();
    const [nome, setNome] = useState<string>(""); // Novo campo nome
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    // Para animação do gesto
    const translateX = useRef(new Animated.Value(0)).current;

    const onGestureEvent = Animated.event(
        [{ nativeEvent: { translationX: translateX } }],
        { useNativeDriver: true }
    );

    const onHandlerStateChange = (event: any) => {
        if (event.nativeEvent.oldState === 4) {
            const { translationX } = event.nativeEvent;
            if (translationX > 80) {
                router.push('/Screens/HomeScreen');
            } else {
                Animated.spring(translateX, {
                    toValue: 0,
                    useNativeDriver: true,
                }).start();
            }
        }
    };

    // Função para registro com email/senha e salvamento no Firestore
    const handleRegister = async (): Promise<void> => {
        if (!nome || !email || !password || !confirmPassword) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Erro', 'As senhas não coincidem');
            return;
        }

        setLoading(true);
        try {
            // Criar o usuário no Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            
            // Salvar dados do usuário no Firestore
            await setDoc(doc(db, "users", user.uid), {
                nome: nome,
                email: user.email,
                uid: user.uid,
                createdAt: new Date().toISOString(),
            });
            
            Alert.alert('Sucesso', 'Conta criada com sucesso!');
            router.push('/Screens/HomeScreen');
        } catch (error: any) {
            console.error(error);
            let errorMessage = 'Não foi possível criar a conta';
            if (error.code === 'auth/email-already-in-use') {
                errorMessage = 'Este email já está em uso';
            } else if (error.code === 'auth/weak-password') {
                errorMessage = 'A senha deve ter pelo menos 6 caracteres';
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = 'Email inválido';
            }
            Alert.alert('Erro de cadastro', errorMessage);
        } finally {
            setLoading(false);
        }
    };

    // Função para voltar à tela de login
    const handleBackToLogin = (): void => {
        router.push('/'); // Ajuste conforme a rota da tela de login
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Header title="REALIZAR CADASTRO"/>
            <PanGestureHandler
                onGestureEvent={onGestureEvent}
                onHandlerStateChange={onHandlerStateChange}
            >
                <Animated.View style={[styles.container, { transform: [{ translateX }] }]}>
                    <View style={styles.content}>
                        <View>
                            <Text style={styles.title}>Crie sua conta</Text>
                        </View>
                        <View style={styles.inputContainer}>

                            <InputField
                                label=" Nome"
                                inputType="nome"
                                secureTextEntry={false}
                                value={nome}
                                onChangeText={setNome}
                            />


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
                                value={password}
                                onChangeText={setPassword}
                            />
                            <InputField
                                label="Confirmar Senha"
                                inputType="password"
                                secureTextEntry={true}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                            />
                        </View>
                        <Button onPress={handleRegister} titulo={loading ? "Carregando..." : "Cadastrar"} />
                    </View>
                </Animated.View>
            </PanGestureHandler>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 50,
        paddingBottom: 10,
        backgroundColor: "#ffffff",
        flex: 1,
    },
    content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 302,
    },
    title: {
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
    voltarLoginText: {
        color: "#747373",
        fontFamily: "Alumni Sans SC",
        fontSize: 16,
        textAlign: "center",
        justifyContent: "center",
        marginTop: 15,
    },
});

export default CadastroScreen;