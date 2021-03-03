import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

const Search: React.FC<IconProps> = ({
  fontSize = ["lg", "lg", "lg", "xl"],
  ...rest
}) => {
  return (
    <Icon viewBox="0 0 21 21" fill="none" fontSize={fontSize} {...rest}>
      <path stroke="currentColor" d="M19.927 20.345l-4.31-4.31"></path>
      <circle cx="9.36" cy="9.63" r="8.488" stroke="currentColor"></circle>
    </Icon>
  );
};
export default Search;
