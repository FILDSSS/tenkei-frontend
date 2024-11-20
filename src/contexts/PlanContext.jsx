import { useState, createContext, useEffect } from "react";
import axios from "../configs/axios";

export const PlanContext = createContext();

export default function PlanContextProvider({ children }) {
  const [planData, setPlanData] = useState(null);
  const [selectedPlanNo, setSelectedPlanNo] = useState(null);

  const searchPartsData = async (orderNo) => { 
    try {
        const response = await axios.post("/plan/search-order-plan", { Order_No: orderNo });

      
        if (response.data && response.data.data && Array.isArray(response.data.data.partsNo)) {
            setSelectedPlanNo(response.data.data.partsNo); 
            return true; 
        } else {
            return false; 
        }
    } catch (error) {
        console.error("Error fetching order data:", error);
        return false; 
    }

    
};

const selectPartsData = async (orderNo,partsNO) => { 
  try {
      const response = await axios.post("/plan/search-part-plan", { Order_No: orderNo,Parts_No: partsNO });

    
      if (response.data && response.data.data && Array.isArray(response.data.data)) {
        setPlanData(response.data.data); 
          return true; 
      } else {
          return false; 
      }
  } catch (error) {
      console.error("Error fetching order data:", error);
      return false; 
  }

  
};

  return (
    <PlanContext.Provider value={{planData,setPlanData,selectedPlanNo,setSelectedPlanNo,searchPartsData,selectPartsData}}>{children}</PlanContext.Provider>
  );
}
