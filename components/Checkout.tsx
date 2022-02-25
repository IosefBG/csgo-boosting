import { useRouter } from "next/router";
import Head from 'next/head'

const Checkout = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
        <Head>
          <title>Checkout</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <section className="flex flex-col my-48 bg-l-2 dark:bg-d-2 pb-20">
            <div className="login-box w-full md:mx-auto relative z-100">
                <div className="box shadow-2xl max-w-xl mx-auto my-auto rounded-md p-14 z-100">
                    <h1>Thank you for your purchase.</h1>
                    <h3>This is your order number: <b>{id}</b></h3>
                In order to complete your payment, contact us on discord at <b>Vladgrasul#6969</b> with the order number or email address.
                </div>
            </div>
        </section>
        </>
    );
}

export default Checkout;