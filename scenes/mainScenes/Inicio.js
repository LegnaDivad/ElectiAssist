import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { Component } from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light_Italic,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black_Italic,
} from "@expo-google-fonts/montserrat";
import {
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";
import { Ionicons } from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("screen");

const Inicio = () => {
  const [vista, setVista] = useState("Inicio");
  const DATA = [
    {
      id: 1,
      img: require("../../assets/pictures/jonhFKennedy.jpg"),
      title: "Candidatos",
      icon: "bookmarks",
      key: "Candidatos",
    },
    {
      id: 2,
      img: require("../../assets/pictures/congreso.jpg"),
      title: "Legajos",
      key: "Legajos",
      icon: "book-sharp",
    },
  ];

  const Item = ({ img, title, key }) => (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: 270,
        height: 405,
        margin: 20,
        borderRadius: 20,
      }}
    >
      <TouchableOpacity onPress={() => setVista(key)} style={{ width: "100%" }}>
        <ImageBackground source={img} style={styles.image}>
          <View
            style={{
              width: "90%",
              height: 75,
              backgroundColor: "rgba(24,24,24,0.8)",
              borderRadius: 15,
              padding: 8,
              marginBottom: 20,
            }}
          >
            <Text style={{ fontFamily: "Montserrat_700Bold", color: "white" }}>
              {title}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );

  let [fontsLoaded] = useFonts(
    {
      Montserrat_100Thin,
      Montserrat_200ExtraLight,
      Montserrat_300Light,
      Montserrat_400Regular,
      Montserrat_500Medium,
      Montserrat_600SemiBold,
      Montserrat_700Bold,
      Montserrat_800ExtraBold,
      Montserrat_900Black,
      Montserrat_100Thin_Italic,
      Montserrat_200ExtraLight_Italic,
      Montserrat_300Light_Italic,
      Montserrat_400Regular_Italic,
      Montserrat_500Medium_Italic,
      Montserrat_600SemiBold_Italic,
      Montserrat_700Bold_Italic,
      Montserrat_800ExtraBold_Italic,
      Montserrat_900Black_Italic,
    },
    {
      Roboto_100Thin,
      Roboto_100Thin_Italic,
      Roboto_300Light,
      Roboto_300Light_Italic,
      Roboto_400Regular,
      Roboto_400Regular_Italic,
      Roboto_500Medium,
      Roboto_500Medium_Italic,
      Roboto_700Bold,
      Roboto_700Bold_Italic,
      Roboto_900Black,
      Roboto_900Black_Italic,
    }
  );

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.mainCont}>
        <View
          style={{
            alignItems: "flex-end",
            width: "90%",
            marginTop: "10%",
          }}
        >
          <TouchableOpacity onPress={() => console.log("Perfil")}>
            <Image
              source={require("@/assets/pictures/profile.jpg")}
              style={{
                width: 50,
                height: 50,
                resizeMode: "cover",
                borderRadius: 50,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.titleCont}>
          <Text style={styles.titleTxt}>Menú de inicio</Text>
        </View>

        <TextInput
          style={{
            width: "90%",
            height: 60,
            borderWidth: 1,
            borderColor: "#435058",
            borderRadius: 20,
            marginBottom: 20,
            padding: 20,
          }}
          placeholder="Buscar candidatos"
        />

        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item img={item.img} title={item.title} />}
          keyExtractor={(item) => String(item.id)}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    backgroundColor: "#E1E1E1",
    justifyContent: "center",
    alignItems: "center",
  },
  titleCont: {
    width: "90%",
    marginTop: "5%",
    marginBottom: "10%",
  },
  titleTxt: {
    fontSize: 30,
    fontFamily: "Montserrat_700Bold",
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "flex-end",
    overflow: "hidden",
  },
});

export default Inicio;
