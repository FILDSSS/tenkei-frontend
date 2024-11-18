import React, { useState, useEffect } from "react";
import { useOrder } from "../hooks/use-order";
import { usePurchase } from "../hooks/use-purchase";
import { usePlan } from "../hooks/use-plan";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

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

  const rows = [
    {
      mp: (
        <div className="flex space-x-2 w-full">
          <input
            type="text"
            className="border rounded px-2 py-1 text-xs w-20 h-6 mt-5"
          />
          <div className="flex flex-col items-end w-full">
            <button className="bg-gray-300 px-2 py-1 rounded-l text-xs h-5">
              ▼
            </button>
            <input
              type="text"
              className="border rounded px-2 py-1 text-xs w-20"
            />
          </div>
        </div>
      ),
      plan_process: (
        <div className="">
          <select className="border rounded px-2 py-1 text-xs  w-full ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),
      min: "",
      mind: "",

      time: (
        <div className="space-x-2">
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),

      plan_date: "",
      instructions: "",
      result_date: "",
      resultmachine: "",
      result_person: "",
      resultqty: "",
      asp: "",
      bk: "",
      pi_machine: "",
      pi_person: "",
    },

    {
      mp: (
        <div className="flex space-x-2 w-full">
          <input
            type="text"
            className="border rounded px-2 py-1 text-xs w-20 h-6 mt-5"
          />
          <div className="flex flex-col items-end w-full">
            <button className="bg-gray-300 px-2 py-1 rounded-l text-xs h-5">
              ▼
            </button>
            <input
              type="text"
              className="border rounded px-2 py-1 text-xs w-20"
            />
          </div>
        </div>
      ),
      plan_process: (
        <div className="">
          <select className="border rounded px-2 py-1 text-xs  w-full ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),
      min: "",
      mind: "",

      time: (
        <div className="space-x-2">
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),

      plan_date: "",
      instructions: "",
      result_date: "",
      resultmachine: "",
      result_person: "",
      resultqty: "",
      asp: "",
      bk: "",
      pi_machine: "",
      pi_person: "",
    },

    {
      mp: (
        <div className="flex space-x-2 w-full">
          <input
            type="text"
            className="border rounded px-2 py-1 text-xs w-20 h-6 mt-5"
          />
          <div className="flex flex-col items-end w-full">
            <button className="bg-gray-300 px-2 py-1 rounded-l text-xs h-5">
              ▼
            </button>
            <input
              type="text"
              className="border rounded px-2 py-1 text-xs w-20"
            />
          </div>
        </div>
      ),
      plan_process: (
        <div className="">
          <select className="border rounded px-2 py-1 text-xs  w-full ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),
      min: "",
      mind: "",

      time: (
        <div className="space-x-2">
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),

      plan_date: "",
      instructions: "",
      result_date: "",
      resultmachine: "",
      result_person: "",
      resultqty: "",
      asp: "",
      bk: "",
      pi_machine: "",
      pi_person: "",
    },

    {
      mp: (
        <div className="flex space-x-2 w-full">
          <input
            type="text"
            className="border rounded px-2 py-1 text-xs w-20 h-6 mt-5"
          />
          <div className="flex flex-col items-end w-full">
            <button className="bg-gray-300 px-2 py-1 rounded-l text-xs h-5">
              ▼
            </button>
            <input
              type="text"
              className="border rounded px-2 py-1 text-xs w-20"
            />
          </div>
        </div>
      ),
      plan_process: (
        <div className="">
          <select className="border rounded px-2 py-1 text-xs  w-full ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),
      min: "",
      mind: "",

      time: (
        <div className="space-x-2">
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),

      plan_date: "",
      instructions: "",
      result_date: "",
      resultmachine: "",
      result_person: "",
      resultqty: "",
      asp: "",
      bk: "",
      pi_machine: "",
      pi_person: "",
    },

    {
      mp: (
        <div className="flex space-x-2 w-full">
          <input
            type="text"
            className="border rounded px-2 py-1 text-xs w-20 h-6 mt-5"
          />
          <div className="flex flex-col items-end w-full">
            <button className="bg-gray-300 px-2 py-1 rounded-l text-xs h-5">
              ▼
            </button>
            <input
              type="text"
              className="border rounded px-2 py-1 text-xs w-20"
            />
          </div>
        </div>
      ),
      plan_process: (
        <div className="">
          <select className="border rounded px-2 py-1 text-xs  w-full ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),
      min: "",
      mind: "",

      time: (
        <div className="space-x-2">
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),

      plan_date: "",
      instructions: "",
      result_date: "",
      resultmachine: "",
      result_person: "",
      resultqty: "",
      asp: "",
      bk: "",
      pi_machine: "",
      pi_person: "",
    },

    {
      mp: (
        <div className="flex space-x-2 w-full">
          <input
            type="text"
            className="border rounded px-2 py-1 text-xs w-20 h-6 mt-5"
          />
          <div className="flex flex-col items-end w-full">
            <button className="bg-gray-300 px-2 py-1 rounded-l text-xs h-5">
              ▼
            </button>
            <input
              type="text"
              className="border rounded px-2 py-1 text-xs w-20"
            />
          </div>
        </div>
      ),
      plan_process: (
        <div className="">
          <select className="border rounded px-2 py-1 text-xs  w-full ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),
      min: "",
      mind: "",

      time: (
        <div className="space-x-2">
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),

      plan_date: "",
      instructions: "",
      result_date: "",
      resultmachine: "",
      result_person: "",
      resultqty: "",
      asp: "",
      bk: "",
      pi_machine: "",
      pi_person: "",
    },

    {
      mp: (
        <div className="flex space-x-2 w-full">
          <input
            type="text"
            className="border rounded px-2 py-1 text-xs w-20 h-6 mt-5"
          />
          <div className="flex flex-col items-end w-full">
            <button className="bg-gray-300 px-2 py-1 rounded-l text-xs h-5">
              ▼
            </button>
            <input
              type="text"
              className="border rounded px-2 py-1 text-xs w-20"
            />
          </div>
        </div>
      ),
      plan_process: (
        <div className="">
          <select className="border rounded px-2 py-1 text-xs  w-full ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),
      min: "",
      mind: "",

      time: (
        <div className="space-x-2">
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),

      plan_date: "",
      instructions: "",
      result_date: "",
      resultmachine: "",
      result_person: "",
      resultqty: "",
      asp: "",
      bk: "",
      pi_machine: "",
      pi_person: "",
    },

    {
      mp: (
        <div className="flex space-x-2 w-full">
          <input
            type="text"
            className="border rounded px-2 py-1 text-xs w-20 h-6 mt-5"
          />
          <div className="flex flex-col items-end w-full">
            <button className="bg-gray-300 px-2 py-1 rounded-l text-xs h-5">
              ▼
            </button>
            <input
              type="text"
              className="border rounded px-2 py-1 text-xs w-20"
            />
          </div>
        </div>
      ),
      plan_process: (
        <div className="">
          <select className="border rounded px-2 py-1 text-xs  w-full ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),
      min: "",
      mind: "",

      time: (
        <div className="space-x-2">
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),

      plan_date: "",
      instructions: "",
      result_date: "",
      resultmachine: "",
      result_person: "",
      resultqty: "",
      asp: "",
      bk: "",
      pi_machine: "",
      pi_person: "",
    },

    {
      mp: (
        <div className="flex space-x-2 w-full">
          <input
            type="text"
            className="border rounded px-2 py-1 text-xs w-20 h-6 mt-5"
          />
          <div className="flex flex-col items-end w-full">
            <button className="bg-gray-300 px-2 py-1 rounded-l text-xs h-5">
              ▼
            </button>
            <input
              type="text"
              className="border rounded px-2 py-1 text-xs w-20"
            />
          </div>
        </div>
      ),
      plan_process: (
        <div className="">
          <select className="border rounded px-2 py-1 text-xs  w-full ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),
      min: "",
      mind: "",

      time: (
        <div className="space-x-2">
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),

      plan_date: "",
      instructions: "",
      result_date: "",
      resultmachine: "",
      result_person: "",
      resultqty: "",
      asp: "",
      bk: "",
      pi_machine: "",
      pi_person: "",
    },

    {
      mp: (
        <div className="flex space-x-2 w-full">
          <input
            type="text"
            className="border rounded px-2 py-1 text-xs w-20 h-6 mt-5"
          />
          <div className="flex flex-col items-end w-full">
            <button className="bg-gray-300 px-2 py-1 rounded-l text-xs h-5">
              ▼
            </button>
            <input
              type="text"
              className="border rounded px-2 py-1 text-xs w-20"
            />
          </div>
        </div>
      ),
      plan_process: (
        <div className="">
          <select className="border rounded px-2 py-1 text-xs  w-full ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),
      min: "",
      mind: "",

      time: (
        <div className="space-x-2">
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),

      plan_date: "",
      instructions: "",
      result_date: "",
      resultmachine: "",
      result_person: "",
      resultqty: "",
      asp: "",
      bk: "",
      pi_machine: "",
      pi_person: "",
    },

    {
      mp: (
        <div className="flex space-x-2 w-full">
          <input
            type="text"
            className="border rounded px-2 py-1 text-xs w-20 h-6 mt-5"
          />
          <div className="flex flex-col items-end w-full">
            <button className="bg-gray-300 px-2 py-1 rounded-l text-xs h-5">
              ▼
            </button>
            <input
              type="text"
              className="border rounded px-2 py-1 text-xs w-20"
            />
          </div>
        </div>
      ),
      plan_process: (
        <div className="">
          <select className="border rounded px-2 py-1 text-xs  w-full ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),
      min: "",
      mind: "",

      time: (
        <div className="space-x-2">
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),

      plan_date: "",
      instructions: "",
      result_date: "",
      resultmachine: "",
      result_person: "",
      resultqty: "",
      asp: "",
      bk: "",
      pi_machine: "",
      pi_person: "",
    },

    {
      mp: (
        <div className="flex space-x-2 w-full">
          <input
            type="text"
            className="border rounded px-2 py-1 text-xs w-20 h-6 mt-5"
          />
          <div className="flex flex-col items-end w-full">
            <button className="bg-gray-300 px-2 py-1 rounded-l text-xs h-5">
              ▼
            </button>
            <input
              type="text"
              className="border rounded px-2 py-1 text-xs w-20"
            />
          </div>
        </div>
      ),
      plan_process: (
        <div className="">
          <select className="border rounded px-2 py-1 text-xs  w-full ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),
      min: "",
      mind: "",

      time: (
        <div className="space-x-2">
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),

      plan_date: "",
      instructions: "",
      result_date: "",
      resultmachine: "",
      result_person: "",
      resultqty: "",
      asp: "",
      bk: "",
      pi_machine: "",
      pi_person: "",
    },

    {
      mp: (
        <div className="flex space-x-2 w-full">
          <input
            type="text"
            className="border rounded px-2 py-1 text-xs w-20 h-6 mt-5"
          />
          <div className="flex flex-col items-end w-full">
            <button className="bg-gray-300 px-2 py-1 rounded-l text-xs h-5">
              ▼
            </button>
            <input
              type="text"
              className="border rounded px-2 py-1 text-xs w-20"
            />
          </div>
        </div>
      ),
      plan_process: (
        <div className="">
          <select className="border rounded px-2 py-1 text-xs  w-full ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),
      min: "",
      mind: "",

      time: (
        <div className="space-x-2">
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),

      plan_date: "",
      instructions: "",
      result_date: "",
      resultmachine: "",
      result_person: "",
      resultqty: "",
      asp: "",
      bk: "",
      pi_machine: "",
      pi_person: "",
    },

    {
      mp: (
        <div className="flex space-x-2 w-full">
          <input
            type="text"
            className="border rounded px-2 py-1 text-xs w-20 h-6 mt-5"
          />
          <div className="flex flex-col items-end w-full">
            <button className="bg-gray-300 px-2 py-1 rounded-l text-xs h-5">
              ▼
            </button>
            <input
              type="text"
              className="border rounded px-2 py-1 text-xs w-20"
            />
          </div>
        </div>
      ),
      plan_process: (
        <div className="">
          <select className="border rounded px-2 py-1 text-xs  w-full ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),
      min: "",
      mind: "",

      time: (
        <div className="space-x-2">
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),

      plan_date: "",
      instructions: "",
      result_date: "",
      resultmachine: "",
      result_person: "",
      resultqty: "",
      asp: "",
      bk: "",
      pi_machine: "",
      pi_person: "",
    },

    {
      mp: (
        <div className="flex space-x-2 w-full">
          <input
            type="text"
            className="border rounded px-2 py-1 text-xs w-20 h-6 mt-5"
          />
          <div className="flex flex-col items-end w-full">
            <button className="bg-gray-300 px-2 py-1 rounded-l text-xs h-5">
              ▼
            </button>
            <input
              type="text"
              className="border rounded px-2 py-1 text-xs w-20"
            />
          </div>
        </div>
      ),
      plan_process: (
        <div className="">
          <select className="border rounded px-2 py-1 text-xs  w-full ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),
      min: "",
      mind: "",

      time: (
        <div className="space-x-2">
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),

      plan_date: "",
      instructions: "",
      result_date: "",
      resultmachine: "",
      result_person: "",
      resultqty: "",
      asp: "",
      bk: "",
      pi_machine: "",
      pi_person: "",
    },

    {
      mp: (
        <div className="flex space-x-2 w-full">
          <input
            type="text"
            className="border rounded px-2 py-1 text-xs w-20 h-6 mt-5"
          />
          <div className="flex flex-col items-end w-full">
            <button className="bg-gray-300 px-2 py-1 rounded-l text-xs h-5">
              ▼
            </button>
            <input
              type="text"
              className="border rounded px-2 py-1 text-xs w-20"
            />
          </div>
        </div>
      ),
      plan_process: (
        <div className="">
          <select className="border rounded px-2 py-1 text-xs  w-full ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),
      min: "",
      mind: "",

      time: (
        <div className="space-x-2">
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),

      plan_date: "",
      instructions: "",
      result_date: "",
      resultmachine: "",
      result_person: "",
      resultqty: "",
      asp: "",
      bk: "",
      pi_machine: "",
      pi_person: "",
    },

    {
      mp: (
        <div className="flex space-x-2 w-full">
          <input
            type="text"
            className="border rounded px-2 py-1 text-xs w-20 h-6 mt-5"
          />
          <div className="flex flex-col items-end w-full">
            <button className="bg-gray-300 px-2 py-1 rounded-l text-xs h-5">
              ▼
            </button>
            <input
              type="text"
              className="border rounded px-2 py-1 text-xs w-20"
            />
          </div>
        </div>
      ),
      plan_process: (
        <div className="">
          <select className="border rounded px-2 py-1 text-xs  w-full ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),
      min: "",
      mind: "",

      time: (
        <div className="space-x-2">
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs  w-10 ">
            <option value=""></option>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
          </select>
        </div>
      ),

      plan_date: "",
      instructions: "",
      result_date: "",
      resultmachine: "",
      result_person: "",
      resultqty: "",
      asp: "",
      bk: "",
      pi_machine: "",
      pi_person: "",
    },
  ];

  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-full mr-2 ml-2">
        <Navbar />
        <div className="flex-1 flex-col p-2 overflow-x-auto">
          <div className="bg-white grid grid-cols-1">
            <div className="flex justify-center items-center">
              <h1 className="text-2xl font-bold ">Plan Info</h1>
            </div>
            <div className="overflow-x-auto w-full h-full">
              <div className="flex space-x-4 w-full">
                {/* ส่วนของ div ซ้าย */}
                <div className="p-4 space-y-4 min-w-[900px] flex-shrink-0 w-2/3">
                  <div className="flex items-center space-x-2 justify-start">
                    <label className="text-xs font-medium">Date:</label>
                    <input
                      type="date"
                      className="border rounded px-2 py-1 text-sm"
                    />
                    <div className="inline-flex space-x-0">
                      <button className="bg-gray-300 px-2 py-1 rounded-l text-xs">
                        GRA
                      </button>
                      <button className="bg-gray-300 px-2 py-1 rounded-r text-xs">
                        List
                      </button>
                    </div>
                    <div className="flex flex-row space-x-4 min-w-[300px] w-full px-1 py-1">
                      {/* บรรทัดของ Date */}
                      <div className="flex items-center space-x-2">
                        <label className="text-xs font-medium">Date:</label>
                        <input
                          type="date"
                          className="border rounded px-2 py-1 text-xs"
                        />
                      </div>

                      {/* บรรทัดของ Checkbox */}
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="form-checkbox border-gray-400 rounded"
                        />
                        <label className="text-xs font-medium">
                          Auto_Year_Change
                        </label>
                      </div>

                      {/* บรรทัดของ Target_PrG */}
                      <div className="flex items-center space-x-2">
                        <label className="text-xs font-medium">
                          Target_PrG
                        </label>
                        <select className="border rounded bg-[#ccffff] px-2 py-1 text-xs">
                          <option value="">Select</option>
                        </select>
                      </div>

                      {/* บรรทัดของ Target_Date */}
                      <div className="flex items-center space-x-2">
                        <label className="text-xs font-medium">
                          Target_Date
                        </label>
                        <input
                          type="date"
                          className="border rounded bg-[#ccffff] px-2 py-1 text-xs"
                        />
                        <span className="text-xs font-medium">~</span>
                        <input
                          type="date"
                          className="border rounded bg-[#ccffff] px-2 py-1 text-xs"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <label className="text-xs font-medium">
                        Search_Order_No
                      </label>
                      <input
                        type="text"
                        className="border rounded px-2 py-1 text-xs bg-[#ccffff] w-20"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <label className="text-xs font-medium">
                        Search_Parts_No
                      </label>
                      <select className="border rounded px-2 py-1 text-xs bg-[#ccffff] w-18">
                        <option value="">Select</option>
                        <option value="part1">Part 1</option>
                        <option value="part2">Part 2</option>
                        <option value="part3">Part 3</option>
                      </select>
                    </div>

                    <div className="flex items-center space-x-2">
                      <label className="text-xs font-medium">
                        Search_Odpt_No
                      </label>
                      <input
                        type="text"
                        className="border rounded px-2 py-1 text-xs w-20"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <label className="text-xs font-medium">Order_No</label>
                      <input
                        type="text"
                        className="border rounded px-2 py-1 text-xs w-20"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <label className="text-xs font-medium">Odpt_No</label>
                      <input
                        type="text"
                        className="border rounded px-2 py-1 text-xs w-20"
                      />
                    </div>

                    <div className="flex space-x-1">
                      <button className="bg-gray-300 py-1 px-2 rounded text-xs">
                        PP
                      </button>
                      <button className="bg-gray-300 py-1 px-2 rounded text-xs">
                        PD
                      </button>
                      <button className="bg-gray-300 py-1 px-2 rounded text-xs">
                        RD
                      </button>
                    </div>
                  </div>
                </div>

                {/* ส่วนของ div ขวา */}
              </div>
              <hr className="border-y-[1px] border-gray-300" />
            </div>

            <div className="overflow-x-auto w-full">
              <div className="grid grid-cols-12 min-w-[1800px]">
                <div className="w-full content-start ms-5 mt-4">
                  <label className=" text-xs">Order_Info</label>
                </div>
                <br />
                <div className="col-span-12 me-5 mt-5 ml-14 ">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-9">
                      {/* Group 1 */}
                      <div className="gap-2 flex mb-4 justify-start me-5">
                        <div className="flex gap-2 w-auto">
                          <label className="w-auto  text-xs">Od_No</label>
                          <div className="w-auto ml-1">
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto item ">
                          <label className="w-16  text-xs">Product_Grp</label>
                          <select className="border rounded px-2 py-1 text-xs bg-[#ffff99] w-36">
                            <option value=""></option>
                            <option value="part1">Part 1</option>
                            <option value="part2">Part 2</option>
                            <option value="part3">Part 3</option>
                          </select>
                        </div>
                        <div className="flex gap-2 w-auto ml-0.5">
                          <label className="w-auto text-xs">Mate1</label>
                          <div className="w-auto flex gap-1">
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-10 text-xs">PO No</label>
                          <div className="w-auto flex gap-1 mr-1">
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-20 text-xs">Od_Ctl_Person</label>
                          <div className="w-auto flex gap-1 mr-1">
                            <select className="border rounded px-2 py-1 text-xs bg-[#ffff99] ">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto mr-1">
                          <label className="w-8 text-xs">Sales</label>
                          <div className="w-auto flex gap-1">
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-10">
                          <label className="w-10 text-xs">Specific</label>
                          <div className="w-auto flex gap-1">
                            <select className="border rounded px-2 py-1 text-xs bg-[#ffff99] ">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-5">
                          <label className="w-auto  text-xs">Pd_Receive</label>
                          <div className="w-auto">
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[150px]"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Group 2 */}
                      <div className="gap-2 flex mb-4 justify-start me-5">
                        <div className="flex gap-2 w-auto">
                          <label className="w-10  text-xs">Request</label>
                          <div className="w-auto">
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-12 text-xs">Customer</label>
                          <div className="w-auto flex gap-1">
                            <select className="border rounded px-2 py-1 text-xs bg-[#ffff99] ">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[87px]"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-auto text-xs">Mate2</label>
                          <div className="w-auto flex gap-1 -ml-0">
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-10 text-xs">Req3</label>
                          <div className="w-auto flex gap-1 mr-1">
                            <select className="border rounded px-2 py-1 text-xs bg-[#ffff99] w-24">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-10 text-xs">Coating</label>
                          <div className="w-auto flex gap-1 ">
                            <select className="border rounded px-2 py-1 text-xs bg-[#ffff99] ">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-8">
                          <label className="w-8 text-xs">Detail</label>
                          <div className="w-auto flex gap-1">
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-28"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-16 text-xs ml-5">
                            Od_Progress
                          </label>
                          <div className="w-auto flex gap-1">
                            <select className="border rounded px-2 py-1 text-xs bg-[#ffff99]  ">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-7">
                          <label className="w-auto  text-xs">Pd_Comp</label>
                          <div className="w-auto">
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[150px]"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Group 3 */}
                      <div className="gap-2 flex mb-4 justify-start ">
                        <div className="flex gap-2 w-auto">
                          <label className="w-auto  text-xs">Product</label>
                          <div className="w-auto">
                            <input
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-10 text-xs">Pd_name</label>
                          <div className="w-auto flex gap-1">
                            <input
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-[160px] ml-2"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-auto text-xs">Mate3</label>
                          <div className="w-auto flex gap-1">
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-10 text-xs">Qty</label>
                          <div className="w-auto flex gap-1 mr-1">
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-12"
                            />
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-12"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-3">
                          <div className="w-auto flex gap-1 ">
                            <input
                              type="checkbox"
                              className="form-checkbox border-gray-400 rounded"
                            />
                            <label className="text-xs mt-1">Od_Pending</label>
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-6">
                          <label className="w-20 text-xs">Product_Docu</label>
                          <div className="w-auto flex gap-1">
                            <input
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-30"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-6">
                          <label className="w-10 text-xs ml-5">Delivery</label>
                          <div className="w-auto flex gap-1">
                            <select className="border rounded px-2 py-1 text-xs bg-[#ffff99]  ">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-6">
                          <label className="w-auto  text-xs">QC_Comp</label>
                          <div className="w-auto">
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[150px]"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Group 4 */}
                      <div className="gap-2 flex mb-4 justify-start ">
                        <div className="flex gap-2 w-auto">
                          <label className="w-auto  text-xs">Confirm</label>
                          <div className="w-auto">
                            <input
                              type="text"
                              className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-10 text-xs">Pd_Size</label>
                          <div className="w-auto flex gap-1">
                            <input
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-[160px] ml-1.5"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-auto text-xs">Mate4</label>
                          <div className="w-auto flex gap-1">
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-10 text-xs">Price</label>
                          <div className="w-auto flex gap-1 mr-1">
                            <select className="border rounded px-2 py-1 text-xs bg-[#ffff99]  w-12">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-12"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-3">
                          <div className="w-auto flex gap-1 ">
                            <input
                              type="checkbox"
                              className="form-checkbox border-gray-400 rounded"
                            />
                            <label className="text-xs mt-1">
                              Temp_Shipment
                            </label>
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-1.5">
                          <label className="w-20 text-xs">Supple_Docu</label>
                          <div className="w-auto flex gap-1">
                            <input
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-30"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-8">
                          <label className="w-8 text-xs ml-5 item">
                            Target
                          </label>
                          <div className="w-auto flex gap-1">
                            <select className="border rounded px-2 py-1 text-xs bg-[#ffff99]  ">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-6">
                          <label className="w-auto  text-xs">Shipment</label>
                          <div className="w-auto">
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[150px]"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Group 5 */}
                      <div className="gap-2 flex mb-4 justify-start ">
                        <div className="flex gap-2 w-auto">
                          <label className="w-auto  text-xs">Nav</label>
                          <div className="w-auto">
                            <input
                              type="text"
                              className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-24 ml-5"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-10 text-xs">Pd_Draw</label>
                          <div className="w-auto flex gap-1">
                            <input
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-[160px] ml-1.5"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-auto text-xs">Mate5</label>
                          <div className="w-auto flex gap-1 ml-0.5">
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-10 text-xs">Supple</label>
                          <div className="w-auto flex gap-1 mr-1">
                            <select className="border rounded px-2 py-1 text-xs bg-[#ffff99]  w-24">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-[18px]">
                          <div className="w-auto flex gap-1 ">
                            <input
                              type="checkbox"
                              className="form-checkbox border-gray-400 rounded"
                            />
                            <label className="text-xs mt-1">Unreceived</label>
                            <input
                              type="checkbox"
                              className="form-checkbox border-gray-400 rounded ml-6 "
                            />
                            <label className="text-xs mt-1">Od_CAT1</label>
                            <input
                              type="checkbox"
                              className="form-checkbox border-gray-400 rounded ml-6"
                            />
                            <label className="text-xs mt-1">Od_CAT2</label>
                            <input
                              type="checkbox"
                              className="form-checkbox border-gray-400 rounded ml-6"
                            />
                            <label className="text-xs mt-1">Od_CAT3</label>
                          </div>
                        </div>

                        <div className="flex gap-2 w-auto ml-[96px]">
                          <label className="w-20 text-xs ml-5 item">
                            Pd_Target_Qty
                          </label>
                          <div className="w-auto flex gap-1">
                            <input
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-2">
                          <label className="w-auto  text-xs">
                            Calc_Process
                          </label>
                          <div className="w-auto">
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[150px]"
                            />
                          </div>
                        </div>
                      </div>

                      <hr className="border-y-[1px] border-gray-300 w-[1700px]" />

                      {/* Group 6 */}
                      <div className="gap-2 flex mb-4 justify-start mt-4">
                        <div className="flex gap-2 w-auto">
                          <label className="w-10  text-xs">Parts_No</label>
                          <div className="w-auto">
                            <input
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-24 ml-1"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-16 text-xs">Parts_Delivery</label>
                          <div className="w-auto flex gap-1">
                            <input
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-24 ml-1.5"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-2">
                          <label className="w-10 text-xs">Parts_List</label>
                        </div>
                        <div className="flex gap-2 w-auto ml-9">
                          <label className="w-14 text-xs">RegPerson</label>
                          <div className="w-auto flex gap-1 mr-1">
                            <select className="border rounded px-2 py-1 text-xs bg-[#ffff99]  w-24">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24 ml-1.5"
                            />
                            <label className="w-32 text-xs ml-5">
                              Company Information
                            </label>
                            <label className="w-24 text-xs">
                              Note/Remark/Info
                            </label>
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-[18px]">
                          <div className="w-auto flex gap-1 ">
                            <input
                              type="checkbox"
                              className="form-checkbox border-gray-400 rounded ml-5 "
                            />
                            <label className="text-xs mt-2">Pt_CAT1</label>
                            <input
                              type="checkbox"
                              className="form-checkbox border-gray-400 rounded ml-5"
                            />
                            <label className="text-xs mt-2">Pt_CAT2</label>
                            <input
                              type="checkbox"
                              className="form-checkbox border-gray-400 rounded ml-5"
                            />
                            <label className="text-xs mt-2">Pt_CAT3</label>
                          </div>
                        </div>

                        <div className="flex gap-2 w-auto -ml-2">
                          <label className="w-10 text-xs ml-5 item">
                            Progress
                          </label>
                          <div className="w-auto flex gap-1">
                            <select className="border rounded px-2 py-1 text-xs bg-[#ffff99]  ">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-6">
                          <label className="w-auto  text-xs">Plan_Reg</label>
                          <div className="w-auto">
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[150px]"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Group 7 */}
                      <div className="gap-2 flex mb-4 justify-start mt-4">
                        <div className="flex flex-col gap-4 w-auto">
                          <div className="flex items-center gap-4">
                            <label className="w-11 text-xs">Pt_Name</label>
                            <div className="w-auto">
                              <select className="border rounded px-2 py-1 text-xs bg-[#ffff99] w-24">
                                <option value=""></option>
                                <option value="part1">Part 1</option>
                                <option value="part2">Part 2</option>
                                <option value="part3">Part 3</option>
                              </select>
                            </div>

                            <label className="w-10 text-xs">Pt_Mate</label>
                            <div className="w-auto">
                              <input
                                type="text"
                                className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-24 h-7"
                              />
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <label className="w-11 text-xs">Pt_Qty</label>
                            <div className="w-auto">
                              <select className="border rounded px-2 py-1 text-xs bg-[#ffff99] w-24 ">
                                <option value=""></option>
                                <option value="part1">Part 1</option>
                                <option value="part2">Part 2</option>
                                <option value="part3">Part 3</option>
                              </select>
                            </div>
                            <input
                              type="checkbox"
                              className="form-checkbox border-gray-400 rounded ml-2"
                            />
                            <label className="text-xs ">Split</label>
                            <label className="w-7 text-xs ml-4">Sp_Qty</label>
                            <input
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-14 ml-1.5 h-7"
                            />
                          </div>

                          <div className="flex items-center gap-2">
                            <label className="w-20 text-xs">
                              Connect_Od_No
                            </label>
                            <div className="w-auto">
                              <input
                                type="text"
                                className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-32  h-7"
                              />
                            </div>
                            <label className="w-8 text-xs ml-1">NG_Qty</label>
                            <div className="w-auto flex gap-1">
                              <input
                                type="text"
                                className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-14 ml-1.5 h-7"
                              />
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <label className="w-20 text-xs">
                              Connect_Pt_No
                            </label>
                            <div className="w-auto flex gap-2">
                              <input
                                type="text"
                                className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-10 h-7"
                              />
                              <input
                                type="text"
                                className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-20 h-7"
                              />
                            </div>
                            <input
                              type="checkbox"
                              className="form-checkbox border-gray-400 rounded ml-2"
                            />
                            <label className="text-xs ">Pt_pend</label>
                          </div>

                          <div className="flex items-center gap-2">
                            <label className="w-20 text-xs">
                              Connect_Pr_No
                            </label>
                            <div className="w-auto flex gap-2">
                              <input
                                type="text"
                                className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-10 h-7"
                              />
                              <input
                                type="text"
                                className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md  w-20 h-7"
                              />
                            </div>
                            <input
                              type="checkbox"
                              className="form-checkbox border-gray-400 rounded ml-2"
                            />
                            <label className="text-xs ">Outside</label>
                          </div>
                        </div>

                        <div className="flex gap-2 w-auto ">
                          <div className="w-auto flex gap-1">
                            <div class=" border border-gray-300 overflow-hidden">
                              <table class="w-[360px] h-[10px] border-collapse text-xs">
                                <thead>
                                  <tr class="bg-gray-100">
                                    <th class="border border-gray-300 py-2 px-1 text-center">
                                      P.
                                    </th>
                                    <th class="border border-gray-300 py-2 px-1 text-center">
                                      PI.
                                    </th>
                                    <th class="border border-gray-300 py-2 px-1 text-center">
                                      Part
                                    </th>
                                    <th class="border border-gray-300 py-2 px-1 text-center">
                                      Pt_Delivery
                                    </th>
                                    <th class="border border-gray-300 py-2 px-1 text-center">
                                      Pt_
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td class="border border-gray-300 h-8"></td>
                                    <td class="border border-gray-300 h-8"></td>
                                    <td class="border border-gray-300 h-8"></td>
                                    <td class="border border-gray-300 h-8"></td>
                                    <td class="border border-gray-300 h-8"></td>
                                  </tr>
                                  <tr>
                                    <td class="border border-gray-300 h-8"></td>
                                    <td class="border border-gray-300 h-8"></td>
                                    <td class="border border-gray-300 h-8"></td>
                                    <td class="border border-gray-300 h-8"></td>
                                    <td class="border border-gray-300 h-8"></td>
                                  </tr>
                                  <tr>
                                    <td class="border border-gray-300 h-8"></td>
                                    <td class="border border-gray-300 h-8"></td>
                                    <td class="border border-gray-300 h-8"></td>
                                    <td class="border border-gray-300 h-8"></td>
                                    <td class="border border-gray-300 h-8"></td>
                                  </tr>
                                  <tr>
                                    <td class="border border-gray-300 h-8"></td>
                                    <td class="border border-gray-300 h-8"></td>
                                    <td class="border border-gray-300 h-8"></td>
                                    <td class="border border-gray-300 h-8"></td>
                                    <td class="border border-gray-300 h-8"></td>
                                  </tr>
                                </tbody>
                              </table>

                              <div class="flex justify-between items-center p-2 border-t border-gray-300">
                                <button class="text-gray-500 focus:outline-none">
                                  ◀
                                </button>
                                <button class="text-gray-500 focus:outline-none">
                                  ▶
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2 w-auto ml-[18px] h-20">
                          <div className="w-auto flex flex-col gap-2">
                            <div className="flex items-center">
                              <label className="text-xs mr-2">1</label>
                              <select className="border rounded px-2 py-1 text-xs w-24">
                                <option value=""></option>
                                <option value="part1">Part 1</option>
                                <option value="part2">Part 2</option>
                                <option value="part3">Part 3</option>
                              </select>
                            </div>
                            <div className="flex items-center">
                              <label className="text-xs mr-2">2</label>
                              <select className="border rounded px-2 py-1 text-xs w-24">
                                <option value=""></option>
                                <option value="part1">Part 1</option>
                                <option value="part2">Part 2</option>
                                <option value="part3">Part 3</option>
                              </select>
                            </div>
                            <div className="flex items-center">
                              <label className="text-xs mr-2">3</label>
                              <select className="border rounded px-2 py-1 text-xs w-24">
                                <option value=""></option>
                                <option value="part1">Part 1</option>
                                <option value="part2">Part 2</option>
                                <option value="part3">Part 3</option>
                              </select>
                            </div>
                            <div className="flex items-center">
                              <label className="text-xs mr-2">4</label>
                              <select className="border rounded px-2 py-1 text-xs w-24">
                                <option value=""></option>
                                <option value="part1">Part 1</option>
                                <option value="part2">Part 2</option>
                                <option value="part3">Part 3</option>
                              </select>
                            </div>
                            <div className="flex items-center">
                              <label className="text-xs mr-2">5</label>
                              <select className="border rounded px-2 py-1 text-xs w-24">
                                <option value=""></option>
                                <option value="part1">Part 1</option>
                                <option value="part2">Part 2</option>
                                <option value="part3">Part 3</option>
                              </select>
                            </div>
                            <div className="flex items-center">
                              <label className="text-xs mr-2">6</label>
                              <select className="border rounded px-2 py-1 text-xs w-24">
                                <option value=""></option>
                                <option value="part1">Part 1</option>
                                <option value="part2">Part 2</option>
                                <option value="part3">Part 3</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2 w-auto ml-[18px] h-10">
                          <div className="w-16 flex flex-col gap-2">
                            <div className="flex items-center h-full py-2">
                              <label className="text-xs mr-2">Chk 1</label>
                              <input
                                type="checkbox"
                                className="form-checkbox border-gray-400 rounded ml-2"
                              />
                            </div>
                            <div className="flex items-center h-full py-1">
                              <label className="text-xs mr-2">Chk 2</label>
                              <input
                                type="checkbox"
                                className="form-checkbox border-gray-400 rounded ml-2"
                              />
                            </div>
                            <div className="flex items-center h-full py-2">
                              <label className="text-xs mr-2">Chk 3</label>
                              <input
                                type="checkbox"
                                className="form-checkbox border-gray-400 rounded ml-2"
                              />
                            </div>
                            <div className="flex items-center h-full py-1">
                              <label className="text-xs mr-2">Chk 4</label>
                              <input
                                type="checkbox"
                                className="form-checkbox border-gray-400 rounded ml-2"
                              />
                            </div>
                            <div className="flex items-center h-full py-1">
                              <label className="text-xs mr-2">Chk 5</label>
                              <input
                                type="checkbox"
                                className="form-checkbox border-gray-400 rounded ml-2"
                              />
                            </div>
                            <div className="flex items-center h-full py-2">
                              <label className="text-xs mr-2">Chk 6</label>
                              <input
                                type="checkbox"
                                className="form-checkbox border-gray-400 rounded ml-2"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <div className="w-auto">
                            <table class="w-[500px] text-xs border border-gray-300">
                              <tbody>
                                <tr>
                                  <td class="border border-gray-300 h-44 w-1/2"></td>
                                  <td class="border border-gray-300 h-24 w-1/2"></td>
                                </tr>
                                <tr>
                                  <td
                                    class="border border-gray-300 h-8"
                                    colspan="2"
                                  ></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2 w-auto ">
                          <div className="flex gap-2 w-auto ml-[50px]">
                            <label className="w-auto text-xs">Plan_Reg</label>
                            <div className="w-auto">
                              <input
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[150px]"
                              />
                            </div>
                          </div>

                          <div className="flex gap-2 w-auto ml-[45px]">
                            <label className="w-auto text-xs">QC_Comp</label>
                            <div className="w-auto">
                              <input
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[150px]"
                              />
                            </div>
                          </div>

                          <div className="flex gap-2 w-auto ml-[50px]">
                            <label className="w-auto text-xs">Plan_Upd</label>
                            <div className="w-auto">
                              <input
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[150px]"
                              />
                            </div>
                          </div>

                          <div className="flex gap-2 w-auto ml-4">
                            <label className="w-auto text-xs">UpdPerson</label>
                            <div className="w-auto">
                              <select className="border rounded px-2 py-1 text-xs bg-[#ffff99] w-12 ">
                                <option value=""></option>
                                <option value="part1">Part 1</option>
                                <option value="part2">Part 2</option>
                                <option value="part3">Part 3</option>
                              </select>
                              <input
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[125px] ml-1"
                              />
                            </div>
                          </div>

                          <div className="flex gap-2 w-auto ml-7">
                            <label className="w-auto text-xs">Schedule</label>
                            <div className="flex gap-2 w-auto">
                              <select className="border rounded px-2 py-1 text-xs bg-[#ffff99] w-10 ">
                                <option value=""></option>
                                <option value="part1">Part 1</option>
                                <option value="part2">Part 2</option>
                                <option value="part3">Part 3</option>
                              </select>
                              <input
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-32"
                              />
                            </div>
                          </div>

                          <div className="flex gap-2 w-auto">
                            <label className="w-auto text-xs">
                              Starnat|ManHour_Scale
                            </label>
                            <div className="flex gap-2 w-auto">
                              <input
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-14"
                              />
                              <input
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-16"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Group 8 */}
                      <div className="gap-2 flex mb-4 justify-start mt-4 ml-16">
                        <div className="flex gap-2 w-auto">
                          <label className="w-24  text-xs">
                            PI_Quote_OdPt_No
                          </label>
                          <div className="w-auto">
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-40 ml-1"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-3">
                          <label className="w-20 text-xs">Start_Rev_Days</label>
                          <div className="w-auto flex gap-1">
                            <input
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-14 ml-1"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-10">
                          <label className="w-20 text-xs">End_Rev_Days</label>
                          <div className="w-auto flex gap-1">
                            <input
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-14 ml-1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto w-full">
              <div className="grid grid-cols-12 min-w-auto">
                <div className="col-span-12 me-5 mt-5  ">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-9">
                      {/* Group 9 */}
                      <div className="gap-2 flex mb-4 justify-start mt-4 ml-16">
                        <div className="flex gap-2 w-auto">
                          <label className="w-10  text-xs">PI_Quote</label>
                          <div className="w-auto">
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-40 ml-1"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-3">
                          <label className="w-24 text-xs">
                            In_Inst(TooPcNo)
                          </label>
                          <div className="w-auto flex gap-1">
                            <button className="bg-gray-300 py-1 px-2 rounded text-xs">
                              ScheduleCalc
                            </button>
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-5">
                          <label className="w-10 text-xs">Type</label>
                          <div className="w-auto flex gap-1">
                            <select className="border rounded px-2 py-1 text-xs bg-[#ffff99] w-24 ">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-5">
                          <input
                            type="checkbox"
                            className="form-checkbox border-gray-400 rounded ml-2"
                          />
                          <label className="text-xs mr-2 mt-1">
                            Money_Object
                          </label>

                          <div className="w-auto flex gap-1">
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24ml-1"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Group 10 */}
                      <div className="gap-2 flex mb-4 justify-start mt-4 ">
                        <div className="flex gap-2 w-auto">
                          <table className="table-auto bg-white border-2 border-black text-xs">
                            <thead className="sticky top-0 z-10 bg-white">
                              <tr className="text-black font-bold text-xs">
                                <th
                                  colSpan="2"
                                  className="py-1 px-2 text-center"
                                >
                                  <button className="bg-gray-300 py-1 px-2 rounded text-xs text-gray-500">
                                    Quote_Info_View
                                  </button>
                                </th>
                                <th className="py-1 px-3 w-auto" rowSpan="2">
                                  <button className="bg-gray-300 py-1 px-2 rounded text-xs text-gray-500 h-10">
                                    All ➔
                                  </button>
                                </th>
                                <th className="py-1 px-10 w-auto" rowSpan="2">
                                  Plan_Process
                                </th>
                                <th className="py-1 px-3 w-auto" rowSpan="2">
                                  Plan Machine(min)
                                </th>
                                <th className="py-1 px-3 w-auto" rowSpan="2">
                                  PlanMachine (min)|(D)
                                </th>
                                <th className="py-1 px-10 w-auto" rowSpan="2">
                                  Time/Proce/Sche
                                </th>
                                <th className="py-1 px-3 w-auto" rowSpan="2">
                                  Plan_Date
                                </th>
                                <th className="py-1 px-20 w-auto" rowSpan="2">
                                  Instructions
                                </th>
                                <th className="py-1 px-3 w-auto" rowSpan="2">
                                  Result_Date
                                </th>
                                <th className="py-1 px-3 w-auto" rowSpan="2">
                                  Result Machine (min/Lot)
                                </th>
                                <th className="py-1 px-3 w-auto" rowSpan="2">
                                  Result Person (min/Lot)
                                </th>
                                <th className="py-1 px-3 w-auto" rowSpan="2">
                                  Result Qty
                                </th>
                                <th className="py-1 px-3 w-auto" rowSpan="2">
                                  <button className="bg-gray-300 py-1 px-2 rounded text-xs text-gray-500">
                                    ASP Schedule Reflect
                                  </button>
                                </th>
                                <th className="py-1 px-3 w-auto" rowSpan="2">
                                  <div className="flex gap-1">
                                    <button className="bg-gray-300 py-1 px-2 rounded text-xs text-gray-500">
                                      Schedule_BK
                                    </button>
                                    <button className="bg-gray-300 py-1 px-2 rounded text-xs text-gray-500">
                                      Schedule_RE
                                    </button>
                                  </div>
                                </th>
                                <th className="py-1 px-2 w-auto" rowSpan="2">
                                  PI_Machine Lot_Time (min/Lot)
                                </th>
                                <th className="py-1 px-2 w-auto" rowSpan="2">
                                  PI_Person Lot_time (min/Lot)
                                </th>
                              </tr>
                              <tr className="text-black font-bold text-xs">
                                <th className="py-1 px-2 w-auto">No.</th>
                                <th className="py-1 px-5 w-auto">M|P(m/p)</th>
                              </tr>
                            </thead>

                            <tbody>
                              {rows.map((row, rowIndex) => {
                                return (
                                  <tr
                                    key={rowIndex}
                                    className="border border-black border-dashed"
                                  >
                                    {/* Column for Row Number */}
                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto">
                                      {rowIndex + 1}
                                    </td>

                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                                      <div className="text-center">
                                        {row.mp}
                                      </div>
                                    </td>
                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                                      <button className="bg-gray-300 py-1 px-2 rounded text-xs text-gray-500 h-8 font-bold">
                                        ➔
                                      </button>
                                    </td>
                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                                      <div className="text-center">
                                        {row.plan_process}
                                      </div>
                                    </td>
                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                                      <div className="text-center">
                                        {row.min}
                                      </div>
                                    </td>
                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                                      <div className="text-center">
                                        {row.mind}
                                      </div>
                                    </td>
                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                                      <div className="text-center">
                                        {row.time}
                                      </div>
                                    </td>
                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                                      <div className="text-center">
                                        {row.plan_date}
                                      </div>
                                    </td>
                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                                      <div className="text-center">
                                        {row.instructions}
                                      </div>
                                    </td>
                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                                      <div className="text-center">
                                        {row.result_date}
                                      </div>
                                    </td>
                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                                      <div className="text-center">
                                        {row.resultmachine}
                                      </div>
                                    </td>
                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                                      <div className="text-center">
                                        {row.result_person}
                                      </div>
                                    </td>
                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                                      <div className="text-center">
                                        {row.resultqty}
                                      </div>
                                    </td>
                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                                      <div className="text-center">
                                        {row.asp}
                                      </div>
                                    </td>
                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                                      <div className="text-center">
                                        {row.bk}
                                      </div>
                                    </td>
                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                                      <div className="text-center">
                                        {row.pi_machine}
                                      </div>
                                    </td>
                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                                      <div className="text-center">
                                        {row.pi_person}
                                      </div>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="gap-4 flex mb-4  mt-4 ml-16 flex-row flex-wrap min-w-[2000px] justify-between ">
                    <div class="bg-white p-3 mt-5">
                      <div class="flex flex-wrap gap-4">
                        <button class="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-auto text-center">
                          Plan Copy <br /> 引用(F1)
                        </button>
                        <button class="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-auto text-center">
                          Edit <br /> 編集 (F2)
                        </button>
                        <button class="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-auto text-center">
                          New Add <br /> 追加 (F3)
                        </button>
                        <button class="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-auto text-center">
                          Sub-Con <br /> 手配 (F4)
                        </button>
                        <button class="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-auto text-center">
                          Plan <br /> 計画 (F5)
                        </button>
                        <button class="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-auto text-center">
                          P Sheet All <br /> 全頁 (F6)
                        </button>
                        <button class="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-auto text-center">
                          P Sheet 1P <br /> 1頁 (F7)
                        </button>
                        <button class="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-auto text-center">
                          NextParts <br /> 別部 (F8)
                        </button>
                        <button class="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-auto text-center">
                          Save <br /> 登録 (F9)
                        </button>
                        <button class="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-auto text-center">
                          Delete <br /> 削除 (F10)
                        </button>
                        <button class="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-sm text-white w-auto text-center">
                          NextInput <br /> 次へ (F11)
                        </button>
                        <button class="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-auto text-center">
                          Exit <br /> 終了 (F12)
                        </button>
                      </div>
                    </div>

                    <div class="p-4  max-w-lg mr-32">
                      <div class="grid grid-cols-6 gap-2 p-1">
                        <label
                          for="max-end-no"
                          class="col-span-1 flex items-center text-xs"
                        >
                          MaxEnd_No
                        </label>
                        <input
                          id="max-end-no"
                          type="text"
                          class="col-span-1 border border-gray-300 rounded p-1 w-16"
                        />
                        <input
                          id="max-end-no-2"
                          type="text"
                          class="col-span-1 border border-gray-300 rounded p-1 w-16"
                        />

                        <label
                          for="total"
                          class="col-span-1 flex items-center text-xs mr-1"
                        >
                          Total
                        </label>
                        <input
                          id="total"
                          type="text"
                          class="col-span-2 border border-gray-300 rounded p-1 w-24"
                        />

                        <label
                          for="now-no"
                          class="col-span-1 flex items-center text-xs"
                        >
                          Now_No
                        </label>
                        <input
                          id="now-no"
                          type="text"
                          class="col-span-1 border  rounded p-1 w-16"
                        />

                        <label
                          for="re-total"
                          class="col-span-1 flex items-center text-xs ml-20"
                        >
                          Re_Total
                        </label>
                        <input
                          id="re-total"
                          type="text"
                          class="col-span-3 border  p-1 w-[100px] ml-20"
                        />

                        <label
                          for="re-pr-qty"
                          class="col-span-1 flex items-center text-xs"
                        >
                          Re_Pr_Qty
                        </label>
                        <input
                          id="re-pr-qty"
                          type="text"
                          class="col-span-1 border  p-1 w-16"
                        />

                        <label
                          for="re-total-n"
                          class="col-span-1 flex items-center text-xs ml-16"
                        >
                          Re_Total_N
                        </label>
                        <input
                          id="re-total-n"
                          type="text"
                          class="col-span-3 border border-gray-300 rounded p-1 w-[100px] ml-20"
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
  );
}
