import React, { useContext, useEffect } from "react";
import MyContext from "../components/context-api/MyContext";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { StyledButton } from "../components/styled-components/StyledCompo";

const Login = () => {
  const {
    state: { logedIn },
    dispatch,
  } = useContext(MyContext);

  console.log(logedIn);
  return logedIn ? (
    <Navigate to={"/"} />
  ) : (
    <StyledWrap>
      <StyledButton
        onClick={() => {
          dispatch({ type: "LOGIN", payload: true });
        }}
      >
        Login
      </StyledButton>
    </StyledWrap>
  );
};

export default Login;

const StyledWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(https://img.freepik.com/premium-vector/employee-profile_783192-4.jpg);
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row-reverse;
  justify-content: end;

  align-items: center;
  @media (max-width: 600px) {
    background-size: contain;
    background-position: left;
  }
`;
