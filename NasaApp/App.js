import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import Home from "./src/screen/Home.txs/Home";

export default function App() {
  //console.log(fet);
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
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
