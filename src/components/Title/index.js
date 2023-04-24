import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./style";
export default function Title() {
  const [title, setTitle] = useState("ONEBITHEALTH");

  return (
    <View style={styles.boxTitle}>
      <Text style={styles.textTitle}>{title} </Text>
    </View>
  );
}
