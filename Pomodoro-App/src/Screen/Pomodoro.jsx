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

import { useUser } from "../../ContexApi";
import { Audio } from "expo-av";

//time: 5, color: "#A2D9CE"
//time: 25, color: "#F7CD6F"
const mode = ["Pomodoro", "Break"];

export default function App({ navigation }) {
  const { user, setUser } = useUser();
  const [currentMode, setCurrentmode] = useState("Pomodoro");
  const [time, setTime] = useState(Number(user.time) * 60);
  const [active, setActive] = useState(false);

  const [isWorking, setIsworking] = useState(false);

  function handleMode(name) {
    const time = name === "Pomodoro" ? user.time : user.break;
    setTime(time * 60);
    setActive(false);
    setCurrentmode(name);
  }

  function handleActive() {
    setActive((active) => !active);
    Playsound();
    setIsworking((isWorking) => !isWorking);
  }

  async function Playsound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/play/misc197.mp3")
    );
    await sound.playAsync();
  }

  return (
    <SafeAreaView
      style={[
        styles.containerIOS,
        currentMode === "Pomodoro"
          ? { backgroundColor: "#FAD981" }
          : { backgroundColor: "#4688dd" },
      ]}
    >
      <View style={styles.containerAndroid}>
        <Logo />

        <Header
          currentMode={currentMode}
          onCurrentMode={handleMode}
          mode={mode}
        />
        <Timer
          time={time}
          handleMode={handleMode}
          mode={currentMode}
          setTime={setTime}
          active={active}
        />

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
    backgroundColor: "#000000bd",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },

  active: {
    color: "#fff",
    fontWeight: "500",
    textTransform: "uppercase",
    fontSize: 20,
  },
});

//-----------------------------------------------------------------------------------

// useEffect(() => {
//   let interval = null;
//   console.log(isWorking, "trabajo");
//   console.log(currentMode, "modo");

//   if (currentMode === "Pomodoro" && !isWorking && active) {
//     let time = Number(user.time) * 60;
//     setTime(time);
//   } else if (currentMode !== "Pomodoro" && !isWorking && active) {
//     setTime(Number(user.break) * 60);
//   }

//   if (active) {
//     interval = setInterval(() => {
//       setTime(time - 1);
//     }, 1);
//   } else {
//     clearInterval(interval);
//   }
//   if (time <= 0) {
//     currentMode === "Pomodoro"
//       ? setCurrentmode("Break")
//       : setCurrentmode("Pomodoro");
//     setIsworking(false);
//   }

//   return () => clearInterval(interval);
// }, [active, time, currentMode]);
