import { GridContent } from "@/styles/layout";
import { FontBold_4xl } from "@/styles/typography";
import styled from "styled-components";
import TitleImage from "../title_image/TitleImage";
import Statistic from "../statistic/Statistic";

const TitleSection = styled(GridContent)`
  position: relative;
  margin-bottom: 160px;

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    margin-bottom: 60px;
  }

  ::before {
    content: "";
    position: absolute;
    right: 0;
    left: 520px;
    top: 50px;
    height: 2px;
    background-color: ${({ theme }) => theme.grayscale.grayscale_black};

    @media (max-width: ${({ theme }) => theme.media.medium_width}) {
      display: none;
    }
  }
`;

const TitleText = styled(FontBold_4xl)`
  max-width: 680px;
  margin-bottom: 45px;

  @media (max-width: ${({ theme }) => theme.media.large_width}) {
    max-width: 580px;
  }

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    font-size: 32px;
    line-height: 45px;
    margin-bottom: 20px;
  }
`;

const StatisticOnHome = styled.div`
  position: absolute;
  z-index: 99;
  top: 140px;
  right: 11%;

  @media (max-width: ${({ theme }) => theme.media.large_width}) {
    top: 100px;
    right: 10px;
  }

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    position: unset;
    margin-top: 20px;
  }
`;

export default function HomepageTitleSection() {
  return (
    <TitleSection>
      <TitleText>Design your interor with high quality.</TitleText>
      <TitleImage imageName="home_title" />
      <StatisticOnHome>
        <Statistic />
      </StatisticOnHome>
    </TitleSection>
  );
}
