import React from "react";
import { View, Text, StyleSheet } from "react-native";

type DividerWithTextProps = {
  text: string;
  styleContainer?: object;
  styleText?: object;
  styleLine?: object;
};

const DividerWithText: React.FC<DividerWithTextProps> = ({ text, styleContainer, styleText, styleLine }) => (
  <View style={[styles.container, styleContainer]}>
    <View style={[styles.line, styleLine]} />
    <Text style={[styles.text, styleText]}>{text}</Text>
    <View style={[styles.line, styleLine]} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    
  },
  line: {
    height: 1,
    
  },
  text: {
    marginHorizontal: 10,
    fontSize: 14,
  },
});

export default DividerWithText;