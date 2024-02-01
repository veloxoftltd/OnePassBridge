import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const partnerList = [
  {
    title: "Funding Box",
    imageName: "fb-logo.png",
  },
  {
    title: "Walt.id",
    imageName: "Walt.id_Logo.png",
  },
  {
    title: "Veloxoft",
    imageName: "veloxoft-logo.png",
  },
  {
    title: "BIA",
    imageName: "BIA_logo-EN.png",
  },
  {
    title: "SDT",
    imageName: "SDT-logo.png",
  },
  {
    title: "The edge",
    imageName: "THE_EDGE_LOGO.png",
  },
  {
    title: "Accelerace",
    imageName: "accelerace-logo.png",
  },
];

function Partner({ imageName, title, col = "4" }) {
  return (
    <div className={clsx(`col col--${col}`, styles.partnerBox)}>
      <div className="text--center">
        <img
          src={
            require(`@site/static/img/consortium-logos/` + imageName).default
          }
          alt="fundigbox logo"
          className={styles.partnerImg}
        />
      </div>
      <div
        className={clsx("text--center padding-horiz--md", styles.partnerText)}
      >
        <Heading as="h3">{title}</Heading>
        {/* <p>{description}</p> */}
      </div>
    </div>
  );
}

export default function Consortium() {
  return (
    <section className={styles.partners}>
      <div className={clsx("container", styles.header)}>
        <Heading as="h2">Consortium</Heading>
        <div className={clsx("row", styles.rowPartner)}>
          {partnerList.slice(0, 3).map((props, idx) => (
            <Partner key={idx} {...props} />
          ))}
        </div>
        <div className={clsx("row", styles.rowPartner)}>
          {partnerList.slice(3, 7).map((props, idx) => (
            <Partner key={idx} {...props} col="3" />
          ))}
        </div>
      </div>
    </section>
  );
}

//consortium-logos/fb-logo.png
