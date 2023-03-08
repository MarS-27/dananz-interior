import styled from "styled-components";
import Image from "next/image";
import { PageSection, SectionTitleLargeMarginBottom } from "@/styles/sections";
import SectionName from "../section_name/SectionName";
import Statistic from "../statistic/Statistic";

const AchievementSectionTitle = styled(SectionTitleLargeMarginBottom)`
  max-width: 740px;
`;

const AchievementSectionInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    flex-direction: column;
  }
`;

export default function AboutAchievementSection() {
  return (
    <PageSection>
      <SectionName sectionName="ACHIEVEMENT" />
      <AchievementSectionTitle>
        Interior customization with Danaanz, best quality with professional
        workers
      </AchievementSectionTitle>
      <AchievementSectionInner>
        <Image
          src="/images/about_achievement_img.webp"
          alt=""
          width={885}
          height={525}
          sizes="
          (max-width: 1200px) 50vw,
          (max-width: 768px) 100vw,
          80vw"
          style={{
            width: "100%",
            maxWidth: "885px",
            height: "auto",
            objectFit: "cover",
          }}
        />
        <Statistic />
      </AchievementSectionInner>
    </PageSection>
  );
}
