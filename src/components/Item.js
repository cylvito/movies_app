import React from "react";
import {
  Image,
  HStack,
  VStack,
  Button,
  ButtonText,
  Text,
  Heading,
  ScrollView,
} from "@gluestack-ui/themed";
import { useNavigation } from '@react-navigation/native';

const Item = (props) => {
  const { item, category } = props;
  const navigation = useNavigation();

  return (
    <ScrollView>
    <HStack marginTop={12} space="md" marginHorizontal={12}>
      <Image
        width="40%"
        aspectRatio={1}
        alt="movie poster"
        size="md"
        source={{
          uri: `https://media.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}`,
        }}
      />
      <VStack width="55%">
        <Heading size="sm">{item.name ? item.name : item.title}</Heading>
        <Text>Popularity: {item.popularity}</Text>
        <Text>Release Date: {item.release_date}</Text>
        <Button
          onPress={() => {
            navigation.navigate("ItemDetail", {
              item,
              category
            });
          }}
        >
          <ButtonText>More Details</ButtonText>
        </Button>
      </VStack>
    </HStack>
    </ScrollView>
  );
};

export default Item;
