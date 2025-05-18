import * as React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import InfoCovidSelect from "@/components/InfoCovidSelect";
import Header from "@/components/Header";
import InformacoesGerais from "@/components/InformacoesGerais";

const infoCovidScreen: React.FC = () => {
    const router = useRouter();
    const [activeSection, setActiveSection] = React.useState('INFORMACOES_GERAIS');

    const renderContent = () => {
        switch (activeSection) {
            case 'INFORMACOES_GERAIS':
                return (
                    <InformacoesGerais/>
                );
           
            case 'EFEITOS_COVID':
                return (
                    <>
                        
                    </>
                );
            case 'ATUALIZACOES':
                return (
                    <>
                        
                    </>
                );
            case 'FAKE_NEWS':
                return (
                    <>
                        
                    </>
                );
           
            default:
                return null;
        }
    };

    return (
        <GestureHandlerRootView style={styles.containerPrincipal}>
            <Header />
            <View style={styles.container}>
                <View style={styles.conteudo}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.rolagem}>
                        <InfoCovidSelect onSelect={setActiveSection} activeSection={activeSection} />
                    </ScrollView>
                    <View style={styles.Container}>
                        <ScrollView>
                            {renderContent()}
                        </ScrollView>
                    </View>
                </View>
            </View>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    container: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: "#ffffff",
    },
    conteudo: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    rolagem: {
        display: "flex",
    },
    Container: {
        display: "flex",
        marginTop: 10,
        height: 740,
        marginBottom: 20,
    },
   
});

export default infoCovidScreen;