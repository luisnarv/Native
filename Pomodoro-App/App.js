import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Screen from "./src/Screen/Screen";
import Pomodoro from "./src/Screen/Pomodoro";
import { useState } from "react";
import { UserProvider } from "./ContexApi";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <UserProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Screen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Pomodoro"
            component={Pomodoro}
            //  initialParams={{ user }}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </UserProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
