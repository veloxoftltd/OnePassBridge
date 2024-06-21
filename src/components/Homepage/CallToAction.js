import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

export default function CallToAction() {
  return (
    <section className={styles.partners}>
      <div className={clsx("container", styles.header)}>
        <div className={clsx("row", styles.callToAction)}>
          <div className={clsx("col")}>
            <Heading as="h2">
              Join our pilot program and get access to a network of verified
              entities to streamline SME funding.
            </Heading>
          </div>
          <div className={clsx("col col--2", styles.callToAction_button)}>
            <Link
              className={clsx(
                "button button--secondary button--lg",
                styles.buttonPrimary
              )}
              href="https://app.getonepass.eu/invite/rpScuPkmR6"
              target="_blank"
            >
              Join the waitlist
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
