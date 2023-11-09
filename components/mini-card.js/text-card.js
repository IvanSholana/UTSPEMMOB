import { Text } from "@gluestack-ui/themed";

export default function TextCard({ judul }) {
  return (
    <>
      <Text bold size="md" color="black" numberOfLines={4} ellipsizeMode="tail">
        {judul}
      </Text>
    </>
  );
}
