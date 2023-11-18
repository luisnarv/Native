import Timer from "./Timer";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Header({ currentMode, onCurrentMode, mode }) {
  function handleMode(name) {
    onCurrentMode(name);
  }
  return (
    <View style={styles.display}>
      {mode.map((e, i) => (
        <TouchableOpacity
          onPress={() => handleMode(e)}
          key={i}
          style={[
            styles.item,
            currentMode !== e && { borderColor: "transparent" },
          ]}
        >
          <Text style={styles.text}>{e}</Text>
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
    width: "50%",
    fontWeight: "400",
    borderWidth: 3,
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
    borderColor: "white",
    marginVertical: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "400",
  },
});
