import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Box
      width="100%"
      py={["30px", "30px", "30px", 0]}
      px={["11px", "11px", "11px", 0]}
      backgroundColor="#F9F9F9"
      display="flex"
      flexDir={["column", "column", "column", "row"]}
    >
      <Grid
        templateColumns="repeat(3, 1fr)"
        templateRows="repeat(2, 1fr)"
        width="100%"
        height={["278px", "278px", "557px", "791px"]}
        maxWidth={["auto", "auto", "auto", "70%"]}
        gap={"12px"}
        flexGrow={1}
      >
        <GridItem
          rowSpan={2}
          colSpan={[2, 2, 3]}
          backgroundImage={[
            "url(/images/about/about_mobile.png)",
            "url(/images/about/about_mobile.png)",
            "url(/images/about/about_tablet.png)",
            "url(/images/about/about.png)",
          ]}
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
          borderRadius="0"
        />
        <GridItem
          display={["block", "block", "none"]}
          backgroundImage={[
            "url(/images/about/about_mobile.png)",
            "url(/images/about/about_mobile.png)",
            "url(/images/about/about.png)",
          ]}
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
        />

        <GridItem
          display={["block", "block", "none"]}
          backgroundImage={[
            "url(/images/about/about_mobile.png)",
            "url(/images/about/about_mobile.png)",
            "url(/images/about/about.png)",
          ]}
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
        />
      </Grid>
      <Box
        display="flex"
        alignItems={["center", "center", "center", "flex-start"]}
        flexDir="column"
        flexShrink={2}
        paddingRight={[0, 0, 0, "50px"]}
        paddingTop={["24px", "24px", "24px", "78px"]}
        paddingLeft={[0, 0, 0, "62px"]}
        position="relative"
        zIndex={2}
      >
        <Heading
          as="h6"
          fontSize={["20px", "20px", "20px", "34px"]}
          letterSpacing="1.44px"
          textTransform="uppercase"
          textAlign={["center", "center", "center", "left"]}
          color="#1F1F1F"
          marginBottom={["10px", "10px", "10px", "28px"]}
        >
          About Us
        </Heading>
        <Text
          align={["center", "center", "center", "left"]}
          fontSize="12px"
          marginBottom={["20px", "20px", "20px", "50px"]}
          maxW={["auto", "auto", "470px", "auto"]}
        >
          Aute et officia anim consectetur consequat velit minim irure Lorem ad.
          Officia nisi sunt est eiusmod occaecat excepteur velit reprehenderit
          occaecat cillum anim ad magna aliqua. Sint enim Lorem amet in tempor
          non ea duis cillum. Cillum consectetur in in aliqua. Nostrud minim
          duis cupidatat et ea sint.
        </Text>
        <Button variant="gobi">READ MORE</Button>
        <HStack
          position="absolute"
          bottom={35}
          spacing="28px"
          left={-35}
          paddingRight={35}
          justifyContent="flex-start"
          display={["none", "none", "none", "flex"]}
          width="100%"
        >
          <Box width="100%">
            <Image
              src="/images/about/about_small.png"
              maxWidth="100%"
              objectFit="contain"
              borderRadius="4px"
            />
          </Box>
          <Box width="100%">
            <Image
              src="/images/about/about_small.png"
              maxWidth="100%"
              objectFit="contain"
              borderRadius="4px"
            />
          </Box>
          {/* <Image
            src="/images/about/about_small.png"
            maxWidth="100%"
            objectFit="contain"
          />
          <img
            src="/images/about/about_small.png"
            style={{
              maxWidth: "100%",
            }}
          /> */}
        </HStack>
      </Box>
    </Box>
  );
};

export default AboutUs;
