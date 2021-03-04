import { Box, Button, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

const FeaturedCollection = () => {
  return (
    <Box
      background={[
        "linear-gradient(0deg, #F7F8FB, #F7F8FB), #FDF4ED",
        "linear-gradient(0deg, #F7F8FB, #F7F8FB), #FDF4ED",
        "white",
      ]}
      pt={[5, 5, "64px", "81px"]}
      px={[3, 3, 5, "74px"]}
      pb={"2.75rem"}
      display="flex"
      alignItems="center"
      flexDirection={["column", "column", "row-reverse"]}
      width="100%"
    >
      <Box
        display="flex"
        flexDir="column"
        width={["100%", "100%", "auto"]}
        alignItems={["center", "center", "flex-end"]}
        flexGrow={1}
        flexShrink={0}
      >
        <Grid
          templateColumns="repeat(12, 1fr)"
          templateRows="repeat(2, 1fr)"
          columnGap={"4px"}
          rowGap={"3px"}
          height={["300px", "300px", "425px", "600px"]}
          width="100%"
          mb={[0, 0, "4px", "15px"]}
        >
          <GridItem
            rowSpan={2}
            colSpan={8}
            backgroundImage={[
              "url(/images/models/female_0_mobile.png)",
              "url(/images/models/female_0_mobile.png)",
              "url(/images/models/female_0.png)",
            ]}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          />
          <GridItem
            colSpan={4}
            backgroundImage={[
              "url(/images/models/feamle_1_mobile.png)",
              "url(/images/models/feamle_1_mobile.png)",
              "url(/images/models/female_1.png)",
            ]}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          />
          <GridItem
            colSpan={4}
            backgroundImage={[
              "url(/images/models/female_2_mobile.png)",
              "url(/images/models/female_2_mobile.png)",
              "url(/images/models/female_2.png)",
            ]}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          />
        </Grid>
        <Box width="100%" display="flex" justifyContent="flex-end">
          <Text
            display={["none", "none", "block"]}
            width={["70%", "70%", "70%", "100%"]}
            align={["left", "left", "left", "right"]}
            paddingRight={[0, 0, 4, 0]}
            color="#585858"
          >
            Infusion of summer pieces and cashmere silk blends.
          </Text>
        </Box>
      </Box>

      <Box
        display="flex"
        alignItems={["center", "center", "flex-start"]}
        justifyContent={"center"}
        flexDirection="column"
        fontFamily="Roboto"
        marginRight={["0", "0", "33px", "96px"]}
      >
        <Heading
          as="h5"
          fontFamily="Lato"
          fontSize={["30px", "30px", "30px", "46px"]}
          textTransform="uppercase"
          lineHeight="2.5625"
        >
          Winter Spice 2020
        </Heading>
        <Text
          textAlign={["center", "center", "left"]}
          fontSize={["18px", "18px", "16px", "22px"]}
          paddingRight={[0, 0, "24px", "48px"]}
          mb="22px"
          color="#636363"
          width={["auto", "auto", "auto", "406.55px"]}
        >
          Infusion of summer pieces and cashmere silk blends.
        </Text>
        <Button variant="gobi">SHOP NOW</Button>
      </Box>
    </Box>
  );
};

export default FeaturedCollection;
