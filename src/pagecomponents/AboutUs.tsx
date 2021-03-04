import { Box, Button, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Box width="100%" py="30px" px="11px" backgroundColor="#F9F9F9">
      <Grid
        templateColumns="repeat(3, 1fr)"
        templateRows="repeat(2, 1fr)"
        width="100%"
        height={["278px", "278px", "557px", "791px"]}
        gap={"12px"}
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
        paddingTop="24px"
        display="flex"
        alignItems="center"
        flexDir="column"
      >
        <Heading
          as="h6"
          fontSize="20px"
          letterSpacing="1.44px"
          textTransform="uppercase"
          textAlign="center"
          color="#1F1F1F"
          marginBottom="10px"
        >
          About Us
        </Heading>
        <Text align="center" fontSize="12px" marginBottom="20px">
          Aute et officia anim consectetur consequat velit minim irure Lorem ad.
          Officia nisi sunt est eiusmod occaecat excepteur velit reprehenderit
          occaecat cillum anim ad magna aliqua. Sint enim Lorem amet in tempor
          non ea duis cillum. Cillum consectetur in in aliqua. Nostrud minim
          duis cupidatat et ea sint.
        </Text>
        <Button variant="gobi">READ MORE</Button>
      </Box>
    </Box>
  );
};

export default AboutUs;
