import { Redirect, Stack } from "expo-router";
import { useState } from "react";
// import * as SplashScreen from "expo-splash-screen";

const RootLayout = () => {
  const [isLogin, setIsLogin] = useState(true);
  // useEffect(() => {
  //   const token = storage.getString("access_token");
  //   console.log("token", token);
  //   if (token) {
  //     setIsLogin(true);
  //   }
  // }, []);
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {isLogin ? <Redirect to={"./(auth)"} /> : <Redirect to={"./(main)"} />}
    </Stack>
  );
};

export default RootLayout;
