"use client";

import { createContext, useReducer } from "react";

const USER = {
  id: undefined,
  email: undefined,
  name: undefined,
  signUpType: undefined,
};

export const UserContext = createContext(USER);

const UserReducer = (state, action) => {
  switch (action.type) {
    case "LOGOUT":
      localStorage.removeItem("LoggedInUser");
      return USER;
    case "LOGIN":
      localStorage.setItem("LoggedInUser", JSON.stringify(action.payload));
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, USER);
  return (
    <UserContext.Provider
      value={{
        id: state.id,
        email: state.email,
        name: state.name,
        signUpType: state.signUpType,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
