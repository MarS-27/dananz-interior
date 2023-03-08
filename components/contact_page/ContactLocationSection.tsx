import styled from "styled-components";
import { SectionText, SectionTitle } from "@/styles/sections";
import SectionName from "../section_name/SectionName";
import { GridContent } from "@/styles/layout";
import { FontSemiBold_xl } from "@/styles/typography";

const LocationInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.media.large_width}) {
    flex-direction: column;
  }
`;

const LocationTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  min-width: 250px;

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    gap: 20px;
  }
`;

const ContactMethod = styled.div`
  & p:first-child {
    margin-bottom: 10px;
  }
`;

const LocationInfoContainer = styled.div`
  display: grid;
  grid-template-columns:
    minmax(310px, 335px)
    minmax(310px, 335px);
  column-gap: 60px;
  row-gap: 40px;

  & div p:first-of-type {
    margin-bottom: 30px;
  }

  @media (max-width: ${({ theme }) => theme.media.large_width}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    grid-template-columns: 100%;
    gap: 20px;

    & div p:first-of-type {
      margin-bottom: 10px;
    }

    & div p:last-of-type {
      max-width: 100%;
    }
  }
`;

export default function ContactLocationSection() {
  return (
    <GridContent>
      <SectionName sectionName="LOCATION" />
      <LocationInnerContainer>
        <LocationTitleContainer>
          <div>
            <SectionTitle>Visit Our Stores</SectionTitle>
            <SectionText>Find us at these locations.</SectionText>
          </div>
          <ContactMethod>
            <FontSemiBold_xl>Email</FontSemiBold_xl>
            <SectionText>dananz@gmail.com</SectionText>
          </ContactMethod>
          <ContactMethod>
            <FontSemiBold_xl>Phone</FontSemiBold_xl>
            <SectionText>+62 815 002 1000</SectionText>
          </ContactMethod>
        </LocationTitleContainer>
        <LocationInfoContainer>
          <div>
            <FontSemiBold_xl>Jakarta</FontSemiBold_xl>
            <SectionText>
              Customize your interior design into a dream place with the best
              designers and quality furniture. We try our best to fulfill your
              expectations.
            </SectionText>
          </div>
          <div>
            <FontSemiBold_xl>Surakarta</FontSemiBold_xl>
            <SectionText>
              Customize your interior design into a dream place with the best
              designers and quality furniture. We try our best to fulfill your
              expectations.
            </SectionText>
          </div>
          <div>
            <FontSemiBold_xl>Yogyakarta</FontSemiBold_xl>
            <SectionText>
              Customize your interior design into a dream place with the best
              designers and quality furniture. We try our best to fulfill your
              expectations.
            </SectionText>
          </div>
          <div>
            <FontSemiBold_xl>Bandung</FontSemiBold_xl>
            <SectionText>
              Customize your interior design into a dream place with the best
              designers and quality furniture. We try our best to fulfill your
              expectations.
            </SectionText>
          </div>
        </LocationInfoContainer>
      </LocationInnerContainer>
    </GridContent>
  );
}
