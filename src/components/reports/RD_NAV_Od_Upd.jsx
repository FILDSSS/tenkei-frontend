import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

export default function RD_NAV_Od_Upd() {
  const data1 = [
    {
      orderDateInput: "22/11/2023",
      customerCDInput: "P0012",
      NAV_Item_NameInput: "D4-4009 (E-301) BT BM PUNCH + CVD TRIPLE",
      material1Input: "D40",
      H_Treatment1Input: "YES",
      orderNoInpurt: "MOR2319320",
      UpdInput: "22/11/2023",
      Reg_CATInput: "Request_CAT",
      Reg_DevileryInput: "25/08/2024",
      Sales_Person_CDInput: "F266",
      NAV_Item_SizeInput: "",
      material2Input: "D40",
      H_Treatment2Input: "",
      Unit_PriceInput: "11940",
      Item_CAT: "Item_CAT",
    },
    {
      orderDateInput: "22/11/2023",
      customerCDInput: "P0012",
      NAV_Item_NameInput: "D4-4009 (E-301) BT BM PUNCH + CVD TRIPLE",
      material1Input: "D40",
      H_Treatment1Input: "YES",
      orderNoInpurt: "MOR2319320",
      UpdInput: "22/11/2023",
      Reg_CATInput: "Request_CAT",
      Reg_DevileryInput: "25/08/2024",
      Sales_Person_CDInput: "F266",
      NAV_Item_SizeInput: "",
      material2Input: "D40",
      H_Treatment2Input: "",
      Unit_PriceInput: "11940",
      Item_CAT: "Item_CAT",
    },
  ];

  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-screen mr-2 ml-2">
        <Navbar />
        <div className="flex flex-col overflow-x-auto flex-grow p-2">
          <div className="bg-white py-2">
            <div className="w-full overflow-x-auto">
              <div className="flex items-center justify-between p-1 w-full">
                <div className="flex items-start">
                  <span className="font-bold text-blue-900 w-28 text-[14px] pl-5 pt-1">
                    Product_Grp:
                  </span>
                  <div className="flex border border-black divide-x divide-black min-w-[20px] min-h-[30px] items-center">
                    <input
                      type="text"
                      className="px-[10px] py-[2px] border-black overflow-hidden text-xs w-[100px] text-center"
                      value="FTC-P1"
                      disabled
                    />
                    <input
                      type="text"
                      className="px-[10px] py-[2px] border-black overflow-hidden text-xs w-[100px] text-center"
                      value="FTC-PDS"
                      disabled
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2 mx-auto flex-shrink-0">
                  <span className="font-bold text-blue-900 text-[20px]">
                    Order Update Info List
                  </span>
                </div>

                <div className="flex items-center space-x-2 mr-5 flex-shrink-0">
                  <span className="font-bold text-blue-900 text-[14px]">
                    Create_Date:
                  </span>
                  <span className="text-[12px]">25/07/24 00:00:00</span>
                  <span className="font-bold text-blue-900 text-[14px]">
                    Page:
                  </span>
                  <span className="text-[12px]">1/1</span>
                </div>
              </div>

              <div className="flex items-start ml-20">
                <span className="font-bold text-blue-900 w-auto text-xs pl-8 pt-1">
                  Top : Before_Data
                </span>
              </div>
              <div className="flex items-start ml-20">
                <span className="font-bold text-blue-900 w-auto text-xs pl-8 pt-1">
                  Under : After_Data
                </span>
              </div>
            </div>
          </div>
          <div className="container mx-auto min-w-full">
            <div className="overflow-x-auto max-h-[70vh]">
              <table className="min-w-full bg-white border border-solid border-[#000080]">
                <tbody>
                  {data1.map((row, index) => (
                    <React.Fragment key={index}>
                      <tr className="text-center text-[12px] bg-white">
                        <td
                          className="py-1 px-10 text-center text-blue-800 font-bold"
                          align="left"
                        >
                          <span>Order_No</span>
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Order_Date</span>
                        </td>
                        <td align="left">
                          <input
                            type="text"
                            value={row.orderDateInput}
                            className="ml-1 bg-transparent text-center w-[80px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="text-blue-800 font-bold text-right relative"
                          style={{ right: "-60px" }}
                        >
                          <span>Customer_CD</span>
                        </td>
                        <td align="right">
                          <input
                            type="text"
                            value={row.customerCDInput}
                            className="ml-1 bg-transparent text-center w-[70px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>NAV_Item_Name</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={row.NAV_Item_NameInput}
                            className="ml-1 pl-1 bg-transparent text-left w-[300px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Material1</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={row.material1Input}
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>H_Treatment1</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={row.H_Treatment1Input}
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                      </tr>

                      <tr className="text-center text-[12px] bg-white">
                        <td>
                          <input
                            type="text"
                            value={row.orderNoInpurt}
                            className="ml-1 bg-transparent text-center text-xs font-bold w-[120px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Upd</span>
                        </td>
                        <td align="left">
                          <input
                            type="text"
                            value={row.UpdInput}
                            className="ml-1 bg-transparent text-center w-[80px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="text-blue-800 font-bold text-right relative"
                          style={{ right: "-60px" }}
                        >
                          <span>Upd</span>
                        </td>
                        <td align="right">
                          <input
                            type="text"
                            value={row.customerCDInput}
                            className="ml-1 bg-transparent text-center w-[70px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Upd</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={row.NAV_Item_NameInput}
                            className="ml-1 pl-1 bg-transparent text-left w-[300px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Upd</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={row.material1Input}
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Upd</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={row.H_Treatment1Input}
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                      </tr>

                      <tr className="text-center text-[12px] bg-white">
                        <td>
                          <input
                            type="text"
                            value={row.Reg_CATInput}
                            className="ml-1 bg-transparent text-center text-blue-800 font-bold w-[120px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Reg_Devilery</span>
                        </td>
                        <td align="left">
                          <input
                            type="text"
                            value={row.Reg_DevileryInput}
                            className="ml-1 bg-transparent text-center w-[80px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="text-blue-800 font-bold text-right relative"
                          style={{ right: "-60px" }}
                        >
                          <span>Sales_Person_CD</span>
                        </td>
                        <td align="right">
                          <input
                            type="text"
                            value="F266"
                            className="ml-1 bg-transparent text-center w-[70px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>NAV_Item_Size</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value=""
                            className="ml-1 pl-1 bg-transparent text-left w-[300px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Material2</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value=""
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>H_Treatment2</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value=""
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                      </tr>

                      <tr className="text-center text-[12px] bg-white">
                        <td className="flex pl-[9.3px]">
                          <input
                            type="text"
                            value="1"
                            className="bg-transparent text-center text-blue-800 font-bold w-[40px] border border-black rounded-sm"
                            disabled
                          />
                          <input
                            type="text"
                            value="2"
                            className="bg-transparent text-center text-blue-800 font-bold w-[40px] border border-black rounded-sm"
                            disabled
                          />
                          <input
                            type="text"
                            value="3"
                            className="bg-transparent text-center text-blue-800 font-bold w-[40px] border border-black rounded-sm"
                            disabled
                          />
                        </td>

                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Upd</span>
                        </td>
                        <td align="left">
                          <input
                            type="text"
                            value={row.Reg_DevileryInput}
                            className="ml-1 bg-transparent text-center w-[80px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="text-blue-800 font-bold text-right relative"
                          style={{ right: "-60px" }}
                        >
                          <span>Upd</span>
                        </td>
                        <td align="right">
                          <input
                            type="text"
                            value="F266"
                            className="ml-1 bg-transparent text-center w-[70px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Upd</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value=""
                            className="ml-1 pl-1 bg-transparent text-left w-[300px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Upd</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value=""
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Upd</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value=""
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                      </tr>

                      <tr className="text-center text-[12px] bg-white">
                        <td className="flex pl-[9.3px]">
                          <input
                            type="text"
                            value="1"
                            className="bg-transparent text-center text-black font-bold w-[40px] border border-black rounded-sm"
                            disabled
                          />
                          <input
                            type="text"
                            value=""
                            className="bg-transparent text-center text-black font-bold w-[40px] border border-black rounded-sm"
                            disabled
                          />
                          <input
                            type="text"
                            value=""
                            className="bg-transparent text-center text-black font-bold w-[40px] border border-black rounded-sm"
                            disabled
                          />
                        </td>

                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>NAV_Upd_Date</span>
                        </td>
                        <td align="left">
                          <input
                            type="text"
                            value="25/11/2024 10:10:10"
                            className="ml-1 pl-2 bg-transparent text-left w-[150px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="text-blue-800 font-bold text-right relative"
                          style={{ right: "-60px" }}
                        >
                          <span>Unit_Price</span>
                        </td>
                        <td align="right">
                          <input
                            type="text"
                            value="11940"
                            className="ml-1 pr-1 bg-transparent text-right w-[70px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Customer_Draw</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value="DI-4009-B"
                            className="ml-1 pl-1 bg-transparent text-left w-[300px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Material3</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value=""
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>H_Treatment3</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value=""
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                      </tr>

                      <tr className="text-center text-[12px] bg-white">
                        <td className="flex pl-[9.3px]">
                          <input
                            type="text"
                            value="1"
                            className="bg-transparent text-center text-black font-bold w-[40px] border border-black rounded-sm"
                            disabled
                          />
                          <input
                            type="text"
                            value=""
                            className="bg-transparent text-center text-black font-bold w-[40px] border border-black rounded-sm"
                            disabled
                          />
                          <input
                            type="text"
                            value=""
                            className="bg-transparent text-center text-black font-bold w-[40px] border border-black rounded-sm"
                            disabled
                          />
                        </td>

                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Upd</span>
                        </td>
                        <td align="left">
                          <input
                            type="text"
                            value="25/11/2024 10:10:10 A"
                            className="ml-1 pl-2 bg-transparent text-left w-[150px] border border-black rounded-sm bg-yellow-400"
                            disabled
                          />
                        </td>
                        <td
                          className="text-blue-800 font-bold text-right relative"
                          style={{ right: "-60px" }}
                        >
                          <span>Upd</span>
                        </td>
                        <td align="right">
                          <input
                            type="text"
                            value="11940"
                            className="ml-1 pr-1 bg-transparent text-right w-[70px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Upd</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value="DI-4009-B"
                            className="ml-1 pl-1 bg-transparent text-left w-[300px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Upd</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value=""
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Upd</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value=""
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                      </tr>

                      <tr className="text-center text-[12px] bg-white">
                        <td>
                          <input
                            type="text"
                            value="Item_CAT"
                            className="ml-1 bg-transparent text-center text-blue-800 font-bold w-[120px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="text-blue-800 font-bold text-right relative"
                          style={{ right: "-190px" }}
                        >
                          <span>Quantity</span>
                        </td>
                        <td
                          className="text-black text-right relative"
                          style={{ right: "-120px" }}
                        >
                          <input
                            type="text"
                            value="20"
                            className="ml-1 pr-1 bg-transparent text-right w-[80px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="text-blue-800 font-bold text-right relative"
                          style={{ right: "-100px" }}
                        >
                          <span>Unit_CD</span>
                        </td>
                        <td align="right">
                          <input
                            type="text"
                            value="2"
                            className="ml-1 bg-transparent text-center w-[30px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>NAV_Item_Size</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value=""
                            className="ml-1 pl-1 bg-transparent text-left w-[300px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Material2</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value=""
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>H_Treatment2</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value=""
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                      </tr>

                      <tr className="text-center text-[12px] bg-white">
                        <td className="flex pl-[9.3px]">
                          <input
                            type="text"
                            value="1"
                            className="bg-transparent text-center text-blue-800 font-bold w-[30px] border border-black rounded-sm"
                            disabled
                          />
                          <input
                            type="text"
                            value="2"
                            className="bg-transparent text-center text-blue-800 font-bold w-[30px] border border-black rounded-sm"
                            disabled
                          />
                          <input
                            type="text"
                            value="3"
                            className="bg-transparent text-center text-blue-800 font-bold w-[30px] border border-black rounded-sm"
                            disabled
                          />
                          <input
                            type="text"
                            value="4"
                            className="bg-transparent text-center text-blue-800 font-bold w-[30px] border border-black rounded-sm"
                            disabled
                          />
                        </td>

                        <td
                          className="text-blue-800 font-bold text-right relative"
                          style={{ right: "-190px" }}
                        >
                          <span>Upd</span>
                        </td>
                        <td
                          className="text-black text-right relative"
                          style={{ right: "-120px" }}
                        >
                          <input
                            type="text"
                            value={row.Reg_DevileryInput}
                            className="ml-1 bg-transparent text-center w-[80px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="text-blue-800 font-bold text-right relative"
                          style={{ right: "-100px" }}
                        >
                          <span>Upd</span>
                        </td>
                        <td align="right">
                          <input
                            type="text"
                            value="2"
                            className="ml-1 bg-transparent text-center w-[30px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Upd</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value=""
                            className="ml-1 pl-1 bg-transparent text-left w-[300px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Upd</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value=""
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Upd</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value=""
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                      </tr>

                      <tr className="text-center text-[12px] bg-white">
                        <td className="flex pl-[9.3px]">
                          <input
                            type="text"
                            value=""
                            className="bg-transparent text-center text-black font-bold w-[30px] border border-black rounded-sm"
                            disabled
                          />
                          <input
                            type="text"
                            value=""
                            className="bg-transparent text-center text-black font-bold w-[30px] border border-black rounded-sm"
                            disabled
                          />
                          <input
                            type="text"
                            value=""
                            className="bg-transparent text-center text-black font-bold w-[30px] border border-black rounded-sm"
                            disabled
                          />
                          <input
                            type="text"
                            value=""
                            className="bg-transparent text-center text-black font-bold w-[30px] border border-black rounded-sm"
                            disabled
                          />
                        </td>

                        <td
                          className="text-blue-800 font-bold text-right"
                          colSpan="3"
                        >
                          <span>Tolerance</span>
                        </td>
                        <td align="left">
                          <input
                            type="text"
                            value="DRAWING"
                            className="ml-1 pl-1 bg-transparent text-left w-[130px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Coating</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value="CVD TRIPLE"
                            className="ml-1 pl-1 bg-transparent text-left w-[300px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Material5</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value=""
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>H_Treatment5</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value=""
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                      </tr>

                      <tr className="text-center text-[12px] bg-white border-b-4 border-blue-800">
                        <td className="flex pl-[9.3px]">
                          <input
                            type="text"
                            value=""
                            className="bg-transparent text-center text-black font-bold w-[30px] border border-black rounded-sm"
                            disabled
                          />
                          <input
                            type="text"
                            value=""
                            className="bg-transparent text-center text-black font-bold w-[30px] border border-black rounded-sm"
                            disabled
                          />
                          <input
                            type="text"
                            value=""
                            className="bg-transparent text-center text-black font-bold w-[30px] border border-black rounded-sm"
                            disabled
                          />
                          <input
                            type="text"
                            value=""
                            className="bg-transparent text-center text-black font-bold w-[30px] border border-black rounded-sm"
                            disabled
                          />
                        </td>

                        <td
                          className="text-blue-800 font-bold text-right"
                          colSpan="3"
                        >
                          <span>Upd</span>
                        </td>
                        <td align="left">
                          <input
                            type="text"
                            value="DRAWING"
                            className="ml-1 pl-1 bg-transparent text-left w-[130px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Upd</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value="CVD TRIPLE"
                            className="ml-1 pl-1 bg-transparent text-left w-[300px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Upd</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value=""
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Upd</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value=""
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
