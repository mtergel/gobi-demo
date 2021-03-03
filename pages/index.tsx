import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Layout from "../src/layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
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
        ></Box>
      </Layout>
    </>
  );
}
