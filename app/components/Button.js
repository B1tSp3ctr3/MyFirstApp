import React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";
import colors from "../config/colors";

function AppButton({
  title,
  onPress,
  color = "primary",
  underlayColor = "#ffffff",
}) {
  return (
    <TouchableHighlight
      style={[styles.button, { backgroundColor: colors[color] }]}
      underlayColor={underlayColor}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 1000,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: "100%",
    height: "50",
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
export default AppButton;
