import React, { useState, useEffect } from "react";
import Dropdown from "../components/Dropdown";
import { getMovies } from "../services/api";
import { Box, ScrollView, Text, VStack } from "@gluestack-ui/themed";
import Item from "../components/Item";

const Movies = ({ navigation }) => {
  const [category, setCategory] = useState("popular");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const movieList = await getMovies(category);
        setMovies(movieList.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [category]);

  const handleChange = (selectedValue) => {
    setCategory(selectedValue);
  };

  const options = [
    { label: "Now Playing", value: "now_playing" },
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
    { label: "Upcoming", value: "upcoming" },
  ];

  return (
    <ScrollView>
      <Box paddingVertical={30} paddingHorizontal={12}>
        <Dropdown
          width="50%"
          align="center"
          onValueChange={handleChange}
          selectedValue={category}
          options={options}
        />

        {loading ? (
          <Text>Loading movies...</Text>
        ) : movies && movies.length > 0 ? (
          <VStack space="md">
            {movies.map((movie) => (
              <Item
                key={movie.id}
                item={movie}
                navigation={navigation}
                category="movie"
              />
            ))}
          </VStack>
        ) : (
          <Text>No Movies Found</Text>
        )}
      </Box>
    </ScrollView>
  );
};

export default Movies;
