import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/Header";
import API from "../../utils/fetch";
import TodayImage from "../../components/todayImage";

const Home = () => {
  const [imageToday, setImageToday] = useState({});

  useEffect(() => {
    const imageDToday = async () => {
      try {
        const dataImage = await API();
        setImageToday(dataImage);
      } catch (error) {
        console.log(error);
        setImageToday({});
      }
    };

    imageDToday().catch(null);
  }, []);

  console.log(imageToday);
  return (
    <View style={styles.container}>
      <Header />
      <TodayImage {...imageToday} />
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20 },
});
