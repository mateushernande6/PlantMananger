import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView, //Permite com que o apareça todos os componentes da tela com teclado aberto
  Platform,
  TouchableWithoutFeedback, //Permite com que o usuario feche o keyboard de qualquer lugar da tela
  Keyboard,
} from "react-native";

import { Button } from "../../components/Button";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const UserIdentification = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();
  const navigation = useNavigation();

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!name);
  };
  const handleInputFocus = () => {
    setIsFocused(true);
  };
  const handleInputChange = (value: string) => {
    setIsFilled(!!value);
    setName(value);
  };

  const handleSubmit = () => {
    navigation.navigate("Confirmation");
  };

  return (
    <SafeAreaView style={style.container}>
      <KeyboardAvoidingView
        style={style.container}
        behavior={Platform.OS === "android" ? "height" : "padding"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={style.content}>
            <View style={style.form}>
              <View style={style.header}>
                <Text style={style.emoji}>{isFilled ? "😄" : "😃"}</Text>
                <Text style={style.title}>
                  Como podemos {"\n"}
                  chamar você?
                </Text>
              </View>
              <TextInput
                style={[
                  style.input,
                  (isFocused || isFilled) && { borderColor: colors.green },
                ]}
                placeholder="Digite um nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />
              <View style={style.footer}>
                <Button title="Confirmar" onPress={handleSubmit} />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    width: "100%",
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    color: colors.heading,
    marginTop: 20,
    textAlign: "center",
    fontFamily: fonts.heading,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 54,
    alignItems: "center",
  },
  header: {
    alignItems: "center",
  },
  emoji: {
    fontSize: 54,
  },
  input: {
    width: "100%",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: colors.gray,
    fontSize: 18,
    color: colors.heading,
    marginTop: 50,
    textAlign: "center",
  },
  footer: {
    marginTop: 40,
    width: "100%",
    paddingHorizontal: 20,
  },
});
