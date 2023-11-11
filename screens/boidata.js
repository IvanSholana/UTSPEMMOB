import React from "react";
import {
  View,
  Text,
  Center,
  Button,
  ButtonText,
  ButtonIcon,
  AddIcon,
} from "@gluestack-ui/themed";
import { Image, StyleSheet } from "react-native";
import { ImageBackground } from "react-native";

export default function Biodata({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/DSC05394.jpg")}
        borderRadius={30}
        style={styles.imageBackground}
      />
      <Center>
        <View style={styles.profile}>
          <Text style={styles.name}>Ivan Sholana</Text>
          <Text style={styles.nim}>1203210030</Text>
        </View>
      </Center>
      <Image
        alt="image"
        source={require("../assets/IF.png")}
        style={styles.IF}
      />
      <Button
        style={{ marginTop: -30 }}
        size="md"
        variant="outline"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        onPress={() => {
          navigation.navigate("NewsApp");
        }}
      >
        <ButtonText>LOGIN</ButtonText>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    marginHorizontal: 20,
    width: "90%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  imageBackground: {
    width: "100%",
    height: "80%",
  },
  profile: {
    width: "80%",
    height: 60,
    position: "absolute",
    bottom: 130,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    zIndex: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
  },
  nim: {
    marginTop: -5,
    fontSize: 10,
    color: "black",
  },
  IF: {
    marginTop: -150,
    height: 150,
    width: 150,
    resizeMode: "contain",
  },
});
