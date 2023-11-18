import { View, SafeAreaView, StyleSheet, Platform, Text } from "react-native";
import { useEffect } from "react";

export default function Timer({ time, handleMode, mode, setTime, active }) {
  const formatedTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, 0)}:${(time % 60).toString().padStart(2, 0)}`;

  useEffect(() => {
    let interval = null;

    if (active) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1);
    } else {
      clearInterval(interval);
    }
    if (time <= 0) {
      const name = mode === "Pomodoro" ? "Break" : "Pomodoro";
      handleMode(name);
    }

    return () => clearInterval(interval);
  }, [active, time]);

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formatedTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    backgroundColor: "#F2F2F2",
    padding: 15,
    borderRadius: 15,
    justifyContent: "center",
  },
  time: {
    fontSize: 80,
    fontWeight: "bold",
    textAlign: "center",
  },
});
