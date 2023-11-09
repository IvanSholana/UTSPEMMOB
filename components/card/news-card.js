import { ImageBackground, StyleSheet } from "react-native";
import TextCard from "./text-card";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable } from "react-native";

export default function NewsCard({ readNews, dataNews }) {
  console.log(dataNews);
  return (
    <>
      <Pressable onPress={() => readNews(dataNews)}>
        <ImageBackground
          style={styles.card}
          source={{
            uri: `${dataNews}`,
          }}
          imageStyle={{ borderRadius: 20 }}
        >
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.8)"]}
            style={{ borderRadius: 20 }}
          >
            <TextCard title={dataNews} />
          </LinearGradient>
        </ImageBackground>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 300,
    marginHorizontal: 20,
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 20,
    marginLeft: 30,
  },
});
