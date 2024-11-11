import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Button = ({ label, subLabel, to }) => (
  <Link
    to={to}
    className="bg-[#6A9C89] hover:bg-[#45695C] text-white font-medium h-24 w-full py-4 px-4 rounded-lg shadow-md flex justify-center items-center text-center transition-all duration-300 ease-in-out transform hover:scale-105"
  >
    <div className="text-sm md:text-base lg:text-lg">
      {label} <br />
      {subLabel && (
        <span className="text-xs md:text-sm lg:text-base">{subLabel}</span>
      )}
    </div>
  </Link>
);

export default function MasterDashboardPage() {
  const buttonsData = [
    { label: "Customer", subLabel: "(受注一覧)", to: "/customer" },
    { label: "Vendor", subLabel: "仕入先マスタ", to: "/vendor" },
    { label: "WorkG", subLabel: "部門マスタ", to: "/workG" },
    { label: "Worker", subLabel: "社員マスタ", to: "/worker" },
    { label: "Coating", subLabel: "（CVD･PVD･DLC）", to: "/coating" },
    { label: "ProcessG", subLabel: "工程Gマスタ", to: "/processG" },
    { label: "Process", subLabel: "工程マスタ", to: "/process" },
    { label: "Machine", subLabel: "機械マスタ", to: "/machine" },
    { label: "Holiday", subLabel: "休日設定", to: "/holiday" },
    
    
  ];

  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
    <Sidebar />
    <div className="flex flex-col w-screen mr-2 ml-2">
        <Navbar />
        <p className="font-bold text-2xl md:text-3xl mt-5 ml-10">TENKEI Client Menu</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 p-6 flex-1 overflow-y-auto">
            {buttonsData.map((btn, index) => (
                <Button key={index} label={btn.label} subLabel={btn.subLabel} to={btn.to} />
            ))}
        </div>
    </div>
</div>
  );
}
