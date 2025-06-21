import { Redirect, Stack } from "expo-router";
import { useState } from "react";
// import * as SplashScreen from "expo-splash-screen";

const RootLayout = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {isLogin ? <Redirect to={"./(auth)"} /> : <Redirect to={"./(main)"} />}
    </Stack>
  );
};

export default RootLayout;
