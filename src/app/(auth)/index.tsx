import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";
import imagePath from "../../constants/imagePath";
const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate_to_welcome = () => {
    router.push("/(auth)/terms_agree");
  };

  const loading_timeout = () => {
    setIsLoading(true);
    setTimeout(navigate_to_welcome, 2000);
  };

  useEffect(() => {
    setTimeout(loading_timeout, 2000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View></View>
      <View style={styles.body}>
        <Image
          style={styles.whatsappImg}
          source={imagePath.logo}
          resizeMode="contain"
        />
        <Text style={styles.whatsappText}>Whatsapp</Text>
      </View>
      <View style={styles.footer}>
        {isLoading ? (
          <View>
            <ActivityIndicator color={"green"} size={48} />
            <Text>Loading...</Text>
          </View>
        ) : (
          <>
            <Text style={styles.from_text}>from</Text>
            <Text style={styles.faceboo_text}>Facebook</Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: verticalScale(40),
  },
  body: {
    alignItems: "center",
  },
  whatsappImg: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: 10,
  },
  whatsappText: {
    fontSize: 35,
    color: "black",
  },
  footer: {
    alignItems: "center",
    height: 80,
  },
  from_text: {
    fontSize: 15,
  },
  faceboo_text: {
    fontSize: 16,
    color: "black",
  },
});

export default Auth;
