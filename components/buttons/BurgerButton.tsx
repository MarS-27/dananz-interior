import styled from "styled-components";
import { Button } from "./MainButton";

type BurgerButton = {
  openMenu: boolean;
  handleOpenMenu?: () => void;
};

const BurgerMenuButton = styled(Button)`
  display: none;
  width: 40px;
  height: 40px;
  padding: 6px;
  border-radius: 6px;

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

const BurgerMenuLine = styled.hr<BurgerButton>`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.grayscale.grayscale_white};
  transition: all 0.5s ease;

  :first-of-type {
    transform: ${(props) =>
      props.openMenu ? "rotate(45deg) translate(8px, 8px)" : ""};
  }

  :nth-of-type(2n) {
    transform: ${({ openMenu }) => (openMenu ? "translateX(-20px)" : "")};
    background-color: ${({ openMenu }) => (openMenu ? "transparent" : "")};
  }

  :last-of-type {
    transform: ${({ openMenu }) =>
      openMenu ? "rotate(-45deg) translate(8px, -8px)" : ""};
  }
`;

export default function BurgerButton({
  openMenu,
  handleOpenMenu,
}: BurgerButton) {
  return (
    <BurgerMenuButton buttonColor="blue" onClick={handleOpenMenu}>
      <BurgerMenuLine openMenu={openMenu} />
      <BurgerMenuLine openMenu={openMenu} />
      <BurgerMenuLine openMenu={openMenu} />
    </BurgerMenuButton>
  );
}
