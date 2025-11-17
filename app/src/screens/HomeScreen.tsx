import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Text style={{ fontSize: 24 }}>Home</Text>

      <Button
        title="Go to Scales"
        onPress={() => navigation.navigate("Scales")}
      />

      <Button
        title="Go to Backing Tracks"
        onPress={() => navigation.navigate("BackingTracks")}
      />
    </View>
  );
}