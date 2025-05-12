import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";


const TituloCovid: React.FC = () => {
  return (
    <View style={styles.container}>
    <View style={styles.content}>
      <View style={styles.elipse}>
          <Image
            source={require('../assets/images/virusCovid.png')}
            style={styles.virusIcon}
          />
        </View>
        <View style={styles.trianguloIconContainer}>
          <Image
            source={require('../assets/images/trianguloIcon.png')}
          />
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>COVID-19</Text>
        </View>
      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 450,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 55,
    backgroundColor: 'rgba(217, 217, 217, 0.5)',
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    gap: 4,
    
  },
  containerText: {
    width: 111,
    height: 31,
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Alumni Sans',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 20,
    color: '#000000',
    textAlign: 'center',
  },
  trianguloIconContainer: {
    width: 11,
    height: 10,
    zIndex: 2,
  },
  elipse: {
    width: 38,
    height: 38,
    backgroundColor: 'rgba(255, 221, 85, 0.82)',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  virusIcon: {
    width: 21,
    height: 23,
    zIndex: 1,
  },
});
export default TituloCovid;