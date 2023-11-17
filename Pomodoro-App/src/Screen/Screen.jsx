import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import UserTime from "../components/UserTime";
import Button from "../components/button";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import { useUser } from "../../ContexApi";

export default function Screen({ navigation }) {
  const { user, setUser } = useUser();
  const [Time, setTime] = useState(0);
  const [Break, setBreak] = useState(0);

  console.log(user, "esto es practica");
  function naviGation() {
    setUser({ time: Time, break: Break });
    setTimeout(() => navigation.navigate("Pomodoro"), 1000);
  }

  return (
    <SafeAreaView style={[styles.containerIOS, { backgroundColor: "#FAD981" }]}>
      <View style={[styles.container]}>
        <StatusBar style="auto" />

        <Text style={styles.text}>Pomodoro</Text>
        <UserTime time={setTime} Break={setBreak} />
        <Button
          onEvent={naviGation}
          style={[styles.item, styles.boxShadow]}
          disabled={!Time || !Break ? true : ""}
        >
          Iniciar
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerIOS: {
    flex: 1,
  },
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: {
    fontSize: 40,
    flex: 0.4,
    fontWeight: "300",
    textAlign: "center",
    textTransform: "uppercase",
  },
  item: {
    width: 200,
    justifyContent: "center",
    marginTop: 100,
    height: 50,
    alignItems: "center",
    padding: 5,
    borderRadius: 15,
    backgroundColor: "#F9E9C1",
  },
  boxShadow: {
    shadowColor: "#000000",

    shadowOffset: {
      width: 6,
      height: 6,
    }, //sombra IOS

    shadowOpacity: 0.1, //shadowOpacity: Opacidad de la sombra [iOS]

    shadowRadius: 1, // Radio de la sombra [iOS]
    elevation: 5, //Agrega sombra en Android [Android]
  },
});
