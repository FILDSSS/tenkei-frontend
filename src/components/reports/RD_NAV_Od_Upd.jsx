import React from "react";
// import Navbar from "../Navbar";
// import Sidebar from "../Sidebar";
import { useLocation, useNavigate } from "react-router-dom";

const HighlightedInput = ({ oldValue, newValue, className = "", ...props }) => {
  const isChanged = oldValue !== newValue;
  return (
    <input
      {...props}
      value={props.value}
      className={`${className} ${isChanged ? 'bg-yellow-400' : 'bg-transparent'}`}
      disabled
    />
  );
};

export default function RD_NAV_Od_Upd() {
  const navigate=useNavigate();
    const location = useLocation();
    const data = location.state;
    console.log(data);

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0"); // เดือนเริ่มจาก 0
      const year = date.getFullYear();
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
    
      return `${day}/${month}/${year} ${hours}:${minutes}`;
    };
    const isValueChanged = (oldValue, newValue) => {
      return oldValue !== newValue;
    };

  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      
      <div className="flex flex-col w-screen mr-2 ml-2">
       
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
              
              <table className="min-w-full bg-white border border-solid border-[#000080] ">
                <tbody>
                {data.map(({updated,old}=row, index) => (
                  
                    <React.Fragment key={index}>
                        <span>Order_No {index + 1}</span>
                 
                     <div>
                      <tr className="text-center text-[12px] bg-white ">
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
                            value={formatDate(old[index].existingOrder.Order_Date)}
                            className="ml-1 bg-transparent text-center w-[120px] border border-black rounded-sm"
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
                            value={old[index].existingOrder.Customer_CD}
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
                            value={old[index].existingOrder.NAV_Name}
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
                            value={old[index].existingOrder.Material1}
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
                            value={old[index].existingOrder.H_Treatment1}
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                      </tr>
                    
                      <tr className="text-center text-[12px] bg-white">
                        <td>
                          <input
                            type="text"
                            value={old[index].existingOrder.Order_No}
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
                            value={formatDate(updated[index].updatedOrder.Order_Date)}
                            className={`ml-1 bg-transparent text-center w-[120px] border border-black rounded-sm ${
                              isValueChanged(
                                old[index].existingOrder.Order_Date,
                                updated[index].updatedOrder.Order_Date
                              )
                                ? 'bg-yellow-400'
                                : 'bg-transparent'
                            }`}
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
                            value={updated[index].updatedOrder.Customer_CD}
                            className={`bg-transparent text-center text-black font-bold w-[70px] border border-black rounded-sm ${
                              isValueChanged(
                                old[index].existingOrder.Customer_CD,
                                updated[index].updatedOrder.Customer_CD
                              )
                                ? 'bg-yellow-400'
                                : 'bg-transparent'
                            }`}
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
                            value={updated[index].updatedOrder.NAV_Name}
                            className={`ml-1 pl-1 bg-transparent text-left w-[300px] text-black font-bold border border-black rounded-sm"  ${
                              isValueChanged(
                                old[index].existingOrder.NAV_Name,
                                updated[index].updatedOrder.NAV_Name
                              )
                                ? 'bg-yellow-400'
                                : 'bg-transparent'
                            }`}
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
                            value={updated[index].updatedOrder.Material1}
                            className={`ml-1 pl-1 bg-transparent text-left w-[100px] text-black font-bold border border-black rounded-sm ${
                              isValueChanged(
                                old[index].existingOrder.Material1,
                                updated[index].updatedOrder.Material1
                              )
                                ? 'bg-yellow-400'
                                : 'bg-transparent'
                            }`}
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
                            value={updated[index].updatedOrder.H_Treatment1}
                            className={`ml-1 pl-1 bg-transparent text-left w-[100px] text-black font-bold border border-black rounded-sm ${
                              isValueChanged(
                                old[index].existingOrder.H_Treatment1,
                                updated[index].updatedOrder.H_Treatment1
                              )
                                ? 'bg-yellow-400'
                                : 'bg-transparent'
                            }`}
                            disabled
                          />
                        </td>
                      </tr>

                      <tr className="text-center text-[12px] bg-white">
                        <td>
                          <input
                            type="text"
                            value="Request_CAT"
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
                            value={formatDate(old[index].existingOrder.Request_Delivery)}
                            className="ml-1 bg-transparent text-center w-[120px] border border-black rounded-sm"
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
                            value={old[index].existingOrder.Sales_Person_CD}
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
                            value={old[index].existingOrder.NAV_Size}
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
                            value={old[index].existingOrder.Material2}
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
                            value={old[index].existingOrder.H_Treatment2}
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                      </tr>

                      <tr className="text-center text-[12px] bg-white">
                        <td className="flex pl-[18px]">
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
                            value={formatDate(updated[index].updatedOrder.Request_Delivery)}
                            className={`ml-1 pl-1 bg-transparent text-left w-[120px] text-black font-bold border border-black rounded-sm ${
                              isValueChanged(
                                old[index].existingOrder.Request_Delivery,
                                updated[index].updatedOrder.Request_Delivery
                              )
                                ? 'bg-yellow-400'
                                : 'bg-transparent'
                            }`}
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
                            value={updated[index].updatedOrder.Sales_Person_CD}
                            className={`ml-1 pl-1 bg-transparent text-left w-[70px] text-black font-bold border border-black rounded-sm ${
                              isValueChanged(
                                old[index].existingOrder.Sales_Person_CD,
                                updated[index].updatedOrder.Sales_Person_CD
                              )
                                ? 'bg-yellow-400'
                                : 'bg-transparent'
                            }`}
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
                            value={updated[index].updatedOrder.NAV_Size}
                            className={`ml-1 pl-1 bg-transparent text-left w-[300px] text-black font-bold border border-black rounded-sm ${
                              isValueChanged(
                                old[index].existingOrder.NAV_Size,
                                updated[index].updatedOrder.NAV_Size
                              )
                                ? 'bg-yellow-400'
                                : 'bg-transparent'
                            }`}
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
                            value={updated[index].updatedOrder.Material2}
                            className={`ml-1 pl-1 bg-transparent text-left w-[100px] text-black font-bold border border-black rounded-sm ${
                              isValueChanged(
                                old[index].existingOrder.Material2,
                                updated[index].updatedOrder.Material2
                              )
                                ? 'bg-yellow-400'
                                : 'bg-transparent'
                            }`}
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
                            value={updated[index].updatedOrder.H_Treatment2}
                            className={`ml-1 pl-1 bg-transparent text-left w-[100px] text-black font-bold border border-black rounded-sm ${
                              isValueChanged(
                                old[index].existingOrder.H_Treatment2,
                                updated[index].updatedOrder.H_Treatment2
                              )
                                ? 'bg-yellow-400'
                                : 'bg-transparent'
                            }`}
                            disabled
                          />
                        </td>
                      </tr>

                      <tr className="text-center text-[12px] bg-white">
                        <td className="flex pl-[18px]">
                          <input
                            type="text"
                            value={old[index].existingOrder.Request1_CD}
                            className="bg-transparent text-center text-black font-bold w-[40px] border border-black rounded-sm"
                            disabled
                          />
                          <input
                            type="text"
                            value={old[index].existingOrder.Request2_CD}
                            className="bg-transparent text-center text-black font-bold w-[40px] border border-black rounded-sm"
                            disabled
                          />
                          <input
                            type="text"
                            value={old[index].existingOrder.Request3_CD}
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
                            value={formatDate(old[index].existingOrder.Od_NAV_Upd_Date)}
                            className="ml-1 pl-1 bg-transparent text-left w-[120px] border border-black rounded-sm"
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
                            value={old[index].existingOrder.Unit_Price}
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
                            value={old[index].existingOrder.Customer_Draw}
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
                            value={old[index].existingOrder.Material3}
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
                            value={old[index].existingOrder.H_Treatment2}
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                      </tr>

                      <tr className="text-center text-[12px] bg-white">
                        <td className="flex pl-[18px]">
                          <input
                            type="text"
                            value={updated[index].updatedOrder.Request1_CD}
                            className={`bg-transparent text-center text-black font-bold w-[40px] border border-black rounded-sm ${
                              isValueChanged(
                                old[index].existingOrder.Request1_CD,
                                updated[index].updatedOrder.Request1_CD
                              )
                                ? 'bg-yellow-400'
                                : 'bg-transparent'
                            }`}
                            disabled
                          />
                          <input
                            type="text"
                            value={updated[index].updatedOrder.Request2_CD}
                            className={`bg-transparent text-center text-black font-bold w-[40px] border border-black rounded-sm ${
                              isValueChanged(
                                old[index].existingOrder.Request2_CD,
                                updated[index].updatedOrder.Request2_CD
                              )
                                ? 'bg-yellow-400'
                                : 'bg-transparent'
                            }`}
                            disabled
                          />
                          <input
                            type="text"
                            value={updated[index].updatedOrder.Request3_CD}
                            className={`bg-transparent text-center text-black font-bold w-[40px] border border-black rounded-sm ${
                              isValueChanged(
                                old[index].existingOrder.Request3_CD,
                                updated[index].updatedOrder.Request3_CD
                              )
                                ? 'bg-yellow-400'
                                : 'bg-transparent'
                            }`}
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
                            value={formatDate(updated[index].updatedOrder.Od_NAV_Upd_Date)}
                            className={`ml-1 pl-1 bg-transparent text-left w-[120px] text-black font-bold border border-black rounded-sm ${
                              isValueChanged(
                                old[index].existingOrder.Od_NAV_Upd_Date,
                                updated[index].updatedOrder.Od_NAV_Upd_Date
                              )
                                ? 'bg-yellow-400'
                                : 'bg-transparent'
                            }`}
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
                          value={updated[index].updatedOrder.Unit_Price}
                          className={`ml-1 pl-1 bg-transparent text-left w-[70px] text-black font-bold border border-black rounded-sm ${
                            isValueChanged(
                              old[index].existingOrder.Unit_Price,
                              updated[index].updatedOrder.Unit_Price
                            )
                              ? 'bg-yellow-400'
                              : 'bg-transparent'
                          }`}
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
                            value={updated[index].updatedOrder.Customer_Draw}
                            className={`ml-1 pl-1 bg-transparent text-left w-[300px] text-black font-bold border border-black rounded-sm ${
                              isValueChanged(
                                old[index].existingOrder.Customer_Draw,
                                updated[index].updatedOrder.Customer_Draw
                              )
                                ? 'bg-yellow-400'
                                : 'bg-transparent'
                            }`}
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
                            value={updated[index].updatedOrder.Material3}
                            className={`ml-1 pl-1 bg-transparent text-left w-[100px] text-black font-bold border border-black rounded-sm ${
                              isValueChanged(
                                old[index].existingOrder.Material3,
                                updated[index].updatedOrder.Material3
                              )
                                ? 'bg-yellow-400'
                                : 'bg-transparent'
                            }`}
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
                            value={updated[index].updatedOrder.H_Treatment3}
                            className={`ml-1 pl-1 bg-transparent text-left w-[100px] text-black font-bold border border-black rounded-sm ${
                              isValueChanged(
                                old[index].existingOrder.H_Treatment3,
                                updated[index].updatedOrder.H_Treatment3
                              )
                                ? 'bg-yellow-400'
                                : 'bg-transparent'
                            }`}
                            disabled
                          />
                        </td>
                      </tr>

                      <tr className="text-center text-[12px] bg-white">
                        <td >
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
                            value={old[index].existingOrder.Quantity}
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
                            value={old[index].existingOrder.Unit_CD}
                            className="ml-1 bg-transparent text-center w-[30px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Company_Draw</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={old[index].existingOrder.Company_Draw}
                            className="ml-1 pl-1 bg-transparent text-left w-[300px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Material4</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={old[index].existingOrder.Material4}
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>H_Treatment4</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={old[index].existingOrder.H_Treatment4}
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                      </tr>

                      <tr className="text-center text-[12px] bg-white">
                        <td className="flex pl-[18px]">
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
                            value={updated[index].updatedOrder.Quantity}
                            className={`ml-1 pr-1 bg-transparent text-right w-[80px] text-black font-bold border border-black rounded-sm ${
                              isValueChanged(
                                old[index].existingOrder.Quantity,
                                updated[index].updatedOrder.Quantity
                              )
                                ? 'bg-yellow-400'
                                : 'bg-transparent'
                            }`}
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
                            value={updated[index].updatedOrder.Unit_CD}
                            className={`ml-1  bg-transparent text-center w-[30px] text-black font-bold border border-black rounded-sm ${
                              isValueChanged(
                                old[index].existingOrder.Unit_CD,
                                updated[index].updatedOrder.Unit_CD
                              )
                                ? 'bg-yellow-400'
                                : 'bg-transparent'
                            }`}
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
                            value={updated[index].updatedOrder.Company_Draw}
                            className={`ml-1  bg-transparent text-center w-[300px] text-black font-bold border border-black rounded-sm ${
                              isValueChanged(
                                old[index].existingOrder.Company_Draw,
                                updated[index].updatedOrder.Company_Draw
                              )
                                ? 'bg-yellow-400'
                                : 'bg-transparent'
                            }`}
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
                            value={updated[index].updatedOrder.Material4}
                            className={`ml-1  bg-transparent text-center w-[100px] text-black font-bold border border-black rounded-sm ${
                              isValueChanged(
                                old[index].existingOrder.Material4,
                                updated[index].updatedOrder.Material4
                              )
                                ? 'bg-yellow-400'
                                : 'bg-transparent'
                            }`}
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
                            value={updated[index].updatedOrder.H_Treatment4}
                            className={`ml-1  bg-transparent text-center w-[100px] text-black font-bold border border-black rounded-sm ${
                              isValueChanged(
                                old[index].existingOrder.H_Treatment4,
                                updated[index].updatedOrder.H_Treatment4
                              )
                                ? 'bg-yellow-400'
                                : 'bg-transparent'
                            }`}
                            disabled
                          />
                        </td>
                      </tr>

                      <tr className="text-center text-[12px] bg-white">
                        <td className="flex pl-[18px]">
                          <input
                            type="text"
                            value={old[index].existingOrder.Item1_CD}
                            className="bg-transparent text-center text-black font-bold w-[30px] border border-black rounded-sm"
                            disabled
                          />
                         
                          <input
                            type="text"
                            value={old[index].existingOrder.Item2_CD}
                            className="bg-transparent text-center text-black font-bold w-[30px] border border-black rounded-sm"
                            disabled
                          />
                          <input
                            type="text"
                            value={old[index].existingOrder.Item3_CD}
                            className="bg-transparent text-center text-black font-bold w-[30px] border border-black rounded-sm"
                            disabled
                          />
                          <input
                            type="text"
                            value={old[index].existingOrder.Item4_CD}
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
                            value={old[index].existingOrder.Tolerance}
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
                            value={old[index].existingOrder.Coating}
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
                            value={old[index].existingOrder.Material5}
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
                            value={old[index].existingOrder.H_Treatment5}
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                      </tr>

                      <tr className="text-center text-[12px] bg-white border-b-4 border-blue-800">
                        <td className="flex pl-[18px]">
                         
                          <input
                            type="text"
                            value={updated[index].updatedOrder.Item1_CD}
                            className={`bg-transparent text-center text-black font-bold w-[30px] border border-black rounded-sm ${
                              isValueChanged(
                                old[index].existingOrder.Item1_CD,
                                updated[index].updatedOrder.Item1_CD
                              )
                                ? 'bg-yellow-400'
                                : 'bg-transparent'
                            }`}
                            disabled
                          />
                          <input
                            type="text"
                            value={updated[index].updatedOrder.Item2_CD}
                            className={`bg-transparent text-center text-black font-bold w-[30px] border border-black rounded-sm ${
                              isValueChanged(
                                old[index].existingOrder.Item2_CD,
                                updated[index].updatedOrder.Item2_CD
                              )
                                ? 'bg-yellow-400'
                                : 'bg-transparent'
                            }`}
                            disabled
                          />
                          <input
                            type="text"
                            value={updated[index].updatedOrder.Item3_CD}
                            className={`bg-transparent text-center text-black font-bold w-[30px] border border-black rounded-sm ${
                              isValueChanged(
                                old[index].existingOrder.Item3_CD,
                                updated[index].updatedOrder.Item3_CD
                              )
                                ? 'bg-yellow-400'
                                : 'bg-transparent'
                            }`}
                            disabled
                          />
                          <input
                            type="text"
                            value={updated[index].updatedOrder.Item4_CD}
                            className={`bg-transparent text-center text-black font-bold w-[30px] border border-black rounded-sm ${
                              isValueChanged(
                                old[index].existingOrder.Item4_CD,
                                updated[index].updatedOrder.Item4_CD
                              )
                                ? 'bg-yellow-400'
                                : 'bg-transparent'
                            }`}
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
                            value={updated[index].updatedOrder.Tolerance}
                            className={`ml-1 pl-1 bg-transparent text-left w-[130px] text-black font-bold border border-black rounded-sm ${
                              isValueChanged(
                                old[index].existingOrder.Tolerance,
                                updated[index].updatedOrder.Tolerance
                              )
                                ? 'bg-yellow-400'
                                : 'bg-transparent'
                            }`}
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
                            value={updated[index].updatedOrder.Coating}
                            className={`ml-1 pl-1 bg-transparent text-left w-[300px] text-black font-bold border border-black rounded-sm ${
                              isValueChanged(
                                old[index].existingOrder.Coating,
                                updated[index].updatedOrder.Coating
                              )
                                ? 'bg-yellow-400'
                                : 'bg-transparent'
                            }`}
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
                            value={updated[index].updatedOrder.Material5}
                            className={`ml-1 pl-1 bg-transparent text-left w-[100px] text-black font-bold border border-black rounded-sm ${
                              isValueChanged(
                                old[index].existingOrder.Material5,
                                updated[index].updatedOrder.Material5
                              )
                                ? 'bg-yellow-400'
                                : 'bg-transparent'
                            }`}
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
                            value={updated[index].updatedOrder.H_Treatment5}
                            className={`ml-1 pl-1 bg-transparent text-left w-[100px] text-black font-bold border border-black rounded-sm ${
                              isValueChanged(
                                old[index].existingOrder.H_Treatment5,
                                updated[index].updatedOrder.H_Treatment5
                              )
                                ? 'bg-yellow-400'
                                : 'bg-transparent'
                            }`}
                            disabled
                          />
                        </td>
                      </tr>
                      </div>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex items-center justify-center  mt-5 ">
            <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-[150px] flex justify-center" onClick={()=>navigate(-1)}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
