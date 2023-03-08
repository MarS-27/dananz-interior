import { PAGES_NAMES } from "@/constants/constants";
import { FontRegular_l } from "@/styles/typography";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import MainButton from "../buttons/MainButton";

type MenuItemProps = {
  pageName: string;
};

type ActivePageProps = {
  href?: string;
  activePage: string;
};

const LinkText = styled(FontRegular_l)<ActivePageProps>`
  transition: text-shadow 0.4s;
  line-height: 22px;
  text-shadow: ${({ theme, href, activePage }) =>
    href === activePage
      ? `0 0 .8px ${theme.grayscale.grayscale_50}, 0 0 .8px ${theme.grayscale.grayscale_50}`
      : ""};

  :hover {
    text-shadow: 0 0 0.8px ${({ theme }) => theme.grayscale.grayscale_50},
      0 0 0.8px ${({ theme }) => theme.grayscale.grayscale_50};
  }
`;

export default function NavMenuItem({ pageName }: MenuItemProps) {
  const router = useRouter();
  const [activePage, setActivePage] = useState(router.pathname);

  const newActivePage = () => setActivePage(router.pathname);

  return (
    <>
      {pageName !== "contact" ? (
        <Link
          href={pageName === "home" ? "/" : `/${pageName}`}
          legacyBehavior
          passHref
        >
          <LinkText as={"a"} onClick={newActivePage} activePage={activePage}>
            {PAGES_NAMES[pageName]}
          </LinkText>
        </Link>
      ) : (
        <Link href={`/${pageName}`}>
          <MainButton
            buttonName="Contact Us"
            buttonColor="blue"
            buttonWidth="small"
          />
        </Link>
      )}
    </>
  );
}
