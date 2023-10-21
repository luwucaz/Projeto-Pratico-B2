import { Image, TextInput, View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { Link } from "@react-navigation/native";

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Text style={styles.textoHeaderTop}>Bem vindo.</Text>
        <Text>Vamos fazer seu login!</Text>
      </View>

      <View style={styles.containerDown}>
        <Image
          source={require("../../../assets/imagemHeader.jpg")}
          style={styles.logo}
        />
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} />
        <TouchableOpacity style={styles.btn}>
          <Link to={{ screen: "HomePage" }}>
            <Text style={styles.btnTxt}>Login</Text>
          </Link>
        </TouchableOpacity>
        <View style={styles.viewLinks}>
          <Link to={{ screen: "ForgotPasswordPage" }}>Esqueceu a senha? </Link>
          <Link to={{ screen: "RegisterPage" }}>Cadastre-se </Link>
        </View>
      </View>
    </View>
  );
}
