import React from "react";
import { Image, Text, View } from "@gluestack-ui/themed";
import { Pressable, StyleSheet } from "react-native";
import TextCard from "./text-card";

export default function MiniCard({ readNews, dataNews }) {
  return (
    <>
      <Pressable onPress={() => readNews(dataNews)}>
        <View style={style.minicard}>
          <Image
            alt="image"
            mr={"$2"}
            size="lg"
            borderRadius="$xl"
            source={{
              uri: `${dataNews.image}`,
            }}
          />
          <View style={{ flex: 1 }}>
            <TextCard judul={dataNews.title} />
          </View>
        </View>
      </Pressable>
    </>
  );
}

const style = StyleSheet.create({
  minicard: {
    marginHorizontal: 32,
    marginVertical: 10,
    flexDirection: "row",
  },
});
