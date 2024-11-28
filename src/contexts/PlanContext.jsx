import { useState, createContext, useEffect } from "react";
import axios from "../configs/axios";

export const PlanContext = createContext();

export default function PlanContextProvider({ children }) {
  const [planData, setPlanData] = useState(null);
  const [selectedPlanNo, setSelectedPlanNo] = useState(null);
  const [qmprocessData, setQMprocessData] = useState(null);
  const [processData, setProcessData] = useState(null);
  const [plprogressData, setPlProgressData] = useState(null);
  const [ScheduleData, setScheduleData] = useState(null);
  const [PartsData, setPartsData] = useState(null);
  const [UnitsData, setUnitsData] = useState(null);
  const searchPartsData = async (orderNo) => {
    try {
      const response = await axios.post("/plan/search-order-plan", {
        Order_No: orderNo,
      });


      if (response.data.data.partsNo) {
        setSelectedPlanNo(response.data.data.partsNo);
   
      }
    } catch (error) {
      console.error("Error fetching order data:", error);
      return false;
    }
  };

  const selectPartsData = async (orderNo,partsNo) => {
    try {
      const response = await axios.post("/plan/search-part-plan", {
        Order_No: orderNo,
        Parts_No: partsNo,
       
      });
      if (response.data.data) {
        setPlanData(response.data.data);
    
      }

      
    } catch (error) {
      console.error("Error fetching order data:", error);
      return false;
    }
  };

  const QM_Process = async () => {
    try {
      const response = await axios.get("/process/fetch-qmprocess");
      console.log("Fetched Data:", response.data.data.process); // ตรวจสอบข้อมูล
      setQMprocessData(response.data.data.process); // เข้าถึงข้อมูล process อย่างถูกต้อง
      return response;
    } catch (error) {
      console.error("Error fetching process groups:", error);
      throw error;
    }
  };

  const Process = async () => {
    try {
      const response = await axios.get("/process/fetch-process");
      console.log("Fetched Data:", response.data.data.process); // ตรวจสอบข้อมูล
      setProcessData(response.data.data.process); // เข้าถึงข้อมูล process อย่างถูกต้อง
      return response;
    } catch (error) {
      console.error("Error fetching process groups:", error);
      throw error;
    }
  };

  const fetchPlprogress = async () => {
    try {
      const response = await axios.get("/plprogress/fetch-plprogress");
      console.log("Fetched Data:", response.data.data.plprogress); 
      setPlProgressData(response.data.data.plprogress); 
      return response;
    } catch (error) {
      console.error("Error fetching plprogress groups:", error);
      throw error;
    }
  };

  const fetchSchedule = async () => {
    try {
      const response = await axios.get("/schedule/fetch-schedule");
      console.log("Fetched Data:", response.data.data.schedule); 
      setScheduleData(response.data.data.schedule); 
      return response;
    } catch (error) {
      console.error("Error fetching schedule groups:", error);
      throw error;
    }
  };

  const fetchParts = async () => {
    try {
      const response = await axios.get("/parts/fetch-parts");
      console.log("Fetched Data:", response.data.data.parts); 
      setPartsData(response.data.data.parts); 
      return response;
    } catch (error) {
      console.error("Error fetching parts groups:", error);
      throw error;
    }
  };

  const fetchUnits = async () => {
    try {
      const response = await axios.get("/unit/fetch-unit");
      console.log("Fetched Data:", response.data.data.unit); 
      setUnitsData(response.data.data.unit); 
      return response;
    } catch (error) {
      console.error("Error fetching parts groups:", error);
      throw error;
    }
  };

  const createPlan = async () => {
    try {
        const response = await axios.post('/plan/create-plan', planData); 
        console.log('Plan created successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error("Error creating order:", error.response?.data || error.message);
        throw new Error('Failed to create order');
    }
};

const createSchedule = async () => {
  try {
      const response = await axios.post('/plan/create-schedule', planData); 
      console.log('schedule created successfully:', response.data);
      return response.data;
  } catch (error) {
      console.error("Error creating order:", error.response?.data || error.message);
      throw new Error('Failed to create order');
  }
};

const createResult = async () => {
  try {
      const response = await axios.post('/plan/create-result', planData); 
      console.log('result created successfully:', response.data);
      return response.data;
  } catch (error) {
      console.error("Error creating order:", error.response?.data || error.message);
      throw new Error('Failed to create order');
  }
};

const createWip = async () => {
  try {
      const response = await axios.post('/plan/create-wip', planData); 
      console.log('Wip created successfully:', response.data);
      return response.data;
  } catch (error) {
      console.error("Error creating order:", error.response?.data || error.message);
      throw new Error('Failed to create order');
  }
};



  useEffect(() => {
    QM_Process();
    Process();
    fetchPlprogress();
    fetchSchedule();
    fetchParts();
    fetchUnits();
  }, []);

  return (
    <PlanContext.Provider
      value={{
        planData,
        setPlanData,
        selectedPlanNo,
        setSelectedPlanNo,
        searchPartsData,
        selectPartsData,
        qmprocessData,
        processData,
        plprogressData,
        setPlProgressData,
        ScheduleData, 
        setScheduleData,
        PartsData,
        UnitsData,
        createPlan,
        createSchedule,
        createResult,
        createWip,
        
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}
