import clsx from "clsx";
import styles from "../styles.module.css";

export default function ImageWithTitle() {
  return (
    <section className={styles.partners}>
      <div className={clsx("container", styles.header)}>
        <h3 className={styles.titleSection}>Partners</h3>
        <img
          src={
            require(`@site/static/img/consortium-logos/partners-logos.png`)
              .default
          }
          alt="logos"
        ></img>
      </div>
    </section>
  );
}
