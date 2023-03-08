import styled from "styled-components";
import { SectionText, SectionTitle } from "@/styles/sections";
import SectionName from "../section_name/SectionName";
import { PRODUCT_THEMES } from "@/constants/constants";
import ProductSectionItem from "./SectionProductItem";

const ProductSectionHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 70px;

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 30px;
  }

  & p:first-of-type {
    margin-bottom: 0;
    max-width: 340px;
  }

  & p:last-of-type {
    max-width: 475px;
  }
`;

const ProductSectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export default function ProductSection() {
  return (
    <>
      <SectionName sectionName="PRODUCT" />
      <ProductSectionHeading>
        <SectionTitle>Choose your product themes.</SectionTitle>
        <SectionText>
          Find the theme you want. If our choice of theme is not what you want,
          you can customize it as you want.
        </SectionText>
      </ProductSectionHeading>
      <ProductSectionInfo>
        {PRODUCT_THEMES.map((theme, i) => (
          <ProductSectionItem
            key={theme}
            themeName={theme}
            themeNum={`0${i + 1}`}
          />
        ))}
      </ProductSectionInfo>
    </>
  );
}
