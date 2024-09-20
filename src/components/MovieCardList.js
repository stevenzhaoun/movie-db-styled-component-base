import React from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3rem;
`;

export default function MovieCardList(prop) {
  return (
    <ListContainer>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </ListContainer>
  );
}
