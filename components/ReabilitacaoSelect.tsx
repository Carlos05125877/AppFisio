
import * as React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

interface ReabilitacaoSelectProps {
  imageSource: any;
  label: string;
  label2 : string;
  fontFamily?: string;
  onPress?: () => void;
}

const ReabilitacaoSelect: React.FC<ReabilitacaoSelectProps> = ({
  imageSource,
  label,
  label2,
  fontFamily = "Alumni Sans SC",
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.imageContainer} >
      <Image source={imageSource} style={styles.image} />
      </View>
      
      <View style={styles.labelContainer}>
        <Text style={[styles.label, { fontFamily }]}>{label}</Text>
        <Text style={[styles.label, { fontFamily }]}>{label2}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 86,
    
  },
  imageContainer: {
    gap: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, 
    padding: 10, 
    backgroundColor: "#1C46F5",
    borderRadius: 10,
    width: 70,
    height: 70,

  },
  image:
  {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  labelContainer: {
    marginTop: 3,
  },
  label: {
    marginTop:6,
    color: "#5B5B5B",
    textAlign: "center",
    fontSize: 10,
    fontWeight: "900",
    lineHeight: 10,
    letterSpacing: 0.1,
    
    
  },
});

export default ReabilitacaoSelect;