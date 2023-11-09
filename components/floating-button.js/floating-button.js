import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function FloatingButton() {
  return (
    <View style={styles.floatingButton}>
      <TouchableOpacity onPress={() => {}} style={styles.comment}>
        <Icon name="home" size={20} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.comment}>
        <Icon name="star" size={20} color="gray" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    flexDirection: "row",
    position: "absolute",
    bottom: 10,
    width: "70%",
    height: 45,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "white",
  },
  comment: {
    borderRadius: 20,
    padding: 10,
  },
});
