import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
export default function CalcComplete() {
  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-full mr-2 ml-2">
        <Navbar />
        <div className="flex-1 overflow-x-auto p-4">
          <div className="flex justify-center items-center py-3">
            <label className="text-xl font-bold">Calc Complete</label>
          </div>
          <hr className="mb-4" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-5">
            <div className="flex flex-col items-start">
              <label className="font-medium text-xs mb-2">
                lblAction_Pd_Remark_LBL
              </label>
              <input
                type="text"
                className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-1 w-full"
              />
            </div>

            <div className="flex flex-col items-start">
              <label className="font-medium text-xs mb-2">
                lblAction_Pd_Remark_LBL
              </label>
              <input
                type="text"
                className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-2 py-1 w-full"
              />
            </div>

            <div className="flex flex-col items-start">
              <label className="font-medium text-xs mb-2">
                lblAction_Shipment_Date_LBL
              </label>
              <input
                type="text"
                className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-2 py-1 w-full"
              />
            </div>

            <div className="flex flex-col items-start">
              <label className="font-medium text-xs mb-3">
                lblAction_Pd_Calc_Date_LBL
              </label>
              <div className="flex gap-2 w-full">
                <input
                  type="text"
                  className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-2 w-1/3"
                />
                <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-1/3">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <input
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-2 w-1/3"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5 mx-5">
            <div className="flex flex-col items-center">
              <label className="font-medium text-xs mb-2">Calc Date</label>
              <input
                type="text"
                className="bg-[#cc99ff] border-solid border-2 border-gray-500 rounded-md px-2 py-1 w-full lg:w-96"
              />
            </div>
            <div className="flex flex-col items-center">
              <label className="font-medium text-xs mb-2">Input Date</label>
              <input
                type="text"
                className="bg-[#cc99ff] border-solid border-2 border-gray-500 rounded-md px-2 py-1 w-full lg:w-96"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
