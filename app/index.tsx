//importtacion de librerias
import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//importacion de ventanas
import Registro from "../scenes/Registro";
import IniciarSesion from "../scenes/IniciarSesion";
import Main from "../scenes/mainScenes/Main";
import Candidatos from "@/scenes/options/Candidatos";
import Casillas from "@/scenes/options/Casillas";
import Procesos from "@/scenes/options/Procesos";

const Stack = createStackNavigator();
const Tab = createStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default function index() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="IniciarSesion"
          component={IniciarSesion}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registro"
          component={Registro}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Candidatos"
          component={Candidatos}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Casillas"
          component={Casillas}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Procesos"
          component={Procesos}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
