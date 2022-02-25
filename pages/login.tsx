import { getProviders, signIn } from "next-auth/react";
import Head from "next/head";
import { useState } from "react";
import Layout from "../components/Layout";

function validation(name: any, id: any, email: any) {
  if (name == "Email") {
    if (email < 1) {
      return "error";
    } else {
      signIn(id, {
        callbackUrl: "/",
        email,
      });
    }
  } else {
    signIn(id, {
      callbackUrl: "/",
      email,
    });
  }
}

function Login({ providers }: any) {
  const [email, setEmail] = useState("");
  return (
    <Layout>
      <Head>
        <title>Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-l-2 dark:bg-d-2 pb-80">
        <section className="flex flex-col pt-48 ">
          <div className="login-box w-full md:mx-auto relative z-100">
            <div className="box shadow-2xl max-w-xl mx-auto my-auto rounded-md p-14 z-100 bg-l-3 dark:bg-d-3">
              <h2 className="text-2xl font-bold mb-8 dark:text-white text-gray-600">
                Sign in to your account
              </h2>
              <div className="mb-8">
                <label htmlFor="email">
                <p className="text-md dark:text-white text-gray-600 mb-2">
                  Email
                </p>
                </label>
                <input
                  autoComplete="on"
                  id="email"
                  type="email"
                  value={email}
                  className="border w-full rounded-md border-gray-300 px-2 py-2"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex items-center mb-8">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-indigo-500 rounded-md"
                />
                <p className="ml-2 text-sm">Stay signed in for a week</p>
              </div>
              {Object.values(providers).map((provider: any) => (
                <>
                  <div key={provider.name}>
                    <button
                      onClick={() =>
                        // signIn(provider.id, {
                        //     callbackUrl: "/",
                        //     email,
                        // })
                        validation(provider.name, provider.id, email)
                      }
                      className="w-full bg-indigo-500 py-2 my-2 rounded-md text-gray-50"
                    >
                      {provider.name == "Email" ? (
                        <div className="text-center">Login</div>
                      ) : (
                        <div>Login with {provider.name}</div>
                      )}
                    </button>
                  </div>
                  {provider.name == "Email" && (
                    <div className="text-center">Or sign in with:</div>
                  )}
                </>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  console.log(providers);
  return {
    props: {
      providers,
    },
  };
}
