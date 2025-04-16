import * as React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView, Animated } from "react-native";
import { GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler";
import InputField from "../../components/InputField";
import { useRouter } from "expo-router";
import Button from "@/components/Button";

const CadastrarScreen: React.FC = () => {
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
                        <View>
                            <Text style={styles.titulo}>Efetue seu cadastro</Text>
                        </View>
                        <View style={styles.inputContainer}>

                            <View style={{marginBottom: 20, width:300}}  >
                            <InputField 
                            label="Nome" 
                            inputType="text" 
                            secureTextEntry={false} />
                            </View>

                            <View style={{marginBottom: 20, width:300}}  >
                            <InputField 
                            label="Email" 
                            inputType="text" 
                            secureTextEntry={false} />
                            </View>

                            <View style={{marginBottom: 20, width:300}}  >
                            <InputField 
                            label="Senha" 
                            inputType="text" 
                            secureTextEntry={true} />
                            </View>
                        </View>
                        <Button onPress={() => router.push('/Screens/HomeScreen')} titulo="Cadastrar" />
                    </View>
                    
                </Animated.View>
            </PanGestureHandler>
        </GestureHandlerRootView>
        
    );
    
   
}

// Estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: {
        flex: 1,
        padding: 20,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
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