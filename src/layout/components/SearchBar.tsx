import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const SearchBar = () => {
  return (
    <InputGroup>
      <Input
        placeholder="Search"
        borderRadius="8px"
        backgroundColor="background.input"
        height={["40px", "40px", "40px", "44px"]}
        _focus={{
          border: "none",
        }}
        color="#000"
      />
      <InputRightElement color="#000">
        <IconButton
          aria-label="clear-input"
          variant="ghost"
          size="xs"
          color="inherit"
        >
          <CloseIcon />
        </IconButton>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;
