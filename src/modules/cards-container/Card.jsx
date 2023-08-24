import React from "react";
import styled from "styled-components";

const Card = ({
  name,
  image_url,
  description,
  volume,
  first_brewed,
  tagline,
}) => {
  return (
    <CardWrap>
      <StyledImg src={image_url} alt={name} />
      <ContentDiv>
        <HeadCont>
          <Head>{name}</Head>
          <Desc>
            {volume?.unit?.toUpperCase()} <sup>{volume?.value}</sup>
          </Desc>
        </HeadCont>

        <Desc>{description?.substring(0, 250)}...</Desc>
        <Desc>
          TAG-LINE <span>{tagline}</span>
        </Desc>
        <Desc>
          Fermentation <span>{first_brewed}</span>
        </Desc>
      </ContentDiv>
    </CardWrap>
  );
};

export default Card;

const CardWrap = styled.div`
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  display: flex;
  gap: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;

  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;
const StyledImg = styled.img`
  width: auto;
  margin-left: 20px;
  object-fit: contain;
  height: 180px;
  filter: drop-shadow(2px 4px 6px var(--tartiery));
`;

const ContentDiv = styled.div`
  margin-left: 20px;
  color: var(--secondary);
`;
const HeadCont = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px;
`;
const Head = styled.h3`
  margin: 0px;
  color: var(--primary);
`;
const Desc = styled.p`
  font-size: 12px;
  color: var(--tartiery);
  margin-top: 7px;
  span {
    color: var(--secondary);
  }
`;
