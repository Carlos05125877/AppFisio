import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";

interface ButtonProps {
  
  onPress?: () => void;
}

const btPerguntasFrequentes: React.FC<ButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>VEJA AS PERGUNTAS MAIS FREQUENTES</Text>
      <Image
        source={require('../assets/images/setaIcon.png')}
        style={styles.buttonIcon}
        accessibilityLabel="Seta Icon"></Image>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 130,
    borderRadius: 10,
    backgroundColor: "#1C46F5",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonText: {
    color: "#ffffff",
    fontFamily: "Alumni Sans SC",
    fontSize: 16,
    fontWeight: "700",
  },
  buttonIcon: {
    width: 50,
    height: 50,
    
  },
});

export default btPerguntasFrequentes;