import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Button({ disabled, style, onEvent, children }) {
  return (
    <TouchableOpacity disabled={disabled} onPress={onEvent} style={style}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "400",
    fontSize: 20,
  },
});
