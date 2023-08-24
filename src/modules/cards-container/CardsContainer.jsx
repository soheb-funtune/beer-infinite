import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import MyContext from "../../components/context-api/MyContext";
import Card from "./Card";

const CardsContainer = () => {
  const [data, setData] = useState([]);
  const { state } = useContext(MyContext);
  useEffect(() => {
    setData(state?.beerData);
    console.log({ data });
  }, [state?.beerData]);
  return (
    <ContainerWrapper>
      {data?.map((item) => (
        <Card key={item?.id} {...item} />
      ))}
    </ContainerWrapper>
  );
};

export default CardsContainer;

const ContainerWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  /* margin-top: 40px; */
  padding: 40px 20px;
  width: 100%;
  max-width: 993px;
  /* background: red; */
`;
