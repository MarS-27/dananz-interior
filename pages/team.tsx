import Layout from "components/Layout";
import PageTitleSection from "@/components/title_section/PageTitleSection";
import WhyChooseUsSection from "@/components/choose_us/WhyChooseUsSection";
import TeamPeoplesSection from "@/components/team_page/TeamSectionPeoples";

export default function Teams() {
  return (
    <Layout>
      <PageTitleSection pageName="team" />
      <TeamPeoplesSection />
      <WhyChooseUsSection />
    </Layout>
  );
}
