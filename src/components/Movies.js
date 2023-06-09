import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectMovies } from "../features/movie/movieSlice";
import { Link } from "react-router-dom";
function Movies() {
  const movies = useSelector(selectMovies);

  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {movies &&
          movies.map((movi, ind) => {
            console.log("ccccccc ");
            return (
              <Wrap key={movi.id}>
                <Link to={`/detail/${movi.id}`}>
                  <img src={movi.cardImg} />
                </Link>
              </Wrap>
            );
          })}
      </Content>
    </Container>
  );
}

export default Movies;
const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  padding: 30px 0px 26px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;
const Wrap = styled.div`
   border-radius:10px;
   cursor:pointer;
   border:3px solid rgba(249,249,249,0.1);
   box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
     transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }
    &:hover{
        transform:scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color:rgba(249,249,249,0.8);
    }
  }
`;
