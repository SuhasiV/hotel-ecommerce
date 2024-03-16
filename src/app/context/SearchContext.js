"use client";

import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  destination: undefined,
  date: [
    {
      startDate: new Date(),
      endDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    },
  ],
  option: {
    room: 1,
  },
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    case "BOOK":
      localStorage.setItem(
        "SelectedRoomDetails",
        JSON.stringify(action.payload)
      );
      return state;
    case "CANCEL":
      localStorage.removeItem("SelectedRoomDetails");
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return (
    <SearchContext.Provider
      value={{
        destination: state.destination,
        date: state.date,
        option: state.option,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
