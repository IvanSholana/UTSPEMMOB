import { Text, View } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import IconCard from "./icon-card";

export default function TextCard({ data }) {
  return (
    <View style={styles.textCard}>
      <View style={{ flex: 1 }}>
        <Text style={styles.theme}>{data.date}</Text>
      </View>
      <View>
        <Text style={styles.title}>{data.title}</Text>
      </View>
      <IconCard />
    </View>
  );
}

const styles = StyleSheet.create({
  theme: {
    color: "white",
    fontWeight: "bold",
    padding: 5,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
  textCard: {
    padding: 10,
    height: "100%",
  },
});
