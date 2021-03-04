import Head from "next/head";
import Layout from "../src/layout/Layout";
import Banner from "../src/pagecomponents/Banner/Banner";
import FeaturedCollection from "../src/pagecomponents/FeaturedCollection";
import {
  WomenCollection,
  MenCollection,
} from "../src/pagecomponents/ImageCollection";

export default function Home() {
  return (
    <>
      <Head>
        <title>GOBI CASHMERE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Banner />
        <FeaturedCollection />
        <WomenCollection />
        <MenCollection />
      </Layout>
    </>
  );
}
