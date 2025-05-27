import * as React from "react";
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import TituloCovid from "@/components/TituloCovid";
import DividerWithText from "@/components/DividerWithText";
import { Linking } from "react-native";

const informacoesGerais: React.FC = () => {
    return (
        <>
            <View style={styles.containerPrincipal}>
                <TituloCovid />
                <View style={styles.areaTexto}>
                    <Text style={styles.paragrafo}>A COVID-19 é uma doença infecciosa causada pelo coronavírus SARS-CoV-2. Identificado pela primeira vez em dezembro de 2019, na China, o vírus rapidamente se espalhou pelo mundo, levando a Organização Mundial da Saúde (OMS) a declarar estado de pandemia em março de 2020​.</Text>
                    <Text style={styles.paragrafo}>A transmissão acontece principalmente por meio de gotículas respiratórias expelidas ao falar, tossir ou espirrar, além do contato com superfícies contaminadas​.</Text>
                
                
                    <View style={styles.areaTexto2}>
                        <Text style={styles.areaTexto2Estilo}>O SARS-CoV-2, integrante do subgênero Sarbecovírus, pertence à família Coronaviridae e é o sétimo coronavírus identificado capaz de infectar seres humanos.</Text>
                    </View>
                
                    <Image
                        source={require('../assets/images/covidImage.jpg')}
                        style={styles.imagem}
                    />
                
                    <DividerWithText 
                    text="SINAIS E SINTOMAS" 
                    styleContainer={{marginBottom: 25 }}
                    styleLine={{ backgroundColor: "#747373", height: 1, width: 50 }}  
                    styleText={{ color: "#012B78", fontSize: 16, fontWeight: "bold" }}
                    />
                    <Text style={styles.paragrafo}>
                        A COVID-19 pode se manifestar de diferentes formas, desde pessoas sem sintomas até quadros graves que exigem cuidados intensivos. A classificação dos casos se dá conforme a gravidade:
                    </Text>
                    <Text style={styles.subtitulo}>
                        Casos Assintomáticos
                    </Text>
                    <Text style={styles.paragrafo}>
                        A pessoa testa positivo para o vírus, mas não apresenta nenhum sintoma.
                    </Text>
                    <Text style={styles.subtitulo}>
                        Casos Leves
                    </Text>
                    <Text style={styles.paragrafo}>
                        Presença de um ou mais sintomas como: Tosse; Dor de garganta; Coriza (nariz escorrendo); Febre; Mal-estar; Dor de cabeça; Dores musculares (mialgia); Náuseas, vômitos ou diarreia; Perda do olfato (anosmia) e/ou paladar (ageusia). Não há falta de ar nem alterações nas imagens do tórax.
                    </Text>
                    <Text style={styles.subtitulo}>
                        Casos Moderados
                    </Text>
                    <Text style={styles.paragrafo}>
                        Apresentam os sintomas descritos nos casos leves. A saturação de oxigênio no sangue (SpO₂) é igual ou maior que 94% em ar ambiente. A avaliação precisa ser confirmada em unidade de saúde.
                    </Text>
                    <Text style={styles.subtitulo}>
                        Casos Graves
                    </Text>
                    <Text style={styles.paragrafo}>
                        O paciente apresenta um ou mais sinais de alerta: Falta de ar ou dificuldade para respirar (dispneia); Pressão persistente no peito; Saturação de oxigênio igual ou inferior a 94%; Coloração azulada nos lábios ou no rosto.
                    </Text>
                    <Text style={styles.subtitulo}>                                
                    Casos Críticos
                    </Text>
                    <Text style={styles.paragrafo}>
                        O paciente pode desenvolver condições muito graves, como: Síndrome do Desconforto Respiratório Agudo (SDRA); Sepse e choque séptico; Trombose aguda; Falência de múltiplos órgãos.
                    </Text>

                    <DividerWithText 
                    text="TRANSMISSÃO" 
                    styleContainer={{marginBottom: 10, marginRight: 20, paddingTop: 10}}
                    styleLine={{ backgroundColor: "#747373", height: 1, width: 50 }}  
                    styleText={{ color: "#012B78", fontSize: 16 ,fontWeight: "bold"}}
                    />
                    <Text style={styles.paragrafo}>
                        A COVID-19 é uma doença altamente transmissível e qualquer pessoa pode ser infectada. Mesmo aqueles que não apresentam sintomas podem transmitir o vírus para outras pessoas. Por isso, as medidas de prevenção são essenciais para todos​.
                    </Text>
                    <Text style={styles.subtitulo}>
                        O vírus SARS-CoV-2 é transmitido de três principais maneiras:
                    </Text>
                    <View style={styles.balaoTransmissao}>
                        <Image style={{ marginTop: 8, marginRight: 5 }}
                            source={require('../assets/images/Polygon.png')}
                            />
                        <Text style={styles.paragrafo}>Contato Direto: Acontece quando uma pessoa toca diretamente uma pessoa infectada ou superfícies contaminadas e, em seguida, leva as mãos ao rosto (boca, nariz ou olhos), facilitando a entrada do vírus no organismo.
                            
                        </Text>
                    </View>

                    <View style={styles.balaoTransmissao}>
                        <Image style={{ marginTop: 8, marginRight: 5 }}
                            source={require('../assets/images/Polygon.png')}
                            />
                        <Text style={styles.paragrafo}>Gotículas Respiratórias: Gotículas maiores são liberadas quando uma pessoa infectada tosse, espirra ou fala. Essas gotículas podem atingir outra pessoa que esteja a menos de 1 metro de distância.
                            
                        </Text>
                    </View>

                    <View style={styles.balaoTransmissao}>
                        <Image style={{ marginTop: 8, marginRight: 5 }}
                            source={require('../assets/images/Polygon.png')}
                            />
                        <Text style={styles.paragrafo}>Aerossóis: São partículas ainda menores e mais leves que gotículas, capazes de permanecer no ar por várias horas. Podem se espalhar em distâncias superiores a 1 metro, especialmente: Em locais fechados e mal ventilados; Durante atividades que aumentam o esforço respiratório, como gritar, cantar ou praticar exercícios físicos em grupo.
                            
                        </Text>
                    </View>

                    <Image
                        source={require('../assets/images/covidImage2.png')}
                        style={styles.imagem}
                    />

                    
                </View>
                <View style={styles.areaIncubacao}>
                    <Text style={[styles.subtitulo, { marginTop: 10,marginBottom:10}]}>Período de Incubação e Transmissibilidade</Text>
                    <View style={styles.balaoTransmissao2}>
                        <Text style={styles.titulo}>Incubação:
                        </Text>
                    
                        <Text style={styles.paragrafo}>Com a circulação da variante Ômicron, o tempo médio entre o contato com o vírus e o surgimento dos primeiros sintomas passou a ser de 3 a 4 dias, podendo variar de 1 a 10 dias​.
                        </Text>
                    </View>
                    <View style={styles.balaoTransmissao2}>
                        <Text style={styles.titulo}>Transmissão:
                        </Text>                                  
                        <Text style={styles.paragrafo}>Diretamente, pelo contato próximo com uma pessoa infectada;Indiretamente, por meio do contato com superfícies ou objetos contaminados.
                        </Text>
                    </View>
                </View>

                <View style={styles.areaRiscos}>
                    <Text style={[styles.subtitulo, { marginTop: 10,marginBottom:10}]}>Grupos de Risco</Text>
                    <View style={styles.itemGrupoRisco}>
                        <Image source={require('../assets/images/shield.png')} style={styles.iconeGrupoRisco} />
                        <Text style={styles.textoGrupoRisco}><Text style={styles.tituloTextoGrupoRisco}>Idade avançada:</Text> Pessoas com mais de 60 anos, com o risco aumentando à medida que a idade avança</Text>
                    </View>
                    <View style={styles.itemGrupoRisco}>
                            <Image source={require('../assets/images/shield.png')} style={styles.iconeGrupoRisco} />
                        <Text style={styles.textoGrupoRisco}><Text style={styles.tituloTextoGrupoRisco}>Comorbidades:</Text> Pacientes com condições como diabetes, hipertensão, doenças cardíacas, pulmonares crônicas, vasculares, renais crônicas, demência, transtornos mentais, imunossupressão (inclusive infecção pelo HIV), obesidade e câncer.</Text>
                    </View>
                    <View style={styles.itemGrupoRisco}>
                            <Image source={require('../assets/images/shield.png')} style={styles.iconeGrupoRisco} />
                        <Text style={styles.textoGrupoRisco}><Text style={styles.tituloTextoGrupoRisco}>Gestação:</Text> Mulheres grávidas ou recentemente grávidas, especialmente aquelas com mais de 35 anos, obesas, com condições crônicas de saúde ou complicações específicas da gestação (como diabetes gestacional e pré-eclâmpsia/eclâmpsia).</Text>
                    </View>
                    <View style={styles.itemGrupoRisco}>
                            <Image source={require('../assets/images/shield.png')} style={styles.iconeGrupoRisco} />
                        <Text style={styles.textoGrupoRisco}><Text style={styles.tituloTextoGrupoRisco}>Tabagismo:</Text> Indivíduos que fumam.</Text>
                    </View>
                </View>


                <View style={styles.areaPrevencao}>
                <DividerWithText 
                    text="PREVENÇÃO E CONTROLE" 
                    styleContainer={{marginBottom: 25 }}
                    styleLine={{ backgroundColor: "#747373", height: 1, width: 50 }}  
                    styleText={{ color: "#012B78", fontSize: 16, fontWeight: "bold" }}
                    />
                        <Image source={require('../assets/images/shield2.png')} style={styles.iconePrevencao} />
                        <Text style={styles.paragrafo}>                   A VACINAÇÃO é a principal forma de prevenir casos graves de COVID-19, óbitos e sequelas. Ela reduz a transmissão do vírus e protege especialmente os grupos vulneráveis, como idosos e pessoas com comorbidades. Além disso, contribui para o controle da pandemia e a segurança da população.</Text>
                    
                    <View style={styles.itemPrevencao}>
                        
                        <Text style={styles.paragrafo}><Text style={styles.tituloTextoGrupoRisco}>Higienização das mãos:</Text> O uso de água e sabão ou álcool 70% é fundamental para impedir a propagação do vírus por meio do contato com superfícies contaminadas.</Text>
                    </View>
                    <View style={styles.itemPrevencao}>
                        
                        <Text style={styles.paragrafo}><Text style={styles.tituloTextoGrupoRisco}>Uso de máscaras:</Text> Recomendado para pessoas com sintomas gripais, casos confirmados de COVID-19, imunossuprimidos, idosos e em ambientes com alto risco de transmissão, como locais fechados ou aglomerações. Em unidades de saúde, o uso de máscaras é obrigatório para profissionais e visitantes.</Text>
                    </View>
                    <View style={styles.itemPrevencao}>
                        
                        <Text style={styles.paragrafo}><Text style={styles.tituloTextoGrupoRisco}>Etiqueta respiratória:</Text> Ao tossir ou espirrar, cubra o nariz e a boca com o antebraço ou um lenço, descarte o lenço de forma adequada e higienize as mãos imediatamente. Evite tocar o rosto com as mãos não higienizadas.</Text>
                    </View>
                    <View style={styles.itemPrevencao}>
                        
                        <Text style={styles.paragrafo}><Text style={styles.tituloTextoGrupoRisco}>Distanciamento físico:</Text> Mantenha, sempre que possível, uma distância mínima de 1 metro de outras pessoas, especialmente em espaços públicos. A ventilação adequada em ambientes fechados também é essencial.</Text>
                    </View>
                    <View style={styles.itemPrevencao}>
                        
                        <Text style={styles.paragrafo}><Text style={styles.tituloTextoGrupoRisco}>Equipamento de Proteção Individual (EPI):</Text> Para os profissionais de saúde, o uso de EPI é a principal medida de prevenção da transmissão entre pacientes e profissionais, devendo ser adotado em todos os cuidados, independentemente do fator de risco ou da doença de base do paciente.</Text>
                    </View>
                    <View style={styles.itemPrevencao}>
                        
                        <Text style={styles.paragrafo}><Text style={styles.tituloTextoGrupoRisco}>Limpeza e desinfecção de superfícies:</Text> É importante realizar a limpeza com água, sabão e detergente, além da desinfecção com solução de hipoclorito de sódio em pisos e superfícies de banheiros.</Text>
                    </View>
                </View>

                <View style={styles.caixaTratamento}>
                <DividerWithText 
                    text="TRATAMENTO" 
                    styleContainer={{marginBottom: 25 }}
                    styleLine={{ backgroundColor: "#747373", height: 1, width: 50 }}  
                    styleText={{ color: "#012B78", fontSize: 16, fontWeight: "bold" }}
                    />
                    <Text style={[styles.paragrafo, { fontWeight:"bold", marginBottom: 20, }]}>
                        A melhora dos casos de COVID-19 de gravidade leve ou moderada pode ser tratada ambulatorialmente.
                    </Text>
                    <Text style={[styles.paragrafo, { marginBottom: 20, }]}>
                        No Brasil, o Sistema Único de Saúde (SUS) incorporou o uso de combinação de fármacos nirmatrelvir e ritonavir (NIR/R) para o tratamento de adultos pela SARS-CoV-2, visando reduzir o risco de internações, complicações e óbito, especialmente em grupos mais vulneráveis.
                    </Text>
                    <Text style={[styles.paragrafo, { marginBottom: 20, }]}>
                        O medicamento está indicado para pacientes com diagnóstico confirmado de COVID-19 (por RT-PCR ou teste rápido molecular), que apresentam sintomas leves ou moderados e não necessitam de oxigênio suplementar. Independentemente da condição vacinal, os grupos específicos para o uso do NIR/R incluem:
                    </Text>
                    <Text style={[styles.paragrafo, {  paddingLeft:20,}]}>
                        a) imunocomprometidos com idade ≥ 18 anos;
                    </Text>
                    <Text style={[styles.paragrafo, {  marginBottom: 20, paddingLeft:20,}]}>
                        b) pessoas com idade ≥ 65 anos.
                    </Text>
                    <Text style={styles.paragrafo}>
                        É importante que o NIR/R seja administrado até 5 dias após o início dos sintomas. Portanto, é essencial que os indivíduos pertencentes a esses grupos procurem atendimento médico assim que apresentarem sinais e sintomas gripais, a fim de obterem um diagnóstico e tratamento precoces.
                    </Text>
                </View>

                 <View style={styles.areaPainelMonitoramento}>

                    <TouchableOpacity onPress={() => {
                        Linking.openURL("https://infoms.saude.gov.br/extensions/covid-19_html/covid-19_html.html");
                    }}>
                        <View style={styles.botaoCircular}> 
                            <Image source={require('../assets/images/painelBrasil.png')} style={styles.iconeCircular} /> 
                            <Text style={styles.textoCircular}>Painel Covid-19 no Brasil</Text> 
                        </View> 
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        Linking.openURL("https://covid.saude.gov.br/");
                    }}>
                        <View style={styles.botaoCircular}> 
                            <Image source={require('../assets/images/painelCoronaVirus.png')} style={styles.iconeCircular} /> 
                            <Text style={styles.textoCircular}>Painel Covid-19</Text> 
                        </View> 
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        Linking.openURL("https://infoms.saude.gov.br/extensions/SEIDIGI_DEMAS_Vacina_C19/SEIDIGI_DEMAS_Vacina_C19.html");
                    }}>
                        <View style={styles.botaoCircular}> 
                            <Image source={require('../assets/images/vacinometro.png')} style={styles.iconeCircular} /> 
                            <Text style={styles.textoCircular}>Vacinômetro Covid-19</Text> 
                        </View> 
                    </TouchableOpacity>

                 </View> 

                    <Image
                        source={require('../assets/images/Ouvidoria.png')}
                        style={styles.bannerSUS}
                    />
                    
            </View>

        </>
    );
}


const styles = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    areaTexto: {
        marginTop: 10,
        width: "auto",
        padding: 20,
        backgroundColor: "#ffffff",
        marginLeft: "auto",
        marginRight: "auto",
    },

    areaTexto2: {
        marginTop: 10,
        alignItems: "flex-start",
        justifyContent: "center",
        width: 350,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        marginLeft: "auto",
        marginRight: "auto",
        borderWidth: 1,
        borderColor: "#5B5B5B",
    },
    areaTexto2Estilo: {
        fontFamily: "Alumni Sans SC",
        fontSize: 12,
        lineHeight: 20,
        fontStyle: "normal",
        fontWeight: 500,
        color: "#5B5B5B",
        textAlign: "left",
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    imagem: {
        width: 229,
        height: 229,
        aspectRatio: 1/1,
        borderRadius: 40,
        marginTop: 20,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 20,
    },
    titulo: {
        alignItems: "center",
        fontFamily: "Alumni Sans SC",
        textAlign: "center",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 15,
        lineHeight: 33,
        color: "#000000",
        marginBottom: 20,
    },
    subtitulo: {
        fontFamily: "Alumni Sans SC",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 15,
        lineHeight: 28,
        color: "#012B78",
        marginTop: 20,
        marginBottom: 3,
        marginLeft:20,
    },
    paragrafo: {
        fontFamily: "Alumni Sans SC",
        fontSize: 13,
        lineHeight: 22,
        color: "#000000",
        marginBottom: 3 ,
    },
    balaoTransmissao: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        width: "100%",
        borderRadius: 10,
        height: "auto",
        marginLeft: "auto",
        marginRight: "auto",
        borderWidth: 1,
        borderColor: "#4CAF50",
        paddingLeft: 10,
        marginBottom: 10,
        
    },
    areaIncubacao: {
        marginTop: 10,
        width: "100%",
        paddingBottom: 20,
        backgroundColor: "#4CAF5033",
        marginLeft: "auto",
        marginRight: "auto",
    },
    balaoTransmissao2: {
        alignItems: "flex-start",
        justifyContent: "center",
        width: "90%",
        borderRadius: 10,
        height: "auto",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#ffffff",
        paddingLeft: 10,
        marginBottom: 10,
    },
    areaRiscos: {
        width: "100%",
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#E5E5E580",
        marginLeft: "auto",
        marginRight: "auto",
    },
    pontoLista: {
        fontFamily: "Alumni Sans SC",
        fontSize: 16,
        lineHeight: 22,
        color: "#000000",
        marginLeft: 20,
        marginBottom: 5,
    },
    itemGrupoRisco: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        width: "100%",
        borderRadius: 10,
        height: "auto",
        marginLeft: "auto",
        marginRight: "auto",
        borderWidth: 1,
        borderColor: "#FFC107",
        paddingLeft: 10,
        marginBottom: 10,
        backgroundColor: "#ffffff",
        padding: 10,
    },
    iconeGrupoRisco: {
        width: 26,
        height: 26,
    },
    textoGrupoRisco: {
        fontFamily: "Alumni Sans SC",
        fontSize: 13,
        lineHeight: 22,
        color: "#000000",
        marginLeft: 10,
        width: "90%",
    },
    tituloTextoGrupoRisco: {
        fontFamily: "Alumni Sans SC",
        fontSize: 16,
        fontWeight: "bold",
        color: "#000000",
    },
    textoGrupoRiscoItalico: {
        fontFamily: "Alumni Sans SC",
        fontSize: 13,
        lineHeight: 22,
        color: "#000000",
        fontStyle: "italic",
    },
    iconePrevencao: {
        width: 68,
        height: 68,
        aspectRatio: 1/1,
        marginLeft: "auto",
        marginRight: "90%",
        position: "absolute",
        left: 16,
        top: 35,
    },
    caixaTratamento: {
        marginTop: 10,
        width: "100%",
        padding: 20,
        backgroundColor: "#EDEDED",
        marginLeft: "auto",
        marginRight: "auto",
    },
    areaPainelMonitoramento: {
        marginTop: 10,
        width: "100%",
        padding: 20,
        backgroundColor: "#ffffff",
        marginLeft: "auto",
        marginRight: "auto",
    },
    botaoCircular: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#ffffff",
        marginBottom: 10,
    },
    iconeCircular: {
        width: 120,
        height: 120,
        aspectRatio: 1/1,
        borderRadius: 25,
    },
    textoCircular: {
        fontFamily: "Alumni Sans",
        fontSize: 20,
        lineHeight: 20,
        color: "#012B78",
        marginTop: 10,
        fontWeight: 600,
        fontStyle: "normal",
        textAlign: "center",
    },
    bannerSUS: {
        width: "100%",
        height: 410,
        marginTop: 10,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 34
    },
    areaPrevencao: {
        marginTop: 10,
        width: "100%",
        padding: 20,
        marginLeft: "auto",
        marginRight: "auto",
    },
    itemPrevencao: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        width: "auto",
        borderRadius: 10,
        height: "auto",
        marginLeft: "auto",
        marginRight: "auto",
        borderWidth: 1,
        borderColor: "#FFC107",
        paddingLeft: 10,
        marginBottom: 10,
        padding: 10,
    },
});

export default informacoesGerais;