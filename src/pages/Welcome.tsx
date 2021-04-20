import React from "react";
import {
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";

import watering from "../../assets/watering.png";
import { Button } from "../components/Button";
import colors from "../styles/colors";

export const Welcome = () => {
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.title}>
        Gerencie {"\n"}
        suas plantas {"\n"}
        de forma fácil
      </Text>

      <Image source={watering} style={style.image} />

      <Text style={style.subTitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>
      <Button title=">" />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "android" ? 45 : 0,
    paddingBottom: Platform.OS === "android" ? 30 : 0,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
  },
  subTitle: {
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 292,
    height: 284,
  },
});
