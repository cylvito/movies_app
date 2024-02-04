import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { API_KEY } from "../config/api_config";
import { Heading, Image, Box, VStack } from "@gluestack-ui/themed";

const ItemDetail = ({ navigation, route }) => {
  const { item, category } = route.params;
  const [details, setDetails] = useState("");

  const api = API_KEY;

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        // Construct the API URL based on the category
        const apiUrl = `https://api.themoviedb.org/3/${category}/${item.id}?api_key=${api}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Set details state
        setDetails(data);
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };

    fetchDetails();
    navigation.setOptions({
      title: item.original_title ? item.original_title : item.original_name,
      headerStyle: {
        backgroundColor: "#2a355e",
      },
      headerTitleStyle: {
        color: "white",
      },
    });
  }, [category, item.id, details]);
  
  console.log(details);

  return (
    <Box padding={30}>
      <VStack space="md" alignItems="center">
        <Heading>
          {details.original_title
            ? details.original_title
            : details.original_name}
        </Heading>
        <Image
          size="2xl"
          alt="Movie Poster"
          source={{
            uri: `https://media.themoviedb.org/t/p/w440_and_h660_face/${details.poster_path}`,
          }}
        />
        <Text size="lg">{details.overview}</Text>
        <Text>Popularity: {details.popularity}</Text>
        <Text>Release Date: {details.release_date}</Text>
      </VStack>
    </Box>
  );
};

export default ItemDetail;
