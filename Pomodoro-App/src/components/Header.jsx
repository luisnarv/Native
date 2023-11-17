import Timer from "./Timer";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Header({ currentMode, onCurrentMode, mode }) {
  function handleMode(name, color) {
    onCurrentMode(name, color);
  }
  return (
    <View style={styles.display}>
      {mode.map((e, i) => (
        <TouchableOpacity
          onPress={() => handleMode(e.name, e.color)}
          key={i}
          style={[
            styles.item,
            currentMode.mode !== e.name && { borderColor: "transparent" },
          ]}
        >
          <Text style={styles.text}>{e.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    flexDirection: "row",
  },

  item: {
    width: "33%",
    fontWeight: "bold",
    borderWidth: 3,
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
    borderColor: "white",
    marginVertical: 20,
  },
  text: {
    fontWeight: "bold",
  },
});
