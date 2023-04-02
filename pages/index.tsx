import Layout from "@/layout/Layout";
import Hero from "@/components/hero/Hero";
import TrendShip from "@/components/trendShip/TrendShip";
import Banner from "@/components/banner/Banner";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <TrendShip />
      <Banner title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
    </Layout>
  );
}
