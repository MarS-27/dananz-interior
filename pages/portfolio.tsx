import Layout from "components/Layout";
import PageTitleSection from "@/components/title_section/PageTitleSection";
import WhyChooseUsSection from "@/components/choose_us/WhyChooseUsSection";
import PortfolioSection from "@/components/portfolio_page/PortfolioSection";

export default function Portfolio() {
  return (
    <Layout>
      <PageTitleSection pageName="portfolio" />
      <PortfolioSection />
      <WhyChooseUsSection />
    </Layout>
  );
}
