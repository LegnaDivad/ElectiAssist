//importtacion de librerias
import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//importacion de ventanas
import PantallaInicial from "../scenes/PantallaInicial";
import Registro from "../scenes/Registro";
import IniciarSesion from "../scenes/IniciarSesion";
import Main from "../scenes/mainScenes/Main";

const Stack = createStackNavigator();
const Tab = createStackNavigator();

function MainTabs() {
  <Tab.Navigator>
    <Tab.Screen name="Registro" component={Registro} />
    <Tab.Screen name="IniciarSesion" component={IniciarSesion} />
    <Tab.Screen name="Main" component={Main} />
    <Tab.Screen name="PantallaInicial" component={PantallaInicial} />
  </Tab.Navigator>;
}

export default function index() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PantallaInicial">
        <Stack.Screen
          name="PantallaInicial"
          component={PantallaInicial}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="IniciarSesion"
          component={IniciarSesion}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
