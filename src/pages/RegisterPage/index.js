import { Image, TextInput, View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { Link } from "@react-navigation/native";

export default function RegisterPage() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Text style={styles.textoHeaderTop}>Um novo integrante, iupi!</Text>
        <Text>Adicione suas informações para o cadastro!</Text>
      </View>
      <View style={styles.containerDown}>
        <Image
          source={require("../../../assets/imagemHeader.jpg")}
          style={styles.logo}
        />
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} />
        <TextInput placeholder="Confirm Password" style={styles.input} />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>Login</Text>
        </TouchableOpacity>
        <View style={styles.viewLinks}>
          <Link to={{ screen: "ForgotPasswordPage" }}>Esqueceu a senha? </Link>
          <Link to={{ screen: "LoginPage" }}>Voltar para o Login </Link>
        </View>
      </View>
    </View>
  );
}
