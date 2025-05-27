import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithCredential,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { FirebaseError } from "firebase/app";

// Components
import InputField from "../../components/InputField";
import Button from "@/components/Button";
import DividerWithText from "../../components/DividerWithText";
import GoogleButton from "../../components/GoogleButton";
import AppleButton from "@/components/AppleButton";
import HomeSelect from "@/components/HomeSelect";

const HomeScreen: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [googleLoading, setGoogleLoading] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    GoogleSignin.configure({
        webClientId: "468440457794-gb27j453nhmvjc596tf1vqvue2vtkcrq.apps.googleusercontent.com",
    
    });

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  // Login com email/senha
  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      setIsLoggedIn(true);
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
    } catch (error: any) {
      console.error(error);
      let errorMessage = 'Erro ao fazer login';
      if (error.code === 'auth/invalid-email') {
        errorMessage = 'Email inválido';
      } else if (error.code === 'auth/user-not-found') {
        errorMessage = 'Usuário não encontrado';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Senha incorreta';
      }
      Alert.alert('Erro de login', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Login com Google
  const handleGoogleLogin = async () => {
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
          Alert.alert("Sucesso", "Conta criada com sucesso via Google!");
        } else {
          Alert.alert("Login", "Login realizado com sucesso!");
        }
        router.push("/Screens/InfoCovidScreen");
      } else {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        const { idToken, accessToken } = await GoogleSignin.getTokens();
        const credential = GoogleAuthProvider.credential(idToken, accessToken);
        const userCredential = await signInWithCredential(auth, credential);
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
          Alert.alert("Sucesso", "Conta criada com sucesso via Google!");
        } else {
          Alert.alert("Login", "Login realizado com sucesso!");
        }
        router.push("/Screens/InfoCovidScreen");
      }
    } catch (err: unknown) {
      const error = err as FirebaseError;
      let errorMessage = "Erro ao fazer login com Google";
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        errorMessage = "Login cancelado pelo usuário";
      } else if (error.code === statusCodes.IN_PROGRESS) {
        errorMessage = "Login já em andamento";
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        errorMessage = "Google Play Services não disponível";
      } else if (error.code === "auth/account-exists-with-different-credential") {
        errorMessage = "Já existe uma conta com este email usando outro método de login";
      }
      if (error.code !== statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert("Erro", errorMessage);
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      if (Platform.OS !== "web") {
        await GoogleSignin.signOut();
      }
      setEmail("");
      setSenha("");
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  const renderLoginContent = () => {
    if (isLoggedIn) {
      return (
        <View style={styles.loggedInContainer}>
          <Text style={styles.loggedInText}>Você já está logado no sistema</Text>
          <Button onPress={handleLogout} titulo="Sair" />
        </View>
      );
    }

    return (
      <>
        <View>
          <Text style={styles.titulo}>Efetue seu login</Text>
        </View>
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
            value={senha}
            onChangeText={setSenha}
          />
        </View>
        <Button onPress={handleLogin} titulo={loading ? "Carregando..." : "Acessar"} />

        <TouchableOpacity onPress={() => router.push('/Screens/InfoCovidScreen')}>
          <Text style={styles.esqueciSenhaText}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/Screens/CadastrarScreen')}>
          <Text style={styles.cadastrarText}>Cadastrar</Text>
        </TouchableOpacity>

        <DividerWithText
          text="Entrar com"
          styleContainer={{ width: "100%", marginBottom: 25 }}
          styleLine={{ backgroundColor: "#747373", height: 1, width: "25%" }}
          styleText={{ color: "#747373", fontSize: 15 }}
        />
        <View style={styles.entrarComContainer}>
          <TouchableOpacity
            onPress={handleGoogleLogin}
            style={styles.googleButton}
            disabled={googleLoading}
          >
            <Text style={styles.googleButtonText}>
              {googleLoading ? "Carregando..." : "Google"}
            </Text>
          </TouchableOpacity>
          {/* Se quiser o botão Apple, descomente abaixo */}
          {/* <AppleButton /> */}
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {renderLoginContent()}
        <View style={styles.areaDeSelecao}>
          <View style={styles.primeiraLinha}>
            <HomeSelect
              imageSource={require("../../assets/images/covidIcon.png")}
              label="COVID-19"
              label2=" "
              onPress={() => router.push("/Screens/InfoCovidScreen")}
            />
            <HomeSelect
              imageSource={require("../../assets/images/guiaPosCovid.png")}
              label="GUIA"
              label2="PÓS-COVID"
              onPress={() => router.push("/Screens/InfoCovidScreen")}
            />
            <HomeSelect
              imageSource={require("../../assets/images/reabilitacaoPosCovid.png")}
              label="REABILITAÇÃO"
              label2="PÓS-COVID"
              onPress={() => router.push("/Screens/ReabilitacaoScreen")}
            />
            <HomeSelect
              imageSource={require("../../assets/images/suportePsi.png")}
              label="SUPORTE"
              label2="PSICOLÓGICO"
              onPress={() => router.push("/Screens/InfoCovidScreen")}
            />
          </View>
          <View style={styles.segundaLinha}>
            <HomeSelect
              imageSource={require("../../assets/images/perguntasFrequentes.png")}
              label="PERGUNTAS"
              label2="FREQUENTES"
              onPress={() => router.push("/Screens/InfoCovidScreen")}
            />
            <HomeSelect
              imageSource={require("../../assets/images/depoimentos.png")}
              label="DEPOIMENTOS"
              label2=" "
              onPress={() => router.push("/Screens/InfoCovidScreen")}
            />
            <HomeSelect
              imageSource={require("../../assets/images/contato.png")}
              label="CONTATOS"
              label2=" "
              onPress={() => router.push("../Screens/TiraDuvidasIA")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 70,
    paddingBottom: 10,
    backgroundColor: "#ffffff",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 302,
  },
  titulo: {
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
  esqueciSenhaText: {
    color: "#747373",
    fontFamily: "Alumni Sans SC",
    fontSize: 12,
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 25,
  },
  cadastrarText: {
    color: "#747373",
    fontFamily: "Alumni Sans SC",
    fontSize: 16,
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 25,
  },
  entrarComContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginBottom: 15,
  },
  googleButton: {
    backgroundColor: "#DB4437",
    padding: 12,
    borderRadius: 8,
    minWidth: 100,
    alignItems: "center",
  },
  googleButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  areaDeSelecao: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 20,
    width: "140%",
    height: 380,
    flexShrink: 0,
    borderRadius: 12,
    backgroundColor: "#012B78",
    paddingLeft: 11,
    paddingRight: 3,
  },
  primeiraLinha: {
    gap: 5,
    marginTop: "7%",
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: "5%",
  },
  segundaLinha: {
    gap: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
    marginLeft: "5%",
  },
  loggedInContainer: {
    alignItems: 'center',
    marginBottom: 25,
    width: 300,
    height: 100,
  },
  loggedInText: {
    color: "#333",
    fontFamily: "Open Sans",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 15,
  },
});

export default HomeScreen;