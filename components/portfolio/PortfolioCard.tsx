import { SectionText } from "@/styles/sections";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import MainButton from "../buttons/MainButton";
import PortfolioCardLabel from "./PortfolioCardLabel";

type PortfolioPropsType = {
  imageName: string;
};

const PortfolioCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    flex-direction: column;
    gap: 0;
  }
`;

const PortfolioCardInfo = styled.div`
  max-width: 225px;
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 15%;

  @media (max-width: ${({ theme }) => theme.media.large_width}) {
    max-width: 160px;
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    max-width: 100%;
    padding-top: 0;
    gap: 0;
  }
`;

const PortfolioCardInfoInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.media.large_width}) {
    gap: 20px;

    P:first-child {
      font-size: 14px;
      line-height: 22px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    flex-direction: row;
    align-items: center;
  }
`;

export default function PortfolioCard({ imageName }: PortfolioPropsType) {
  return (
    <PortfolioCardContainer>
      <Image
        src={`/images/${imageName}.webp`}
        alt=""
        width={885}
        height={525}
        sizes="
          (max-width: 1170px) 70vw,
          (max-width: 1124px) 60vw,
          (max-width: 768px) 100vw,
          80vw"
        style={{
          width: "100%",
          maxWidth: "885px",
          height: "auto",
        }}
      />
      <PortfolioCardInfo>
        <PortfolioCardLabel />
        <PortfolioCardInfoInner>
          <SectionText>
            Online learning with us does not interfere with your daily life.
            because learning can be done anytime and anywhere.
          </SectionText>
          <Link href={`/about`}>
            <MainButton
              buttonName="Learn More"
              buttonColor="blue"
              buttonWidth="small"
            />
          </Link>
        </PortfolioCardInfoInner>
      </PortfolioCardInfo>
    </PortfolioCardContainer>
  );
}
