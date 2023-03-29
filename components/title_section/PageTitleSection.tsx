import { MAIN_PAGES_NAMES } from "@/constants/constants";
import { PageNameProps } from "@/models/models";
import { PageSection } from "@/styles/sections";
import { FontBold_2xl, FontRegular_xl } from "@/styles/typography";
import styled from "styled-components";
import TitleImage from "../title_image/TitleImage";

const TitleSection = styled(PageSection)<PageNameProps>`
  margin-bottom: ${({ pageName }) => (pageName === "contact" ? "0" : null)};

  & > p {
    max-width: 520px;
    margin: 0 auto;
    text-align: center;
    color: ${({ theme }) => theme.grayscale.grayscale_black};
  }

  & p:first-of-type {
    margin-bottom: 35px;

    @media (max-width: ${({ theme }) => theme.media.medium_width}) {
      margin-bottom: 10px;
      font-size: 32px;
      line-height: 45px;
    }
  }

  & p:last-of-type {
    margin-bottom: 55px;

    @media (max-width: ${({ theme }) => theme.media.medium_width}) {
      margin-bottom: 20px;
    }
  }
`;

export default function PageTitleSection({ pageName }: PageNameProps) {
  return (
    <TitleSection pageName={pageName}>
      <FontBold_2xl>
        {MAIN_PAGES_NAMES[pageName]
          ? MAIN_PAGES_NAMES[pageName]
          : `${pageName} Room`}
      </FontBold_2xl>
      <FontRegular_xl>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </FontRegular_xl>
      {pageName !== "contact" && (
        <TitleImage
          imageName={
            MAIN_PAGES_NAMES[pageName]
              ? `${pageName.toLowerCase()}_title`
              : `portfolio/${pageName.toLowerCase()}_title`
          }
        />
      )}
    </TitleSection>
  );
}
