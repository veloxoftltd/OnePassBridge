import { ConfigProvider } from "antd";
import { useEffect, useRef } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import { Collapse } from "antd";

const questions = [
  {
    question: "This is panel header 1",
    answer: "text 1",
  },
  {
    question: "This is panel header 2",
    answer: "text 2",
  },
  {
    question: "This is panel header 3",
    answer: "text 3",
  },
];

export default function FAQ() {
  const items = useRef([]);
  const isMounted = useRef(false);

  if (!isMounted.current) {
    questions.map((q, index) => {
      const item = {
        key: index + 1,
        label: q.question,
        children: <p>{q.answer}</p>,
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
