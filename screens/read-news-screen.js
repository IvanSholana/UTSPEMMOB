import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Heading, Text } from "@gluestack-ui/themed";
import { Image } from "@gluestack-ui/themed";

export default function ReadNews({ route }) {
  const { dataNews } = route.params;

  return (
    <ScrollView>
      <View style={styles.imageStyle}>
        <Image
          alt="image"
          mr={"$2"}
          size="full"
          borderBottomLeftRadius={"$3xl"}
          borderBottomRightRadius={"$3xl"}
          source={{
            uri: `${dataNews.image}`,
          }}
        />
      </View>
      <View style={styles.newsContent}>
        <Text style={styles.category}>Technology</Text>
        <Heading style={styles.heading}>{dataNews.title}</Heading>
        <Text style={styles.date}>{dataNews.date}</Text>
        <View style={styles.horizontalLine} />
        <Text style={styles.content}>{dataNews.content}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: "100%",
    height: 200,
  },
  horizontalLine: {
    marginVertical: 10,
    borderBottomColor: "gray", // Ganti warna garis horizontal
    borderBottomWidth: 1,
  },
  newsContent: {
    margin: 20, // Mengurangi margin agar konten lebih terpusat
  },
  category: {
    fontSize: 16,
    fontWeight: "bold",
    color: "blue", // Ganti warna kategori
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10, // Menambahkan margin di atas dan di bawah judul
  },
  date: {
    fontSize: 14,
    color: "gray", // Ganti warna tanggal
  },
  content: {
    fontSize: 16,
    lineHeight: 24, // Menambahkan jarak antar baris teks
  },
});
