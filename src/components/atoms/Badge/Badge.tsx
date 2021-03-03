import { Box } from "@chakra-ui/react";

const Badge: React.FC<{}> = ({ children }) => {
  return (
    <Box position="relative">
      {children}
      <Box
        pos="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
        right="0"
        bottom="0"
        transform="translate(25%, 25%)"
        borderRadius="9999px"
        width={["10px", "10px", "10px", "12px"]}
        height={["10px", "10px", "10px", "12px"]}
        backgroundColor="gobi.secondary"
      />
    </Box>
  );
};

export default Badge;
