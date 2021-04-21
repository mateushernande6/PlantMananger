import React from "react";
import {
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/core";
import { Feather } from "@expo/vector-icons";

import watering from "../../../assets/watering.png";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Welcome = () => {
  const navigation = useNavigation();

  const handleStart = () => {
    navigation.navigate("UserIdentification");
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.wrapper}>
        <Text style={style.title}>
          Gerencie {"\n"}
          suas plantas de {"\n"}
          forma fácil
        </Text>

        <Image source={watering} style={style.image} resizeMode="contain" />

        <Text style={style.subTitle}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Text>

        <TouchableOpacity
          style={style.button}
          activeOpacity={0.7}
          onPress={handleStart}
        >
          <Feather name="chevron-right" style={style.buttonIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: Platform.OS === "android" ? 45 : 0,
    paddingBottom: Platform.OS === "android" ? 30 : 0,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 34,
  },
  subTitle: {
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  image: {
    height: Dimensions.get("window").width * 0.7,
  },
  button: {
    backgroundColor: colors.green,
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    marginBottom: 10,
  },

  buttonIcon: {
    fontSize: 32,
    color: colors.white,
  },
});
