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

const Inicio = () => {
  const navigation = useNavigation();

  const DATA = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1541876788-2221e585da7f?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Candidatos",
      icon: "bookmarks",
    },
    {
      id: 2,
      img: "https://letraslibres.com/wp-content/uploads/2019/07/congreso.jpg",
      title: "Casillas",
      icon: "book-sharp",
    },
    {
      id: 3,
      img: "https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2018/01/Vota-Inteligente-banner-6.png",
      title: "Procesos",
      icon: "book-sharp",
    },
  ];

  const Item = ({ img, title }) => (
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
      <TouchableOpacity
        onPress={() => navigation.navigate(title)}
        style={{ width: "100%" }}
      >
        <ImageBackground source={{ uri: img }} style={styles.image}>
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
              source={{
                uri: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
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
