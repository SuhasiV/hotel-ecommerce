"use client";
import { createContext, useContext, useState } from "react";

const SelectedQueryContext = createContext();

export const SelectedQueryProvider = ({ children }) => {
  const [selectedQuery, setSelectedQuery] = useState(null);

  return (
    <SelectedQueryContext.Provider value={{ selectedQuery, setSelectedQuery }}>
      {children}
    </SelectedQueryContext.Provider>
  );
};

export const useSelectedQuery = () => useContext(SelectedQueryContext);
