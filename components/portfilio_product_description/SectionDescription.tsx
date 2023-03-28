import styled from "styled-components";
import Image from "next/image";
import { PageNameProps } from "@/models/models";
import { GridContent } from "@/styles/layout";
import { FontSemiBold_xl } from "@/styles/typography";
import { SectionText } from "@/styles/sections";

const NUMS_OF_IMAGES = ["1", "2", "3", "4", "5"];

const imageStyles = { width: "100%", height: "auto" };

const DescriptionContainer = styled.div<PageNameProps>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  & p {
    max-width: 100%;

    @media (max-width: ${({ theme }) => theme.media.medium_width}) {
      font-size: 14px;
      line-height: 22px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    gap: 15px;

    & div {
      grid-column: 1/-1;
    }
  }
`;

const OverviewContainer = styled.div`
  & > p:first-of-type {
    margin-bottom: 25px;

    @media (max-width: ${({ theme }) => theme.media.medium_width}) {
      margin-bottom: 10px;
      font-size: 18px;
      line-height: 25px;
    }
  }

  & div {
    display: flex;
    gap: 80px;
    margin-top: 60px;

    @media (max-width: ${({ theme }) => theme.media.large_width}) {
      gap: 40px;
    }

    @media (max-width: ${({ theme }) => theme.media.medium_width}) {
      margin-top: 20px;
      gap: 20px;
    }
  }
`;

const ProcessContainer = styled.div`
  & p:first-of-type {
    margin-bottom: 25px;

    @media (max-width: ${({ theme }) => theme.media.medium_width}) {
      margin-bottom: 10px;
      font-size: 18px;
      line-height: 25px;
    }
  }

  & p:last-of-type {
    margin-top: 30px;

    @media (max-width: ${({ theme }) => theme.media.medium_width}) {
      margin-top: 15px;
    }
  }
`;

export default function ProductDescriptionSection({ pageName }: PageNameProps) {
  return (
    <GridContent>
      <DescriptionContainer pageName={pageName}>
        <OverviewContainer>
          <FontSemiBold_xl>Project Overview</FontSemiBold_xl>
          <SectionText>
            Online learning with us does not interfere with your daily life.
            because learning can be done anytime and anywhere. Online learning
            with us does not interfere with your daily life. because learning
            can be done anytime and anywhere. Online learning with us does not
            interfere with your daily life. because learning can be done anytime
            and anywhere.
          </SectionText>
          <div>
            <SectionText>July 22 - 2022</SectionText>
            <SectionText>Interior Design - Furnitur</SectionText>
          </div>
        </OverviewContainer>
        <ProcessContainer>
          <FontSemiBold_xl>Design Process</FontSemiBold_xl>
          <SectionText>
            Online learning with us does not interfere with your daily life.
            because learning can be done anytime and anywhere. Online learning
            with us does not interfere with your daily life. because learning
            can be done anytime and anywhere.
          </SectionText>
          <SectionText>
            Online learning with us does not interfere with your daily life.
            because learning can be done anytime and anywhere. Online learning
            with us does not interfere with your daily life. because learning
            can be done anytime and anywhere.
          </SectionText>
        </ProcessContainer>
        {NUMS_OF_IMAGES.map((imgNum) => (
          <Image
            key={`${pageName}_${imgNum}`}
            src={`/images/portfolio/${pageName}_${imgNum}.webp`}
            alt=""
            width={imgNum === "3" ? 1200 : 585}
            height={515}
            style={
              imgNum === "3"
                ? { gridColumn: "1/-1", ...imageStyles }
                : { ...imageStyles }
            }
          />
        ))}
      </DescriptionContainer>
    </GridContent>
  );
}
