import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import AccessDenied from "../components/AccessDenied";
import Checkout from "../components/Checkout";
import Invalid from "../components/Invalid";
import Layout from "../components/Layout";

const checkout = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: session }: any = useSession();
  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    );
  }
  if (!id) {
    return (
      <Layout>
        <Invalid />
      </Layout>
    );
  }
  return (
    <>
      <div className="bg-l-2 dark:bg-d-2">
        <Layout>
          <Checkout />
        </Layout>
      </div>
    </>
  );
};

export default checkout;
