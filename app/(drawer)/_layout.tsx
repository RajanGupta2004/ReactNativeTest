import { Drawer } from "expo-router/drawer";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen name="index" />
        <Drawer.Screen name="profile" />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;
