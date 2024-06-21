import clsx from "clsx";
import Layout from "@theme/Layout";

import styles from "./index.module.css";
import About from "../components/Homepage/About";
import FAQ from "../components/Homepage/FAQ";
import CallToAction from "../components/Homepage/CallToAction";
import HomepageHeader from "../components/Homepage/HomepageHeader";
import Divider from "../components/Homepage/Divider/Divider";
import ImageWithTitle from "../components/Homepage/ImageWithTitle/ImageWithTitle";

export default function Home() {
  return (
    <Layout title={`OnePass Bridge Wiki`} description="OnePass Bridge Wiki">
      <HomepageHeader />
      <main>
        <Divider />
        <CallToAction />
        <ImageWithTitle />
        <Divider />
        <About />
        <FAQ />
      </main>
    </Layout>
  );
}
