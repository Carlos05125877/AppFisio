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
        style={[styles.Button, activeSection === 'SUS_PANDEMIA' && styles.activeButton]}
        onPress={() => onSelect('SUS_PANDEMIA')}
      >
         <View>
          <Text style={styles.ButtonText}>O SUS NA</Text>
          <Text style={styles.ButtonText}>PANDEMIA</Text>
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
        style={[styles.Button, activeSection === 'TECNOLOGIA' && styles.activeButton]}
        onPress={() => onSelect('TECNOLOGIA')}
      >
        <View>
          <Text style={styles.ButtonText}>TECNOLOGIA E</Text>
          <Text style={styles.ButtonText}>INOVAÇÃO</Text>
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
    gap: 2,
    width: "100%",
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