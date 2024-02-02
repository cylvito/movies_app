import React from "react";
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  ChevronDownIcon,
  Icon,
} from "@gluestack-ui/themed";

const Dropdown = ({ width, align, onValueChange, options, selectedValue }) => {
  return (
    <Select width={width} alignSelf={align} onValueChange={onValueChange} selectedValue={selectedValue}>
      <SelectTrigger variant="outline" size="md">
        <SelectInput />
        <SelectIcon mr="$3">
          <Icon as={ChevronDownIcon} />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          {options.map((option) => (
            <SelectItem
              key={option.value}
              label={option.label}
              value={option.value}
            />
          ))}
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};

export default Dropdown;
