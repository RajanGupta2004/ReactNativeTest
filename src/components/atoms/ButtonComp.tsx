import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const ButtonComp = ({ title, onPress, style }: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, style]}
      activeOpacity={0.8}
    >
      <Text style={styles.button_text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#00A884",
    width: "100%",
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(10),
    borderRadius: 6,
    alignItems: "center",
  },
  button_text: {
    color: "white",
    fontSize: moderateScale(13),
  },
});
