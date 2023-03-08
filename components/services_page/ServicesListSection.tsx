import styled from "styled-components";
import Image from "next/image";
import { PageSection, SectionText } from "@/styles/sections";
import SectionName from "../section_name/SectionName";
import { FontSemiBold_xl } from "@/styles/typography";

const ServicesListInner = styled.div`
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

const ServicesListItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const ServicesListItemText = styled.div`
  max-width: 335px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    & p:first-of-type {
      font-size: 18px;
      line-height: 25px;
    }

    & p:last-of-type {
      font-size: 14px;
      line-height: 22px;
    }
  }
`;

export default function ServicesListSection() {
  return (
    <PageSection>
      <SectionName sectionName="SERVICE" />
      <ServicesListInner>
        <ServicesListItem>
          <Image
            src="/images/services_interior_design.webp"
            alt=""
            width={745}
            height={365}
            sizes="
              (max-width: 1200px) 50vw,
              (max-width: 768px) 100vw,
              80vw"
            style={{
              width: "100%",
              maxWidth: "745px",
              height: "auto",
              objectFit: "cover",
            }}
          />
          <ServicesListItemText>
            <FontSemiBold_xl>Interior design</FontSemiBold_xl>
            <SectionText>
              Customize your interior design into a dream place with the best
              designers and quality furniture. We try our best to fulfill your
              expectations.
            </SectionText>
          </ServicesListItemText>
        </ServicesListItem>
        <ServicesListItem>
          <Image
            src="/images/services_consultant.webp"
            alt=""
            width={745}
            height={365}
            sizes="
              (max-width: 1200px) 50vw,
              (max-width: 768px) 100vw,
              80vw"
            style={{
              width: "100%",
              maxWidth: "745px",
              height: "auto",
              objectFit: "cover",
            }}
          />
          <ServicesListItemText>
            <FontSemiBold_xl>Consultant</FontSemiBold_xl>
            <SectionText>
              Customize your interior design into a dream place with the best
              designers and quality furniture. We try our best to fulfill your
              expectations.
            </SectionText>
          </ServicesListItemText>
        </ServicesListItem>
        <ServicesListItem>
          <Image
            src="/images/services_construction_consultant.webp"
            alt=""
            width={745}
            height={365}
            sizes="
              (max-width: 1200px) 50vw,
              (max-width: 768px) 100vw,
              80vw"
            style={{
              width: "100%",
              maxWidth: "745px",
              height: "auto",
              objectFit: "cover",
            }}
          />
          <ServicesListItemText>
            <FontSemiBold_xl>Construction consultant</FontSemiBold_xl>
            <SectionText>
              Customize your interior design into a dream place with the best
              designers and quality furniture. We try our best to fulfill your
              expectations.
            </SectionText>
          </ServicesListItemText>
        </ServicesListItem>
      </ServicesListInner>
    </PageSection>
  );
}
