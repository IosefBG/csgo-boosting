import Advantages from "../components/Advantages";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-black overflow-hidden">
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="">
        <Layout>
          <Hero />
          <Advantages />
        </Layout>
      </main>
    </div>
  );
}
