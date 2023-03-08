import styled from "styled-components";
import Link from "next/link";
import ArrowButton from "../buttons/ArrowButton";
import { FontSemiBold_2xl } from "@/styles/typography";
import { SectionText } from "@/styles/sections";

type ThemePropType = {
  themeName: string;
  themeNum: string;
};

const ProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
`;

const ProductItemInner = styled.div`
  display: flex;
  gap: 80px;

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    gap: 20px;
  }

  & > p {
    width: 40px;
  }

  & p:first-of-type {
    @media (max-width: ${({ theme }) => theme.media.medium_width}) {
      font-size: 20px;
      line-height: 28px;
    }
  }
`;

const ProductItemInnerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default function ProductSectionItem({
  themeName,
  themeNum,
}: ThemePropType) {
  return (
    <ProductItem>
      <ProductItemInner>
        <FontSemiBold_2xl>{themeNum}</FontSemiBold_2xl>
        <ProductItemInnerText>
          <FontSemiBold_2xl>{themeName}</FontSemiBold_2xl>
          <SectionText>
            The use of simple and limited elements to get the best effect or
            impression.
          </SectionText>
        </ProductItemInnerText>
      </ProductItemInner>
      <Link href={`/portfolio/${themeName.toLowerCase()}`}>
        <ArrowButton />
      </Link>
    </ProductItem>
  );
}
