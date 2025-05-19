import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

interface InputFieldProps {
  label: string;
  inputType: string;
  secureTextEntry: boolean;
  value: string;
  onChangeText: (text: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  inputType,
  secureTextEntry,
  value,
  onChangeText,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <View style={styles.inputWrapper}>
      <View style={styles.inputLabel}>
        <Text style={styles.labelText}>{label}</Text>
      </View>
      <TextInput
        style={styles.inputField}
        secureTextEntry={secureTextEntry}
        keyboardType={inputType === "email" ? "email-address" : "default"}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    position: "relative",
    width: "100%",
  },
  inputLabel: {
    position: "absolute",
    left: 8,
    top: -10,
    paddingTop: 0,
    paddingRight: 5,
    paddingBottom: 0,
    paddingLeft: 5,
    backgroundColor: "#ffffff",
    zIndex: 1,
  },
  labelText: {
    color: "#333",
    fontFamily: "Open Sans",
    fontSize: 16,
  },
  inputField: {
    width: "100%",
    height: 46,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 4,
    paddingTop: 0,
    paddingRight: 12,
    paddingBottom: 0,
    paddingLeft: 12,
    fontFamily: "Open Sans",
    fontSize: 16,
  },
});

export default InputField;