//importtacion de librerias
import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//importacion de ventanas
import Registro from "../scenes/Registro";
import IniciarSesion from "../scenes/IniciarSesion";

const Stack = createStackNavigator();

export default function index() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registro">
        <Stack.Screen
          name="Registro"
          component={Registro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="IniciarSesion"
          component={IniciarSesion}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
