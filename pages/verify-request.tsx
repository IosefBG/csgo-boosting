import Head from "next/head";
import Layout from "../components/Layout";

const checkout = () => {
  return (
    <>
      <div className="bg-l-2 dark:bg-d-2 pb-80">
        <Head>
          <title>Verify</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Layout>
          <section className="flex flex-col my-48 bg-l-2 dark:bg-d-2">
            <div className="login-box w-full md:mx-auto relative z-100">
              <div className="box shadow-2xl max-w-xl mx-auto my-auto rounded-md p-14 z-100">
                <h1>An email has been sent.</h1>
                <h3>Please check your inbox in order to login.</h3>
              </div>
            </div>
          </section>
        </Layout>
      </div>
    </>
  );
};

export default checkout;
