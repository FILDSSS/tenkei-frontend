import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { IoIosArrowRoundForward } from "react-icons/io";

const CostInfo = () => {
  // Define table headers
  const headers = ["CC", "F", "Process", "MA", "Machine", "MA", "Work", "Work"];

  // Generate table rows with input fields
  const rows = Array.from({ length: 11 }, (_, rowIndex) => (
    <tr
      key={rowIndex}
      className={rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}
    >
      {headers.map((_, colIndex) => (
        <td key={colIndex} className="px-4 py-2 border text-sm">
          <input
            type="text"
            className="w-28 p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </td>
      ))}
    </tr>
  ));

  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-screen mr-2 ml-2">
        <Navbar />
        <div className="flex-1 flex-col overflow-x-auto flex-grow p-2">
          <h1 className="text-2xl font-bold mt-3 text-center">Cost Info</h1>
          <hr className="my-6 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 mb-2">
            <div className="flex flex-col space-y-1">
              <label className="text-xs font-bold">Search Order No.</label>
              <input
                type="text"
                className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md py-0.5 w-full xl:w-60"
              />
            </div>

            <div className="flex flex-col space-y-1 relative">
              <label className="text-xs font-bold">Search Part No.</label>
              <div className="relative w-full">
                <input
                  type="text"
                  className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md py-0.5 w-full"
                />
                <select className="absolute inset-y-0 right-0 opacity-0 cursor-pointer w-full">
                  <option value="" disabled hidden>
                    Select
                  </option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-1 relative">
              <label className="text-xs font-bold">Search Cost No.</label>
              <div className="relative w-full">
                <input
                  type="text"
                  className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md py-0.5 pl-10 w-full"
                />
                <select className="absolute inset-y-0 right-0 opacity-0 cursor-pointer w-full">
                  <option value="" disabled hidden>
                    Select
                  </option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex items-center pl-3 w-full pt-4">
              <input type="checkbox" id="checkbox1" className="mr-2" />
              <label htmlFor="checkbox1" className="text-sm">
                Process List View
              </label>
              <input type="checkbox" id="checkbox2" className="mr-2 ml-3" />
              <label htmlFor="checkbox2" className="text-sm">
                Auto Year Change
              </label>
            </div>

            <div className="flex flex-col space-y-1 relative pr-2">
              <label className="text-xs font-bold">Search Part No.</label>
              <div className="relative w-full">
                <input
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-full"
                />
                <select className="absolute inset-y-0 right-0 opacity-0 cursor-pointer w-full">
                  <option value="" disabled hidden>
                    Select
                  </option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-2">
            <div className="flex items-center space-x-2">
              <label className="text-xs font-bold w-[70px]">Order No.</label>
              <input
                type="text"
                className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 xl:w-60"
              />
            </div>

            <div className="flex flex-col space-y-1 ml-auto pr-2">
              <div className="flex items-center space-x-2 lg:ml-auto">
                <label className="text-xs font-bold w-full xl:w-28">
                  Search OdPtCs No.
                </label>
                <input
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 xl:w-80"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-2">
            <div className="flex items-center space-x-2">
              <label className="text-xs font-bold w-[70px]">Parts No.</label>
              <input
                type="text"
                className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 xl:w-60"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-2">
            <div className="flex items-center space-x-2">
              <label className="text-xs font-bold w-[70px]">Cost No.</label>
              <input
                type="text"
                className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md py-0.5 xl:w-60"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
            <div className="flex items-center space-x-2">
              <label className="text-xs font-bold w-[75px] lg:w-[70px]">
                Process No.
              </label>
              <div className="flex items-center gap-2">
                <div className="relative sm:w-20 lg:w-20 xl:w-20">
                  <input
                    type="text"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 pl-10 w-full"
                  />
                  <select className="absolute inset-y-0 right-0 opacity-0 cursor-pointer w-full">
                    <option value="" disabled hidden>
                      Select
                    </option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                <input
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-full sm:w-[90px] lg:w-[95px] xl:w-[150px]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-1">
              <div className="mt-3 lg:mt-20 lg:mb-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-2">
                <div className="flex items-center space-x-2">
                  <label className="text-xs font-bold whitespace-nowrap">
                    Machine CD(CMC)
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="relative xl:w-28">
                      <input
                        type="text"
                        className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md py-0.5 w-full"
                      />
                      <select className="absolute inset-y-0 right-0 opacity-0 cursor-pointer w-full">
                        <option value="" disabled hidden>
                          Select
                        </option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-full xl:w-[150px]"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-2">
                <div className="flex items-center lg:space-x-8">
                  <label className="text-xs font-bold w-28 whitespace-nowrap">
                    Machine Time
                  </label>
                  <input
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 xl:w-60"
                  />
                </div>
              </div>

              <div className="lg:mb-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-2">
                <div className="flex items-center space-x-5">
                  <label className="text-xs font-bold whitespace-nowrap">
                    Worker CD(CPT)
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="relative xl:w-28">
                      <input
                        type="text"
                        className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md py-0.5 w-full"
                      />
                      <select className="absolute inset-y-0 right-0 opacity-0 cursor-pointer w-full">
                        <option value="" disabled hidden>
                          Select
                        </option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-full xl:w-[150px]"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-2">
                <div className="flex items-center lg:space-x-2">
                  <label className="text-xs font-bold w-28 whitespace-nowrap">
                    Person_Time(CPT)
                  </label>
                  <input
                    type="text"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 xl:w-60"
                  />
                </div>
              </div>

              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-2">
                <div className="flex items-center lg:space-x-9">
                  <label className="text-xs font-bold w-28 whitespace-nowrap">
                    Process_Date
                  </label>
                  <input
                    type="text"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 xl:w-60"
                  />
                </div>
              </div>

              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-2">
                <div className="flex items-center lg:space-x-2">
                  <label className="text-xs font-bold w-28 whitespace-nowrap">
                    Process_Qty(CPN)
                  </label>
                  <input
                    type="text"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 xl:w-60"
                  />
                </div>
              </div>

              <div className="lg:mb-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-2">
                <div className="flex items-center space-x-8">
                  <label className="text-xs font-bold whitespace-nowrap">
                    Cost_Progress
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="relative xl:w-28">
                      <input
                        type="text"
                        className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 w-full"
                      />
                      <select className="absolute inset-y-0 right-0 opacity-0 cursor-pointer w-full">
                        <option value="" disabled hidden>
                          Select
                        </option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 w-full xl:w-[150px]"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-2">
                <div className="flex items-center lg:space-x-6">
                  <label className="text-xs font-bold w-28 whitespace-nowrap">
                    Complete_Date
                  </label>
                  <input
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 xl:w-60"
                  />
                </div>
              </div>

              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-2">
                <div className="flex items-center lg:space-x-7">
                  <label className="text-xs font-bold w-28 whitespace-nowrap">
                    Complete_Qty
                  </label>
                  <input
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 xl:w-60"
                  />
                </div>
              </div>

              <div className="flex flex-col pl-28 pt-1 w-full">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="checkbox1"
                    className="mr-2 w-5 h-5 rounded-full"
                  />
                  <label htmlFor="checkbox1" className="text-sm">
                    Outside
                  </label>
                </div>
                <div className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    id="checkbox2"
                    className="mr-2 w-5 h-5 rounded-full"
                  />
                  <label htmlFor="checkbox2" className="text-sm">
                    Final_Complete
                  </label>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-2 mb-2">
                <div className="flex items-center">
                  <label className="text-xs font-bold w-40 xl:w-28 whitespace-nowrap">
                    Cs_Remark
                  </label>
                  <textarea
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 w-full xl:w-60"
                    rows="2"
                  />
                </div>
              </div>

              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-2">
                <div className="flex items-center lg:space-x-4">
                  <label className="text-xs font-bold w-28 whitespace-nowrap">
                    Cs_Register_Date
                  </label>
                  <input
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 xl:w-60"
                  />
                </div>
              </div>

              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-2">
                <div className="flex items-center lg:space-x-5">
                  <label className="text-xs font-bold w-28 whitespace-nowrap">
                    Cs_Modify_Date
                  </label>
                  <input
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 xl:w-60"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-2">
                <div className="flex items-center lg:space-x-9">
                  <div className="flex items-center -mt-9">
                    <label className="text-xs font-bold w-28 whitespace-nowrap">
                      Sequence_No
                    </label>
                    <input
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-20 sm:w-[182px] xl:w-[182px]"
                    />
                  </div>
                  <div className="flex items-center flex-wrap">
                    <div className="flex items-center space-x-3 pl-2 sm:pl-5 lg:pl-0">
                      <label className="text-xs font-bold w-auto whitespace-nowrap">
                        Pr_No
                      </label>
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-20 sm:w-40 xl:w-40"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mt-2 pl-2 sm:pl-5 lg:pl-0 w-full">
                      <label className="text-xs font-bold w-auto whitespace-nowrap">
                        Err_No
                      </label>
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-20 sm:w-40 xl:w-40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 p-4 flex flex-col items-start w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-2">
                <div className="flex items-center space-x-7">
                  <label className="text-xs font-bold w-28 whitespace-nowrap">
                    Costs_List QC-FG_Comp
                  </label>
                  <input
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-40 sm:w-full"
                  />
                </div>
              </div>
              <div className="overflow-x-auto w-full">
                <div className="overflow-x-auto w-full">
                  <table className="min-w-full bg-white border border-gray-300 table-auto">
                    <thead>
                      <tr>
                        {headers.map((header, index) => (
                          <th
                            key={index}
                            className="px-4 py-2 text-xs font-medium text-gray-700 border-b border-gray-300 text-left"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                  </table>
                </div>
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
  );
};

export default CostInfo;
