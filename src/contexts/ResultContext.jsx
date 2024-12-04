import { useState, createContext, useEffect } from "react";
import axios from "../configs/axios";


export const ResultContext = createContext();

export default function ResultContextProvider({ children }) {
    const [ResultData, setResultData] = useState(null);
    return (
        <ResultContext.Provider
          value={{
            ResultData,
            setResultData,
          }}
        >
          {children}
        </ResultContext.Provider>
      );
    }
    