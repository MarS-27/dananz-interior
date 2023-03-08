import { SOCIAL_LINKS } from "@/constants/constants";
import { FontRegular_l } from "@/styles/typography";
import styled from "styled-components";
import SocialLinkElement from "./SocialLink";

const SocialContainer = styled.div`
    width: 200px;
    align-self: self-end;
`

const SocialLinksList = styled.div`
    display: flex;
    gap: 25px;
    width: 100%;
    margin-top: 10px;
`

export default function Social() {
    const socialNames = Object.keys(SOCIAL_LINKS)

  return (
  <SocialContainer>
    <FontRegular_l>Follow us On</FontRegular_l>
    <SocialLinksList>
        {socialNames.map(socialName => {
            return <SocialLinkElement key={socialName} socialName={socialName}/>
        })}
    </SocialLinksList>
  </SocialContainer>
  );
}