import * as React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from "expo-router";

const Header: React.FC = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>  
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "flex-start",
        paddingTop: 10,
        backgroundColor: "#ffffff",
        width: "100%",
    },
    iconButton: {
        padding: 8,
    },
});

export default Header;