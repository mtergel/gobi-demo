import { Box } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <>
      <Box display="flex" height="100%" flexDir="column">
        <Header />
        {/* mt for top header */}
        <Box
          as="main"
          flexGrow={1}
          marginTop={["38px", "38px", "38px", "40px"]}
        >
          {children}
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
