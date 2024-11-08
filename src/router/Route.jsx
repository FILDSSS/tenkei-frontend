import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import { OrderListPage } from "../pages/OrderListPage";
import CostInfoPage from "../pages/CostInfoPage";
import CalcCompletePage from "../pages/CalcCompletePage";
import CostListPage from "../pages/CostListPage";
import OrderInfoPage from "../pages/OrderInfoPage";
import PlanInfoPage from "../pages/PlanInfoPage";
import PlanListPage from "../pages/PlanListPage";
import PurchaseInfoPage from "../pages/PurchaseInfoPage";
import PurchaseListPage from "../pages/PurchaseListPage";
import ResultInfoPage from "../pages/ResultInfoPage";
import ProcessG_PlanPage from "../pages/ProcessG_PlanPage";
import RD_Process_SheetPage from "../pages/reports/RD_Process_SheetPage";
import DashboardPage from "../pages/DashboardPage";
import RD_Pl_Pg_NonePage from "../pages/reports/RD_Pl_Pg_NonePage";
import RD_Od_CalcPage from "../pages/reports/RD_Od_CalcPage";
import RD_NAV_Od_UpdPage from "../pages/reports/RD_NAV_Od_UpdPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/order-list",
    element: <OrderListPage />,
  },
  {
    path: "/calc-complete",
    element: <CalcCompletePage />,
  },
  {
    path: "/cost-list",
    element: <CostListPage />,
  },
  {
    path: "/order-info",
    element: <OrderInfoPage />,
  },
  {
    path: "/plan-info",
    element: <PlanInfoPage />,
  },
  {
    path: "/plan-list",
    element: <PlanListPage />,
  },
  {
    path: "/purchase-info",
    element: <PurchaseInfoPage />,
  },
  {
    path: "/purchase-list",
    element: <PurchaseListPage />,
  },
  {
    path: "/result-info",
    element: <ResultInfoPage />,
  },
  {
    path: "/processg-plan-list",
    element: <ProcessG_PlanPage />,
  },
  {
    path: "/reports/RD_Process_SheetPage/:orderNo",
    element: <RD_Process_SheetPage />,
  },
  {
    path: "/cost-info",
    element: <CostInfoPage />,
  },
  {
    path: "/RD_Pl_Pg_None",
    element: <RD_Pl_Pg_NonePage />,
  },
  {
    path: "/RD_Od_Calc",
    element: <RD_Od_CalcPage />,
  },
  {
    path: "/RD_NAV_Od_Upd",
    element: <RD_NAV_Od_UpdPage />,
  },
  
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
