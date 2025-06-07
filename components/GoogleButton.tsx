import React, { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import * as WebBrowser from 'expo-web-browser';
import { useAuthRequest } from 'expo-auth-session/providers/google';
import { makeRedirectUri } from 'expo-auth-session';

WebBrowser.maybeCompleteAuthSession();

const GoogleButton: React.FC = () => {
  const [request, response, promptAsync] = useAuthRequest({
    clientId: '468440457794-edc600jkvr1fjo9hbgkdus43bfr96n7d.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      console.log('Autenticação bem-sucedida:', authentication);
      // Você pode integrar o token de autenticação com seu backend aqui
    }
  }, [response]);

  const handleGoogleSignIn = async () => {
    const result = await promptAsync();
    if (result.type !== 'success') {
      console.log('Autenticação cancelada ou falha:', result);
    }
  };

  return (
    <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignIn}>
      <View>
        <Image
          source={require('../assets/images/google_logo.png')}
          style={styles.googleIcon}
          accessibilityLabel="Google logo"
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  googleButton: {
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
  googleIcon: {
    width: 30,
    height: 30,
  },
});

export default GoogleButton;