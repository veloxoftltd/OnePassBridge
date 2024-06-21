import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Badge from "./Badge";

export default function HomepageHeader() {
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
