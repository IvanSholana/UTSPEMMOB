import React from "react";
import { Image, Text, View } from "@gluestack-ui/themed";
import { Pressable, StyleSheet } from "react-native";
import TextCard from "./text-card";

export default function MiniCard({ readNews, dataNews }) {
  return (
    <Pressable onPress={() => readNews(dataNews)}>
      <View style={styles.miniCard}>
        <Image
          alt="image"
          style={styles.image}
          source={{
            uri: `${dataNews.image}`,
          }}
        />
        <View style={styles.textContainer}>
          <TextCard data={dataNews} />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  miniCard: {
    marginHorizontal: 0,
    marginVertical: 10,
    flexDirection: "row",
  },
  image: {
    borderRadius: 10,
    marginRight: 10,
    flex: 1,
    height: "full",
  },
  textContainer: {
    flex: 1,
  },
});
