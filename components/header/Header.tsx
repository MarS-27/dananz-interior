import { GridContainer, GridContent } from "@/styles/layout";
import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../logo/Logo";
import NavMenu from "../navigation/NavMenu";

type ShowHeaderOnScroll = {
  showHeader: boolean;
};

const HeaderContainer = styled(GridContainer)<ShowHeaderOnScroll>`
  position: fixed;
  top: ${({ showHeader }) => (showHeader ? "0" : "-114px")};
  transition: top 0.3s;
  background-color: ${({ theme }) => theme.grayscale.grayscale_lightray};
  align-content: center;
  width: 100%;
  padding: 30px 0;
  z-index: 999;
`;

const HeaderContent = styled(GridContent)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export default function Header() {
  const prevPageY = useRef(0);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    console.log(showHeader);

    const hideHeader = () => {
      setShowHeader(prevPageY.current >= window.scrollY);
      prevPageY.current = window.scrollY;
    };
    window.addEventListener("scroll", hideHeader);

    return () => window.removeEventListener("scroll", hideHeader);
  }, [showHeader]);

  return (
    <HeaderContainer showHeader={showHeader} as="header">
      <HeaderContent as="div">
        <Logo />
        <NavMenu showHeader={showHeader} />
      </HeaderContent>
    </HeaderContainer>
  );
}
