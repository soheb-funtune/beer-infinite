import React, { createContext, useReducer } from "react";

const MyContext = createContext();

const initialState = {
  logedIn: false,
  beerData: [],
  text: "check",
};

const Reducer = (state, action) => {
  switch (action?.type) {
    case "LOGIN":
      return { ...state, logedIn: action?.payload };
    case "APIDATA":
      return { ...state, beerData: [...state.beerData, ...action?.payload] };
    default:
      return state;
  }
};

export const ContextApi = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
