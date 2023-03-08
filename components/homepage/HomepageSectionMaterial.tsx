import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { SectionText, SectionTitle } from "@/styles/sections";
import SectionName from "../section_name/SectionName";
import { GridContent } from "@/styles/layout";
import MainButton from "../buttons/MainButton";

const MaterialSectionInner = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  max-height: 390px;

  @media (max-width: ${({ theme }) => theme.media.large_width}) {
    max-height: 100%;
  }
`;

const MaterialSectionInnerTexts = styled.div`
  & > p:first-of-type {
    max-width: 350px;
    margin-bottom: 10px;
  }

  & > p:last-of-type {
    max-width: 500px;
    margin-bottom: 25px;
  }
`;

const MaterialSectionInnerImages = styled.div`
  display: flex;
  gap: 40px;

  & > div {
    display: flex;
    flex-direction: column;

    gap: 40px;
    transform: translate3d(0, -100px, 0);
  }

  @media (max-width: ${({ theme }) => theme.media.large_width}) {
    gap: 20px;

    & > div {
      gap: 20px;
      justify-content: end;
      flex-direction: column-reverse;
      transform: translate3d(-120px, 40px, 0) skewX(-5deg);
    }
  }

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    & > div {
      transform: translate3d(-170px, 40px, 0) skewX(-5deg) scale(0.9);
    }
  }
`;

export default function HomepageMaterialSection() {
  return (
    <GridContent>
      <SectionName sectionName="MATERIAL" />
      <MaterialSectionInner>
        <MaterialSectionInnerTexts>
          <SectionTitle>
            Choice of materials for quality furniture.
          </SectionTitle>
          <SectionText>
            You can custom the material as desired. And our furniture uses the
            best materials and selected quality materials.
          </SectionText>
          <Link href={`/materials`}>
            <MainButton
              buttonName="See Materials"
              buttonColor="white"
              buttonWidth="medium"
            />
          </Link>
        </MaterialSectionInnerTexts>
        <MaterialSectionInnerImages>
          <Image
            src="/images/homepage_material_img_1.webp"
            alt=""
            width={340}
            height={390}
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "340px",
              objectFit: "cover",
            }}
          />
          <div>
            <Image
              src="/images/homepage_material_img_2.webp"
              alt=""
              width={240}
              height={225}
              style={{
                width: "100%",
                height: "auto",
                minWidth: "140px",
                maxWidth: "240px",
              }}
            />
            <Image
              src="/images/homepage_material_img_3.webp"
              alt=""
              width={195}
              height={180}
              style={{
                width: "100%",
                height: "auto",
                minWidth: "140px",
                maxWidth: "195px",
              }}
            />
          </div>
        </MaterialSectionInnerImages>
      </MaterialSectionInner>
    </GridContent>
  );
}
