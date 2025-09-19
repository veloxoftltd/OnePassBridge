import clsx from "clsx";
import styles from "./styles.module.css";
import React from "react";
import { Steps, Row, Col } from "antd";
const description = "This is a description.";

export default function DemoApp() {
  const [step, setStep] = React.useState(1);

  return (
    <section className={styles.partners}>
      <div className={clsx("container", styles.header)}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <div className={styles.phoneBody}>
              <div className={styles.topNotch}></div>
              <div className={styles.phoneScreen}>
                <img
                  src="/img/IMG_3357.png"
                  style={{ height: "800px", width: "450px" }}
                ></img>
              </div>
            </div>{" "}
          </Col>
          <Col span={12}>
            <Steps
              direction="vertical"
              current={step}
              items={[
                {
                  title: "Finished",
                  description,
                },
                {
                  title: "In Progress",
                  description,
                },
                {
                  title: "Waiting",
                  description,
                },
              ]}
            />
          </Col>
        </Row>
      </div>
    </section>
  );
}
