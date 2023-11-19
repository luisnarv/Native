import { FC } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { PostImage } from "../../types";

const TodayImage: FC<PostImage> = ({
  date,
  explanation,
  hdurl,
  media_type,
  service_version,
  title,
  url,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{ uri: url }} />
      </View>
      <View style={styles.imageContainer}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.containerData}>
          <Text style={styles.text}>{date}</Text>

          <TouchableOpacity style={styles.button}>
            <Text>View</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderRadius: 12,
    shadowColor: "#bbbbbb",

    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 5,
    shadowOpacity: 0.9,
    elevation: 2.5,
  },
  title: {
    fontWeight: "700",
    fontSize: 20,
    textAlign: "left",
  },
  imageContainer: {
    backgroundColor: "#EDEDED",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  containerData: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  image: { width: "100%", height: 200, borderRadius: 5 },
  text: {
    flex: 1,
    fontSize: 15,
    alignContent: "flex-start",
  },
  button: {
    shadowColor: "#000000",

    shadowOffset: {
      width: 0,
      height: 0,
    },

    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 1,

    textAlign: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#B3B3B3",
    borderRadius: 5,
    padding: 5,
  },
});

export default TodayImage;
