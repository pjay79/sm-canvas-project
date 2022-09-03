import React, { useContext } from "react";

export const FindingsContext = React.createContext<any>({});

export const useFindings = () => useContext(FindingsContext);