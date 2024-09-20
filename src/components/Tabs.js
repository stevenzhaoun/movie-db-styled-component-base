import React from "react";
import styled from "styled-components";
import Tab from "./Tab";

const TabsContainer = styled.ul`
  display: flex;
`;

export default function Tabs(props) {
  return (
    <TabsContainer>
      <Tab active>HOME</Tab>
      <Tab>LIKED</Tab>
    </TabsContainer>
  );
}
