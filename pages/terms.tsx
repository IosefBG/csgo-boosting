import Head from "next/head";
import Layout from "../components/Layout";
import Terms from "../components/Terms";

const terms = () => {
  return (
    <>
        <Head>
          <title>Terms & conditions</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Layout>
          <Terms/>
        </Layout>
    </>
  );
};

export default terms;
