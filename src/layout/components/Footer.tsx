import {
  Box,
  BoxProps,
  Button,
  DarkMode,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from "@chakra-ui/react";

import { FiFacebook, FiYoutube, FiTwitter, FiInstagram } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

const FooterItems = [
  {
    title: "ABOUT US",
    items: [
      {
        title: "Our History",
      },
      {
        title: "Our Story",
      },
      {
        title: "Store Location",
      },
      {
        title: "Imprint",
      },
    ],
  },
  {
    title: "POLICY",
    items: [
      {
        title: "Privacy Policy",
      },
      {
        title: "Shipping & Return Policy",
        special: true,
      },
      {
        title: "Impressum",
      },
      {
        title: "Return Portal",
      },
    ],
  },
  {
    title: "CUSTOMER SERVICE",
    items: [
      {
        title: "General Terms and Conditions",
      },
      {
        title: "Contact Us",
      },
      {
        title: "News",
      },
      {
        title: "FAQ",
      },
    ],
  },
  {
    title: "ABOUT US",
    items: [
      {
        title: "Our History",
      },
      {
        title: "Our Story",
      },
      {
        title: "Store Location",
      },
      {
        title: "Imprint",
      },
    ],
  },
];

const Footer: React.FC<{}> = () => {
  return (
    <Box as="footer">
      {/* subscription */}

      <Box
        paddingTop={["52px"]}
        pb={"36px"}
        color="#4F5255"
        px={["36px"]}
        width="100%"
        display="flex"
        flexDir="column"
        alignItems="center"
      >
        <Box maxW="640px">
          <Heading
            as="h6"
            fontWeight="800"
            fontSize="24px"
            textAlign="center"
            lineHeight="32px"
          >
            Subscribe
          </Heading>
          <Text
            fontFamily="Lato"
            fontSize="9px"
            letterSpacing="1px"
            textAlign="center"
            marginBottom="18px"
          >
            Sign up for emails and receive early access to new arrivals, sales,
            events + more.
          </Text>
          <InputGroup size="lg" mb={"8px"}>
            <Input
              type="email"
              paddingLeft="33.5px"
              placeholder="Enter your email address"
              height="48px"
              fontFamily="Lato"
              fontSize="9px"
              letterSpacing="1px"
              variant="filled"
              background="#F5F7F6"
            />
            <InputRightElement>
              <Button height="48px" variant="gobi" fontSize="12px">
                SUBMIT
              </Button>
            </InputRightElement>
          </InputGroup>

          <Box display="flex" justifyContent="center">
            <Text
              fontSize={["9px", "9px", "10px"]}
              fontFamily="Lato"
              textAlign={["center", "center", "left"]}
              paddingLeft={[0, 0, 0, 5]}
            >
              By signing up, you will receive Gobi Cashmere offers, promotions
              and other commercial messages. You are also agreeing to Gobi
              Cashmere's
              <Text
                as="span"
                color="#000"
                textDecor="underline"
                style={{
                  textDecorationColor: "#0083C3",
                }}
              >
                {" "}
                Privacy Policy.{" "}
              </Text>
              You may unsubscribe at any time.
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        display={["none", "none", "flex", "none"]}
        justifyContent="center"
        borderTop="1px solid #ECECE6"
        boxSizing="border-box"
      >
        <Socials
          display={["none", "none", "flex", "none"]}
          justifyContent="center"
          backgroundColor="white"
        />
        <Box
          as="hr"
          margin="0 4px"
          my="8px"
          height="auto"
          alignSelf="stretch"
          width="1px"
          border="none"
          flexShrink={0}
          backgroundColor="#ECECE6"
        />
        <PaymentTypes display={["none", "none", "flex", "none"]} ml={"6px"} />
      </Box>

      {/* footer */}
      <Box
        pt={["36px", "36px", "48px", "62px"]}
        pb={["31px", "31px", "48px", "62px"]}
        backgroundColor="#F5F7F6"
      >
        <Box display="flex" alignItems="center">
          <Box
            flexGrow={1}
            boxShadow={[
              "none",
              "none",
              "none",
              "0px 0px 20px rgba(0, 0, 0, 0.05)",
            ]}
            background={[
              "transparent",
              "transparent",
              "transparent",
              "linear-gradient(0deg, #FFFFFF, #FFFFFF), #FFFFFF",
            ]}
            // py={[0, 0, 0, "54px"]}
            pt={[0, 0, 0, "54px"]}
            pb={[0, 0, 0, "24px"]}
          >
            <Box display="flex" flexDir={["column", "column", "row"]}>
              {FooterItems.map((i, index) => (
                <Box
                  key={index}
                  color="#4F5255"
                  marginBottom="24px"
                  flexGrow={1}
                  px={["36px", "36px", "34px", "36px", "86px"]}
                >
                  <Heading as="h6" fontSize="12px" marginBottom="18px">
                    {i.title}
                  </Heading>
                  <Box as="ul" listStyleType="none">
                    {i.items.map((j, index) => (
                      <Box
                        as="li"
                        key={index}
                        fontFamily="Lato"
                        fontSize="12px"
                        textDecor={j.special ? "underline" : "none"}
                        style={{
                          textDecorationColor: "#0083C3",
                        }}
                        color={j.special ? "#000" : "inheirit"}
                        _notLast={{
                          marginBottom: ["8px", "8px", "16px"],
                        }}
                      >
                        {j.title}
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
            <Box
              px={["36px", "36px", "34px", "36px", "86px"]}
              display={["none", "none", "none", "block"]}
            >
              <img src="images/footer/paymentCard_small.png" />
            </Box>
          </Box>

          <Box
            display={["none", "none", "none", "flex"]}
            flexDir="column"
            background="linear-gradient(0deg, #F6F6F6, #F6F6F6), #FFFFFF"
            py="24px"
            px="56px"
          >
            <Text fontSize="14px" letterSpacing="2px">
              FOLLOW US
            </Text>
            <Socials
              strokeColor="#1D1D1D"
              flexDir="column"
              alignItems="flex-start"
            />
          </Box>
        </Box>
        <Socials
          display={["flex", "flex", "none"]}
          justifyContent="center"
          mb="8px"
        />
        <PaymentTypes
          display={["flex", "flex", "none"]}
          justifyContent="center"
          mb="8px"
        />
        <Box
          display={["flex", "flex", "none"]}
          alignItems="center"
          justifyContent="center"
          mb="16px"
        >
          <Link href="#">
            <Image src="images/footer/image 2.png" />
          </Link>
        </Box>
      </Box>
      <Box
        width="100%"
        display={"flex"}
        backgroundColor="#F5F7F6"
        py={"8px"}
        borderTop="1px solid #ECECE6"
        alignItems="center"
        justifyContent={["center", "center", "flex-start"]}
      >
        <Box display="flex" alignItems="center" pl={[0, 0, 0, "36px"]}>
          <Box
            pl="11px"
            mr="36px"
            display={["none", "none", "flex", "none"]}
            alignItems="center"
          >
            <GoLocation />
            <Text ml="8px" fontFamily="Lato" fontSize="9px" textAlign="center">
              United Kingdom
            </Text>
          </Box>
          <Text
            fontFamily="Lato"
            fontSize={["9px", "9px", "9px", "12px"]}
            textAlign="center"
          >
            © 2020 Gobi Cashmere. All rights reserveds{" "}
          </Text>
        </Box>

        <Link
          href="#"
          marginLeft="auto"
          display={["none", "none", "block", "none"]}
        >
          <Image src="images/footer/image 2.png" />
        </Link>
      </Box>
    </Box>
  );
};

interface SocialProps extends BoxProps {
  strokeColor?: string;
  fill?: string;
}
const Socials: React.FC<SocialProps> = (props) => {
  const { strokeColor = "#4f5255", fill = "none", ...rest } = props;
  return (
    <DarkMode>
      <Box display="flex" {...rest}>
        <IconButton aria-label="facebook">
          <Link href="#">
            <FiFacebook stroke={strokeColor} fill={fill} />
          </Link>
        </IconButton>
        <IconButton aria-label="youtube">
          <Link href="#">
            <FiYoutube stroke={strokeColor} fill={fill} />
          </Link>
        </IconButton>
        <IconButton aria-label="twitter">
          <Link href="#">
            <FiTwitter stroke={strokeColor} fill={fill} />
          </Link>
        </IconButton>

        <IconButton aria-label="instragram">
          <Link href="#">
            <FiInstagram stroke={strokeColor} fill={fill} />
          </Link>
        </IconButton>
      </Box>
    </DarkMode>
  );
};

interface PaymentTypesProps extends BoxProps {}
const PaymentTypes: React.FC<PaymentTypesProps> = (props) => {
  return (
    <Box display="flex" alignItems="center" {...props}>
      <Link href="#" mr="10px">
        <Image src="images/footer/ms-card.png" />
      </Link>
      <Link href="#" mr="10px">
        <Image src="images/footer/Shopify.png" />
      </Link>

      <Link href="#" mr="10px">
        <Image src="images/footer/Paypal.png" />
      </Link>

      <Link href="#">
        <Image src="images/footer/Visa.png" />
      </Link>
    </Box>
  );
};

export default Footer;
