import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Button,
  Linking,
} from "react-native";
import { Heading, Text, Image } from "@gluestack-ui/themed";

export default function ReadNews({ route }) {
  const { dataNews } = route.params;

  if (!dataNews) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.imageStyle}>
        <Image
          alt="image"
          size="full"
          borderBottomLeftRadius={styles.borderRadius}
          borderBottomRightRadius={styles.borderRadius}
          source={{
            uri: dataNews.image,
          }}
        />
      </View>
      <View style={styles.newsContent}>
        <Heading style={styles.heading}>{dataNews.title}</Heading>
        <Text style={styles.date}>{dataNews.date}</Text>
        <View style={styles.horizontalLine} />
        <Text style={styles.content}>{dataNews.content}</Text>
      </View>
      <Button
        title="Read More"
        onPress={() => Linking.openURL(dataNews.link)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    width: "100%",
    height: 200,
  },
  borderRadius: 20,
  horizontalLine: {
    marginVertical: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  newsContent: {
    margin: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  date: {
    fontSize: 14,
    color: "gray",
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});
