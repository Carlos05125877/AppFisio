import * as React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const SplashScreen: React.FC = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace('/Screens/HomeScreen'); 
        }, 7000); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
        <Image style={styles.image} source={require('../../assets/images/TelaInicial.png')}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    
});

export default SplashScreen;