import * as React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from "expo-router";

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.areaTitulo}>
            <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            {title && <Text style={styles.title}>{title}</Text>}
            </View>
            <View style={styles.divider} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 10,
        backgroundColor: "#ffffff",
        width: "100%",
        height: "auto",
    },
    areaTitulo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        
    },
    iconButton: {
        padding: 8,
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Alumni Sans SC',
        fontWeight: '700',
        color: '#5b5b5b',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    divider: {
        height: 1,
        backgroundColor: '#E0E0E0',
        width: '100%',
        marginTop: 8,
    },
});

export default Header;