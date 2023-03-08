import { useState } from "react";
import styled from "styled-components";
import { PAGES_NAMES } from "@/constants/constants";
import NavMenuItem from "./NavMenuItem";
import BurgerButton from "../buttons/BurgerButton";

export type OpenMenuProps = {
  openMenu: boolean;
};

const NavMenuContainer = styled.nav<OpenMenuProps>`
  display: flex;
  align-items: center;
  gap: 74px;

  @media (max-width: ${({ theme }) => theme.media.large_width}) {
    gap: 35px;
  }

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    display: ${(props) => (props.openMenu ? "flex" : "none")};
    flex-direction: column;
    gap: 20px;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 999;
    padding: 20px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.grayscale.grayscale_white};
  }
`;

export default function NavMenu() {
  const pageNames = Object.keys(PAGES_NAMES);

  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => setOpenMenu(!openMenu);

  return (
    <>
      <NavMenuContainer openMenu={openMenu}>
        {pageNames.map(pageName => {
          return <NavMenuItem key={pageName} pageName={pageName} />;
        })}
      </NavMenuContainer>
      <BurgerButton openMenu={openMenu} handleOpenMenu={handleOpenMenu} />
    </>
  );
}
