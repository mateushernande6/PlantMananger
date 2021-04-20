import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import colors from "../../styles/colors";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity {...rest} style={style.button} activeOpacity={0.7}>
      <Text style={style.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    marginBottom: 10,
  },

  buttonText: {
    fontSize: 45,
    color: "white",
    fontWeight: "bold",
    lineHeight: 56,
  },
});
