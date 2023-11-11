import { StyleSheet, ActivityIndicator } from "react-native";
import { Text, View } from "@gluestack-ui/themed";
import { FlatList } from "react-native-gesture-handler";
import { fetchData } from "../data/data-fetching";
import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import NewsCard from "../components/card/news-card";
import MiniCard from "../components/mini-card.js/mini-card";

export default function HomeScreen({ navigation }) {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      fetchData(
        "https://raw.githubusercontent.com/dauditts/pm-static-api/main/articles.json"
      )
        .then((data) => {
          setQuotes(data.articles);
        })
        .catch((error) => console.error("Error fetching data: ", error))
        .finally(() => setLoading(false));
    }, [])
  );

  function readNews(data) {
    navigation.push("readNews", { dataNews: data });
  }

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }
  const randomIndex = Math.floor(Math.random() * (quotes.length - 1)) + 1;

  return (
    <>
      <View style={styles.suggestionNews}>
        <NewsCard readNews={readNews} dataNews={quotes[randomIndex]} />
      </View>
      <View style={styles.allNews}>
        <Text size="lg" bold style={styles.newsHeaderText}>
          All News
        </Text>
        <FlatList
          data={quotes}
          renderItem={({ item }) => (
            <MiniCard readNews={readNews} dataNews={item} />
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  allNews: {
    marginHorizontal: 32,
    marginTop: 30,
    marginBottom: 10,
  },
});
