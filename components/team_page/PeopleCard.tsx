import { FontRegular_l, FontSemiBold_xl } from "@/styles/typography";
import styled from "styled-components";
import { TEAM_MEMBERS } from "@/constants/constants";

type PeopleCardPropType = {
  memberName: string;
};

type PeoplePhotoType = {
  peoplePhoto: string;
};

const TeamMemberCard = styled.div<PeoplePhotoType>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  max-width: 280px;
  height: 400px;
  padding: 15px;
  background-color: ${({ theme }) => theme.main_colors.blue_100};
  background-image: url(${({ peoplePhoto }) =>
    `/images/team/${peoplePhoto}.webp`});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.media.large_width}) {
    max-width: 250px;
    height: 300px;
    padding: 0;
  }
`;

const TeamMemberCardInfo = styled.div`
  width: 100%;
  padding: 15px 10px;
  background-color: ${({ theme }) => theme.grayscale.grayscale_white};

  @media (max-width: ${({ theme }) => theme.media.large_width}) {
    padding: 10px 5px;
  }

  & p:first-of-type {
    white-space: nowrap;

    @media (max-width: ${({ theme }) => theme.media.large_width}) {
      font-size: 18px;
      line-height: 25px;
    }
  }

  & p:last-of-type {
    white-space: nowrap;
    color: ${({ theme }) => theme.grayscale.grayscale_10};

    @media (max-width: ${({ theme }) => theme.media.large_width}) {
      font-size: 12px;
      line-height: 19px;
    }
  }
`;

export default function PeopleCard({ memberName }: PeopleCardPropType) {
  return (
    <TeamMemberCard peoplePhoto={memberName}>
      <TeamMemberCardInfo>
        <FontSemiBold_xl>{TEAM_MEMBERS[memberName].fullName}</FontSemiBold_xl>
        <FontRegular_l>{TEAM_MEMBERS[memberName].position}</FontRegular_l>
      </TeamMemberCardInfo>
    </TeamMemberCard>
  );
}
