import { GridContainer, GridContent } from "@/styles/layout";
import styled from "styled-components";
import Logo from "../logo/Logo";
import NavMenu from "../navigation/NavMenu";

const HeaderContainer = styled(GridContainer)`
  align-content: center;
  width: 100%;
  padding: 40px 0;
`;

const HeaderContent = styled(GridContent)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export default function Header() {
  return (
    <HeaderContainer as="header">
      <HeaderContent as="div">
        <Logo />
        <NavMenu />
      </HeaderContent>
    </HeaderContainer>
  );
}
