import styled from "styled-components";
import { PageSection, SectionText, SectionTitle } from "@/styles/sections";
import SectionName from "../section_name/SectionName";
import PeopleCard from "./PeopleCard";
import { TEAM_MEMBERS } from "@/constants/constants";

const PeoplesContainer = styled.div`
  width: 100%;
  margin-top: 80px;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    margin-top: 20px;
    gap: 15px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default function TeamPeoplesSection() {
  const TeamMembersNames = Object.keys(TEAM_MEMBERS);

  return (
    <PageSection>
      <SectionName sectionName="PEOPLES" />
      <SectionTitle>Creative Person</SectionTitle>
      <SectionText>
        Customize your interior design into a dream place with the best
        designers and quality furniture. We try our best to fulfill your
        expectations.
      </SectionText>
      <PeoplesContainer>
        {TeamMembersNames.map((memberName) => (
          <PeopleCard key={memberName} memberName={memberName} />
        ))}
      </PeoplesContainer>
    </PageSection>
  );
}
