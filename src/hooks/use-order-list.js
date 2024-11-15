import { useContext } from "react";
import { OrderContext } from "../contexts/orderContext";

export function useOrderList() {
  return useContext(OrderListContext);
}

