import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function CostList() {
  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-screen mr-2 ml-2">
        <Navbar />

        <div className="flex-1 flex-col overflow-x-auto flex-grow p-2">
          <div className="bg-stone-300 grid grid-cols-1">
            <div className="bg-white w-11/12 mt-5 rounded-2xl mx-auto shadow-xl">
              <div className="flex justify-center py-4">
                <label className="text-xl font-bold">Cost List</label>
              </div>
              <hr />
              <div className="container mx-auto px-4 overflow-x-auto ">
                <div className="flex flex-nowrap justify-between items-center gap-2 py-2">
                  <div className="flex w-full md:w-auto">
                    <label className="w-[100px] font-medium">Search_Type</label>
                    <div className="w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex w-full md:w-auto px-10">
                    <label className="w-[70px] font-medium">Delivery</label>
                    <div className="w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex w-full md:w-auto">
                    <label className="w-[80px] font-medium">Delivery2</label>
                    <div className="w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex w-full md:w-auto px-10">
                    <label className="w-[80px] font-medium">Delivery3</label>
                    <div className="w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex w-full md:w-auto">
                    <label className="w-[120px] font-medium">
                      View_Schedule
                    </label>
                    <div className="w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex w-full md:w-auto px-10">
                    <label className="w-[100px] font-medium">Plan_Target</label>
                    <div className="w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <hr />

              <div className="overflow-x-auto w-full">
                <div className="grid grid-cols-12 min-w-[1400px]">
                  <div className="w-full content-start ms-5 mt-4">
                    <label className="font-bold text-sm">
                      Order_Info_Search
                    </label>
                  </div>
                  <br />
                  <div className="col-span-12 me-5 mt-5 ml-14 overflow-x-auto">
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-9">
                        {/* Group 1 */}
                        <div className="gap-2 flex mb-4 justify-start me-5">
                          <div className="flex gap-2 w-48">
                            <label className="w-24 font-medium text-sm">
                              Format
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-48 ml-4">
                            <label className="w-24 font-medium text-sm ">
                              Change_Page
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex ml-4 w-48 ">
                            <label className="w-24 font-medium text-sm">
                              Target
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 2 */}
                        <div className="gap-2 flex mb-4 items-center justify-between me-5">
                          <div className="flex gap-2 w-48">
                            <label className="w-24 font-medium text-sm">
                              Order_No
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex w-48">
                            <div className="flex w-24 gap-1 items-center">
                              <div className="w-auto flex me-1">
                                <input type="checkbox" className="w-6 h-6" />
                              </div>
                              <label className="text-xs font-medium">
                                Into_View
                              </label>
                            </div>
                            <div className="flex w-24 gap-1 items-center">
                              <div className="w-auto flex me-1">
                                <input type="checkbox" className="w-6 h-6" />
                              </div>
                              <label className="text-xs font-medium">
                                PI_Colo
                              </label>
                            </div>
                          </div>
                          <div className="flex  mr-3 w-48">
                            <label className="w-24 font-medium text-sm">
                              Mark_Days
                            </label>
                            <div className="w-24 ">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex justify-between w-auto gap-2 ms-5">
                            <label className="w-20 font-medium text-sm">
                              Ctl_Person
                            </label>
                            <div className="w-24">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 3 */}
                        <div className="gap-2 flex mb-4 justify-between me-5">
                          <div className="flex gap-2 w-48">
                            <label className="w-24 font-medium text-sm">
                              NAV_Name
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex w-[400px] gap-2 ml-2 mr-8">
                            <label className="w-auto font-medium text-sm">
                              Product_Grp
                            </label>
                            <div className="w-24">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-24 ">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>

                            <label className="w-auto font-medium text-sm">
                              ~
                            </label>

                            <div className="w-24 ">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>

                          <div className="flex justify-between w-auto gap-2 ms-5">
                            <label className="w-20 font-medium text-sm">
                              Sales_grp
                            </label>
                            <div className="w-24">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 4 */}
                        <div className="gap-2 flex mb-4 justify-between me-5">
                          <div className="flex gap-2 w-48">
                            <label className="w-24 font-medium text-sm">
                              Product_Name
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex  w-48 gap-2 mr-5">
                            <label className="w-auto font-medium text-sm">
                              Not_Pd_Grp1
                            </label>
                            <div className="w-24">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-20">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full mr-4"
                              />
                            </div>
                          </div>
                          <div className="flex justify-between w-48 gap-2">
                            <label className=" font-medium text-sm mr-5">
                              Price_CAT
                            </label>
                            <div className=" w-16">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-16 ">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex justify-between w-auto gap-2 ms-5">
                            <label className="w-20 font-medium text-sm">
                              Sales_Person
                            </label>
                            <div className="w-24">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 5 */}
                        <div className="gap-2 flex mb-4 justify-between me-5">
                          <div className="flex gap-2 w-48">
                            <label className="w-24 font-medium text-sm">
                              NAV_Size
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex justify-between w-48 gap-2 mr-5">
                            <label className="w-auto font-medium text-sm">
                              Not_Pd_Grp2
                            </label>
                            <div className="w-24">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-20">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex justify-between w-auto gap-2 mr-3">
                            <label className="w-auto font-medium text-sm">
                              Request_CAT
                            </label>
                            <div className="w-16">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-16">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                            <div className="w-16">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-16">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                            <div className="w-16">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-16">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 6 */}
                        <div className="gap-2 flex mb-4 justify-between me-5">
                          <div className="w-1/2 flex gap-2">
                            <div className="flex gap-2 w-48">
                              <label className="w-24 font-medium text-sm">
                                Product_Size
                              </label>
                              <div className="w-24">
                                <input
                                  type="text"
                                  className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                              </div>
                            </div>
                            <div className="flex justify-between gap-2 ms-3 flex-wrap">
                              <div className="flex gap-2 w-full sm:w-52">
                                <label className="w-auto font-medium text-sm">
                                  Customer1
                                </label>
                                <div className="w-28">
                                  <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                    <option value=""></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                  </select>
                                </div>
                                <div className="w-28">
                                  <input
                                    type="text"
                                    className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="flex justify-between gap-2 ">
                              <div className="flex gap-2 w-full ml-4">
                                <label className="w-24 font-medium text-sm">
                                  Order_Progress
                                </label>
                                <div className="w-auto">
                                  <input
                                    type="text"
                                    className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                                  />
                                </div>
                              </div>

                              <div className="flex  w-28 ">
                                <label className="ml-4 w-24 font-medium text-sm">
                                  Mate1
                                </label>
                                <div className="w-auto ml-5">
                                  <input
                                    type="text"
                                    className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Group 7 */}
                        <div className="gap-2 flex mb-4 justify-between me-5">
                          <div className="flex gap-2 w-48">
                            <label className="w-24 font-medium text-sm">
                              Cus_Draw_No
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-52">
                            <label className="w-auto font-medium text-sm">
                              Customer2
                            </label>
                            <div className="w-28">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-40">
                            <label className="w-auto font-medium text-sm">
                              Cus_Name1
                            </label>
                            <div className="w-24 ">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-40">
                            <label className="w-auto font-medium text-sm">
                              Item1
                            </label>
                            <div className="w-28">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-auto">
                            <label className="w-auto font-medium text-sm">
                              Mate2
                            </label>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 8 */}
                        <div className="gap-2 flex mb-4 justify-between me-5">
                          <div className="flex gap-2 w-48">
                            <label className="w-24 font-medium text-sm">
                              Com_Draw_No
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-52">
                            <label className="w-auto font-medium text-sm">
                              Customer3
                            </label>
                            <div className="w-28">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-40">
                            <label className="w-auto font-medium text-sm">
                              Cus_Name2
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-40">
                            <label className="w-auto font-medium text-sm">
                              Item2
                            </label>
                            <div className="w-28">
                              <select className="h-6 border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-auto">
                            <label className="w-auto font-medium text-sm">
                              Mate3
                            </label>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 9 */}
                        <div className="gap-2 flex mb-4 justify-between me-5">
                          <div className="flex gap-2 w-48">
                            <label className="w-24 font-medium text-sm">
                              Pd_Draw_No
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-52">
                            <label className="w-auto font-medium text-sm">
                              Not_Customer
                            </label>
                            <div className="w-28">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-40">
                            <label className="w-auto font-medium text-sm">
                              Cus_Name3
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-40">
                            <label className="w-auto font-medium text-sm">
                              Item3
                            </label>
                            <div className="w-28">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-auto">
                            <label className="w-auto font-medium text-sm">
                              Mate4
                            </label>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 10 */}
                        <div className="gap-2 flex mb-4 justify-between me-5">
                          <div className="flex gap-2 w-48">
                            <label className="w-24 font-medium text-sm">
                              Sales_Note
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-52">
                            <label className="w-auto font-medium text-sm">
                              Specific1
                            </label>
                            <div className="w-28">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-40">
                            <label className="w-auto font-medium text-sm">
                              Coating1
                            </label>
                            <div className="w-28">
                              <select className="h-6 border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-40">
                            <label className="w-auto font-medium text-sm">
                              Item4
                            </label>
                            <div className="w-28">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-auto">
                            <label className="w-auto font-medium text-sm">
                              Mate5
                            </label>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 11 */}
                        <div className="gap-2 flex mb-4 justify-between me-5">
                          <div className="flex gap-2 w-48">
                            <label className="w-24 font-medium text-sm">
                              Pd_Note
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-52">
                            <label className="w-auto font-medium text-sm">
                              Specific2
                            </label>
                            <div className="w-28">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-40">
                            <label className="w-auto font-medium text-sm">
                              Coating2
                            </label>
                            <div className="w-28">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-40">
                            <label className="w-auto font-medium text-sm">
                              Od_Pent
                            </label>
                            <div className="w-28">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                          </div>
                          <div className="flex gap-2 w-auto">
                            <label className="w-auto font-medium text-sm">
                              Od_CAT1
                            </label>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 12 */}
                        <div className="gap-2 flex mb-4 justify-between me-5">
                          <div className="flex gap-2 w-48">
                            <label className="w-24 font-medium text-sm">
                              Pd_Remark
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-52">
                            <label className="w-auto font-medium text-sm">
                              Not_Specific1
                            </label>
                            <div className="w-28">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-40">
                            <label className="w-auto font-medium text-sm">
                              Coating3
                            </label>
                            <div className="w-28">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-40">
                            <label className="w-auto font-medium text-sm">
                              TempShip
                            </label>
                            <div className="w-28">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                          </div>
                          <div className="flex gap-2 w-auto">
                            <label className="w-auto font-medium text-sm">
                              Od_CAT2
                            </label>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 13 */}
                        <div className="gap-2 flex mb-4 justify-between me-5">
                          <div className="flex gap-2 w-48">
                            <label className="w-24 font-medium text-sm">
                              QC_Remark
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-52">
                            <label className="w-auto font-medium text-sm">
                              Not_Specitic2
                            </label>
                            <div className="w-28">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-40">
                            <label className="w-auto font-medium text-sm">
                              Not_Coat
                            </label>
                            <div className="w-28">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-40">
                            <label className="w-auto font-medium text-sm">
                              Unrecive
                            </label>
                            <div className="w-28">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                          </div>
                          <div className="flex gap-2 w-auto">
                            <label className="w-auto font-medium text-sm">
                              Od_CAT3
                            </label>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-3">
                        {/* Group 1 */}
                        <div className="mb-4">
                          <div className="flex gap-2 justify-end">
                            <label className="w-28 font-medium text-sm">
                              Order_Progress
                            </label>
                            <div className="w-24">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <label className="w-auto font-medium text-sm">
                              ~
                            </label>
                            <div className="w-24">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        {/* Group 2 */}
                        <div className="mb-4">
                          <div className="flex gap-2 justify-end">
                            <label className="w-28 font-medium text-sm">
                              Delivery_CAT
                            </label>
                            <div className="w-24">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <label className="w-auto font-medium text-sm">
                              ~
                            </label>
                            <div className="w-24">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        {/* Group 3 */}
                        <div className="mb-4">
                          <div className="flex gap-2 justify-end">
                            <label className="w-28 font-medium text-sm">
                              Schedule_CAT
                            </label>
                            <div className="w-24">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <label className="w-auto font-medium text-sm">
                              ~
                            </label>
                            <div className="w-24">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        {/* Group 4 */}
                        <div className="mb-4">
                          <div className="flex gap-2 justify-end">
                            <label className="w-28 font-medium text-sm">
                              Target_CAT
                            </label>
                            <div className="w-24">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <label className="w-auto font-medium text-sm">
                              ~
                            </label>
                            <div className="w-24">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        {/* Group 5 */}
                        <div className="mb-4">
                          <div className="flex gap-2 justify-end">
                            <label className="w-28 font-medium text-sm">
                              Request_Delivery
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                            <label className="w-auto font-medium text-sm">
                              ~
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 6 */}
                        <div className="mb-4">
                          <div className="flex gap-2 justify-end">
                            <label className="w-28 font-medium text-sm">
                              Nav Delivery
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                            <label className="w-auto font-medium text-sm">
                              ~
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 7 */}
                        <div className="mb-4">
                          <div className="flex gap-2 justify-end">
                            <label className="w-28 font-medium text-sm">
                              Confirm_Delivery
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                            <label className="w-auto font-medium text-sm">
                              ~
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 8 */}
                        <div className="mb-4">
                          <div className="flex gap-2 justify-end">
                            <label className="w-28 font-medium text-sm">
                              Product_Delivery
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                            <label className="w-auto font-medium text-sm">
                              ~
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 9 */}
                        <div className="mb-4">
                          <div className="flex gap-2 justify-end">
                            <label className="w-28 font-medium text-sm">
                              Product_Received
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                            <label className="w-auto font-medium text-sm">
                              ~
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 10 */}
                        <div className="mb-4">
                          <div className="flex gap-2 justify-end">
                            <label className="w-28 font-medium text-sm">
                              Product_Complete
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                            <label className="w-auto font-medium text-sm">
                              ~
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 11 */}
                        <div className="mb-4">
                          <div className="flex gap-2 justify-end">
                            <label className="w-28 font-medium text-sm">
                              QC_Complete
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                            <label className="w-auto font-medium text-sm">
                              ~
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 12 */}
                        <div className="mb-4">
                          <div className="flex gap-2 justify-end">
                            <label className="w-28 font-medium text-sm">
                              Shipment_Date
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                            <label className="w-auto font-medium text-sm">
                              ~
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 13 */}
                        <div className="mb-4">
                          <div className="flex gap-2 justify-end">
                            <label className="w-28 font-medium text-sm">
                              Cale_Date
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                            <label className="w-auto font-medium text-sm">
                              ~
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />

              {/* plan-info-search */}

              <div className="w-full content-start ms-5 mt-4">
                <label className="font-bold text-sm">Plan_Info_Search</label>
              </div>
              <div className="container sm:overflow-x-auto lg:overflow-x-flow-hidden w-full">
                <div className="col-span-12  me-5 mt-5 ml-14">
                  {/* Group 1 */}
                  <div className="flex flex-warp justify-start gap-2 mb-2 items-center">
                    <div className="flex item-center gap-2 ">
                      <label className="w-auto font-medium text-sm mr-8">
                        Parts_No
                      </label>
                      <div className="items-center w-full mr-5">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-24 h-6">
                          <option value=""></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <label className="w-auto font-medium text-sm mr-3">
                        Parts_Pend
                      </label>
                      <div className="items-center w-full mr-5">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-24 h-6">
                          <option value=""></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <div className="flex items-center gap-2 ">
                        <label className="w-auto font-medium text-sm mr-7">
                          Pt_CAT1
                        </label>
                        <div className="items-center w-full">
                          <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-24 h-6">
                            <option value=""></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Group 2 */}
                  <div className="flex flex-warp justify-start gap-2 mb-4 items-center">
                    <div className="flex item-center gap-2 ">
                      <label className="w-auto font-medium text-sm mr-9">
                        Pt_CAT2
                      </label>
                      <div className="items-center w-full mr-5">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-24 h-6">
                          <option value=""></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <label className="w-auto font-medium text-sm mr-7">
                        Pt_CAT3
                      </label>
                      <div className="items-center w-full">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-24 h-6">
                          <option value=""></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* group3 */}
                  <div className="flex flex-warp justify-start gap-2 mb-2 items-center">
                    <div className="flex item-center gap-2 ">
                      <label className="w-auto font-medium text-sm mr-4">
                        Reg_Person
                      </label>
                      <div className="items-center w-full mr-5">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-24 h-6">
                          <option value=""></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <label className="w-auto font-medium text-sm mr-3">
                        Parts_Mate
                      </label>
                      <div className="items-center w-full mr-5">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-24 h-6">
                          <option value=""></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <div className="flex items-center gap-2 ">
                        <label className="w-auto font-medium text-sm mr-3">
                          Parts_Note
                        </label>
                        <div className="items-center w-full">
                          <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-24 h-6">
                            <option value=""></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Group 4*/}
                  <div className="flex flex-warp justify-start gap-2 mb-4 items-center">
                    <div className="flex item-center gap-2 ">
                      <label className="w-auto font-medium text-sm mr-5">
                        Pt_Remark
                      </label>
                      <div className="items-center w-full mr-5">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-24 h-6">
                          <option value=""></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <label className="w-auto font-medium text-sm mr-5">
                        Parts_Info
                      </label>
                      <div className="items-center w-full">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-24 h-6">
                          <option value=""></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* Group 5*/}
                  <div className="flex flex-warp justify-start gap-4 mb-2 ">
                    <div className="flex item-center gap-2">
                      <label className="w-auto font-medium text-sm ">
                        Parts_Delivery
                      </label>
                      <div className="items-center">
                        <input
                          type="text"
                          className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24 h-6"
                        />
                      </div>
                      <label className="font-medium text-sm">~</label>
                      <div>
                        <input
                          type="text"
                          className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24 h-6"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <label className="w-auto font-medium text-sm ">
                        Pl_Process_Date
                      </label>
                      <div className="w-full">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-24 h-6">
                          <option value=""></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <label className="font-medium text-sm">~</label>
                      <div className=" w-full pr-2">
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-24 h-6">
                          <option value=""></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Cost-Info-Seacrh */}
              <div className="p-2">
                <div className="mb-2">
                  <label className="font-bold text-sm pl-4">
                    Cost_Info_Search
                  </label>
                </div>
                <div className="flex gap-6 mb-2 justify-end pr-3">
                  <div className="flex item-center gap-2">
                    <label className="w-auto font-medium text-sm ">
                      Process_Date
                    </label>
                    <div>
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24 h-6"
                      />
                    </div>
                    <label className="font-medium text-sm">~</label>
                    <div>
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24 h-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-6  justify-end pr-3">
                  <div className="flex item-center gap-2">
                    <label className="w-auto font-medium text-sm ">
                      Complete_Date
                    </label>
                    <div>
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24 h-6"
                      />
                    </div>
                    <label className="font-medium text-sm">~</label>
                    <div>
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24 h-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Result_Search */}
              <div className="overflow-x-auto w-full">
                <div className="flex">
                  <div className="p-2">
                    <div>
                      <label className="font-bold text-sm pl-4">
                        Result_Search
                      </label>
                    </div>
                    <div className="flex item-center gap-4 pl-4">
                      <div className="flex w-full gap-4">
                        {/* div ย่อยที่ 1 */}
                        <div className="flex gap-6">
                          <div className="flex  item-center gap-2">
                            <label className="w-auto font-medium text-sm ">
                              Select_Od_No
                            </label>
                          </div>
                          <div>
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24 h-6"
                            />
                          </div>
                          {/* div ย่อยที่ 2 */}
                          <div className="flex gap-6">
                            <div className="flex  item-center gap-2">
                              <label className="w-auto font-medium text-sm ">
                                Select_Pt_No
                              </label>
                            </div>
                            <div>
                              <input
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24 h-6"
                              />
                            </div>
                            {/* div ย่อยที่ 3 */}
                            <div className="flex gap-6">
                              <div className=" ">
                                <div className="flex item-center gap-2">
                                  <div className="flex  item-center gap-2">
                                    <label className="w-auto font-medium text-sm ">
                                      l_List_View_W(22.8)
                                    </label>
                                  </div>
                                  <div>
                                    <input
                                      type="text"
                                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24 h-6"
                                    />
                                  </div>
                                </div>
                              </div>
                              {/* div ย่อยที่ 4 */}
                              <div className="flex gap-6">
                                <div className="flex item-center">
                                  <label className="w-auto font-medium text-sm">
                                    Pl_List_ViewH(3~15cm)
                                  </label>
                                </div>
                                <div>
                                  <input
                                    type="text"
                                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24 h-6"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end p-4">
                <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                  Change_View
                </button>
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
