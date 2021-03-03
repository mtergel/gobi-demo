import { Button, Heading, Text } from "@chakra-ui/react";
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
        <Heading>WINTER SPICE 2020</Heading>
        <Text>Body Roboto</Text>
        <Button>SHOP NOW</Button>
      </Layout>
    </>
  );
}
