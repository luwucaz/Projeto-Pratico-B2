import { Image, TextInput, View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { Link } from "@react-navigation/native";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Text style={styles.textoHeaderTop}>Bem vindo à sua central.</Text>
      </View>
      <View style={styles.containerDown}>
        <View style={styles.miniCotainer1}>
          <Text>Métricas atuais</Text>
          <Image
            source={require("../../../assets/graficoPizza.png")}
            style={styles.grafico}
          />
        </View>
        <View style={styles.miniCotainer1}>
          <Text>Desempenho Atual:</Text>
          <Text style={styles.textoTopo}>70%</Text>
        </View>
      </View>
    </View>
  );
}
