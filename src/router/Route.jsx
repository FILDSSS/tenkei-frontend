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
import SalesInfoPage from "../pages/SalesInfoPage";
import SalesDashboradPage from "../pages/SalesDashboradPage";
import SubConDashboradPage from "../pages/SubConDashboradPage";
import PlanDashboardPage from "../pages/PlanDashboardPage";
import ProcessDashboardPage from "../pages/ProcessDashboardPage";
import ProductionDashboardPage from "../pages/ProductionDashboardPage";
import QcDashboardPage from "../pages/QcDashboardPage";
import LinkDashborad from "../pages/LinkDashborad";
import FinishDashboardPage from "../pages/FinishDashboardPage";
import PrintDashboradPage from "../pages/PrintDashboradPage";
import MasterDashboardPage from "../pages/MasterDashboardPage";
import ImportDashboardPage from "../pages/ImportDashboardPage";
import ExportDashboardPage from "../pages/ExportDashboardPage";
import ResultListPage from "../pages/ResultListPage";
import GotoAdminMenuPage from "../pages/GotoAdminMenu";
import NAV_FGPage from "../pages/Admin-Menu/NAV_FGPage";
import NAV_WIPage from "../pages/Admin-Menu/NAV_WIPage";
import DeliveryDatePage from "../pages/Admin-Menu/DeliveryDatePage";
import SystemRestorePage from "../pages/Admin-Menu/SystemRestorePage";
import None_FG_DataPage from "../pages/Admin-Menu/None_FG_DataPage";
import None_WI_DataPage from "../pages/Admin-Menu/None_WI_DataPage";
import MonthTargetPage from "../pages/Admin-Menu/MonthTargetPage";
import SystemMaintenancePage from "../pages/Admin-Menu/SystemMaintenancePage";
import None_FG_Data_TenkeiPage from "../pages/Admin-Menu/None_FG_Data_TenkeiPage";
import None_WI_Data_TenkeiPage from "../pages/Admin-Menu/None_WI_Data_TenkeiPage";
import WeekTargetSettingPage from "../pages/Admin-Menu/WeekTargetSettingPage";
import ASP_CSV1Page from "../pages/Admin-Menu/ASP_CSV1Page";
import FG_AmountPage from "../pages/Admin-Menu/FG_AmountPage";
import WI_AmountPage from "../pages/Admin-Menu/WI_AmountPage";
import SystemSetPage from "../pages/Admin-Menu/SystemSetPage";
import ASP_CSV2Page from "../pages/Admin-Menu/ASP_CSV2Page";
import Tenkei_FG_SumPage from "../pages/Admin-Menu/Tenkei_FG_SumPage";
import BlessedUpdatePage from "../pages/Admin-Menu/BlessedUpdatePage";
import { CustomerPage } from "../pages/Master/CustomerPage";
import { VenderPage } from "../pages/Master/VenderPage";
import { WorkGPage } from "../pages/Master/WorkGPage";
import { WorkerPage } from "../pages/Master/WorkerPage";
import { CoatingPage } from "../pages/Master/CoatingPage";
import { ProcessGPage } from "../pages/Master/ProcessGPage";
import { ProcessPage } from "../pages/Master/ProcessPage";
import { MachinePage } from "../pages/Master/MachinePage";
import { HolidayPage } from "../pages/Master/HolidayPage";

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
    path: "/sales-info",
    element: <SalesInfoPage />,
  },
  {
    path: "/sales",
    element: <SalesDashboradPage />,
  },
  {
    path: "/sub-con",
    element: <SubConDashboradPage />,
  },
  {
    path: "/plan",
    element: <PlanDashboardPage />,
  },
  {
    path: "/production",
    element: <ProductionDashboardPage />,
  },
  {
    path: "/qc",
    element: <QcDashboardPage />,
  },
  {
    path: "/link",
    element: <LinkDashborad />,
  },
  {
    path: "/finish",
    element: <FinishDashboardPage />,
  },
  {
    path: "/print",
    element: <PrintDashboradPage />,
  },
  {
    path: "/master",
    element: <MasterDashboardPage />,
  },
  {
    path: "/import",
    element: <ImportDashboardPage />,
  },
  {
    path: "/export",
    element: <ExportDashboardPage />,
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
    path: "/result-list",
    element: <ResultListPage />,
  },
  {
    path: "/admin-menu",
    element: <GotoAdminMenuPage />,
  },
  {
    path: "/nav-fg",
    element: <NAV_FGPage />,
  },
  {
    path: "/nav-wi",
    element: <NAV_WIPage />,
  },
  {
    path: "/delivery-date",
    element: <DeliveryDatePage />,
  },
  {
    path: "/system-restore",
    element: <SystemRestorePage />,
  },
  {
    path: "/none-fg-data",
    element: <None_FG_DataPage />,
  },
  {
    path: "/none-wi-data",
    element: <None_WI_DataPage />,
  },
  {
    path: "/month-target",
    element: <MonthTargetPage />,
  },
  {
    path: "/system-maintenance",
    element: <SystemMaintenancePage />,
  },
  {
    path: "/none-fg-data-tenkei",
    element: <None_FG_Data_TenkeiPage />,
  },
  {
    path: "/none-wi-data-tenkei",
    element: <None_WI_Data_TenkeiPage />,
  },
  {
    path: "/week-target-setting",
    element: <WeekTargetSettingPage />,
  },
  {
    path: "/asp-csv-1",
    element: <ASP_CSV1Page />,
  },
  {
    path: "/fg-amount",
    element: <FG_AmountPage />,
  },
  {
    path: "/wi-amount",
    element: <WI_AmountPage />,
  },
  {
    path: "/system-set",
    element: <SystemSetPage />,
  },
  {
    path: "/asp-csv-2",
    element: <ASP_CSV2Page />,
  },
  {
    path: "/tenkei-fg-sum",
    element: <Tenkei_FG_SumPage />,
  },
  {
    path: "/tenkei-wi-sum",
    element: <Tenkei_FG_SumPage />,
  },
  {
    path: "/blessed-update",
    element: <BlessedUpdatePage />,
  },
  {
    path: "/customer",
    element: <CustomerPage />,
  },
  {
    path: "/vendor",
    element: <VenderPage />,
  },
  {
    path: "/workG",
    element: <WorkGPage />,
  },
  {
    path: "/worker",
    element: <WorkerPage />,
  },
  {
    path: "/coating",
    element: <CoatingPage />,
  },
  {
    path: "/processG",
    element: <ProcessGPage />,
  },
  {
    path: "/process",
    element: <ProcessPage />,
  },
  {
    path: "/machine",
    element: <MachinePage />,
  },
  {
    path: "/holiday",
    element: <HolidayPage />,
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
