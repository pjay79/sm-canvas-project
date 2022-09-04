import React, { useState, useEffect, useContext } from "react";
import { getFindings } from "../../services/SeeModeAPI";

export const FindingsContext = React.createContext<any>({});

export const useFindings = () => useContext(FindingsContext);

export const FindingsProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {
  const [ findings, setFindings ] = useState<Array<any>>([]);
  const [ selected, setSelected ] = useState<string>("abc");

  useEffect(() => {
    const fetchData = async () => {
      const result = await getFindings().catch(e => console.log(e));
      setFindings(result);
    };

    fetchData();
  }, []);

  return (
    <FindingsContext.Provider value={{ findings, selected, setSelected }}>
      {children}
    </FindingsContext.Provider>
  )
}