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
import ProcessG_PlanPage from "../pages/ProcessG_PlanPage"
import RD_Process_SheetPage from "../pages/reports/RD_Process_SheetPage"
import DashboardPage from "../pages/DashboardPage"
import RdProGPlanPage from "../pages/reports/RdProGPlanPage";
import RdNavPcUpdPage from "../pages/reports/RdNavPcUpdPage";
import RdOdNoPlanPage from "../pages/reports/RdOdNoPlanPage";
import TRdOdBacklogPage from "../pages/reports/TRdOdBacklogPage";
import RdOdFinalPage from "../pages/reports/RdOdFinalPage";
import RdProgGraphPage from "../pages/reports/RdProgGraphPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        path:"/dashboard",
        element:<DashboardPage/>
    },
    {
        path:"/order-list",
        element: <OrderListPage />,
    },
    {
        path:"/calc-complete",
        element: <CalcCompletePage />,
    },
    {
        path:"/cost-list",
        element: <CostListPage />,
    },
    {
        path:"/order-info",
        element: <OrderInfoPage />,
    },
    {
        path:"/plan-info",
        element: <PlanInfoPage />,
    },
    {
        path:"/plan-list",
        element: <PlanListPage />,
    },
    {
        path:"/purchase-info",
        element: <PurchaseInfoPage />,
    },
    {
        path:"/purchase-list",
        element: <PurchaseListPage />,
    },
    {
        path:"/result-info",
        element: <ResultInfoPage />,
    },
    {
        path:"/processg-plan-list",
        element: <ProcessG_PlanPage />,
    },
    {
        path:"/reports/RD_Process_SheetPage/:orderNo",
        element: <RD_Process_SheetPage />,
    },
    {
        path:"/cost-info",
        element: <CostInfoPage />,
    },

    {
        path:"/rdprogplan",
        element: <RdProGPlanPage />,
    },

    {
        path:"/rdnavpcupd",
        element: <RdNavPcUpdPage />,
    },

    {
        path:"/rdOdnoplan",
        element: <RdOdNoPlanPage />,
    },

    {
        path:"/trdodbacklog",
        element: <TRdOdBacklogPage />,
    },
    {
        path:"/rdOdfinal",
        element: <RdOdFinalPage />,
    },
    {
        path:"/rdOdfinal",
        element: <RdOdFinalPage />,
    },
    {
        path:"/rdproggraph",
        element: <RdProgGraphPage />,
    },


]);

export default function Route() {
    return <RouterProvider router={router} />;
  }