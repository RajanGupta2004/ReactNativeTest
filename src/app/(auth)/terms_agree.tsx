import ButtonComp from "@/src/components/atoms/ButtonComp";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const TermsAgree = () => {
  const onAgree = () => {
    router.push("/(auth)/login");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleText}>Welcome to WhatsApp</Text>
        <Image style={styles.profileImage} source={{ uri: "" }} />
        <View style={styles.textContainer}>
          <Text style={styles.description_text}>
            Read our <Text style={styles.linKText}>Privacy and Policy</Text> Tap
            agree and continue to accept the{" "}
            <Text style={styles.linKText}>Terms of Service</Text>
          </Text>
          <View style={{ width: moderateScale(300) }}>
            <ButtonComp title="AGREE AND CONTINUE" onPress={onAgree} />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.from_text}>From</Text>
        <Text style={styles.facebook_text}>Facebook</Text>
      </View>
    </SafeAreaView>
  );
};

export default TermsAgree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: verticalScale(80),
    paddingHorizontal: scale(30),
  },

  header: {
    alignItems: "center",
    gap: 30,
  },

  titleText: {
    fontSize: moderateScale(23),
    fontWeight: "600",
  },

  profileImage: {
    width: moderateScale(250),
    height: moderateScale(250),
    borderRadius: 250,
    backgroundColor: "gray",
    marginTop: 10,
  },
  textContainer: {
    alignItems: "center",
    gap: 19,
  },
  description_text: {
    // alignItems: "center",
    textAlign: "center",
    fontSize: moderateScale(13),
  },
  linKText: {
    color: "blue",
  },
  footer: {
    alignItems: "center",
  },
  from_text: {
    color: "black",
    fontSize: scale(14),
  },

  facebook_text: {
    fontSize: verticalScale(17),
    textTransform: "capitalize",
  },
});
