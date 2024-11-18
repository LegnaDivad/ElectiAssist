import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Asistencia from "./Asistencia";
import Inicio from "./Inicio";
import Perfil from "./Perfil";

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Inicio") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Asistencia") {
            iconName = focused
              ? "chatbubble-ellipses"
              : "chatbubble-ellipses-outline";
          } else if (route.name === "Perfil") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "black",
        tabBarStyle: {
          backgroundColor: "#E1E1E1",
        },
      })}
    >
      <Tab.Screen
        name="Inicio"
        component={Inicio}
        options={{ tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="Asistencia"
        component={Asistencia}
        options={{ tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{ tabBarShowLabel: false }}
      />
    </Tab.Navigator>
  );
};

export default Main;
