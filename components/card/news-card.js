import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
import TextCard from "./text-card";
import { LinearGradient } from "expo-linear-gradient";

export default function NewsCard({ readNews, dataNews }) {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <Pressable onPress={() => readNews(dataNews)}>
      <ImageBackground
        style={styles.card}
        source={{
          uri: dataNews.image,
        }}
        imageStyle={{ borderRadius: 20 }}
        onLoadStart={() => setImageLoading(true)}
        onLoadEnd={() => setImageLoading(false)}
      >
        {imageLoading && (
          <ActivityIndicator
            size="large"
            color="#fff"
            style={styles.loadingIndicator}
          />
        )}
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={{ borderRadius: 20 }}
        >
          <TextCard data={dataNews} />
        </LinearGradient>
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 300,
    marginHorizontal: 30,
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 20,
    // marginLeft: 30, // Consider passing marginLeft as a prop if needed
  },
  loadingIndicator: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
});
