import {
  Box,
  Button,
  Collapse,
  Grid,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CloseIcon, ArrowRightShortIcon } from "../../assets/icons";
import { useCombobox } from "downshift";
import { motion } from "framer-motion";
import { MenuProduct } from "../../components/organisms";

interface MenuItem {
  text: string;
  link: string;
  items: MenuItemExtended[];
}

interface MenuItemExtended extends MenuItem {
  image: string;
  soldPrice?: number;
  price: number;
}
const suggestionMenu = [
  {
    text: "Sweater",
    link: "#",
    items: [
      {
        image: "/images/product/product-image-1.png",
        text: "Chill Summer Essential Set",
        soldPrice: 620.32,
        price: 899,
      },
      {
        image: "/images/product/product-image-1.png",
        text: "Chill Summer Essential Set",
        soldPrice: 620.32,
        price: 899,
      },
      {
        image: "/images/product/product-image-1.png",
        text: "Chill Summer Essential Set",
        soldPrice: 620.32,
        price: 899,
      },
      {
        image: "/images/product/product-image-1.png",
        text: "Chill Summer Essential Set",
        soldPrice: 620.32,
        price: 899,
      },
    ],
  },
  {
    text: "Basic",
    link: "#",
    items: [
      {
        image: "/images/product/product-image-1.png",
        text: "Chill Summer Essential Set",
        soldPrice: 620.32,
        price: 899,
      },
      {
        image: "/images/product/product-image-1.png",
        text: "Chill Summer Essential Set",
        soldPrice: 620.32,
        price: 899,
      },
      {
        image: "/images/product/product-image-1.png",
        text: "Chill Summer Essential Set",
        soldPrice: 620.32,
        price: 899,
      },
      {
        image: "/images/product/product-image-1.png",
        text: "Chill Summer Essential Set",
        soldPrice: 620.32,
        price: 899,
      },
    ],
  },
  {
    text: "Cardigans",
    link: "#",
    items: [
      {
        image: "/images/product/product-image-1.png",
        text: "Chill Summer Essential Set",
        soldPrice: 620.32,
        price: 899,
      },
      {
        image: "/images/product/product-image-1.png",
        text: "Chill Summer Essential Set",
        soldPrice: 620.32,
        price: 899,
      },
      {
        image: "/images/product/product-image-1.png",
        text: "Chill Summer Essential Set",
        soldPrice: 620.32,
        price: 899,
      },
      {
        image: "/images/product/product-image-1.png",
        text: "Chill Summer Essential Set",
        soldPrice: 620.32,
        price: 899,
      },
    ],
  },
  {
    text: "Hoodies",
    link: "#",
    items: [
      {
        image: "/images/product/product-image-1.png",
        text: "Chill Summer Essential Set",
        soldPrice: 620.32,
        price: 899,
      },
      {
        image: "/images/product/product-image-1.png",
        text: "Chill Summer Essential Set",
        soldPrice: 620.32,
        price: 899,
      },
      {
        image: "/images/product/product-image-1.png",
        text: "Chill Summer Essential Set",
        soldPrice: 620.32,
        price: 899,
      },
      {
        image: "/images/product/product-image-1.png",
        text: "Chill Summer Essential Set",
        soldPrice: 620.32,
        price: 899,
      },
    ],
  },
  {
    text: "Crew Necks",
    link: "#",
    items: [
      {
        image: "/images/product/product-image-1.png",
        text: "Chill Summer Essential Set",
        soldPrice: 620.32,
        price: 899,
      },
      {
        image: "/images/product/product-image-1.png",
        text: "Chill Summer Essential Set",
        soldPrice: 620.32,
        price: 899,
      },
      {
        image: "/images/product/product-image-1.png",
        text: "Chill Summer Essential Set",
        soldPrice: 620.32,
        price: 899,
      },
      {
        image: "/images/product/product-image-1.png",
        text: "Chill Summer Essential Set",
        soldPrice: 620.32,
        price: 899,
      },
    ],
  },
  {
    text: "Turtle Necks",
    link: "#",
    items: [
      {
        image: "/images/product/product-image-1.png",
        text: "Chill Summer Essential Set",
        soldPrice: 620.32,
        price: 899,
      },
      {
        image: "/images/product/product-image-1.png",
        text: "Chill Summer Essential Set",
        soldPrice: 620.32,
        price: 899,
      },
      {
        image: "/images/product/product-image-1.png",
        text: "Chill Summer Essential Set",
        soldPrice: 620.32,
        price: 899,
      },
      {
        image: "/images/product/product-image-1.png",
        text: "Chill Summer Essential Set",
        soldPrice: 620.32,
        price: 899,
      },
    ],
  },
  {
    text: "V Necks",
    link: "#",
    items: [
      {
        image: "/images/product/product-image-1.png",
        text: "Chill Summer Essential Set",
        soldPrice: 620.32,
        price: 899,
      },
      {
        image: "/images/product/product-image-1.png",
        text: "Chill Summer Essential Set",
        soldPrice: 620.32,
        price: 899,
      },
      {
        image: "/images/product/product-image-1.png",
        text: "Chill Summer Essential Set",
        soldPrice: 620.32,
        price: 899,
      },
      {
        image: "/images/product/product-image-1.png",
        text: "Chill Summer Essential Set",
        soldPrice: 620.32,
        price: 899,
      },
    ],
  },
  {
    text: "Vests & Tops",
    link: "#",
    items: [
      {
        image: "/images/product/product-image-1.png",
        text: "Chill Summer Essential Set",
        soldPrice: 620.32,
        price: 899,
      },
      {
        image: "/images/product/product-image-1.png",
        text: "Chill Summer Essential Set",
        soldPrice: 620.32,
        price: 899,
      },
      {
        image: "/images/product/product-image-1.png",
        text: "Chill Summer Essential Set",
        soldPrice: 620.32,
        price: 899,
      },
      {
        image: "/images/product/product-image-1.png",
        text: "Chill Summer Essential Set",
        soldPrice: 620.32,
        price: 899,
      },
    ],
  },
] as MenuItem[];

// search width 261px
const SearchBar = () => {
  const itemToString = (item: MenuItem) => (item ? item.text : "");

  const {
    isOpen,
    openMenu,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    reset,
    getItemProps,
  } = useCombobox({
    items: suggestionMenu,
    itemToString,
  });

  // view all button
  const parentVariants = {
    hover: {},
  };

  const childrenVariants = {
    hover: {
      x: 6,
    },
  };

  return (
    <InputGroup
      {...getComboboxProps()}
      display="flex"
      flexDir="column"
      justifyContent="center"
      pos="relative"
    >
      <Input
        {...getInputProps({
          onFocus: () => {
            if (!isOpen) {
              openMenu();
            }
          },
        })}
        placeholder="Search"
        borderRadius="8px"
        backgroundColor="background.input"
        height={["40px", "40px", "40px", "40px", "44px"]}
        paddingLeft={"1.125rem"}
        fontSize="xs"
        _focus={{
          border: "none",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          borderBottomEndRadius: isOpen ? "0" : "8px",
          borderBottomLeftRadius: isOpen ? "0" : "8px",
        }}
        color="#000"
      />
      <InputRightElement color="#000">
        <IconButton
          aria-label="clear-input"
          variant="ghost"
          size="xs"
          color="inherit"
          height={["2.5rem", "2.5rem", "2.5rem", "2.75rem"]}
          width={["2.5rem", "2.5rem", "2.5rem", "2.75rem"]}
          onClick={reset}
        >
          <CloseIcon />
        </IconButton>
      </InputRightElement>
      <Collapse in={isOpen} animateOpacity>
        <Box
          position="absolute"
          width={["100%", "100%", "100%", "100%", "888px"]}
          zIndex={4}
          borderTopLeftRadius="0"
          borderTopRightRadius="0"
          borderBottomLeftRadius="4px"
          borderBottomRightRadius="4px"
          top={["40px", "40px", "40px", "40px", "44px"]}
          background="linear-gradient(180deg, #F5F5F9 0%, #F5F5F9 100%)"
          fontFamily="Lato"
          fontSize="13px"
          lineHeight="1.0625rem"
          right="0"
          color="text.secondary"
          {...getMenuProps()}
        >
          <Box
            as="header"
            display={["none", "none", "none", "none", "block"]}
            height="32px"
            borderRadius="0"
            py={2}
            marginLeft={10}
          >
            <Text fontSize="xs">
              Press
              <Heading as="span" size="xs">
                {" "}
                enter{" "}
              </Heading>
              to select,
              <Heading as="span" size="xs">
                {" "}
                ↑↓{" "}
              </Heading>
              to navigate,
              <Heading as="span" size="xs">
                {" "}
                esc{" "}
              </Heading>
              to dismiss,
            </Text>
          </Box>
          <Box display="flex">
            <Stack
              display={["none", "none", "none", "none", "block"]}
              flex="1 0 auto"
              background="linear-gradient(180deg, #FDFDFE 0%, #F6F6FB 100%)"
              borderBottomLeftRadius="4px"
              spacing={6}
              pl={"70px"}
              pr={"22px"}
              py={6}
              width="626.37px"
            >
              <Grid gridTemplateColumns="repeat(2, 1fr)" width="100%">
                {suggestionMenu[0].items.map((i, index) => (
                  <MenuProduct
                    image={i.image}
                    price={i.price}
                    soldPrice={i.soldPrice}
                    title={i.text}
                    key={index}
                  />
                ))}
                {/* {
                  highlightedIndex >= 0 &&
                  suggestionMenu[highlightedIndex].items.map((i, index) => (
                    <MenuProduct
                      image={i.image}
                      price={i.price}
                      soldPrice={i.soldPrice}
                      title={i.text}
                      key={index}
                    />
                  ))} */}
              </Grid>
              <Spacer />
              <motion.div whileHover="hover" variants={parentVariants}>
                <Button
                  paddingLeft="0"
                  height="auto"
                  fontSize="13px"
                  rightIcon={
                    <motion.div
                      variants={childrenVariants}
                      transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 0.6,
                      }}
                    >
                      <ArrowRightShortIcon fontSize="12px" />
                    </motion.div>
                  }
                >
                  <Text textDecor="underline">View all</Text>
                  <Heading
                    as="span"
                    size="xs"
                    display="inline-block"
                    marginLeft="4px"
                  >
                    {` (234)`}
                  </Heading>
                </Button>
              </motion.div>
            </Stack>
            <Box
              as="ul"
              listStyleType="none"
              flexShrink={0}
              minWidth="261px"
              width={["100%", "100%", "100%", "auto"]}
              pt={["1.125rem", "1.125rem", "1.125rem", "0"]}
            >
              {suggestionMenu.map((i, index) => (
                <Box
                  as="li"
                  listStyleType="none"
                  backgroundColor={
                    highlightedIndex === index ? "#FDFDFE" : "transparent"
                  }
                  color={highlightedIndex === index ? "black" : "inherit"}
                  transition="background-color 0.4s, color 0.4s"
                  position="relative"
                  {...getItemProps({ index, item: i, key: i.text })}
                >
                  <Box
                    pl={4}
                    py={"0.59rem"}
                    // _notLast={{
                    //   paddingTop: "0.5rem",
                    //   paddingBottom: "0.5rem",
                    // }}
                    _hover={{
                      color: "black",
                      _after: {
                        height: "100%",
                        width: "100%",
                      },
                    }}
                    _active={{
                      _after: {
                        height: "100%",
                        width: "100%",
                      },
                    }}
                    _after={{
                      content: "''",
                      position: "absolute",
                      zIndex: -1,
                      transition: "width 0.33s",
                      width: "0",
                      height: "100%",
                      top: 0,
                      left: 0,
                      backgroundColor: "#FDFDFE",
                    }}
                    display="flex"
                    alignItems="center"
                    textDecoration="none"
                    cursor="pointer"
                  >
                    {i.text}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Collapse>
    </InputGroup>
  );
};

export default SearchBar;
