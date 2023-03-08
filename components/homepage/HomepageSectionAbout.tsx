import {
  PageSectionLargeMarginBottom,
  SectionTitleLargeMarginBottom,
} from "@/styles/sections";
import PortfolioCard from "../portfolio/PortfolioCard";
import SectionName from "../section_name/SectionName";

export default function HomepageAboutSection() {
  return (
    <PageSectionLargeMarginBottom>
      <SectionName sectionName="ABOUT" />
      <SectionTitleLargeMarginBottom>
        “We&apos;re one of the best furniture agency. Prioritizing customers and
        making purchases easy are the hallmarks of our agency.”
      </SectionTitleLargeMarginBottom>
      <PortfolioCard imageName="home_about_img" />
    </PageSectionLargeMarginBottom>
  );
}
