import styled from "styled-components";
import { SOCIAL_LINKS } from "@/constants/constants";
import Image from "next/image";

type SocialLinkProps = {
  socialName: string;
};

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.grayscale.grayscale_10};

  :hover {
    background-color: ${({ theme }) => theme.main_colors.blue_50};
    transition: ${({ theme }) => theme.transition};
  }
`

export default function SocialLinkElement({ socialName }: SocialLinkProps) {
  return (
    <SocialLink href={SOCIAL_LINKS[socialName]} target="_blank">
      <Image
        src={`/icons/${socialName}.svg`}
        alt={`${socialName}`}
        width={24}
        height={24}
      />
    </SocialLink>
  );
}