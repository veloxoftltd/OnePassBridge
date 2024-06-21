import clsx from "clsx";
import Layout from "@theme/Layout";

import styles from "./index.module.css";
import Consortium from "../components/Homepage/Consortium";
import About from "../components/Homepage/About";
import FAQ from "../components/Homepage/FAQ";
import CallToAction from "../components/Homepage/CallToAction";
import HomepageHeader from "../components/Homepage/HomepageHeader";
import Divider from "../components/Homepage/Divider/Divider";

export default function Home() {
  return (
    <Layout
      title={`OnePass Bridge Wiki`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <Divider />
        <CallToAction />
        <Divider />

        <About />
        <Consortium />
        <FAQ />
      </main>
    </Layout>
  );
}
