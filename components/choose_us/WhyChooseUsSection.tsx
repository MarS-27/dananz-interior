import styled from "styled-components";
import { SectionText, SectionTitle } from "@/styles/sections";
import SectionName from "../section_name/SectionName";
import { GridContent } from "@/styles/layout";
import { FontSemiBold_xl } from "@/styles/typography";

type ImgNameType = {
  imgName: "hight_quality" | "professional_designers" | "best_services";
};

const WhyChooseUsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 40px;

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    margin-top: 20px;
    flex-direction: column;
  }
`;

const WhyChooseUsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 385px;
  gap: 20px;
  padding: 20px 25px;
  background-color: ${({ theme }) => theme.grayscale.grayscale_white};
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    max-width: 100%;
  }
`;

const WhyChooseUsCardImg = styled.div<ImgNameType>`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.grayscale.grayscale_lightray};
  background-image: url(${({ imgName }) => `/vectors/${imgName}.svg`});
  background-size: 60% 60%;
  background-position: center;
  background-repeat: no-repeat;
`;

export default function WhyChooseUsSection() {
  return (
    <GridContent>
      <SectionName sectionName="SERVICE" />
      <SectionTitle>Why Choose Us</SectionTitle>
      <SectionText>
        Customize your interior design into a dream place with the best
        designers and quality furniture. We try our best to fulfill your
        expectations.
      </SectionText>
      <WhyChooseUsContainer>
        <WhyChooseUsCard>
          <WhyChooseUsCardImg imgName="hight_quality" />
          <FontSemiBold_xl>High Quality</FontSemiBold_xl>
          <SectionText>
            Customize your interior design into a dream place with the best
            designers and quality furniture. We try our best to fulfill your
            expectations.
          </SectionText>
        </WhyChooseUsCard>
        <WhyChooseUsCard>
          <WhyChooseUsCardImg imgName="professional_designers" />
          <FontSemiBold_xl>Professional Designer</FontSemiBold_xl>
          <SectionText>
            Customize your interior design into a dream place with the best
            designers and quality furniture. We try our best to fulfill your
            expectations.
          </SectionText>
        </WhyChooseUsCard>
        <WhyChooseUsCard>
          <WhyChooseUsCardImg imgName="best_services" />
          <FontSemiBold_xl>The Best Services</FontSemiBold_xl>
          <SectionText>
            Customize your interior design into a dream place with the best
            designers and quality furniture. We try our best to fulfill your
            expectations.
          </SectionText>
        </WhyChooseUsCard>
      </WhyChooseUsContainer>
    </GridContent>
  );
}
