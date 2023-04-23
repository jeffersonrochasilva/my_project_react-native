import React, { useState } from "react";
import { View, Text } from "react-native";

export default function Title() {
  const [title, setTitle] = useState("ONEBITHEALTH");

  return (
    <View>
      <Text>{title} </Text>
    </View>
  );
}
