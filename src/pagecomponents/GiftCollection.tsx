import {
  Box,
  Image,
  Container,
  Text,
  Flex,
  IconButton,
  SimpleGrid,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import { AnimateSharedLayout, motion } from "framer-motion";
import { Price } from "../components/molecules";
import styles from "./GiftCollection.module.css";
import { useState } from "react";
import { HeartIcon } from "../assets/icons";
import { Swiper, SwiperSlide } from "swiper/react";

const Collections = [
  {
    isNew: true,
    title: "Zweiseitiger Wendemantel Mit Schmetterlingsxzds",
    colors: [
      {
        name: "",
        code: "#CC3B38",
      },
      {
        name: "",
        code: "#6D705A",
      },
      {
        name: "",
        code: "#E0D7C8",
      },
      {
        name: "",
        code: "#000000",
      },
      {
        name: "",
        code: "#718CBF",
      },
      {
        name: "",
        code: "#985B4F",
      },
      {
        name: "",
        code: "#C66666",
      },
    ],
    soldPrice: 79,
    price: 299,
    imageLarge: "/images/gift/img.png",
    imageSmall: "/images/gift/img_mobile.png",
  },
] as GiftCardProps[];

const GiftCollection = () => {
  const displaySwiper = useBreakpointValue({ base: "block", md: "none" });
  return (
    <>
      <style global jsx>{`
        .swiper-pagination {
          text-align: left;
          bottom: -4px;
        }
        .swiper-pagination-bullet {
          width: 27px;
          height: 3px;
          border-radius: 0;
          background: #DFDFDF
          transition: background 0.3s;
        }
        .swiper-pagination-bullet-active {
          background: #000000;
        }
      `}</style>

      <Container maxWidth="894px" py="105px" position="relative">
        <Heading
          as="h4"
          textAlign="center"
          color={["#000", "#000", "#4F5255"]}
          fontSize={["22px", "22px", "36px"]}
          fontWeight={[500, 500, 800]}
          mb={[0, 0, "42px", "42px"]}
          fontFamily={["Roboto", "Roboto", "Roboto", "Lato"]}
        >
          TO GET AND TO GIFT
        </Heading>
        <SimpleGrid
          columns={4}
          row={2}
          columnGap={"10px"}
          rowGap={"16px"}
          justifyContent="center"
          justifyItems="center"
          display={["none", "none", "grid"]}
        >
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <GiftCard key={i} {...Collections[0]} />
          ))}
        </SimpleGrid>
        <Swiper
          spaceBetween={6}
          slidesPerView={2}
          pagination={{ clickable: true }}
          style={{
            display: displaySwiper,
            paddingBottom: 32,
            paddingTop: 8,
          }}
        >
          {[0, 1, 2, 3].map((i) => (
            <SwiperSlide key={i}>
              <GiftCard {...Collections[0]} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          spaceBetween={6}
          slidesPerView={2}
          pagination={{ clickable: true }}
          style={{
            display: displaySwiper,
            paddingBottom: 32,
          }}
        >
          {[0, 1, 2, 3].map((i) => (
            <SwiperSlide key={i}>
              <GiftCard {...Collections[0]} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

interface GiftCardProps {
  isNew?: boolean;
  imageSmall: string;
  imageLarge: string;
  title: string;
  colors: {
    name: string;
    code: string;
  }[];
  price: number;
  soldPrice?: number;
}

const GiftCard: React.FC<GiftCardProps> = ({
  isNew,
  imageLarge,
  imageSmall,
  title,
  colors,
  price,
  soldPrice,
}) => {
  const [selected, setSelected] = useState(colors[0]);

  return (
    <Box display="flex" justifyContent="center">
      <Box
        display="flex"
        flexDir="column"
        fontFamily="Lato"
        alignItems="center"
        maxW={["172px", "172px", "178px", "216px"]}
        className={styles.card}
        color="#212121"
      >
        <Box position="relative">
          {isNew && (
            <Box
              pos="absolute"
              left="14px"
              top="18px"
              padding="8px"
              backgroundColor="rgba(255, 255, 255, 0.6)"
              borderRadius="4px"
              userSelect="none"
              cursor="default"
            >
              <Text fontSize="11px" textAlign="center">
                NEW
              </Text>
            </Box>
          )}
          <Image
            src={imageLarge}
            srcSet={`${imageSmall} 172w ${imageLarge} 216w`}
            alt={title}
            borderRadius="4px"
          />
          <IconButton
            position="absolute"
            right="14px"
            bottom="8px"
            borderRadius="50%"
            width="36px"
            height="36px"
            aria-label="Add to favourites"
            className={styles.heart}
            color="#4F5255"
            background="rgba(255, 255, 255, 0.6)"
          >
            <HeartIcon fill="#4F5255" />
          </IconButton>
        </Box>

        <Text as="h6" fontSize="12px" letterSpacing="1px" mt="12px">
          {title}
        </Text>
        <Box className={styles.colorInfo}>
          <Box className={styles.colorText}>
            <Box marginBottom="8px">{`+${colors.length} colors`}</Box>

            <Flex>
              {price && (
                <Price
                  value={price}
                  fontSize="11px"
                  letterSpacing="1px"
                  textDecoration="line-through"
                  marginRight={"8px"}
                />
              )}
              <Price
                value={soldPrice}
                color="gobi.price"
                fontSize="11px"
                letterSpacing="1px"
              />
            </Flex>
          </Box>
          <AnimateSharedLayout>
            <div className={styles.itemContainer}>
              {colors.map((i) => (
                <ColorItem
                  key={i.code}
                  color={i.code}
                  isSelected={selected === i}
                  onClick={() => setSelected(i)}
                />
              ))}
            </div>
          </AnimateSharedLayout>
        </Box>
      </Box>
    </Box>
  );
};

interface ColorItemProps {
  color: string;
  isSelected: boolean;
  onClick: () => void;
}
const ColorItem: React.FC<ColorItemProps> = ({
  color,
  isSelected,
  onClick,
}) => {
  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30,
  };

  return (
    <Box
      as="li"
      listStyleType="none"
      onClick={onClick}
      style={{
        backgroundColor: color,
      }}
      className={styles.item}
    >
      {isSelected && (
        <motion.div
          layoutId="outline"
          className={styles.outline}
          initial={false}
          animate={{ borderColor: color }}
          transition={spring}
        />
      )}
    </Box>
  );
};
export default GiftCollection;
