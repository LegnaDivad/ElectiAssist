import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Registro = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegistration = () => {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrate</Text>
      <Text style={styles.legend}>
        Date de alta llenando los siguientes datos
      </Text>

      <Text style={styles.Subtitle}>Nombre completo</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Francisco Pérez"
      />

      <Text style={styles.Subtitle}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="hey@tueemail.com"
      />

      <Text style={styles.Subtitle}>Contraseña</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="Ingresa una contraseña"
      />

      <TouchableOpacity
        onPress={handleRegistration}
        style={styles.buttonContainer}
      >
        <LinearGradient
          colors={["#435058", "#4A5861", "#687C88", "#758C9A", "#91ADBE"]}
          locations={[0, 0.47, 0.69, 0.8, 1]}
          style={styles.gradientButton}
        >
          <Text style={styles.buttonText}>Crear Cuenta</Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerTxt}>¿Ya tienes cuenta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("IniciarSesion")}>
          <Text style={styles.footerTxt}>Inicia Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#848E8C",
    padding: 20,
    justifyContent: "center",
    paddingLeft: 40,
    paddingRight: 40,
  },

  Subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    top: 120,
    left: 50,
  },
  legend: {
    fontSize: 17,
    fontWeight: "300",
    marginBottom: 20,
    color: "white",
    position: "absolute",
    top: 160,
    left: 50,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 2,
    borderColor: "#DCF763",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 100,
    left: 40,
    right: 40,
    borderRadius: 5,
    overflow: "hidden",
    marginBottom: 15,
  },
  gradientButton: {
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  // footer: {
  //   //position: "absolute",
  //   color: "white",
  //   bottom: 70,
  //   left: 40,
  //   right: 40,
  //   fontSize: 14,
  //   textAlign: "center",
  // },
  footer: {
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  footerTxt: {
    color: "white",
  },
});

export default Registro;
