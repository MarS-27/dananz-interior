import { SectionText } from "@/styles/sections";
import { FontSemiBold_m } from "@/styles/typography";
import Image from "next/image";
import styled from "styled-components";

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 275px;
  height: 90px;
  padding: 17px 20px;
  transform: translateX(-165px);
  box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.05);
  background-color: ${({ theme }) => theme.grayscale.grayscale_white};

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    transform: translate(20px, -20px);
  }
`;

export default function PortfolioCardLabel() {
  return (
    <LabelContainer>
      <Image
        src={`/images/team/arda_daanan.png`}
        alt=""
        width={50}
        height={55}
        style={{
          minWidth: "50px",
        }}
      />
      <div>
        <FontSemiBold_m>Arga Danaan</FontSemiBold_m>
        <SectionText>CEO of Dananz</SectionText>
      </div>
    </LabelContainer>
  );
}
