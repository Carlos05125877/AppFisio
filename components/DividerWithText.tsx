import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

interface DividerWithTextProps {
  text: string;
}

const DividerWithText: React.FC<DividerWithTextProps> = ({ text }) => {
  return (
    <View style={styles.dividerContainer}>
      <View style={styles.dividerLine} />
      <Text style={styles.dividerText}>{text}</Text>
      <View style={styles.dividerLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  dividerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 32,
  },
  dividerLine: {
    flex: 1,
    height: 1.5,
    backgroundColor: "#747373",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#747373", 
    fontFamily: "Alumni Sans SC", 
    fontSize: 15,
    textAlign: "center",
  },
});

export default DividerWithText;