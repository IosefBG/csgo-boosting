import Advantages from "../components/Advantages";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Ranks from "../components/Ranks";

export default function Home() {
  return (
    <div className="bg-black overflow-hidden">
      <main className="">
        <Layout>
          <Hero />
          <Ranks />
          <Advantages />
          <Faq />
        </Layout>
      </main>
    </div>
  );
}
