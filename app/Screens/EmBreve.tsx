import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '@/components/Header';


const EmBreve = () => {
  return (
    <View style={styles.container}>
        <Header title="CLIQUE PARA VOLTAR"/>
        <View style={styles.content}> 
        <Text style={styles.title}>Em Breve!</Text>
      <Text style={styles.message}>
        Estamos trabalhando para trazer esta função para você.
      </Text>
      <Text style={styles.message}>
        Agradecemos a sua paciência.
      </Text>
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  content:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    color: '#555',
  },
});

export default EmBreve;
