import AboutAchievementSection from "@/components/about_page/AboutSectionAchievrment";
import WhyChooseUsSection from "@/components/choose_us/WhyChooseUsSection";
import PageTitleSection from "@/components/title_section/PageTitleSection";
import Layout from "components/Layout";

export default function About() {
  return (
    <Layout>
      <PageTitleSection pageName="about" />
      <AboutAchievementSection />
      <WhyChooseUsSection />
    </Layout>
  );
}
