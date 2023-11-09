import React from "react";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/home-screen";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
import ReadNews from "./screens/read-news-screen";
import "react-native-gesture-handler";
import MiniCard from "./components/mini-card.js/mini-card";

const Stack = createStackNavigator();

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="NewsApp" screenOptions={{}}>
          <Stack.Screen name="NewsApp" component={HomeScreen} />
          <Stack.Screen name="readNews" component={ReadNews} />
          <Stack.Screen name="MiniCard" component={MiniCard} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
