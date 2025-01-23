import React from "react";
import { View, Text } from "react-native";
import fruits from "../components/Fruit";

const Index = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Fruits</Text>
      {fruits.map((fruit, index) => (
        <Text key={index}>{fruit}</Text>
      ))}
    </View>
  );
};

export default Index;

