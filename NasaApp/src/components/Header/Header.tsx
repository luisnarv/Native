import { Text, View, Image, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.text}>Explore</Text>
      </View>
      <View style={styles.rightContainer}>
        <Image
          style={styles.img}
          source={require("../../../assets/Image/N-logo.png")}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  leftContainer: { width: "50%" },
  text: { fontSize: 30, fontWeight: "600" },
  rightContainer: { width: "50%", alignItems: "flex-end" },
  img: {
    width: 100,
    height: 100,
  },
});
