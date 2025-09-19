import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

export default function DemoParagraph() {
  return (
    <section className={styles.partners}>
      <div className={clsx("container", styles.header)}>
        <div className={clsx("centerRow")}>
          <Heading as="h2">About the Demo</Heading>
          <p>
            OnePass contributes to the 'EBSI SME Financing Use Case' by
            fostering SMEs to take control on how they manage, store and share
            their credentials with financing bodies (public, semi-public or
            private).
          </p>
        </div>
      </div>
    </section>
  );
}
