import React, { useState, useEffect } from "react";
import { useOrder } from "../hooks/use-order";
import { usePurchase } from "../hooks/use-purchase";
import { usePlan } from "../hooks/use-plan";

export default function PlanInfo() {
  const [searchOrderNo, setSearchOrderNo] = useState("");
  const [autoYearChange, setAutoYearChange] = useState(false);
  const { orderData, searchOrderData, setOrderData } = useOrder();
  const { purchaseData, setPurchaseData } = usePurchase();
  const { planData, setPlanData } = usePlan();

  const handleInputChange = (event, isPurchase, isPlan = false) => {
    const { id, value, type, checked } = event.target;

    if (isPurchase) {
      setPurchaseData((prevPurchaseData) => ({
        ...prevPurchaseData,
        [id]: type === "checkbox" ? checked : value === "" ? null : value,
      }));
    } else if (isPlan) {
      setPlanData((prevOrderData) => ({
        ...prevOrderData,
        [id]: type === "checkbox" ? checked : value === "" ? null : value,
      }));
    } else {
      setOrderData((prevOrderData) => ({
        ...prevOrderData,
        [id]: type === "checkbox" ? checked : value === "" ? null : value,
      }));
    }

    if (id === "Search_Order_No") {
      setSearchOrderNo(value);
      if (value) {
        searchOrderData(value);
      }
    }
  };

  const handlePlanInputChange = async (event) => {
    const { id, value, type, checked } = event.target;

    // อัปเดต purchaseData ตามค่าที่ผู้ใช้กรอก
    setPlanData((prevPlanData) => ({
      ...prevPlanData,
      [id]: type === "checkbox" ? checked : value === "" ? null : value,
    }));
  };

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="flex justify-between items-center gap-2 mx-5 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full">
          {[
            {
              label: "Search_Order_No",
              type: "text",
              id: "Search_Order_No",
              value: searchOrderNo,
              onChange: handleInputChange,
            },
            { label: "Search_Parts_No", type: "select", id: "Search_Parts_No" },
            {
              label: "Search_OdPt_No",
              type: "text",
              id: "Search_OdPt_No",
              disabled: true,
            },
            { label: "Order_No", type: "text", id: "Order_No", disabled: true },
            { label: "OdPt_No", type: "text", id: "OdPt_No", disabled: true },
          ].map((field, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-2 items-center sm:col-span-1 lg:col-span-1"
            >
              <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/3 md:w-1/4 lg:w-36">
                {field.label}
              </label>
              <div className="w-full sm:w-2/3 md:w-3/4 lg:w-4/5">
                {field.type === "select" ? (
                  <select
                    id={field.id}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#cbfefe] w-full"
                  >
                    <option value="">ไม่มีข้อมูล</option>
                  </select>
                ) : (
                  <input
                    id={field.id}
                    type={field.type}
                    value={field.value}
                    onChange={field.onChange}
                    disabled={field.disabled}
                    className="bg-[#cbfefe] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                )}
              </div>
            </div>
          ))}

          <div className="flex flex-col sm:flex-row gap-2 items-center sm:col-span-2 lg:col-span-5">
            <button
              type="button"
              className="text-white bg-[#D7003A] hover:bg-[#B60032] focus:ring-2 focus:outline-none focus:ring-[#B60032] font-medium rounded-md text-xs px-2 py-1 w-full sm:w-auto"
            >
              PP
            </button>
            <button
              type="button"
              className="text-white bg-[#FFD900] hover:bg-[#E5C700] focus:ring-2 focus:outline-none focus:ring-[#E5C700] font-medium rounded-md text-xs px-2 py-1 w-full sm:w-auto"
            >
              PD
            </button>
            <button
              type="button"
              className="text-white bg-[#0073B6] hover:bg-[#005A8D] focus:ring-2 focus:outline-none focus:ring-[#005A8D] font-medium rounded-md text-xs px-2 py-1 w-full sm:w-auto"
            >
              RD
            </button>
            <button
              type="button"
              className="text-white bg-[#D7003A] hover:bg-[#B60032] focus:ring-2 focus:outline-none focus:ring-[#B60032] font-medium rounded-md text-xs px-2 py-1 w-full sm:w-auto"
            >
              GRAPH
            </button>
            <button
              type="button"
              className="text-white bg-[#FFD900] hover:bg-[#E5C700] focus:ring-2 focus:outline-none focus:ring-[#E5C700] font-medium rounded-md text-xs px-2 py-1 w-full sm:w-auto"
            >
              LIST
            </button>

            <div className="flex gap-2 items-center w-full sm:w-auto">
              <input
                id="Auto_Year_Change"
                checked={autoYearChange}
                onChange={() => setAutoYearChange(!autoYearChange)}
                type="checkbox"
                className="w-6 h-6"
              />
              <label
                htmlFor="Auto_Year_Change"
                className="whitespace-nowrap text-xs sm:text-xs lg:text-lg"
              >
                Auto Year Change Group
              </label>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 items-center sm:col-span-2 lg:col-span-5">
            <div className="flex gap-2 items-center w-full sm:w-auto">
              <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
                Target_PrG
              </label>
              <select
                id="Target_PrG"
                value={planData?.Target_PrG}
                onChange={handleInputChange}
                className="border-gray-500 border-solid border-2 rounded-md bg-[#cbfefe] w-full"
              >
                <option value="">ไม่มีข้อมูล</option>
              </select>
            </div>
            <div className="flex gap-2 items-center w-full sm:w-auto">
              <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
                Target_Date
              </label>
              <input
                id="Tg_St_Pl_Date"
                className="bg-[#cbfefe] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
              />
            </div>

            <label className="whitespace-nowrap text-xs sm:text-xs lg:text-lg">
              ～
            </label>
            <input
              id="Tg_Ed_Pl_Date"
              className="bg-[#cbfefe] border-solid border-2 border-gray-500 rounded-md px-1 w-full sm:w-auto"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-2 items-center sm:col-span-2 lg:col-span-5">
            <label className="font-medium text-xs sm:text-sm md:text-base w-full  lg:w-96">
              Order_Info
            </label>
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Od_No
            </label>
            <input
              disabled
              id="Od_No"
              value={orderData?.Order_No || ""}
              onChange={handleInputChange}
              className="bg-[#999999] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />

            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Product_Grp
            </label>
            <select
              id="Product_Grp_CD"
              value={orderData?.Product_Grp_CD || ""}
              onChange={handleInputChange}
              className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
            >
              <option value="">ไม่มีข้อมูล</option>
              {Array.isArray(orderData?.Product_Grp_CD) &&
                orderData.Product_Grp_CD.map((group, index) => (
                  <option key={index} value={group.value}>
                    {group.label}
                  </option>
                ))}
            </select>
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Mate1
            </label>
            <input
              disabled
              id="Material1"
              value={orderData?.Material1 || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <input
              disabled
              id="H_Treatment1"
              value={orderData?.H_Treatment1 || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-2 items-center sm:col-span-2 lg:col-span-5">
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-26">
              PO No
            </label>
            <input
              disabled
              id="Od_No_of_Custom"
              value={orderData?.Od_No_of_Custom || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-26">
              Od_Ctl_Person
            </label>
            <select
              id="Od_Ctl_Person_CD"
              value={orderData?.Od_Ctl_Person_CD || ""}
              onChange={handleInputChange}
              className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
            >
              <option value="">ไม่มีข้อมูล</option>
              {Array.isArray(orderData?.Od_Ctl_Person_CD) &&
                orderData.Od_Ctl_Person_CD.map((group, index) => (
                  <option key={index} value={group.value}>
                    {group.label}
                  </option>
                ))}
            </select>
            <input
              disabled
              id="Od_Ctl_Person_Name"
              value={orderData?.Od_Ctl_Person_Name || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-26">
              Sales
            </label>
            <input
              disabled
              id="Sales_Person_Name"
              value={orderData?.Od_Ctl_Person_Name || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-26">
              Specific
            </label>
            <select
              id="Specific_CD"
              value={orderData?.Specific_CD || ""}
              onChange={handleInputChange}
              className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
            >
              <option value="">ไม่มีข้อมูล</option>
              {Array.isArray(orderData?.Specific_CD) &&
                orderData.Specific_CD.map((group, index) => (
                  <option key={index} value={group.value}>
                    {group.label}
                  </option>
                ))}
            </select>
            <input
              disabled
              id="Specific_Name"
              value={orderData?.Specific_Name || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-2 items-center sm:col-span-2 lg:col-span-5">
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-20">
              Pd_Receive
            </label>
            <input
              disabled
              id="Pd_Received_Date"
              value={orderData?.Pd_Received_Date || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-20">
              Request
            </label>
            <input
              disabled
              id="Request_Delivery"
              value={orderData?.Request_Delivery || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-20">
              Customer
            </label>
            <select
              id="Customer_CD"
              value={orderData?.Customer_CD || ""}
              onChange={handleInputChange}
              className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
            >
              <option value="">ไม่มีข้อมูล</option>
              {Array.isArray(orderData?.Customer_CD) &&
                orderData.Customer_CD.map((group, index) => (
                  <option key={index} value={group.value}>
                    {group.label}
                  </option>
                ))}
            </select>
            <input
              disabled
              id="Customer_Abb"
              value={orderData?.Customer_Abb || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Mate2
            </label>
            <input
              disabled
              id="Material2"
              value={orderData?.Material2 || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <input
              disabled
              id="H_Treatment2"
              value={orderData?.H_Treatment2 || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-2 items-center sm:col-span-2 lg:col-span-5">
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Req3
            </label>
            <select
              id="Request3_CD"
              value={orderData?.Request3_CD || ""}
              onChange={handleInputChange}
              className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
            >
              <option value="">ไม่มีข้อมูล</option>
              {Array.isArray(orderData?.Request3_CD) &&
                orderData.Request3_CD.map((group, index) => (
                  <option key={index} value={group.value}>
                    {group.label}
                  </option>
                ))}
            </select>
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Coating
            </label>
            <select
              id="Coating_CD"
              value={orderData?.Coating_CD || ""}
              onChange={handleInputChange}
              className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
            >
              <option value="">ไม่มีข้อมูล</option>
              {Array.isArray(orderData?.Coating_CD) &&
                orderData.Coating_CD.map((group, index) => (
                  <option key={index} value={group.value}>
                    {group.label}
                  </option>
                ))}
            </select>
            <input
              disabled
              id="Coating_Name"
              value={orderData?.Coating_Name || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />

            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Detail
            </label>
            <input
              disabled
              id="Coating"
              value={orderData?.Coating || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />

            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Od_Progress
            </label>
            <select
              id="Od_Progress_CD"
              value={orderData?.Od_Progress_CD || ""}
              onChange={handleInputChange}
              className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
            >
              <option value="">ไม่มีข้อมูล</option>
              {Array.isArray(orderData?.Od_Progress_CD) &&
                orderData.Od_Progress_CD.map((group, index) => (
                  <option key={index} value={group.value}>
                    {group.label}
                  </option>
                ))}
            </select>
            <input
              disabled
              id="Od_Progress_Name"
              value={orderData?.Od_Progress_Name || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-2 items-center sm:col-span-2 lg:col-span-5">
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Pd_Comp
            </label>
            <input
              disabled
              id="Pd_Complete_Date"
              value={orderData?.Pd_Complete_Date || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Product
            </label>
            <input
              disabled
              id="Product_Delivery"
              value={orderData?.Product_Delivery || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Pd_Name
            </label>
            <input
              disabled
              id="Product_Name"
              value={orderData?.Product_Name || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Mate3
            </label>
            <input
              disabled
              id="Material3"
              value={orderData?.Material3 || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <input
              disabled
              id="H_Treatment3"
              value={orderData?.H_Treatment3 || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-2 items-center sm:col-span-2 lg:col-span-5">
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Qty
            </label>
            <input
              disabled
              id="Quantity"
              value={orderData?.Quantity || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <input
              disabled
              id="Unit_Name"
              value={orderData?.Unit_Name || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <div className="flex gap-2 items-center w-full sm:w-auto">
              <input
                id="Od_Pending"
                checked={orderData?.Od_Pending || ""}
                onChange={handleInputChange}
                type="checkbox"
                className="w-6 h-6"
              />
              <label
                htmlFor="Od_Pending"
                className="whitespace-nowrap text-xs sm:text-xs lg:text-lg"
              >
                Od_Pending
              </label>
            </div>
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Product_Docu
            </label>
            <input
              disabled
              id="Product_Docu"
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Delivery
            </label>
            <select
              id="Delivery_CD"
              value={orderData?.Delivery_CD || ""}
              onChange={handleInputChange}
              className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
            >
              <option value="">ไม่มีข้อมูล</option>
              {Array.isArray(orderData?.Delivery_CD) &&
                orderData.Delivery_CD.map((group, index) => (
                  <option key={index} value={group.value}>
                    {group.label}
                  </option>
                ))}
            </select>
            <input
              disabled
              id="Delivery_Name"
              value={orderData?.Delivery_Name || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-2 items-center sm:col-span-2 lg:col-span-5">
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Confirm
            </label>
            <input
              disabled
              id="Confirm_Delivery"
              value={orderData?.Confirm_Delivery || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Pd_Size
            </label>
            <input
              disabled
              id="Product_Size"
              value={orderData?.Product_Size || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Mate4
            </label>
            <input
              disabled
              id="Material4"
              value={orderData?.Material4 || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <input
              disabled
              id="H_Treatment4"
              value={orderData?.H_Treatment4 || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Price
            </label>
            <select
              id="Price_CD"
              value={orderData?.Price_CD || ""}
              onChange={handleInputChange}
              className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
            >
              <option value="">ไม่มีข้อมูล</option>
              {Array.isArray(orderData?.Price_CD) &&
                orderData.Price_CD.map((group, index) => (
                  <option key={index} value={group.value}>
                    {group.label}
                  </option>
                ))}
            </select>
            <input
              disabled
              id="Price_Name"
              value={orderData?.Price_Name || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <div className="flex gap-2 items-center w-full sm:w-auto">
              <input
                id="Temp_Shipment"
                checked={orderData?.Temp_Shipment || ""}
                onChange={handleInputChange}
                type="checkbox"
                className="w-6 h-6"
              />
              <label
                htmlFor="Temp_Shipment"
                className="whitespace-nowrap text-xs sm:text-xs lg:text-lg"
              >
                Temp_Shipment
              </label>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 items-center sm:col-span-2 lg:col-span-5">
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Supple_Docu
            </label>
            <input
              disabled
              id="Supple_Docu"
              value={orderData?.Supple_Docu || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Target
            </label>
            <select
              id="Target_CD"
              value={orderData?.Target_CD || ""}
              onChange={handleInputChange}
              className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
            >
              <option value="">ไม่มีข้อมูล</option>
              {Array.isArray(orderData?.Target_CD) &&
                orderData.Target_CD.map((group, index) => (
                  <option key={index} value={group.value}>
                    {group.label}
                  </option>
                ))}
            </select>
            <input
              disabled
              id="Target_Name"
              value={orderData?.Target_Name || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Shipment
            </label>
            <input
              disabled
              id="Shipment_Date"
              value={orderData?.Shipment_Date || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-2 items-center sm:col-span-2 lg:col-span-5">
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              NAV
            </label>
            <input
              disabled
              id="NAV_Delivery"
              value={orderData?.NAV_Delivery || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Pd_Draw
            </label>
            <input
              disabled
              id="Product_Draw"
              value={orderData?.Product_Draw || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Mate5
            </label>
            <input
              disabled
              id="Material5"
              value={orderData?.Material5 || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <input
              disabled
              id="H_Treatment5"
              value={orderData?.H_Treatment5 || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Supply
            </label>
            <select
              id="Supply_CD"
              value={orderData?.Supply_CD || ""}
              onChange={handleInputChange}
              className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
            >
              <option value="">ไม่มีข้อมูล</option>
              {Array.isArray(orderData?.Supply_CD) &&
                orderData.Supply_CD.map((group, index) => (
                  <option key={index} value={group.value}>
                    {group.label}
                  </option>
                ))}
            </select>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 items-center sm:col-span-2 lg:col-span-5">
            <div className="flex gap-2 items-center w-full sm:w-auto">
              <input
                id="Unreceived"
                checked={orderData?.Unreceived || ""}
                onChange={handleInputChange}
                type="checkbox"
                className="w-6 h-6"
              />
              <label
                htmlFor="Unreceived"
                className="whitespace-nowrap text-xs sm:text-xs lg:text-lg"
              >
                Unreceived
              </label>
            </div>
            <div className="flex gap-2 items-center w-full sm:w-auto">
              <input
                id="Od_CAT1"
                checked={orderData?.Od_CAT1 || ""}
                onChange={handleInputChange}
                type="checkbox"
                className="w-6 h-6"
              />
              <label
                htmlFor="Od_CAT1"
                className="whitespace-nowrap text-xs sm:text-xs lg:text-lg"
              >
                Od_CAT1
              </label>
            </div>
            <div className="flex gap-2 items-center w-full sm:w-auto">
              <input
                id="Od_CAT2"
                checked={orderData?.Od_CAT2 || ""}
                onChange={handleInputChange}
                type="checkbox"
                className="w-6 h-6"
              />
              <label
                htmlFor="Od_CAT2"
                className="whitespace-nowrap text-xs sm:text-xs lg:text-lg"
              >
                Od_CAT2
              </label>
            </div>
            <div className="flex gap-2 items-center w-full sm:w-auto">
              <input
                id="Od_CAT3"
                checked={orderData?.Od_CAT3 || ""}
                onChange={handleInputChange}
                type="checkbox"
                className="w-6 h-6"
              />
              <label
                htmlFor="Od_CAT3"
                className="whitespace-nowrap text-xs sm:text-xs lg:text-lg"
              >
                Od_CAT3
              </label>
            </div>
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Pd_Target_Qty
            </label>
            <input
              disabled
              id="Pd_Target_Qty"
              value={orderData?.Pd_Target_Qty || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Calc_Process
            </label>
            <input
              disabled
              id="Calc_Process_Date"
              value={orderData?.Calc_Process_Date || ""}
              onChange={handleInputChange}
              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
          </div>
          <br></br>
          <div className="flex flex-col sm:flex-row gap-2 items-center sm:col-span-2 lg:col-span-5">
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Parts_No
            </label>
            <input
              id="Parts_No"
              value={planData?.Parts_No || ""}
              onChange={handlePlanInputChange}
              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Parts_Delivery
            </label>
            <input
              id="Pt_Delivery"
              value={planData?.Pt_Delivery || ""}
              onChange={handlePlanInputChange}
              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              【Parts_List】
            </label>
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              RegPerson
            </label>
            <select
              id="Pl_Reg_Person_CD"
              value={planData?.Pl_Reg_Person_CD || ""}
              onChange={handlePlanInputChange}
              className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
            >
              <option value="">ไม่มีข้อมูล</option>
              {Array.isArray(planData?.Pl_Reg_Person_CD) &&
                planData.Pl_Reg_Person_CD.map((group, index) => (
                  <option key={index} value={group.value}>
                    {group.label}
                  </option>
                ))}
            </select>
            <input
              id="Pl_Reg_Person_Name"
              value={planData?.Pl_Reg_Person_Name || ""}
              onChange={handlePlanInputChange}
              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-2 items-center sm:col-span-2 lg:col-span-5">
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Pt_Name
            </label>
            <select
              id="Parts_CD"
              value={planData?.Parts_CD || ""}
              onChange={handlePlanInputChange}
              className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
            >
              <option value="">ไม่มีข้อมูล</option>
              {Array.isArray(planData?.Parts_CD) &&
                planData.Parts_CD.map((group, index) => (
                  <option key={index} value={group.value}>
                    {group.label}
                  </option>
                ))}
            </select>
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Pt_Mate
            </label>
            <input
              id="Pt_Material"
              value={planData?.Pt_Material || ""}
              onChange={handlePlanInputChange}
              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Pt_Qty
            </label>
            <input
              id="Pt_Qty"
              value={planData?.Pt_Qty || ""}
              onChange={handlePlanInputChange}
              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <select
              id="Pt_Unit_CD"
              value={planData?.Pt_Unit_CD || ""}
              onChange={handlePlanInputChange}
              className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
            >
              <option value="">ไม่มีข้อมูล</option>
              {Array.isArray(planData?.Pt_Unit_CD) &&
                planData.Pt_Unit_CD.map((group, index) => (
                  <option key={index} value={group.value}>
                    {group.label}
                  </option>
                ))}
            </select>
            <div className="flex gap-2 items-center w-full sm:w-auto">
              <input
                id="Pt_Split"
                checked={planData?.Pt_Split}
                onChange={handlePlanInputChange}
                type="checkbox"
                className="w-6 h-6"
              />
              <label
                htmlFor="Pt_Split"
                className="whitespace-nowrap text-xs sm:text-xs lg:text-lg"
              >
                Split
              </label>
            </div>
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-24">
              Sp_Qty
            </label>
            <input
              id="Pt_Spare_Qty"
              value={planData?.Pt_Spare_Qty || ""}
              onChange={handlePlanInputChange}
              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-2 items-center sm:col-span-2 lg:col-span-5">
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-28">
              Connect_Od_No
            </label>
            <input
              id="Connect_Od_No"
              value={planData?.Connect_Od_No || ""}
              onChange={handlePlanInputChange}
              className="bg-[#d0f8ce] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-28">
              NG_Qty
            </label>
            <input
              id="NG_Qty"
              value={planData?.Pt_NG_Qty || ""}
              onChange={handlePlanInputChange}
              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-28">
              Connect_Pt_No
            </label>
            <input
              id="Connect_Pt_No"
              value={planData?.Connect_Pt_No || ""}
              onChange={handlePlanInputChange}
              className="bg-[#d0f8ce] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <input
              id="Connect_Pt_Abb"
              value={planData?.Connect_Pt_Abb || ""}
              onChange={handlePlanInputChange}
              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
            <div className="flex gap-2 items-center w-full sm:w-auto">
              <input
                id="Pt_Pend"
                checked={planData?.Pt_Pend || ""}
                onChange={handlePlanInputChange}
                type="checkbox"
                className="w-6 h-6"
              />
              <label
                htmlFor="Pt_Pend"
                className="whitespace-nowrap text-xs sm:text-xs lg:text-lg"
              >
                Pt_Pend
              </label>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 items-center sm:col-span-2 lg:col-span-5">
            <label className="font-medium text-xs sm:text-sm md:text-base w-full sm:w-1/2 md:w-1/2 lg:w-28">
            Connect_Pr_No
            </label>
            <input
              id="Connect_Pr_No"
              value={planData?.Connect_Pr_No || ""}
              onChange={handlePlanInputChange}
              className="bg-[#d0f8ce] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
              <input
              id="Connect_Pr_Abb"
              value={planData?.Connect_Pr_Abb || ""}
              onChange={handlePlanInputChange}
              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
