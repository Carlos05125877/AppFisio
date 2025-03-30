import * as React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

interface InfoCovidSelectProps {
  onSelect: (section: string) => void;
  activeSection: string;
}

const InfoCovidSelect: React.FC<InfoCovidSelectProps> = ({ onSelect, activeSection }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.Button, activeSection === 'INFORMACOES_GERAIS' && styles.activeButton]}
        onPress={() => onSelect('INFORMACOES_GERAIS')}
      >
        <View>
          <Text style={styles.ButtonText}>INFORMAÇÕES</Text>
          <Text style={styles.ButtonText}>GERAIS</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.Button, activeSection === 'PREVENCAO_CUIDADOS' && styles.activeButton]}
        onPress={() => onSelect('PREVENCAO_CUIDADOS')}
      >
        <View>
          <Text style={styles.ButtonText}>PREVENÇÃO E</Text>
          <Text style={styles.ButtonText}>CUIDADOS</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.Button, activeSection === 'EFEITOS_COVID' && styles.activeButton]}
        onPress={() => onSelect('EFEITOS_COVID')}
      >
        <View>
          <Text style={styles.ButtonText}>EFEITOS DA</Text>
          <Text style={styles.ButtonText}>COVID NO CORPO</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.Button, activeSection === 'ATUALIZACOES' && styles.activeButton]}
        onPress={() => onSelect('ATUALIZACOES')}
      >
        <View>
          <Text style={styles.ButtonText}>ATUALIZAÇÕES E</Text>
          <Text style={styles.ButtonText}>NOVIDADES</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.Button, activeSection === 'FAKE_NEWS' && styles.activeButton]}
        onPress={() => onSelect('FAKE_NEWS')}
      >
        <View>
          <Text style={styles.ButtonText}>FAKE NEWS E</Text>
          <Text style={styles.ButtonText}>DESINFORMAÇÃO</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.Button, activeSection === 'ARTIGOS' && styles.activeButton]}
        onPress={() => onSelect('ARTIGOS')}
      >
        <View>
          <Text style={styles.ButtonText}>ARTIGOS</Text>
          <Text style={styles.ButtonText}>CIENTÍFICOS</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    //width: 302,
  },
  Button: {
    display: "flex",
    width: 150,
    height: 52,
    paddingTop: 6,
    paddingLeft: 17,
    paddingRight: 17,
    paddingBottom: 6,
    alignItems: "center",
    gap: 10,
    flexShrink: 0,
    borderRadius: 10,
    backgroundColor: "#012B78",
    
  },
  activeButton: {
    backgroundColor: "#001845",
    borderWidth: 2,
    borderColor: "#ffffff",
  },
  ButtonText: {
    
    color: "#ffffff",
    fontFamily: "Alumni Sans SC",
    fontSize: 12,
    textAlign: "center",
    fontWeight: "600",
    lineHeight: 20,
  },
});

export default InfoCovidSelect;