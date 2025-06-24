import ButtonComp from "@/src/components/atoms/ButtonComp";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { CountryPicker } from "react-native-country-codes-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [countryCode, setCountryCode] = useState("91");
  const [countryName, setCountryName] = useState("India");
  const Go_to_verifyOTP = () => {
    router.push("/(auth)/verify_otp");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading_text}>Enter Your Phone Number</Text>
          <Text style={styles.description}>
            Whatsapp will need to verify phone number{" "}
            <Text style={styles.link_text}>Whats my number</Text>
          </Text>
        </View>
        <View style={styles.input_main_container}>
          <TouchableOpacity
            onPress={() => setVisible(true)}
            style={styles.india_text_container}
          >
            <View />
            <Text style={{ fontSize: moderateScale(14), fontWeight: "bold" }}>
              {countryName}
            </Text>
            <AntDesign name="caretdown" size={15} color="black" />
          </TouchableOpacity>
          <View style={styles.horizontal_line} />

          <View style={styles.input_container}>
            <View style={{}}>
              <Text style={{ fontSize: moderateScale(17), fontWeight: "500" }}>
                {countryCode}
              </Text>
              <View style={styles.horizontal_line} />
            </View>
            <View style={{ flex: 1 }}>
              <TextInput
                style={{ fontSize: moderateScale(17), fontWeight: "500" }}
                placeholder="Enter your phone number..."
              />
              <View style={styles.horizontal_line} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonComp
          title="Next"
          style={{ paddingHorizontal: scale(20) }}
          onPress={Go_to_verifyOTP}
        />
      </View>

      {visible && (
        <CountryPicker
          show={true}
          inputPlaceholder={"Your country name"}
          enableModalAvoiding={true}
          onBackdropPress={() => setVisible(false)}
          pickerButtonOnPress={(item) => {
            setCountryCode(item.dial_code);
            setCountryName(item.name?.ee);
            setVisible(false);
          }}
          lang={"pl"}
          style={{
            // Styles for whole modal [View]
            modal: {
              height: 500,
              // backgroundColor: "red",
            },
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: verticalScale(70),
    paddingHorizontal: scale(20),
    backgroundColor: "white",
  },
  header: {
    marginTop: 10,
    gap: 30,
  },

  footer: {},
  headingContainer: {
    alignItems: "center",
    gap: 10,
  },
  input_main_container: {},
  input_container: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(20),
    paddingVertical: verticalScale(12),
  },
  heading_text: {
    fontSize: verticalScale(20),
    fontWeight: "bold",
  },

  description: {
    textAlign: "center",
    fontSize: moderateScale(13),
    fontWeight: 400,
    color: "black",
  },

  link_text: {
    color: "blue",
  },
  horizontal_line: {
    width: "100%",
    height: 2,
    backgroundColor: "#00A884",
  },
  india_text_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(10),
  },
});
