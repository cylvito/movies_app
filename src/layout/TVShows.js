import React, { useState, useEffect } from "react";
import Dropdown from "../components/Dropdown";
import { getTvShows } from "../services/api";
import { Box, ScrollView, Text, VStack } from "@gluestack-ui/themed";
import Item from "../components/Item";

const TVShows = ({ navigation }) => {
  const [category, setCategory] = useState("popular");
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        setLoading(true);
        const movieList = await getTvShows(category);
        setShows(movieList.results);
      } catch (error) {
        console.error("Error fetching TV shows:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchShows();
  }, [category]);

  const handleChange = (selectedValue) => {
    setCategory(selectedValue);
  };

  const options = [
    { label: "Airing Today", value: "airing_today" },
    { label: "On the air", value: "on_the_air" },
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
  ];

  return (
    <ScrollView>
      <Box marginVertical={30} marginHorizontal={12}>
        <Dropdown
          width="50%"
          align="center"
          onValueChange={handleChange}
          selectedValue={category}
          options={options}
        />
        {loading ? (
          <Text>Loading shows...</Text>
        ) : shows && shows.length > 0 ? (
          <VStack space="md">
            {shows.map((show) => (
              <Item
                key={show.id}
                item={show}
                navigation={navigation}
                category="tv"
              />
            ))}
          </VStack>
        ) : (
          <Text>No TV Shows Found</Text>
        )}
      </Box>
    </ScrollView>
  );
};

export default TVShows;
