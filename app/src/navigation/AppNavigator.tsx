import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ScalesScreen from "../screens/ScalesScreen";
import BackingTrackScreen from "../screens/BackingTrackScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scales" component={ScalesScreen} />
        <Stack.Screen name="BackingTracks" component={BackingTrackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}