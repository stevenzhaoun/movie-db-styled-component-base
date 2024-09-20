import Header from "./components/Header";
import "./styles.css";
import styled from "styled-components";
import Pagination from "./components/Pagination";
import MovieCardList from "./components/MovieCardList";
import Modal from "./components/Modal";
import MovieDetails from "./components/MovieDetails";

const AppContainer = styled.div`
  max-width: 1678px;
  margin: 0 auto;
  color: #555;
  padding: 16px;
`;

export default function App() {
  return (
    <AppContainer>
      <Header />
      <Pagination />
      <MovieCardList />
      {/* <Modal>
        <MovieDetails />
      </Modal> */}
    </AppContainer>
  );
}
