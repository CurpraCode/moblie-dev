import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Home from "./src/screens/Home";
import Details from "./src/screens/Detailed";

const Stack = createStackNavigator();
const App = () => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) return null;

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
