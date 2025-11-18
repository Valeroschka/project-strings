import React from "react";
import { View, Text, Button } from "react-native";

export default function ScalesScreen({navigation}:any) {
  return (
    <View style= {{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Text style= {{fontSize:20, color:"white"}}>Hier kommen später die Skalen hin 🎸</Text>
      <Text style = {{fontSize:20, color: "white"}}>Es wird schon alles klappen</Text>
      <Button
              title="Go to Backing Tracks"
              color="#White"
              onPress={() => navigation.navigate("BackingTracks")}
            />
    
    
    </View>
    
  );
}