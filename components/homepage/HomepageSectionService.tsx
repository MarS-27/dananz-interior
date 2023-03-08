import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { SectionText, SectionTitle } from "@/styles/sections";
import SectionName from "../section_name/SectionName";
import ArrowButton from "../buttons/ArrowButton";
import { FontSemiBold_xl } from "@/styles/typography";
import { GridContent } from "@/styles/layout";

const ServiceLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  max-width: 885px;
  padding: 40px 40px 40px 0;
  background-color: ${({ theme }) => theme.grayscale.grayscale_lightray};

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    gap: 20px;
    padding: 20px 20px 20px 0;
  }
`;

const ServiceLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ServiceLinkName = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  & p {
    @media (max-width: ${({ theme }) => theme.media.medium_width}) {
      font-size: 18px;
      line-height: 25px;
    }
  }
`;

const ServiceSectionImage = styled.div`
  transform: translateY(-150px);
  max-width: 1075px;
  margin-left: auto;
  position: relative;
  z-index: -999;

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    transform: translateY(-60px);
  }
`;

export default function HomepageServiceSection() {
  return (
    <GridContent>
      <SectionName sectionName="SERVICE" />
      <SectionTitle>Attractive furniture with the best quality.</SectionTitle>
      <SectionText>
        Customize your interior design into a dream place with the best
        designers and quality furniture. We try our best to fulfill your
        expectations.
      </SectionText>
      <ServiceLinksContainer>
        <ServiceLink>
          <ServiceLinkName>
            <FontSemiBold_xl>01</FontSemiBold_xl>
            <FontSemiBold_xl>Interior Design</FontSemiBold_xl>
          </ServiceLinkName>
          <Link href={"/services"}>
            <ArrowButton />
          </Link>
        </ServiceLink>
        <ServiceLink>
          <ServiceLinkName>
            <FontSemiBold_xl>02</FontSemiBold_xl>
            <FontSemiBold_xl>Consultant</FontSemiBold_xl>
          </ServiceLinkName>
          <Link href={"/services"}>
            <ArrowButton />
          </Link>
        </ServiceLink>
        <ServiceLink>
          <ServiceLinkName>
            <FontSemiBold_xl>03</FontSemiBold_xl>
            <FontSemiBold_xl>Construction Consultant</FontSemiBold_xl>
          </ServiceLinkName>
          <Link href={"/services"}>
            <ArrowButton />
          </Link>
        </ServiceLink>
      </ServiceLinksContainer>
      <ServiceSectionImage>
        <Image
          src="/images/services_title.webp"
          alt=""
          width={1075}
          height={525}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </ServiceSectionImage>
    </GridContent>
  );
}
