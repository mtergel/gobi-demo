import { Box, Button, Heading, Text } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Box
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundImage={[
        "url(images/banner/homebanner_mobile.png)",
        "url(images/banner/homebanner_mobile.png)",
        "url(images/banner/homebanner.png)",
      ]}
      width="100%"
      height={["754px", "769px", "822.97px"]}
      pos="relative"
      marginBottom={["247px", "247px", "0px"]}
    >
      <Box
        fontFamily="Lato"
        position="absolute"
        right={[99, 99, 99, 171]}
        top={[56, 56, 56, 243]}
        display={["none", "none", "block"]}
      >
        <Box
          color="white"
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading
            as="h1"
            fontSize={["50px", "50px", "50px", "90px"]}
            lineHeight="0.6"
          >
            SUMMER
          </Heading>
          <Heading
            as="h2"
            fontFamily="Mr Dafoe"
            fontSize={["52px", "52px", "52px", "82px"]}
            color="gobi.secondary"
            transform="rotate(-8.99deg)"
            textAlign="center"
            lineHeight="84.4%"
            fontWeight="400"
            paddingLeft="24px"
          >
            Sale
          </Heading>
          <Heading
            as="h3"
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={[8, 8, 8, 10]}
          >
            <Text
              as="span"
              fontSize={["18px", "18px", "18px", "32px"]}
              marginRight="6px"
            >
              UPTO
            </Text>
            <Text
              as="span"
              fontSize={["75px", "75px", "75px", "145px"]}
              alignSelf="flex-end"
              marginRight="6px"
            >
              60
            </Text>
            <Text
              as="span"
              fontSize={["40px", "40px", "40px", "80px"]}
              marginTop="24px"
            >
              %
            </Text>
            <Text
              as="span"
              fontSize={["24px", "24px", "24px", "40px"]}
              marginTop={["44px", "44px", "44px", "60px"]}
            >
              FF
            </Text>
          </Heading>
          <Button
            variant="gobi"
            backgroundColor="white"
            color="#000000"
            height={["2.625rem", "2.625rem", "2.625rem", "54px"]}
          >
            SHOP NOW
          </Button>
        </Box>
      </Box>
      <Box
        fontFamily="Lato"
        position="absolute"
        left={0}
        bottom={-232}
        width="100%"
        px="10px"
        display={["block", "block", "none"]}
      >
        <Box
          width="100%"
          background="linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(238, 243, 255, 0.8) 100%)"
          borderRadius="9px"
          padding="2.75rem"
          style={{
            backdropFilter: "blur(50px)",
          }}
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading as="h1" fontSize="6xl" lineHeight="0.6">
            SUMMER
          </Heading>
          <Heading
            as="h2"
            fontFamily="Mr Dafoe"
            fontSize="3.875rem"
            color="gobi.secondary"
            transform="rotate(-8.99deg)"
            textAlign="center"
            lineHeight="84.4%"
            fontWeight="400"
            paddingLeft="24px"
          >
            Sale
          </Heading>
          <Heading
            as="h3"
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={8}
          >
            <Text as="span" fontSize="xl" marginRight="6px">
              UPTO
            </Text>
            <Text
              as="span"
              fontSize="5.3125rem"
              alignSelf="flex-end"
              marginRight="6px"
            >
              60
            </Text>
            <Text as="span" fontSize="3.125rem" marginTop="24px">
              %
            </Text>
            <Text as="span" fontSize="2.125rem" marginTop="52px">
              FF
            </Text>
          </Heading>
          <Button variant="gobi">SHOP NOW</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
