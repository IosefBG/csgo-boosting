import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import AccessDenied from "../components/AccessDenied";
import Cart from "../components/Cart";
import Invalid from "../components/Invalid";
import Layout from "../components/Layout";


export default function cart() {
  const { data: session }: any = useSession();
  const router = useRouter();
  const { from, to }: any = router.query;
  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    );
  }
  if (from && to) {
    if (parseInt(from) > 0 && parseInt(from) < parseInt(to)) {
      return (
        <div className="bg-black overflow-hidden">
          <main className="">
            <Layout>
              <Cart />
            </Layout>
          </main>
        </div>
      );
    }
  }
  return (
    <Layout>
      <Invalid />
    </Layout>
  );
}
