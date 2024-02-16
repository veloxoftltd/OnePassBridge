import { ConfigProvider } from "antd";
import { useEffect, useRef } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import { Collapse } from "antd";

const questions = [
  {
    question: "What is a DID?",
    answer:
      "Decentralised identifiers (DIDs) are a new type of identifier that enable verifiable, decentralised digital identity. A DID refers to any subject (e.g., a person, organisation, thing, data model, abstract entity, etc.) as determined by the controller of the DID. In contrast to typical, federated identifiers, DIDs have been designed so that they may be decoupled from centralised registries, identity providers, and certificate authorities.",
  },
  {
    question: "What is a VC?",
    answer:
      "Verifiable credentials (VCs) are an open standard for digital credentials. They can represent information found in physical credentials, such as a passport or license, as well as new things that have no physical equivalent, such as ownership of a bank account. They have numerous advantages over physical credentials, most notably that they are digitally signed, which makes them tamper-resistant and instantaneously verifiable.",
  },
  {
    question: "How can I get access to EBSI documentation / specifications?",
    hasLink: true,
    answer: (
      <p>
        EBSI's documentation and specifications are available in the{" "}
        {
          <a
            href="https://hub.ebsi.eu/specs"
            class="external-link"
            rel="nofollow"
            target="_blank"
          >
            Specifications section
          </a>
        }{" "}
        and in the{" "}
        <a
          href="https://hub.ebsi.eu/"
          class="external-link"
          rel="nofollow"
          target="_blank"
        >
          Developers Hub
        </a>
        . The specifications are constantly evolving and the documentation will
        continuously be updated.
      </p>
    ),
  },
];

export default function FAQ() {
  const items = useRef([]);
  const isMounted = useRef(false);

  if (!isMounted.current) {
    questions.map((q, index) => {
      const children = q.hasLink ? q.answer : <p>{q.answer}</p>;
      const item = {
        key: index + 1,
        label: q.question,
        children: children,
      };
      items.current.push(item);
    });
    console.log(items.current, "before render");
  }

  useEffect(() => {
    isMounted.current = true;
    console.log(items.current, "render");

    let cs = getComputedStyle(document.querySelector(":root"));
    console.log(cs.getPropertyValue("--ifm-font-color-base-inverse"));
  }, []);

  return (
    <section className={styles.faqContainer}>
      <div className={clsx("container", styles.header)}>
        <Heading as="h2">Frequently Asked Questions</Heading>
        <div className={clsx(styles.centerRow)}>
          <ConfigProvider
            theme={{
              components: {
                Collapse: {
                  contentBg: "#fafafa",
                  headerBg: "#ffd400",
                },
              },
              token: {
                colorText: "#000000",
                colorBorder: "#575755",
                fontSizeLG: 20,
                fontSize: 18,
              },
            }}
          >
            <Collapse
              className={clsx(styles.faq)}
              accordion
              items={items.current}
              defaultActiveKey={["1"]}
            />
          </ConfigProvider>
        </div>
      </div>
    </section>
  );
}
