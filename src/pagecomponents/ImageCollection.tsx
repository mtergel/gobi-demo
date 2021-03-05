import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ArrowRightLongIcon } from "../assets/icons";

// todo abstract this through props someday :P

export const WomenCollection = () => {
  const show3 = useBreakpointValue({ base: null, md: true });

  return (
    <Container maxWidth="1440px">
      <Box
        width="100%"
        display="flex"
        pt={["30px", "30px", "60px", "103px"]}
        pb={[0, 0, "48px", "96px", "250px"]}
        backgroundColor="white"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          as="h6"
          fontSize="22px"
          letterSpacing="1.44px"
          marginBottom="15px"
          display={["block", "block", "none"]}
        >
          WOMEN
        </Heading>
        <SimpleGrid columns={[2, 2, 3]} width="100%" gap={"6px"}>
          <ImageCard
            text={"CARDIGANS"}
            imageUrl={[
              "url(/images/women/women_1_mobile.png)",
              "url(/images/women/women_1_mobile.png)",
              "url(/images/women/women_1.png)",
            ]}
          />
          <ImageCard
            text={"DRESSES"}
            title={show3 && "WOMEN"}
            imageUrl={[
              "url(/images/women/women_2_mobile.png)",
              "url(/images/women/women_2_mobile.png)",
              "url(/images/women/women_2.png)",
            ]}
          />
          {show3 && (
            <ImageCard
              text={"CARDIGANS"}
              imageUrl={[
                "url(/images/women/women_1_mobile.png)",
                "url(/images/women/women_1_mobile.png)",
                "url(/images/women/women_1.png)",
              ]}
            />
          )}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export const MenCollection = () => {
  const show3 = useBreakpointValue({ base: null, md: true });

  return (
    <Container maxWidth="1440px">
      <Box
        width="100%"
        display="flex"
        pt="30px"
        backgroundColor="white"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          as="h6"
          fontSize="22px"
          letterSpacing="1.44px"
          marginBottom="15px"
          display={["block", "block", "none"]}
        >
          MEN
        </Heading>
        <SimpleGrid columns={[2, 2, 3]} width="100%" gap={"6px"}>
          <ImageCard
            text={"TURTLENECK"}
            imageUrl={[
              "url(/images/men/men_1_mobile.png)",
              "url(/images/men/men_1_mobile.png)",
              "url(/images/men/men_1.png)",
            ]}
          />
          <ImageCard
            text={"POLO"}
            title={show3 && "MEN"}
            imageUrl={[
              "url(/images/men/men_2_mobile.png)",
              "url(/images/men/men_2_mobile.png)",
              "url(/images/men/men_2.png)",
            ]}
          />
          {show3 && (
            <ImageCard
              text={"TURTLENECK"}
              imageUrl={[
                "url(/images/men/men_1_mobile.png)",
                "url(/images/men/men_1_mobile.png)",
                "url(/images/men/men_1.png)",
              ]}
            />
          )}
        </SimpleGrid>
      </Box>
    </Container>
  );
};
interface ImageCardProps {
  title?: string;

  text: string;
  imageUrl: string | string[];
}
export const ImageCard: React.FC<ImageCardProps> = ({
  text,
  imageUrl,
  title,
}) => {
  return (
    <Box>
      {title && (
        <Heading
          as="h6"
          fontWeight="900"
          fontSize={["30px", "30px", "30px", "40px"]}
          textAlign="center"
          lineHeight="2.25"
        >
          {title}
        </Heading>
      )}
      <Box height={["281px", "281px", "374px", "701px"]} position="relative">
        <Box
          position="absolute"
          width="100%"
          height="100%"
          backgroundImage={imageUrl}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        />
        <Box
          pos="absolute"
          bottom={0}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          py={["9px", "9px", "12px", "30px"]}
          px={["12px", "12px", "16px", "30px"]}
          color="white"
          width="100%"
          fontSize={["14px", "14px", "20px", "30px"]}
          textTransform="uppercase"
          letterSpacing={["1.6px", "1.6px", 0]}
        >
          {text}
          <ArrowRightLongIcon
            fontSize={["inherit", "inherit", "inherit", "25px"]}
          />
        </Box>
      </Box>
    </Box>
  );
};
