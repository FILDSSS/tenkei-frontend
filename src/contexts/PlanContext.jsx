import { useState, createContext, useEffect } from "react";
import axios from "../configs/axios";

export const PlanContext = createContext();

export default function PlanContextProvider({ children }) {
  const [planData, setPlanData] = useState(null);
  return (
    <PlanContext.Provider value={{planData,setPlanData}}>{children}</PlanContext.Provider>
  );
}
