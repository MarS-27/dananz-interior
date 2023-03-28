import { useState, useEffect } from "react";
import styled from "styled-components";
import { MAIN_PAGES_NAMES } from "@/constants/constants";
import NavMenuItem from "./NavMenuItem";
import BurgerButton from "../buttons/BurgerButton";

export type OpenMenu = {
  openMenu?: boolean;
  showHeader: boolean;
};

const NavMenuContainer = styled.nav<OpenMenu>`
  display: flex;
  align-items: center;
  gap: 60px;

  @media (max-width: ${({ theme }) => theme.media.large_width}) {
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    display: ${({ openMenu, showHeader }) =>
      openMenu && showHeader ? "flex" : "none"};
    flex-direction: column;
    gap: 20px;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 20px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.grayscale.grayscale_white};
  }
`;

export default function NavMenu({ showHeader }: OpenMenu) {
  const pageNames = Object.keys(MAIN_PAGES_NAMES);

  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => setOpenMenu(!openMenu);

  useEffect(() => {
    if (!showHeader) {
      setOpenMenu(false);
    }
  }, [showHeader]);

  return (
    <>
      <NavMenuContainer openMenu={openMenu} showHeader={showHeader}>
        {pageNames.map((pageName) => {
          return <NavMenuItem key={pageName} pageName={pageName} />;
        })}
      </NavMenuContainer>
      <BurgerButton openMenu={openMenu} handleOpenMenu={handleOpenMenu} />
    </>
  );
}
