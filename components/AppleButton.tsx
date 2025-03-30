import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

const AppleButton: React.FC = () => {
  return (
    <TouchableOpacity style={styles.appleButton}>
      <View>
        <Image
          source={require('../assets/images/appleIcon.png')}
          style={styles.appleIcon}
          accessibilityLabel="Google logo"
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appleButton: {
    width: 76,
    height: 56,
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  appleIcon: {
    width: 30,
    height: 30,
  },
});

export default AppleButton;