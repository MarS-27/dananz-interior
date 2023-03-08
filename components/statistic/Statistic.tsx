import { FontRegular_4xl, FontRegular_l } from "@/styles/typography";
import styled from "styled-components";

const StatContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 55px;
  padding: 40px 45px;
  width: 250px;
  background-color: ${({ theme }) => theme.main_colors.blue_100};

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    flex-direction: row;
    justify-content: space-around;
    gap: 20px;
    width: 100%;
    padding: 20px 30px;
  }
`;

const StatItem = styled(FontRegular_4xl)`
  text-align: center;
  color: ${({ theme }) => theme.grayscale.grayscale_white};

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    font-size: 24px;
    line-height: 38px;
  }
`;

const StatItemDescription = styled(FontRegular_l)`
  text-align: center;
  color: ${({ theme }) => theme.grayscale.grayscale_white};

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    font-size: 12px;
    line-height: 19px;
  }
`;

export default function Statistic() {
  return (
    <StatContainer>
      <div>
        <StatItem>350+</StatItem>
        <StatItemDescription>Project Completed</StatItemDescription>
      </div>
      <div>
        <StatItem>23+</StatItem>
        <StatItemDescription>Professional Teams</StatItemDescription>
      </div>
      <div>
        <StatItem>15+</StatItem>
        <StatItemDescription>Years Experience</StatItemDescription>
      </div>
    </StatContainer>
  );
}
