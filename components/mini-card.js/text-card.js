import { Text } from "@gluestack-ui/themed";

export default function TextCard({ data }) {
  return (
    <>
      <Text size="xs" color="gray">
        {data.date}
      </Text>
      <Text bold size="md" color="black" numberOfLines={4} ellipsizeMode="tail">
        {data.title}
      </Text>
    </>
  );
}
