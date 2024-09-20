import React from "react";
import styled from "styled-components";

const MovieDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 16px;
`;

const ImgContainer = styled.div`
  width: 33.33%;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DetailsContainer = styled.div`
  flex-grow: 1;
  margin-left: 2rem;
`;

const SectionTitle = styled.h3`
  margin: 0.5rem 0;
`;

const Overview = styled.div`
  max-height: 100px;
  overflow-y: scroll;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const GenreItem = styled.div`
  padding: 0.5rem 1rem;
  background-color: #90cea1;
  margin-left: 1rem;
  color: white;
  border-radius: 5px;
  &:first-child {
    margin-left: 0;
  }
`;

const ProductionItem = styled.div`
  width: 30px;
  margin-right: 1rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function MovieDetails() {
  return (
    <MovieDetailsContainer>
      <ImgContainer>
        <img src="https://image.tmdb.org/t/p/w500//kuf6dutpsT0vSVehic3EZIqkOBt.jpg" />
      </ImgContainer>
      <DetailsContainer>
        <h2>Gabriel's Inferno Part III</h2>
        <br />
        <SectionTitle>Overview</SectionTitle>
        <Overview>
          Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to
          Overviewrotect their nation from intervening world powers in the wake
          of King T’Challa’s death. As the Wakandans strive to embrace their
          next chapter, the heroes must band together with the help of War Dog
          Nakia and Everett Ross and forge a new path for the kingdom of
          Wakanda.
        </Overview>
        <SectionTitle>Genres</SectionTitle>
        <Container>
          <GenreItem>Romance</GenreItem>
          <GenreItem>Comedy</GenreItem>
        </Container>
        <SectionTitle>Rating</SectionTitle>
        <p>9.5</p>
        <SectionTitle>Production companies</SectionTitle>
        <Container>
          <ProductionItem>
            <img src="https://image.tmdb.org/t/p/w500/psjvYkjjgAPtS8utnFYDM8t8yi7.png" />
          </ProductionItem>
        </Container>
      </DetailsContainer>
    </MovieDetailsContainer>
  );
}
