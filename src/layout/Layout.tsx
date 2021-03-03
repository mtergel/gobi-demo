import { Box } from "@chakra-ui/react";
import Header from "./components/Header";

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <>
      <Box display="flex" height="100%" flexDir="column">
        <Header />
        <Box as="main" flexGrow={1}>
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
