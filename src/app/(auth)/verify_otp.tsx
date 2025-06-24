import ButtonComp from "@/src/components/atoms/ButtonComp";
// import { storage } from "@/src/utils/utils";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");

  // const onPress = () => {
  //   console.log("otp", otp);
  //   storage.set("access_token", "qwertyuiopoiiuytrtrvbbnn");
  // };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <AntDesign name="arrowleft" size={26} color="black" />
        <Text style={styles.enter_opt_text}>Enter OTP text</Text>
      </View>
      <View style={styles.body}>
        <Text>Code has been send to +91 11........98</Text>
        <OtpInput
          numberOfDigits={4}
          onTextChange={(text) => setOtp(text)}
          theme={{
            pinCodeContainerStyle: styles.pinCodeContainer,
          }}
        />
        <Text>
          Resend code in <Text>90</Text>s
        </Text>
      </View>
      <View style={styles.footer}>
        <ButtonComp
          title="Verify"
          style={{ borderRadius: 100 }}
          // onPress={onPress}
        />
      </View>
    </SafeAreaView>
  );
};

export default VerifyOTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingVertical: verticalScale(20),
    paddingHorizontal: scale(20),
  },
  head: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },

  enter_opt_text: {
    fontSize: moderateScale(23),
    fontWeight: "bold",
  },
  body: {
    alignItems: "center",
    gap: 25,
  },
  footer: {},

  pinCodeContainer: {
    color: "black",
    borderColor: "black",
    gap: 10,
    width: 60,
  },
});
