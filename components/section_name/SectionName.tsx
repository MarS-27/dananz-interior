import { FontMedium_l } from "@/styles/typography";
import styled from "styled-components";

type SectionNameType = {
  sectionName: string;
};

const SectionNameBlock = styled.div`
  max-width: 600px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const SectionNameLine = styled.hr`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.grayscale.grayscale_black};
`;

const SectionNameText = styled(FontMedium_l)`
  color: ${({ theme }) => theme.grayscale.grayscale_black};
`;

export default function SectionName({ sectionName }: SectionNameType) {
  return (
    <SectionNameBlock>
      <SectionNameText>{sectionName}</SectionNameText>
      <SectionNameLine />
    </SectionNameBlock>
  );
}
