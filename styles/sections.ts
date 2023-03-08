import styled from 'styled-components'
import { FontSemiBold_3xl, FontRegular_xl } from "@/styles/typography";
import { GridContent } from "@/styles/layout";

export const PageSection = styled(GridContent)`
  margin-bottom: 110px;

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    margin-bottom: 40px;
  }
`;

export const SectionTitle = styled(FontSemiBold_3xl)`
  margin-bottom: 25px;

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    font-size: 24px;
    line-height: 34px;
  }
`;

export const SectionText = styled(FontRegular_xl)`
  max-width: 475px;
  color: ${({ theme }) => theme.grayscale.grayscale_10};
`;

export const PageSectionLargeMarginBottom = styled(GridContent)`
  margin-bottom: 160px;

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    margin-bottom: 60px;
  }
`;

export const SectionTitleLargeMarginBottom = styled(SectionTitle)`
  margin-bottom: 60px;

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    margin-bottom: 20px;
  }
`;