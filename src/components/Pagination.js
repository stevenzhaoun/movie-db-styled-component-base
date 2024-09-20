import React from "react";
import styled from "styled-components";
import Button from "./Button";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  margin: 1rem auto;
`;

export default function Pagination(props) {
  return (
    <PaginationContainer>
      <Button>Prev</Button>
      <p>1 / 999</p>
      <Button>Next</Button>
    </PaginationContainer>
  );
}
