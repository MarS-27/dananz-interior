import styled from "styled-components";
import { PageSection } from "@/styles/sections";
import SectionName from "../section_name/SectionName";
import { PRODUCT_THEMES } from "@/constants/constants";
import PortfolioCard from "./PortfolioCard";

const PortfolioListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 20px;

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    gap: 20px;
    padding-top: 0;
  }
`;

export default function PortfolioSection() {
  return (
    <PageSection>
      <SectionName sectionName="PORTFOLIO" />
      <PortfolioListContainer>
        {PRODUCT_THEMES.map((productName) => (
          <PortfolioCard key={productName} productName={productName} />
        ))}
      </PortfolioListContainer>
    </PageSection>
  );
}
