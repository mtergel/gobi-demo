import {
  Box,
  DarkMode,
  Flex,
  Heading,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import NextLink from "next/link";
import styles from "./Overlay.module.css";
import { useEffect, useState } from "react";
import { RemoveScroll } from "react-remove-scroll";
import { CloseIcon } from "@chakra-ui/icons";

interface OverlayProps {
  open: boolean;
  onClose: () => void;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    y: 0,
  },
};

export const links = [
  {
    text: "Women",
    link: "#",
  },
  {
    text: "Men",
    link: "#",
  },
  {
    text: "Home",
    link: "#",
  },
  {
    text: "Accessories",
    link: "#",
  },
  {
    text: "Organic",
    link: "#",
  },
];

const Overlay: React.FC<OverlayProps> = ({ open, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const showOnBreakpoint = useBreakpointValue({ base: true, lg: false });

  useEffect(() => {
    if (showOnBreakpoint === false) {
      onClose();
    }
  }, [showOnBreakpoint]);

  if (isMounted) {
    return (
      <AnimatePresence>
        {open && (
          <RemoveScroll forwardProps>
            <motion.div
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100%" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <Flex
                direction="column"
                w="100%"
                bg={"white"}
                h="100vh"
                overflow="auto"
                pos="absolute"
                top="0"
                left="0"
                zIndex={20}
                pb="8"
                backgroundColor="rgba(0, 0, 0, 0.9)"
                color="white"
              >
                <Box width="100%" py={[2]} px={[2.5, 2.5, 2.5, 10]}>
                  <DarkMode>
                    <IconButton
                      aria-label="Close-menu"
                      onClick={onClose}
                      size="sm"
                    >
                      <CloseIcon />
                    </IconButton>
                  </DarkMode>
                </Box>
                <motion.ol
                  variants={container}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className={styles.overlayItems}
                >
                  {links.map((link) => (
                    <NextLink href={link.link} passHref key={link.text}>
                      <Heading
                        fontSize={["4xl", "5xl", "5xl", "7xl"]}
                        as="a"
                        userSelect="none"
                      >
                        <motion.li
                          variants={item}
                          whileHover={{ scale: 1.2 }}
                          onClick={onClose}
                        >
                          {link.text}
                        </motion.li>
                      </Heading>
                    </NextLink>
                  ))}
                </motion.ol>
              </Flex>
            </motion.div>
          </RemoveScroll>
        )}
      </AnimatePresence>
    );
  } else {
    return null;
  }
};
export default Overlay;
