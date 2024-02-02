import React from "react";
import {
  Button,
  Icon,
  ButtonText,
  FormControl,
  FormControlLabelText,
  FormControlHelperText,
  HStack,
  Input,
  InputSlot,
  SearchIcon,
  VStack,
  InputField,
} from "@gluestack-ui/themed";
import Dropdown from "./Dropdown";

const SearchForm = ({ value, onChangeText, onValueChange, onPress }) => {
  const options = [
    { label: "movie", value: "movie" },
    { label: "tv show", value: "tv" },
    { label: "multi", value: "multi" },
  ];

  return (
    <VStack paddingVertical={30} paddingHorizontal={24}>
      <FormControl isRequired>
        <FormControl.Label fontSize="sm">
          <FormControlLabelText>Search Movie/TV Show Name</FormControlLabelText>
        </FormControl.Label>
        <Input>
          <InputSlot pl="$3">
            <Icon as={SearchIcon} />
          </InputSlot>
          <InputField value={value} onChangeText={onChangeText} />
        </Input>
        <FormControl.Label fontSize="sm">
          <FormControlLabelText>Choose Search Type</FormControlLabelText>
        </FormControl.Label>
        <HStack space="lg">
          <Dropdown
            onValueChange={onValueChange}
            width="50%"
            options={options}
          />
          <Button onPress={onPress}>
            <Icon as={SearchIcon} mr={3} color="white" />
            <ButtonText>Search</ButtonText>
          </Button>
        </HStack>
        <FormControlHelperText>
          Please select a search type
        </FormControlHelperText>
      </FormControl>
    </VStack>
  );
};

export default SearchForm;
