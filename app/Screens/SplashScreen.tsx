import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
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
        <LinearGradient
            colors={['#012B78', '#013AA3', '#024FDE']}
            style={styles.container}
        >
            {/* Ícones de vírus */}
            <Image
                source={require('../../assets/images/Frame79.png')}
                style={[styles.virusIcon, styles.virusTopLeft]}
            />
           {/* <Image
                source={require('../../assets/images/virus-icon.png')}
                style={[styles.virusIcon, styles.virusTopRight]}
            />
            <Image
                source={require('../../assets/images/virus-icon.png')}
                style={[styles.virusIcon, styles.virusMiddleLeft]}
            />
            <Image
                source={require('../../assets/images/virus-icon.png')}
                style={[styles.virusIcon, styles.virusMiddleRight]}
            />
            <Image
                source={require('../../assets/images/virus-icon.png')}
                style={[styles.virusIcon, styles.virusBottomLeft]}
            />
            <Image
                source={require('../../assets/images/virus-icon.png')}
                style={[styles.virusIcon, styles.virusBottomRight]}
            />
            <Image
                source={require('../../assets/images/virus-icon.png')}
                style={[styles.virusIcon, styles.virusCenter]}
            />
            <Image
                source={require('../../assets/images/virus-icon.png')}
                style={[styles.virusIcon, styles.virusSmallTopLeft]}
            />
            <Image
                source={require('../../assets/images/virus-icon.png')}
                style={[styles.virusIcon, styles.virusSmallTopRight]}
            />

            <Text style={styles.titulo}>CORONA{'\n'}             FATOS</Text>
           */}
        </LinearGradient>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        color: '#FFFFFF',
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'justify',
        letterSpacing: 2,
        zIndex: 2,
    },
    virusIcon: {
        //position: 'absolute',
        //width: 60,
        //height: 60,
       // opacity: 0.2,
       // tintColor: '#FFFFFF',
       
    },
    virusTopLeft: {
       // top: '10%',
       // left: '10%',
       // width: 174,
        //height: 190,
    },
    virusTopRight: {
        top: '5%',
        right: '15%',
        width: 50,
        height: 50,
    },
    virusMiddleLeft: {
        top: '40%',
        left: '5%',
        width: 70,
        height: 70,
    },
    virusMiddleRight: {
        top: '35%',
        right: '10%',
        width: 65,
        height: 65,
    },
    virusBottomLeft: {
        bottom: '15%',
        left: '15%',
        width: 55,
        height: 55,
    },
    virusBottomRight: {
        bottom: '10%',
        right: '20%',
        width: 75,
        height: 75,
    },
    virusCenter: {
        top: '60%',
        left: '45%',
        width: 45,
        height: 45,
    },
    virusSmallTopLeft: {
        top: '25%',
        left: '25%',
        width: 30,
        height: 30,
    },
    virusSmallTopRight: {
        top: '20%',
        right: '30%',
        width: 35,
        height: 35,
    }
});

export default SplashScreen;