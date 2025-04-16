import * as React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import InputField from "../../components/InputField";
import { useRouter } from "expo-router";
import Button from "@/components/Button";

const CadastrarScreen: React.FC = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View>
                    <Text style={styles.titulo}>Efetue seu cadastro</Text>
                </View>
                <View style={styles.inputContainer}>

                    <View style={{marginBottom: 20}}  >
                    <InputField 
                    label="Nome" 
                    inputType="text" 
                    secureTextEntry={false} />
                    </View>

                    <View style={{marginBottom: 20}}  >
                    <InputField 
                    label="Email" 
                    inputType="text" 
                    secureTextEntry={false} />
                    </View>

                    <View style={{marginBottom: 20}}  >
                    <InputField 
                    label="Senha" 
                    inputType="text" 
                    secureTextEntry={true} />
                    </View>
                </View>
                <Button onPress={() => router.push('/Screens/HomeScreen')} titulo="Cadastrar" />
            </View>
        </View>

        
    );


    
   
}

// Estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        width: "80%",
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 30,
    },
    inputContainer: {
        marginBottom: 20,
    },
});
export default CadastrarScreen;