import React, { useState } from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";

export default function UserTime({ time, Break }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Time</Text>
      <TextInput
        keyboardType="numeric"
        editable
        multiline
        numberOfLines={4}
        maxLength={2}
        onChangeText={time}
        // value={time}
        style={[styles.input]}
        placeholder="25"
        placeholderTextColor="#a9a6a6"
      />
      <Text style={styles.text}>Break</Text>
      <TextInput
        keyboardType="numeric"
        editable
        multiline
        numberOfLines={4}
        maxLength={2}
        onChangeText={Break}
        // value={Break}
        style={[styles.input]}
        placeholder="5"
        placeholderTextColor="#a9a6a6"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { fontWeight: "400", fontSize: 20, marginBottom: 5 },
  input: {
    width: 200,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 20,
    height: 50,
    padding: 10,
    textAlign: "center",
  },
});
