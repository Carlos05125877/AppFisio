import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonProps {
  titulo: string;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({ titulo, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 40,
    borderRadius: 100,
    backgroundColor: "#012B78",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
  },
  buttonText: {
    color: "#ffffff",
    fontFamily: "Alumni Sans SC",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default Button;