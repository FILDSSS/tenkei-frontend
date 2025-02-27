import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./contexts/AuthContext";
import OrderContextProvider from "./contexts/orderContext";
import OrderListContextProvider from "./contexts/OrderListContext.jsx";
import PurchaseContextProvider from "./contexts/PurchaseContext.jsx";
import PlanContextProvider from "./contexts/PlanContext";
import ResultContextProvider from "./contexts/ResultContext.jsx";
import CostContextProvider from "./contexts/CostContext.jsx";
import CostListContextProvider from "./contexts/CostListContext.jsx";
import SorderContextProvider from "./contexts/SorderContext.jsx";
import PlanListContextProvider from "./contexts/PlanListContext.jsx";
import ProcessGPlanContextProvider from "./contexts/ProcessGPlanContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <OrderContextProvider>
        <OrderListContextProvider>
          <PlanListContextProvider>
            <ProcessGPlanContextProvider>
              <PurchaseContextProvider>
                <PlanContextProvider>
                  <ResultContextProvider>
                    <CostContextProvider>
                      <CostListContextProvider>
                        <SorderContextProvider>
                          <App />
                        </SorderContextProvider>
                      </CostListContextProvider>
                    </CostContextProvider>
                  </ResultContextProvider>
                </PlanContextProvider>
              </PurchaseContextProvider>
            </ProcessGPlanContextProvider>
          </PlanListContextProvider>
        </OrderListContextProvider>
      </OrderContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
