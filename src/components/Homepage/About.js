import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

export default function About() {
  return (
    <section className={styles.partners}>
      <div className={clsx("container", styles.header)}>
        <div className={clsx("row")}>
          <div className={clsx(`col col--5`, styles.partnerBox)}>
            <Heading as="h2">About the project</Heading>
            <p>
              OnePass contributes to the 'EBSI SME Financing Use Case' by
              fostering SMEs to take control on how they manage, store and share
              their credentials with financing bodies (public, semi-public or
              private).
            </p>
          </div>
          <div className={clsx(`col `, styles.partnerBox)}>
            <div className="text--center">
              <img
                src={
                  require(`@site/static/img/homepage/3.3-enrollment-completed.png`)
                    .default
                }
                alt="Welcome to OnePass Bridge"
                className={clsx(styles.homeImg)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
