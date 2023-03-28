import Layout from "@/components/Layout";
import ProductDescriptionSection from "@/components/portfilio_product_description/SectionDescription";
import PageTitleSection from "@/components/title_section/PageTitleSection";

export default function Minimalist() {
  return (
    <Layout>
      <PageTitleSection pageName="Minimalist" />
      <ProductDescriptionSection pageName="minimalist" />
    </Layout>
  );
}
