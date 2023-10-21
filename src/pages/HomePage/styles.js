import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DBDFEA",
    width: "100%",
    height: "100%",
    // alignItems: "center",
    // justifyContent: "center",
  },
  input: {
    width: "75%",
    height: "50px",
    backgroundColor: "#D5B4B4",
    padding: "10px",
    fontSize: "20px",
    opacity: "0.9",
    border: "1px solid #867070",
    borderRadius: "5px",
    marginBottom: "5px",
  },
  btn: {
    backgroundColor: "#A8D1D1",
    height: "40px",
    width: "75%",
    borderRadius: "5px",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10px",
  },
  btnTxt: {
    fontSize: "22px",
  },
  viewLinks: {
    flexDirection: "row",
    width: "75%",
    justifyContent: "space-between",
    marginTop: "15px",
  },

  // Meus novos estilos

  containerTop: {
    width: "100%",
    height: "12%",
    backgroundColor: "white",
    paddingTop: "40px",
    paddingLeft: "40px",
    borderBottomEndRadius: "40px",
    borderBottomLeftRadius: "40px",
  },

  textoHeaderTop: {
    fontSize: "18pt",
    fontWeight: "bold",
  },

  containerDown: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "20px",
  },

  grafico: {
    width: "200px",
    height: "200px",
    marginBottom: "20px",
    borderRadius: "100%",
  },

  miniCotainer1: {
    width: "350px",
    height: "auto",
    backgroundColor: "white",
    borderRadius: "10px",
    marginBottom: "30px",
    padding: "20px",
  },

  textoTopo: {
    fontSize: "60pt",
    fontWeight: "bold",
  },
});

export default styles;
