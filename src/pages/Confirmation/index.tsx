import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/core";

export const Confirmation = () => {
  const navigation = useNavigation();

  // const handleSubmit = () => {
  //   navigation.navigate("Confirmation");
  // };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.content}>
        <Text style={style.emoji}>😄</Text>
        <Text style={style.title}>Prontinho</Text>
        <Text style={style.subTitle}>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>
        <View style={style.footer}>
          <Button title="Começar" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 30,
  },
  emoji: {
    fontSize: 78,
  },
  title: {
    fontSize: 24,
    color: colors.heading,
    fontFamily: fonts.heading,
    textAlign: "center",
    lineHeight: 38,
    marginTop: 15,
  },
  subTitle: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.text,
    textAlign: "center",
    paddingVertical: 10,
  },
  footer: {
    width: "100%",
    paddingHorizontal: 50,
    marginTop: 20,
  },
});
