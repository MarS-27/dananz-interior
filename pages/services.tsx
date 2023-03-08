import Layout from "components/Layout";
import PageTitleSection from "@/components/title_section/PageTitleSection";
import ProductSection from "@/components/product/SectionProduct";
import { GridContent } from "@/styles/layout";
import ServicesListSection from "@/components/services_page/ServicesListSection";

export default function Services() {
  return (
    <Layout>
      <PageTitleSection pageName="services" />
      <ServicesListSection />
      <GridContent>
        <ProductSection />
      </GridContent>
    </Layout>
  );
}
