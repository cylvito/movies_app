import React, { useState, useEffect } from "react";
import { Center, ScrollView, Text, VStack } from "@gluestack-ui/themed";
import { getSearchResults } from "../services/api";
import SearchForm from "../components/SearchForm";
import Item from "../components/Item";
import { useNavigation } from "@react-navigation/native";

const SearchResult = () => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("movie");
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const handleInputChange = (value) => {
    setValue(value);
  };

  const handleDropdownChange = (value) => {
    setCategory(value);
  };

  const onClick = async () => {
    try {
      setLoading(true);
      const fetchResults = await getSearchResults(category, value);
      setResults(fetchResults.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView>
      <SearchForm
        onChangeText={handleInputChange}
        onValueChange={handleDropdownChange}
        onPress={onClick}
      />
      {loading ? (
        <Center>
          <Text fontWeight="$bold" fontSize="$xl">
            Please Initiate A Search
          </Text>
        </Center>
      ) : results && results.length > 0 ? (
        <VStack space="md">
          {results.map((result) => (
            <Item
              key={result.id}
              item={result}
              navigation={navigation}
              category={result.original_title ? "movie" : "tv"}
            />
          ))}
        </VStack>
      ) : (
        <Center>
          <Text fontWeight="$bold" fontSize="$xl">
            No Results Found.
          </Text>
        </Center>
      )}
    </ScrollView>
  );
};

export default SearchResult;
