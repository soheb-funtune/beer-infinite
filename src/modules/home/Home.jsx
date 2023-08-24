import React, { useState, useContext, useEffect } from "react";
import MyContext from "../../components/context-api/MyContext";
import CardsContainer from "../cards-container/CardsContainer";
import { StyledButton } from "../../components/styled-components/StyledCompo";
import styled from "styled-components";

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const { state, dispatch } = useContext(MyContext);
  useEffect(() => {
    const FetchApi = async () => {
      const res = await fetch(
        `https://api.punkapi.com/v2/beers?page=${page}&per_page=9`
      );
      const d = await res.json();
      console.log(d);
      dispatch({ type: "APIDATA", payload: d });
    };

    FetchApi();
  }, [page]);

  const handleInfiniteScroll = async () => {
    console.log(
      "scroll",
      window.innerHeight,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight
    );
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.documentElement.scrollHeight
    ) {
      setPage((pre) => pre + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <HomeWrapper>
      <ButtonDiv>
        <StyledButton
          onClick={() => dispatch({ type: "LOGIN", payload: false })}
        >
          Log out
        </StyledButton>
      </ButtonDiv>
      <CardsContainer />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 40px auto;
  width: 100%;
  max-width: 993px;
`;
const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
