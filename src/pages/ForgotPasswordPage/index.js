import { Image, TextInput, View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { Link } from "@react-navigation/native";

export default function ForgotPasswordPage() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Text style={styles.textoHeaderTop}>Esqueceu sua senha?</Text>
        <Text>Já vamos recuperar ela!</Text>
      </View>
      <View style={styles.containerDown}>
        <Image
          source={require("../../../assets/imagemHeader.jpg")}
          style={styles.logo}
        />
        <TextInput placeholder="Email" style={styles.input} />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>Recuperar Senha</Text>
        </TouchableOpacity>
        <View style={styles.viewLinks}>
          <Link to={{ screen: "RegisterPage" }}>Cadastre-se </Link>
          <Link to={{ screen: "LoginPage" }}>Voltar para o Login </Link>
        </View>
      </View>
    </View>
  );
}
