import {
  Box,
  DarkMode,
  HStack,
  IconButton,
  Spacer,
  useBreakpointValue,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import {
  BasketIcon,
  HeartIcon,
  MenuIcon,
  SearchIcon,
} from "../../assets/icons";
import useScrollTrigger from "../../hooks/useScrollTrigger";
import Overlay from "./Overlay";
import LogoMobile from "../../assets/logo/LogoMobile";
import LogoDesktop from "../../assets/logo/LogoDesktop";
import Badge from "../../components/atoms/Badge/Badge";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowBackIcon } from "@chakra-ui/icons";
import SearchBar from "./SearchBar";
import { useEffect } from "react";
import { links } from "./Overlay";
import NextLink from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const height = useBreakpointValue({ sm: 754, md: 822 });
  const trigger = useScrollTrigger({
    threshold: height,
    disableHysteresis: true,
  });

  const Logo = useBreakpointValue({
    base: <LogoMobile fontSize="65px" />,
    xl: <LogoDesktop fontSize="87px" />,
  });

  // hook for overlay
  const { isOpen, onClose, onOpen } = useDisclosure();
  // hook for search
  const {
    isOpen: searchOpen,
    onClose: onSearchClose,
    onOpen: onSearchOpen,
  } = useDisclosure();
  const showOnBreakpoint = useBreakpointValue({ base: true, lg: false });

  useEffect(() => {
    if (showOnBreakpoint === false) {
      onSearchClose();
    }
  }, [showOnBreakpoint]);

  return (
    <>
      <Box
        as="nav"
        height={["50px", "50px", "50px", "50px", "88px"]}
        filter="drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.15))"
        transition="background .3s"
        flex="1 0 auto"
        background={
          trigger
            ? "gobi.header"
            : "linear-gradient(180deg, rgba(0, 0, 0, 0.31) 21.88%, rgba(0, 0, 0, 0.12) 63.13%, rgba(0, 0, 0, 0) 87.88%)"
        }
        top={["38px", "38px", "38px", "38px", "40px"]}
      >
        <DarkMode>
          <Box
            width="100%"
            height="100%"
            display="flex"
            alignItems="center"
            py={[2]}
            px={[2.5, 2.5, 2.5, 10]}
            color="white"
            fontSize="lg"
          >
            <HStack
              as="ul"
              listStyleType="none"
              display={["none", "none", "none", "none", "table"]}
              textAlign="center"
              zIndex={2}
            >
              {links.map((i) => (
                <Box
                  as="li"
                  key={i.text}
                  display="table-cell"
                  position="relative"
                >
                  <NextLink href={i.link} passHref>
                    <Link
                      textDecor="none"
                      className={styles.hoverableLink}
                      _after={{
                        background: "gobi.secondaryLight",
                      }}
                    >
                      {i.text}
                    </Link>
                  </NextLink>
                </Box>
              ))}
            </HStack>
            <HStack
              spacing={0}
              zIndex={2}
              display={["block", "block", "block", "block", "none"]}
            >
              <IconButton aria-label="Menu" variant="ghost" onClick={onOpen}>
                <MenuIcon />
              </IconButton>
              <IconButton
                aria-label="Search"
                variant="ghost"
                onClick={onSearchOpen}
              >
                <SearchIcon />
              </IconButton>
            </HStack>
            <Spacer />
            <Box
              pos="absolute"
              left="0"
              right="0"
              height="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              zIndex={1}
            >
              {Logo}
            </Box>
            <HStack spacing={0} zIndex={2}>
              <Box
                mr={5}
                width="261px"
                display={["none", "none", "none", "none", "block"]}
              >
                <SearchBar />
              </Box>
              <IconButton aria-label="Wishlist" variant="ghost">
                <HeartIcon />
              </IconButton>

              <IconButton aria-label="Basket" variant="ghost">
                <Badge>
                  <BasketIcon />
                </Badge>
              </IconButton>
            </HStack>
            <AnimatePresence>
              {searchOpen && (
                <motion.div
                  transition={{ duration: 0.18 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ position: "absolute", left: 0, right: 0, zIndex: 4 }}
                >
                  <Box
                    width="100%"
                    backgroundColor="gobi.header"
                    height="50px"
                    display="flex"
                    alignItems="center"
                    py={[2]}
                    px={[2.5, 2.5, 2.5, 10]}
                  >
                    <IconButton
                      aria-label="Close search"
                      variant="ghost"
                      onClick={onSearchClose}
                      size="sm"
                    >
                      <ArrowBackIcon fontSize="xl" />
                    </IconButton>
                    <Box mx={6} flexGrow={1}>
                      <SearchBar />
                    </Box>
                    <IconButton aria-label="Search" variant="ghost" size="sm">
                      <SearchIcon />
                    </IconButton>
                  </Box>
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
        </DarkMode>
      </Box>

      <Overlay open={isOpen} onClose={onClose} />
    </>
  );
};

export default Navbar;
