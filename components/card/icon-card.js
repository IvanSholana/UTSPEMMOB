import { View } from "@gluestack-ui/themed";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function IconCard() {
  return (
    <>
      <View style={style.iconButton}>
        <View style={style.iconButton2}>
          <TouchableOpacity onPress={() => {}} style={style.comment}>
            <Icon name="commenting-o" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={style.comment}>
            <Icon name="plus-circle" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => {}} style={style.comment}>
          <Icon name="share" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  comment: { borderRadius: 25, paddingTop: 15 },
  iconButton: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: 5,
  },
  iconButton2: {
    flexDirection: "row",
    gap: 15,
  },
});
