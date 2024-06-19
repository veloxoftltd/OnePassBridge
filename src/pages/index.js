import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Heading from "@theme/Heading";
import styles from "./index.module.css";
import Consortium from "../components/Homepage/Consortium";
import About from "../components/Homepage/About";
import FAQ from "../components/Homepage/FAQ";
import Badge from "../components/Homepage/Badge";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx("heroPrimary", styles.heroBanner)} //hero hero--primary
    >
      <Badge text="OnePass Wiki" />
      <div className="container">
        <Heading as="h1" className={clsx(styles.hero_title)}>
          OnePass Bridge
        </Heading>
        <p className={clsx(styles.hero_subtitle)}>
          Paving the way to the future of funding distribution
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx(
              "button button--secondary button--lg",
              styles.buttonPrimary
            )}
            to="/docs/category/governance-framework"
          >
            See documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`OnePass Bridge Wiki`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <About />
        <Consortium />
        <FAQ />
      </main>
    </Layout>
  );
}
