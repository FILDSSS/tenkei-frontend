import { useState, createContext, useEffect, useContext } from "react";
import axios from "../configs/axios";

export const OrderListContext = createContext();

export default function OrderContextProvider({ children }) {

    

    return (
        <OrderContext.Provider value={{}}>
            {children}
        </OrderContext.Provider>
    );
};