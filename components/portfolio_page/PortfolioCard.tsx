import { SectionText } from "@/styles/sections";
import { FontSemiBold_xl } from "@/styles/typography";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import MainButton from "../buttons/MainButton";
import PortfolioCardLabel from "./PortfolioCardLabel";

type PortfolioProps = {
  productName: string;
};

const PortfolioCardContainer = styled.div<PortfolioProps>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ productName }) =>
    productName === "Vintage" || productName === "Transitional"
      ? "row-reverse"
      : "row"};
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

  & a {
    max-width: 140px;
  }

  @media (max-width: ${({ theme }) => theme.media.large_width}) {
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    flex-direction: row;
    align-items: center;
  }
`;

const PortfolioCardInfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.media.large_width}) {
    gap: 10px;

    P {
      font-size: 14px;
      line-height: 22px;
    }
  }
`;

export default function PortfolioCard({ productName }: PortfolioProps) {
  return (
    <PortfolioCardContainer productName={productName}>
      <Image
        src={
          productName === "home_about_img"
            ? `/images/${productName}.webp`
            : `/images/portfolio/${productName.toLocaleLowerCase()}_title.webp`
        }
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
        <PortfolioCardLabel positionIndicator={productName} />
        <PortfolioCardInfoInner>
          <PortfolioCardInfoText>
            {productName !== "home_about_img" && (
              <FontSemiBold_xl>{productName} Room</FontSemiBold_xl>
            )}
            <SectionText>
              Online learning with us does not interfere with your daily life.
              because learning can be done anytime and anywhere.
            </SectionText>
          </PortfolioCardInfoText>
          <Link
            href={
              productName === "home_about_img"
                ? `/about`
                : `/portfolio/${productName.toLocaleLowerCase()}`
            }
          >
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
