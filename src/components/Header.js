import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Tabs from "./Tabs";
const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Tabs />
    </HeaderContainer>
  );
}
