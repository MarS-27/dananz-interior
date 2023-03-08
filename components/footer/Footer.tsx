import Link from "next/link";
import { GridContainer, GridContent } from "@/styles/layout";
import { FontRegular_xl, FontSemiBold_3xl } from "@/styles/typography";
import styled from "styled-components";
import MainButton from "../buttons/MainButton";
import Logo from "../logo/Logo";
import FooterEmailAndSocial from "./FooterEmailAndSocial";

const FooterContainer = styled(GridContainer)`
  width: 100%;
`;

const FooterContentFull = styled(GridContainer)`
  width: 100%;
  grid-column: 1 / -1;
  background-color: ${({ theme }) => theme.main_colors.blue_100};
`;

const FooterContent = styled(GridContent)`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 80px 0;

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
  }
`;

const FooterContentOnTop = styled(FooterContent)`
  padding: 40px 0;
`;

const FooterLogoContainer = styled.div`
  max-width: 480px;
`;

const FooterTitle = styled(FontSemiBold_3xl)`
  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    font-size: 24px;
    line-height: 34px;
  }
`;

const FooterOnTopFlexBox = styled.div`
  max-width: 425px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FooterTitleWhite = styled(FooterTitle)`
  max-width: 615px;
  color: ${({ theme }) => theme.grayscale.grayscale_white};

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    max-width: 425px;
  }
`;

const FooterTextWhite = styled(FontRegular_xl)`
  color: ${({ theme }) => theme.grayscale.grayscale_white};
`;

export default function Footer() {
  return (
    <FooterContainer as="footer">
      <FooterContentFull as="div">
        <FooterContentOnTop>
          <FooterTitleWhite>
            Let&apos;s discuss making your interior like a dream place!
          </FooterTitleWhite>
          <FooterOnTopFlexBox>
            <FooterTextWhite>
              Contact us below to work together to build your amazing interior
            </FooterTextWhite>
            <Link href={`/contact`}>
              <MainButton
                buttonName="Contact Us"
                buttonColor="white"
                buttonWidth="small"
              />
            </Link>
          </FooterOnTopFlexBox>
        </FooterContentOnTop>
      </FooterContentFull>
      <FooterContent as="div">
        <FooterLogoContainer>
          <Logo />
          <FooterTitle>One of the best furniture agency.</FooterTitle>
        </FooterLogoContainer>
        <FooterEmailAndSocial />
      </FooterContent>
    </FooterContainer>
  );
}
