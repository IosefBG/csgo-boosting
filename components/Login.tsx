import { getProviders, signIn } from "next-auth/react";
import { useState } from "react";
function Login({ providers }: any) {
    const [email, setEmail] = useState("");
    return (
        <>
        <section className="flex flex-col mt-48 bg-l-2 dark:bg-d-2">
            <div className="login-box w-full md:mx-auto relative z-100">
                <div className="box shadow-2xl max-w-xl mx-auto my-auto rounded-md p-14 z-100">
                    <h2 className="text-2xl font-bold mb-8 text-gray-600">
                        Sign in to your account
                    </h2>
                    <div className="mb-8">
                        <p className="text-md text-gray-500 mb-2">Email</p>
                        <input
                            type="email"
                            value={email}
                            className="border w-full rounded-md border-gray-300 px-2 py-2"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center mb-8">
                        <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-indigo-500 rounded-md"
                        />
                        <p className="ml-2 text-sm">
                            Stay signed in for a week
                        </p>
                    </div>
                    {Object.values(providers).map((provider: any) => (
                        <>
                        <div key={provider.name}>
                            <button
                                onClick={() =>
                                    signIn(provider.id, {
                                        callbackUrl: "/",
                                        email,
                                    })
                                }
                                className="w-full bg-indigo-500 py-2 my-2 rounded-md text-gray-50"
                            >
                                {provider.name == "Email" ? (<div className="text-center">Login</div>): (<div>Login with {provider.name}</div>)}
                            </button>
                        </div>
                        {provider.name == "Email" && (<div className="text-center">Or sign in with:</div>)}
                        </>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
}

export default Login;

export async function getServerSideProps() {
    const providers = await getProviders();
    console.log(providers)
    return {
        props: {
            providers,
        },
    };
}
