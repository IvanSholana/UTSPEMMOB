import { StyleSheet } from "react-native";
import NewsCard from "../components/card/news-card";
import { Text, View } from "@gluestack-ui/themed";
import MiniCard from "../components/mini-card.js/mini-card";
import { FlatList } from "react-native-gesture-handler";
import FloatingButton from "../components/floating-button.js/floating-button";
import { fetchData } from "../data/data-fetching";
import { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

export default function HomeScreen({ navigation }) {
  const [quotes, setQuotes] = useState([]);

  useFocusEffect(
    useCallback(() => {
      fetchData(
        "https://raw.githubusercontent.com/dauditts/pm-static-api/main/articles.json"
      ).then((data) => {
        setQuotes(data.articles);
      });
    }, [])
  );

  function ReadNews(data) {
    navigation.push("readNews", { dataNews: data });
  }
  var nilaiRandom = Math.floor(Math.random() * (quotes.length - 0 + 1)) + 0;

  return (
    <>
      <View style={style.suggestionNews}>
        <NewsCard readNews={ReadNews} dataNews={quotes[nilaiRandom]} />
      </View>
      <View style={style.allNews}>
        <Text
          size="lg"
          bold
          style={{ marginHorizontal: 32, marginTop: 30, marginBottom: 10 }}
        >
          All News
        </Text>
        <FlatList
          data={quotes}
          renderItem={({ item }) => (
            <MiniCard readNews={ReadNews} dataNews={item} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={style.floatingbutton}>
        <FloatingButton />
      </View>
    </>
  );
}

const style = StyleSheet.create({
  floatingbutton: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    alignItems: "center",
  },
});
