import React from "react";
import { View, Text, Button } from "react-native";



export default function HomeScreen({ navigation }: any) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 28, color: "white", fontWeight: "bold" }}>
        Home
      </Text>

      <Button
        title="Go to Scales"
        color="#1e90ff"
        onPress={() => navigation.navigate("Scales")}
      />

      <Button
        title="Go to Backing Tracks"
        color="#32cd32"
        onPress={() => navigation.navigate("BackingTracks")}
      />
    </View>
  );
}