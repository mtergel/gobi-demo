import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spacer,
  HStack,
  Text,
} from "@chakra-ui/react";
import I18 from "../../assets/icons/I18";
import { ButtonLink } from "../../components/atoms";

const Header: React.FC<{}> = () => {
  return (
    <Box
      backgroundColor="gobi.secondary"
      height={["38px", "38px", "40px"]}
      width="100%"
      color="white"
      fontSize="xs"
      display="flex"
      alignItems="center"
      py={[2.5, 2.5, 3]}
      px={[2.5, 2.5, 10]}
      position="relative"
    >
      <Menu>
        <MenuButton
          pr={3}
          transition="all 0.2s"
          color="inherit"
          fontSize="inherit"
          borderRadius="6rem"
          _focus={{ boxShadow: "outline" }}
        >
          <Box display="flex" alignItems="center" height="100%">
            <I18 marginRight={3} />
            Global - English
          </Box>
        </MenuButton>
        <MenuList color="black">
          <MenuItem>English</MenuItem>
        </MenuList>
      </Menu>
      <Box
        position="absolute"
        left="0"
        right="0"
        display={["none", "none", "flex"]}
        alignItems="center"
        justifyContent="center"
      >
        <HStack spacing={3.5} alignItems="center">
          <Text>RETURNING AN ORDER?</Text>
          <ButtonLink href="#" textDecor="underline">
            Click for more info
          </ButtonLink>
        </HStack>
      </Box>
      <Spacer />
      <HStack
        as="ul"
        alignItems="center"
        listStyleType="none"
        fontFamily="Lato"
        spacing={2.5}
      >
        <Box as="li">
          <ButtonLink href="#">SIGN IN</ButtonLink>
        </Box>
        <Box as="li">
          <ButtonLink href="#">SIGN UP</ButtonLink>
        </Box>
      </HStack>
    </Box>
  );
};

export default Header;
