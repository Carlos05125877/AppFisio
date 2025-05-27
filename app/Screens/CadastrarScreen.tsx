import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, Platform } from "react-native";
import InputField from "../../components/InputField";
import { useRouter } from "expo-router";
import Button from "@/components/Button";
import { auth, db } from "../firebase/config";
import { createUserWithEmailAndPassword, signInWithCredential, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import { FirebaseError } from "firebase/app";

const CadastroScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  useEffect(() => {
    if (Platform.OS !== "web") {
      GoogleSignin.configure({
        webClientId: "468440457794-gb27j453nhmvjc596tf1vqvue2vtkcrq.apps.googleusercontent.com",
        offlineAccess: true,
      });
    }
  }, []);

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem");
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        uid: user.uid,
        provider: "email",
        createdAt: new Date().toISOString(),
      });

      Alert.alert("Sucesso", "Conta criada com sucesso!");
      router.push("/Screens/InfoCovidScreen");
    } catch (err: unknown) {
      const error = err as FirebaseError;
      console.error(error);
      let errorMessage = "Não foi possível criar a conta";
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "Este email já está em uso";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "A senha deve ter pelo menos 6 caracteres";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Email inválido";
      }
      Alert.alert("Erro de cadastro", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    setGoogleLoading(true);
    try {
      if (Platform.OS === "web") {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        const userDoc = await getDoc(doc(db, "users", user.uid));

        if (!userDoc.exists()) {
          await setDoc(doc(db, "users", user.uid), {
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            uid: user.uid,
            provider: "google",
            createdAt: new Date().toISOString(),
          });

          Alert.alert("Sucesso", "Conta criada com sucesso usando Google!");
        } else {
          Alert.alert("Sucesso", "Login realizado com sucesso!");
        }

        router.push("/Screens/InfoCovidScreen");
      } else {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        const { idToken, accessToken } = await GoogleSignin.getTokens();

        const googleCredential = GoogleAuthProvider.credential(idToken, accessToken);
        const userCredential = await signInWithCredential(auth, googleCredential);
        const user = userCredential.user;

        const userDoc = await getDoc(doc(db, "users", user.uid));

        if (!userDoc.exists()) {
          await setDoc(doc(db, "users", user.uid), {
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            uid: user.uid,
            provider: "google",
            createdAt: new Date().toISOString(),
          });

          Alert.alert("Sucesso", "Conta criada com sucesso usando Google!");
        } else {
          Alert.alert("Sucesso", "Login realizado com sucesso!");
        }

        router.push("/Screens/InfoCovidScreen");
      }
    } catch (err: unknown) {
      const error = err as FirebaseError;
      console.error("Erro no cadastro com Google:", error);

      let errorMessage = "Não foi possível fazer cadastro com Google";

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        errorMessage = "Cadastro cancelado pelo usuário";
      } else if (error.code === statusCodes.IN_PROGRESS) {
        errorMessage = "Cadastro já em andamento";
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        errorMessage = "Google Play Services não disponível";
      } else if (error.code === "auth/account-exists-with-different-credential") {
        errorMessage = "Já existe uma conta com este email usando outro método de cadastro";
      }

      if (error.code !== statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert("Erro de cadastro", errorMessage);
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleBackToLogin = () => {
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Crie sua conta</Text>

        <View style={styles.inputContainer}>
          <InputField
            label="Email"
            inputType="email"
            secureTextEntry={false}
            value={email}
            onChangeText={setEmail}
          />
          <InputField
            label="Senha"
            inputType="password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <InputField
            label="Confirmar Senha"
            inputType="password"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={handleRegister}
            titulo={loading ? "Carregando..." : "Cadastrar"}
          />

          <Text style={styles.dividerText}>ou</Text>

          <TouchableOpacity
            style={styles.googleButton}
            onPress={handleGoogleRegister}
            disabled={googleLoading}
          >
            <Text style={styles.googleButtonText}>
              {googleLoading ? "Carregando..." : "Cadastrar com Google"}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleBackToLogin}>
          <Text style={styles.voltarLoginText}>
            Já tem uma conta? Faça login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: "#ffffff",
    flex: 1,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 302,
  },
  title: {
    marginBottom: 25,
    color: "#333",
    fontFamily: "Open Sans",
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginBottom: 25,
    gap: 25,
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 15,
  },
  dividerText: {
    color: "#747373",
    fontFamily: "Alumni Sans SC",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 5,
  },
  googleButton: {
    width: "100%",
    backgroundColor: "#4285F4",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  googleButtonText: {
    color: "#ffffff",
    fontFamily: "Open Sans",
    fontSize: 16,
    fontWeight: "600",
  },
  voltarLoginText: {
    color: "#747373",
    fontFamily: "Alumni Sans SC",
    fontSize: 16,
    textAlign: "center",
    justifyContent: "center",
    marginTop: 15,
  },
});

export default CadastroScreen;