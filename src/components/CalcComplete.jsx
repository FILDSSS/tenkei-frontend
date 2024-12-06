import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function CalcComplete() {
  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-screen mr-2 ml-2">
        <Navbar />
        <div className="flex-1 flex-col overflow-x-auto flex-grow p-2 bg-white">
          <div className="grid grid-cols-1">
            <div className="flex justify-center items-center py-3">
              <label className="text-xl font-bold">Calc Complete</label>
            </div>
            <hr className="mb-4" />

            <div className="flex mb-5 ml-auto">
              <div className="px-2 w-24 text-end">
                <label className="font-medium text-xs">Date</label>
              </div>
              <input
                type="text"
                className="bg-white border border-gray-500 rounded-md px-2 py-0.5 w-[200px]"
                name="txtProcessing_Date"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-5">
              <div className="flex flex-col items-start">
                <label className="font-medium text-xs mb-2">
                  lblAction_Pd_Remark_LBL
                </label>
                <input
                  type="text"
                  className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-full"
                />
              </div>

              <div className="flex flex-col items-start">
                <label className="font-medium text-xs mb-2">
                  lblAction_Pd_Remark_LBL
                </label>
                <input
                  type="text"
                  className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-full"
                />
              </div>

              <div className="flex flex-col items-start">
                <label className="font-medium text-xs mb-2">
                  lblAction_Shipment_Date_LBL
                </label>
                <input
                  type="text"
                  className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-full"
                />
              </div>

              <div className="flex flex-col items-start">
                <label className="font-medium text-xs mb-2">
                  lblAction_Pd_Calc_Date_LBL
                </label>
                <div className="flex w-full">
                  <input
                    type="text"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 w-1/3"
                    name="txtAction_Pd_Calc_Date"
                  />
                  <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-1/3">
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <input
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md w-1/3"
                  />
                  <input
                    type="text"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md w-full"
                    name="txtAction_Pd_Calc_Date"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mx-5">
              <div className="flex flex-col items-center">
                <label className="font-medium text-xs mb-2">Calc Date</label>
                <input
                  type="text"
                  className="bg-[#cc99ff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-full lg:w-96"
                  name="txtCalc_Date"
                />
              </div>
              <div className="flex flex-col items-center">
                <label className="font-medium text-xs mb-2">Input Date</label>
                <input
                  type="text"
                  className="bg-[#cc99ff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-full lg:w-96"
                  name="txtInput_Date"
                />
              </div>
            </div>

            <div className="w-full mt-5 overflow-x-auto">
              <div className="min-w-[1850px] w-full mb-5">
                {/* Header row */}
                <div className="flex p-1">
                  <div className="w-[200px] text-center font-medium text-xs">
                    Order_No
                  </div>
                  <div className="w-[200px] text-center font-medium text-xs">
                    Customer
                  </div>
                  <div className="w-[400px] text-center font-medium text-xs">
                    Abb
                  </div>
                  <div className="w-[590px] text-center font-medium text-xs">
                    NAV_Goods_Name
                  </div>
                  <div className="w-56 text-center font-medium text-xs">
                    Qty
                  </div>
                  <div className="w-[200px] text-center font-medium text-xs">
                    Progress
                  </div>
                </div>

                <div className="flex p-1">
                  <input
                    type="text"
                    className="bg-[#ccffff] border border-gray-500 rounded-md px-2 w-[200px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[200px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[400px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[590px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-16"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-24"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-16"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[200px]"
                  />
                </div>

                <div className="flex pl-5">
                  <div className="px-2 w-24 text-center">
                    <label className="font-medium text-xs">Pd_Remark</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[320px]"
                  />
                  <div className="px-2 w-16 text-right">
                    <label className="font-medium text-xs">QC</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[190px]"
                  />
                  <div className="px-2 w-16 text-right">
                    <label className="font-medium text-xs">Ship</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[190px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[69px]"
                  />
                  <div className="px-2 w-24 text-right">
                    <label className="font-medium text-xs">Calc</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[190px]"
                  />
                  <div className="px-2 w-24 text-right">
                    <label className="font-medium text-xs">Price</label>
                  </div>
                  <select className="border border-gray-500 rounded-md bg-[#ffff99] px-2 w-16">
                    <option value=""></option>
                    <option value="Price">Price</option>
                    <option value="Discount">Discount</option>
                    <option value="Total">Total</option>
                  </select>
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-24"
                  />
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[263px]"
                  />
                </div>

                <div className="flex p-1">
                  <input
                    type="text"
                    className="bg-[#ccffff] border border-gray-500 rounded-md px-2 w-[200px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[200px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[400px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[590px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-16"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-24"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-16"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[200px]"
                  />
                </div>

                <div className="flex pl-5">
                  <div className="px-2 w-24 text-center">
                    <label className="font-medium text-xs">Pd_Remark</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[320px]"
                  />
                  <div className="px-2 w-16 text-right">
                    <label className="font-medium text-xs">QC</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[190px]"
                  />
                  <div className="px-2 w-16 text-right">
                    <label className="font-medium text-xs">Ship</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[190px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[69px]"
                  />
                  <div className="px-2 w-24 text-right">
                    <label className="font-medium text-xs">Calc</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[190px]"
                  />
                  <div className="px-2 w-24 text-right">
                    <label className="font-medium text-xs">Price</label>
                  </div>
                  <select className="border border-gray-500 rounded-md bg-[#ffff99] px-2 w-16">
                    <option value=""></option>
                    <option value="Price">Price</option>
                    <option value="Discount">Discount</option>
                    <option value="Total">Total</option>
                  </select>
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-24"
                  />
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[263px]"
                  />
                </div>

                <div className="flex p-1">
                  <input
                    type="text"
                    className="bg-[#ccffff] border border-gray-500 rounded-md px-2 w-[200px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[200px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[400px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[590px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-16"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-24"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-16"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[200px]"
                  />
                </div>

                <div className="flex pl-5">
                  <div className="px-2 w-24 text-center">
                    <label className="font-medium text-xs">Pd_Remark</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[320px]"
                  />
                  <div className="px-2 w-16 text-right">
                    <label className="font-medium text-xs">QC</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[190px]"
                  />
                  <div className="px-2 w-16 text-right">
                    <label className="font-medium text-xs">Ship</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[190px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[69px]"
                  />
                  <div className="px-2 w-24 text-right">
                    <label className="font-medium text-xs">Calc</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[190px]"
                  />
                  <div className="px-2 w-24 text-right">
                    <label className="font-medium text-xs">Price</label>
                  </div>
                  <select className="border border-gray-500 rounded-md bg-[#ffff99] px-2 w-16">
                    <option value=""></option>
                    <option value="Price">Price</option>
                    <option value="Discount">Discount</option>
                    <option value="Total">Total</option>
                  </select>
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-24"
                  />
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[263px]"
                  />
                </div>

                <div className="flex p-1">
                  <input
                    type="text"
                    className="bg-[#ccffff] border border-gray-500 rounded-md px-2 w-[200px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[200px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[400px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[590px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-16"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-24"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-16"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[200px]"
                  />
                </div>

                <div className="flex pl-5">
                  <div className="px-2 w-24 text-center">
                    <label className="font-medium text-xs">Pd_Remark</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[320px]"
                  />
                  <div className="px-2 w-16 text-right">
                    <label className="font-medium text-xs">QC</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[190px]"
                  />
                  <div className="px-2 w-16 text-right">
                    <label className="font-medium text-xs">Ship</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[190px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[69px]"
                  />
                  <div className="px-2 w-24 text-right">
                    <label className="font-medium text-xs">Calc</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[190px]"
                  />
                  <div className="px-2 w-24 text-right">
                    <label className="font-medium text-xs">Price</label>
                  </div>
                  <select className="border border-gray-500 rounded-md bg-[#ffff99] px-2 w-16">
                    <option value=""></option>
                    <option value="Price">Price</option>
                    <option value="Discount">Discount</option>
                    <option value="Total">Total</option>
                  </select>
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-24"
                  />
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[263px]"
                  />
                </div>

                <div className="flex p-1">
                  <input
                    type="text"
                    className="bg-[#ccffff] border border-gray-500 rounded-md px-2 w-[200px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[200px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[400px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[590px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-16"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-24"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-16"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[200px]"
                  />
                </div>

                <div className="flex pl-5">
                  <div className="px-2 w-24 text-center">
                    <label className="font-medium text-xs">Pd_Remark</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[320px]"
                  />
                  <div className="px-2 w-16 text-right">
                    <label className="font-medium text-xs">QC</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[190px]"
                  />
                  <div className="px-2 w-16 text-right">
                    <label className="font-medium text-xs">Ship</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[190px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[69px]"
                  />
                  <div className="px-2 w-24 text-right">
                    <label className="font-medium text-xs">Calc</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[190px]"
                  />
                  <div className="px-2 w-24 text-right">
                    <label className="font-medium text-xs">Price</label>
                  </div>
                  <select className="border border-gray-500 rounded-md bg-[#ffff99] px-2 w-16">
                    <option value=""></option>
                    <option value="Price">Price</option>
                    <option value="Discount">Discount</option>
                    <option value="Total">Total</option>
                  </select>
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-24"
                  />
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[263px]"
                  />
                </div>

                <div className="flex p-1">
                  <input
                    type="text"
                    className="bg-[#ccffff] border border-gray-500 rounded-md px-2 w-[200px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[200px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[400px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[590px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-16"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-24"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-16"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[200px]"
                  />
                </div>

                <div className="flex pl-5">
                  <div className="px-2 w-24 text-center">
                    <label className="font-medium text-xs">Pd_Remark</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[320px]"
                  />
                  <div className="px-2 w-16 text-right">
                    <label className="font-medium text-xs">QC</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[190px]"
                  />
                  <div className="px-2 w-16 text-right">
                    <label className="font-medium text-xs">Ship</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[190px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[69px]"
                  />
                  <div className="px-2 w-24 text-right">
                    <label className="font-medium text-xs">Calc</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[190px]"
                  />
                  <div className="px-2 w-24 text-right">
                    <label className="font-medium text-xs">Price</label>
                  </div>
                  <select className="border border-gray-500 rounded-md bg-[#ffff99] px-2 w-16">
                    <option value=""></option>
                    <option value="Price">Price</option>
                    <option value="Discount">Discount</option>
                    <option value="Total">Total</option>
                  </select>
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-24"
                  />
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[263px]"
                  />
                </div>

                <div className="flex p-1">
                  <input
                    type="text"
                    className="bg-[#ccffff] border border-gray-500 rounded-md px-2 w-[200px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[200px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[400px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[590px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-16"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-24"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-16"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[200px]"
                  />
                </div>

                <div className="flex pl-5">
                  <div className="px-2 w-24 text-center">
                    <label className="font-medium text-xs">Pd_Remark</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[320px]"
                  />
                  <div className="px-2 w-16 text-right">
                    <label className="font-medium text-xs">QC</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[190px]"
                  />
                  <div className="px-2 w-16 text-right">
                    <label className="font-medium text-xs">Ship</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[190px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[69px]"
                  />
                  <div className="px-2 w-24 text-right">
                    <label className="font-medium text-xs">Calc</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[190px]"
                  />
                  <div className="px-2 w-24 text-right">
                    <label className="font-medium text-xs">Price</label>
                  </div>
                  <select className="border border-gray-500 rounded-md bg-[#ffff99] px-2 w-16">
                    <option value=""></option>
                    <option value="Price">Price</option>
                    <option value="Discount">Discount</option>
                    <option value="Total">Total</option>
                  </select>
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-24"
                  />
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[263px]"
                  />
                </div>

                <div className="flex p-1">
                  <input
                    type="text"
                    className="bg-[#ccffff] border border-gray-500 rounded-md px-2 w-[200px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[200px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[400px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[590px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-16"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-24"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-16"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[200px]"
                  />
                </div>

                <div className="flex pl-5">
                  <div className="px-2 w-24 text-center">
                    <label className="font-medium text-xs">Pd_Remark</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[320px]"
                  />
                  <div className="px-2 w-16 text-right">
                    <label className="font-medium text-xs">QC</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[190px]"
                  />
                  <div className="px-2 w-16 text-right">
                    <label className="font-medium text-xs">Ship</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[190px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[69px]"
                  />
                  <div className="px-2 w-24 text-right">
                    <label className="font-medium text-xs">Calc</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[190px]"
                  />
                  <div className="px-2 w-24 text-right">
                    <label className="font-medium text-xs">Price</label>
                  </div>
                  <select className="border border-gray-500 rounded-md bg-[#ffff99] px-2 w-16">
                    <option value=""></option>
                    <option value="Price">Price</option>
                    <option value="Discount">Discount</option>
                    <option value="Total">Total</option>
                  </select>
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-24"
                  />
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[263px]"
                  />
                </div>

                <div className="flex p-1">
                  <input
                    type="text"
                    className="bg-[#ccffff] border border-gray-500 rounded-md px-2 w-[200px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[200px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[400px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[590px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-16"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-24"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-16"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[200px]"
                  />
                </div>

                <div className="flex pl-5">
                  <div className="px-2 w-24 text-center">
                    <label className="font-medium text-xs">Pd_Remark</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[320px]"
                  />
                  <div className="px-2 w-16 text-right">
                    <label className="font-medium text-xs">QC</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[190px]"
                  />
                  <div className="px-2 w-16 text-right">
                    <label className="font-medium text-xs">Ship</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[190px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[69px]"
                  />
                  <div className="px-2 w-24 text-right">
                    <label className="font-medium text-xs">Calc</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[190px]"
                  />
                  <div className="px-2 w-24 text-right">
                    <label className="font-medium text-xs">Price</label>
                  </div>
                  <select className="border border-gray-500 rounded-md bg-[#ffff99] px-2 w-16">
                    <option value=""></option>
                    <option value="Price">Price</option>
                    <option value="Discount">Discount</option>
                    <option value="Total">Total</option>
                  </select>
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-24"
                  />
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[263px]"
                  />
                </div>

                <div className="flex p-1">
                  <input
                    type="text"
                    className="bg-[#ccffff] border border-gray-500 rounded-md px-2 w-[200px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[200px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[400px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[590px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-16"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-24"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-16"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[200px]"
                  />
                </div>

                <div className="flex pl-5">
                  <div className="px-2 w-24 text-center">
                    <label className="font-medium text-xs">Pd_Remark</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[320px]"
                  />
                  <div className="px-2 w-16 text-right">
                    <label className="font-medium text-xs">QC</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[190px]"
                  />
                  <div className="px-2 w-16 text-right">
                    <label className="font-medium text-xs">Ship</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[190px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-[69px]"
                  />
                  <div className="px-2 w-24 text-right">
                    <label className="font-medium text-xs">Calc</label>
                  </div>
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[190px]"
                  />
                  <div className="px-2 w-24 text-right">
                    <label className="font-medium text-xs">Price</label>
                  </div>
                  <select className="border border-gray-500 rounded-md bg-[#ffff99] px-2 w-16">
                    <option value=""></option>
                    <option value="Price">Price</option>
                    <option value="Discount">Discount</option>
                    <option value="Total">Total</option>
                  </select>
                  <input
                    type="text"
                    className="bg-white border border-gray-500 rounded-md px-2 w-24"
                  />
                  <input
                    type="text"
                    className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[263px]"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-3 mt-5">
              <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                <div className="grid grid-cols-4 gap-2">
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                    Search <br />
                    検索 (F1)
                  </button>
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                    Setting <br />
                    設定 (F2)
                  </button>
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                    Show <br />
                    照会 (F3)
                  </button>
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                    Target <br />
                    対象 (F4)
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                    Product <br />
                    部門 (F5)
                  </button>
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                    Calc <br />
                    生産 (F6)
                  </button>
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                    List <br />一 覽 (F7)
                  </button>
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                    Data <br />
                    データ (F8)
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                    <label className="flex justify-center items-center">
                      <IoIosArrowRoundForward className="font-medium text-2xl" />{" "}
                      CSV{" "}
                    </label>
                    (F9)
                  </button>
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                    (F10)
                  </button>
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-sm text-white">
                    Clear <br />
                    クリア (F11)
                  </button>
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                    Exit <br />
                    終了 (F12)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
