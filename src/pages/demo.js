import Layout from "@theme/Layout";
import DemoParagraph from "../components/Demo/DemoParagraph";
import DemoApp from "../components/Demo/DemoApp";

export default function Demo() {
  return (
    <Layout title={`OnePass Bridge Wiki`} description="OnePass Bridge Wiki">
      <main>
        <DemoParagraph />
        <DemoApp />
      </main>
    </Layout>
  );
}
