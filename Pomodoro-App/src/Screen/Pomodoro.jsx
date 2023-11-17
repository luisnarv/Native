import { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Timer from "../components/Timer";
import UserTime from "../components/UserTime";

const mode = [
  { name: "Pomodoro", time: 25, color: "#F7CD6F" },
  { name: "Short Break", time: 5, color: "#A2D9CE" },
];

export default function App(props, { navigation }) {
  const [isWorking, setIsworking] = useState(false);
  const [active, setActive] = useState(false);
  const [currentMode, setCurrentmode] = useState({
    mode: mode[0].name,
    color: mode[0].color,
  });
  const [time, setTime] = useState(Number(props.route.params.user.time) * 60);
  function hanldeMode(name, color) {
    setCurrentmode({ mode: name, color: color });
    const time = name === "Pomodoro" ? 25 : name === "Short Break" ? 5 : 15;
    setTime(time * 60);
    setActive(false);
  }
  console.log(props.route.params.user, "esto es time");
  function handleActive() {
    setActive((active) => !active);
    Playsound();
  }

  async function Playsound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/play/misc197.mp3")
    );
    await sound.playAsync();
  }

  useEffect(() => {
    let interval = null;
    if (active) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    if (time <= 0) {
      hanldeMode(mode[1].name, modo[1].color);
    }

    return () => clearInterval(interval);
  }, [active, time]);

  return (
    <SafeAreaView
      style={[styles.containerIOS, { backgroundColor: currentMode.color }]}
    >
      <View style={styles.containerAndroid}>
        <Logo />
        {/* <Logo>{navigation}</Logo> */}
        <Header
          currentMode={currentMode}
          onCurrentMode={hanldeMode}
          mode={mode}
        />
        <Timer time={time} />
        <StatusBar style="auto" />
        <TouchableOpacity onPress={handleActive} style={styles.button}>
          <Text style={styles.active}>{active ? "Stop" : "Start"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerIOS: {
    flex: 1,
  },
  containerAndroid: [
    { paddingTop: Platform.OS === "android" && 30 },
    {
      paddingHorizontal: 15,
      flex: 1,
      borderRadius: 15,
    },
  ],

  button: {
    backgroundColor: "#333333",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },

  active: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 20,
  },
});
