import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Price } from "../../molecules";

interface MenuProductProps {
  image: string;
  title: string;
  price: number;
  soldPrice: number;
}

const MenuProduct: React.FC<MenuProductProps> = ({
  image,
  title,
  price,
  soldPrice,
}) => {
  return (
    <Flex alignItems="center" fontFamily="Lato" fontSize="sm" marginBottom={2}>
      <Image src={image} alt={title} marginRight={3} />
      <Box display="flex" flexDir="column">
        <Link href="#" textDecor="none">
          <Text color="text.primary" marginBottom={2}>
            {title}
          </Text>
        </Link>
        <Flex>
          {price && (
            <Price
              value={price}
              size="xs"
              letterSpacing="1px"
              textDecoration="line-through"
              marginRight={1}
            />
          )}
          <Price
            value={soldPrice}
            color="gobi.price"
            size="xs"
            letterSpacing="1px"
          />
        </Flex>
      </Box>
    </Flex>
  );
};
export default MenuProduct;
