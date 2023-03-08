import Layout from "components/Layout";
import HomepageTitleSection from "@/components/homepage/HomepageSectionTitle";
import HomepageAboutSection from "@/components/homepage/HomepageSectionAbout";
import HomepageServiceSection from "@/components/homepage/HomepageSectionService";
import ProductSection from "@/components/product/SectionProduct";
import { PageSectionLargeMarginBottom } from "@/styles/sections";
import HomepageMaterialSection from "@/components/homepage/HomepageSectionMaterial";

export default function Home() {
  return (
    <Layout>
      <HomepageTitleSection />
      <HomepageAboutSection />
      <HomepageServiceSection />
      <PageSectionLargeMarginBottom>
        <ProductSection />
      </PageSectionLargeMarginBottom>
      <HomepageMaterialSection />
    </Layout>
  );
}
