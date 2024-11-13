import {
  Text,
  StyleSheet,
  View,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const IniciarSesion = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.Main}>
      <Image
        style={styles.picture}
        source={{
          uri: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      />
      <View style={styles.bottomPart}>
        <View style={styles.titleCont}>
          <Text style={styles.titleTxt}>Iniciar sesión</Text>
          <Text style={styles.subtitleTxt}>
            Accede a la aplicación con tu cuenta
          </Text>
        </View>
        <View style={styles.formCont}>
          <Text style={styles.titleFormTxt}>Email</Text>
          <TextInput
            style={styles.inputForm}
            value={email}
            onChangeText={setEmail}
            placeholder="hey@tueemail.com"
          />
          <Text style={styles.titleFormTxt}>Contraseña</Text>
          <TextInput
            style={styles.inputForm}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="Ingresa una contraseña"
          />
        </View>
        {/* <View
          style={{
            alignItems: "center",
            width: "70%",
            height: "4%",
            marginLeft: "14%",
          }}
        > */}
        {/* <LinearGradient
          colors={["#4A6572", "#647C90"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientBackground}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Registro")}
            style={styles.btnRegister}
          >
            <Text style={styles.btnInicioTxt}>Iniciar sesión</Text>
          </TouchableOpacity>
        </LinearGradient> */}

        <TouchableOpacity
          onPress={navigation.navigate("Main")}
          style={styles.buttonContainer}
        >
          <LinearGradient
            colors={["#435058", "#4A5861", "#687C88", "#758C9A", "#91ADBE"]}
            locations={[0, 0.47, 0.69, 0.8, 1]}
            style={styles.gradientButton}
          >
            <Text style={styles.btnInicioTxt}>Iniciar Sesión</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* </View> */}

        <View style={styles.footer}>
          <Text style={styles.footerTxt}>¿Aún no tienes cuenta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Registro")}>
            <Text style={[styles.footerTxt, { fontWeight: "bold" }]}>
              Registrarse
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#848E8C",
  },
  bottomPart: {
    //backgroundColor: "yellow",
    width: "90%",
    height: "100%",
    marginTop: "-15%",
  },
  picture: {
    resizeMode: "contain",
    width: 500,
    height: 500,
    marginTop: "-25%",
  },
  titleCont: {
    //backgroundColor: "red",
    gap: 12,
  },
  titleTxt: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitleTxt: {
    color: "white",
    fontSize: 14,
  },
  formCont: {
    //backgroundColor: "green",
    marginTop: "4%",
    height: "30%",
    gap: 20,
  },
  titleFormTxt: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  inputForm: {
    borderWidth: 4,
    borderColor: "#DCF763",
    height: "25%",
    //backgroundColor: "red",
    borderRadius: 10,
    paddingLeft: 12,
  },
  btnRegister: {
    //backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    height: "4%",
    marginTop: "8%",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  btnInicioTxt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  footer: {
    //backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "0%",
    gap: 12,
  },
  footerTxt: {
    color: "white",
  },
  gradientButton: {
    //paddingVertical: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonContainer: {
    width: "80%",
    height: "5%",
    borderRadius: 5,
    //overflow: "hidden",
    marginTop: "8%",
    marginLeft: "10%",
    borderWidth: 1,
    borderColor: "black",
  },
});

export default IniciarSesion;
