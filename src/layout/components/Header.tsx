import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spacer,
  HStack,
  Text,
  Collapse,
} from "@chakra-ui/react";
import { I18Icon } from "../../assets/icons";
import { ButtonLink } from "../../components/atoms";
import useScrollTrigger from "../../hooks/useScrollTrigger";
import Navbar from "./Navbar";

const HideOnScroll: React.FC<{}> = ({ children }) => {
  const trigger = useScrollTrigger({});
  return (
    <Collapse in={!trigger} animateOpacity>
      {children}
    </Collapse>
  );
};

const Header: React.FC<{}> = () => {
  return (
    <Box as="header" position="fixed" top={0} width="100%" zIndex={99}>
      <Box position="relative" width="100%">
        <HideOnScroll>
          <Box
            backgroundColor="gobi.header"
            height={["38px", "38px", "38px", "40px"]}
            width="100%"
            color="white"
            fontSize="xs"
            display="flex"
            alignItems="center"
            flexShrink={0}
            py={[2.5, 2.5, 2.5, 3]}
            px={[2.5, 2.5, 2.5, 10]}
          >
            <Menu>
              <MenuButton
                pr={3}
                transition="all 0.2s"
                color="inherit"
                fontSize="inherit"
                borderRadius="6rem"
                _focus={{ boxShadow: "outline" }}
                zIndex={2}
              >
                <Box display="flex" alignItems="center" height="100%">
                  <I18Icon marginRight={3} />
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
              display={["none", "none", "none", "flex"]}
              alignItems="center"
              justifyContent="center"
              zIndex={1}
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
              zIndex={2}
            >
              <Box as="li" fontFamily="Roboto">
                <ButtonLink href="#">SIGN IN</ButtonLink>
              </Box>
              <Box as="li" fontFamily="Roboto">
                <ButtonLink href="#">SIGN UP</ButtonLink>
              </Box>
            </HStack>
          </Box>
        </HideOnScroll>
        <Navbar />
      </Box>
    </Box>
  );
};

export default Header;
