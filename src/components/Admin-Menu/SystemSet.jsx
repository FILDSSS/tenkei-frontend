import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import DataTable from "react-data-table-component";
import axios from "axios";

export function SystemSet() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [editedData, setEditedData] = useState({});
  const [isChanged, setIsChanged] = useState(false);
  const editedDataRef = useRef(editedData);

  const fetchSet = async () => {
    try {
      const response = await axios.get("http://localhost:4000/set/fetch-set");
      const formattedData = response.data.data.set.map((row) => ({
        ...row,
        Cost_Save_Time: formatDateForInput(row.Cost_Save_Time),
        Cost_Write_Time: formatDateForInput(row.Cost_Write_Time),
        St_Target_Week1: formatDateForInput(row.St_Target_Week1),
        Ed_Target_Week1: formatDateForInput(row.Ed_Target_Week1),
        St_Target_Week2: formatDateForInput(row.St_Target_Week2),
        Ed_Target_Week2: formatDateForInput(row.Ed_Target_Week2),
        St_Target_Week3: formatDateForInput(row.St_Target_Week3),
        Ed_Target_Week3: formatDateForInput(row.Ed_Target_Week3),
        St_Target_Week4: formatDateForInput(row.St_Target_Week4),
        Ed_Target_Week4: formatDateForInput(row.Ed_Target_Week4),
        St_Target_Week5: formatDateForInput(row.St_Target_Week5),
        Ed_Target_Week5: formatDateForInput(row.Ed_Target_Week5),
        Settles_Day: formatDateForInput(row.Settles_Day),
      }));
      // console.log("Fetched data:", response.data);
      setData(formattedData);
    } catch (error) {
      // console.error("Error fetching set:", error);
    }
  };

  useEffect(() => {
    fetchSet();
  }, []);

  useEffect(() => {
    const initialEditedData = data.reduce((acc, row) => {
      if (!editedData[row.ID]) {
        acc[row.ID] = { ...row };
      }
      return acc;
    }, {});

    if (Object.keys(initialEditedData).length > 0) {
      setEditedData(initialEditedData);
    }
  }, [data]);

  const formatDateForInput = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);

    if (isNaN(date)) return "";

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const handleChange = (e, Id, field) => {
    const newValue = e.target.value;

    if (editedDataRef.current[Id]?.[field] !== newValue) {
      setIsChanged(true);

      const updatedData = { ...editedDataRef.current };

      updatedData[Id] = updatedData[Id] || {};
      updatedData[Id][field] = newValue;

      setEditedData(updatedData);
      editedDataRef.current = updatedData;
    }
  };

  const handleSave = async (Id, field) => {
    const newValue = editedData[Id]?.[field];
    const oldValue = data.find((row) => row.ID === Id)?.[field];

    if (newValue !== oldValue) {
      try {
        const payload = {
          ID: Id,
          [field]: newValue === "" ? null : newValue,
        };

        const response = await axios.put(
          "http://localhost:4000/set/update-set",
          payload
        );

        const updatedData = [...data];
        const rowIndex = updatedData.findIndex((row) => row.ID === Id);
        if (rowIndex !== -1) {
          updatedData[rowIndex][field] = newValue;
          setData(updatedData);
        }

        alert("Edit Successfully!");
        setIsChanged(false);
      } catch (error) {
        alert("Something went wrong!");
        console.error(error);
      }
    }
  };

  const handleKeyDown = (e, index, field) => {
    if (e.key === "Enter") {
      handleSave(index, field);
      setIsChanged(false);
    }
  };

  const handleCheckboxChange = (e, row, field) => {
    const isChecked = e.target.checked;

    // console.log(`Row Order_No: ${row.Order_No}, Field: ${field}, Checked: ${isChecked}`);

    // setData((prevData) =>
    //   prevData.map((item) =>
    //     item.Order_No === row.Order_No ? { ...item, [field]: isChecked } : item
    //   )
    // );
  };

  const filteredData = data.filter((row) => {
    return Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const columns = [
    {
      name: "ID",
      selector: (row) => <span>{row.ID}</span>,
      width: "100px",
    },
    {
      name: "Use",
      selector: (row) => (
        <input
          type="checkbox"
          checked={row.Use ?? false}
          style={{ pointerEvents: "none" }}
          onChange={(e) => handleCheckboxChange(e, row, "Use")}
          className="mx-auto"
        />
      ),
      width: "180px",
    },
    {
      name: "Version",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Version ?? row.Version ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Version")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Version")}
        />
      ),
      width: "190px",
    },
    {
      name: "Password",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Password ?? row.Password ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Password")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Password")}
        />
      ),
      width: "190px",
    },
    {
      name: "Language",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Language ?? row.Language ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Language")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Language")}
        />
      ),
      width: "190px",
    },
    {
      name: "Od_No_Digits",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={editedData[row.ID]?.Od_No_Digits ?? row.Od_No_Digits ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Od_No_Digits")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Od_No_Digits")}
        />
      ),
      width: "190px",
    },
    {
      name: "SV_Name",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.SV_Name ?? row.SV_Name ?? ""}
          onChange={(e) => handleChange(e, row.ID, "SV_Name")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "SV_Name")}
        />
      ),
      width: "190px",
    },
    {
      name: "TENKEI",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.TENKEI ?? row.TENKEI ?? ""}
          onChange={(e) => handleChange(e, row.ID, "TENKEI")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "TENKEI")}
        />
      ),
      width: "220px",
    },
    {
      name: "Sales_Docu",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Sales_Docu ?? row.Sales_Docu ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Sales_Docu")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Sales_Docu")}
        />
      ),
      width: "220px",
    },
    {
      name: "Sales_Docu_Type",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.ID]?.Sales_Docu_Type ?? row.Sales_Docu_Type ?? ""
          }
          onChange={(e) => handleChange(e, row.ID, "Sales_Docu_Type")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Sales_Docu_Type")}
        />
      ),
      width: "220px",
    },
    {
      name: "Product_Docu",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          style={{
            width: "fit-content",
            minWidth: "320px",
            maxWidth: "100%",
          }}
          value={editedData[row.ID]?.Product_Docu ?? row.Product_Docu ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Product_Docu")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Product_Docu")}
        />
      ),
      width: "380px",
    },
    {
      name: "Product_Docu_Type",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.ID]?.Product_Docu_Type ?? row.Product_Docu_Type ?? ""
          }
          onChange={(e) => handleChange(e, row.ID, "Product_Docu_Type")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Product_Docu_Type")}
        />
      ),
      width: "190px",
    },
    {
      name: "Procure_Docu",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Procure_Docu ?? row.Procure_Docu ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Procure_Docu")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Procure_Docu")}
        />
      ),
      width: "190px",
    },
    {
      name: "Procure_Docu_Type",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.ID]?.Procure_Docu_Type ?? row.Procure_Docu_Type ?? ""
          }
          onChange={(e) => handleChange(e, row.ID, "Procure_Docu_Type")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Procure_Docu_Type")}
        />
      ),
      width: "190px",
    },
    {
      name: "Outside_Docu",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Outside_Docu ?? row.Outside_Docu ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Outside_Docu")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Outside_Docu")}
        />
      ),
      width: "190px",
    },
    {
      name: "Outside_Docu_Type",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.ID]?.Outside_Docu_Type ?? row.Outside_Docu_Type ?? ""
          }
          onChange={(e) => handleChange(e, row.ID, "Outside_Docu_Type")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Outside_Docu_Type")}
        />
      ),
      width: "190px",
    },
    {
      name: "Inspect_Docu",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Inspect_Docu ?? row.Inspect_Docu ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Inspect_Docu")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Inspect_Docu")}
        />
      ),
      width: "190px",
    },
    {
      name: "Inspect_Docu_Type",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.ID]?.Inspect_Docu_Type ?? row.Inspect_Docu_Type ?? ""
          }
          onChange={(e) => handleChange(e, row.ID, "Inspect_Docu_Type")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Inspect_Docu_Type")}
        />
      ),
      width: "190px",
    },
    {
      name: "Send_Docu",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Send_Docu ?? row.Send_Docu ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Send_Docu")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Send_Docu")}
        />
      ),
      width: "190px",
    },
    {
      name: "Send_Docu_Type",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Send_Docu_Type ?? row.Send_Docu_Type ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Send_Docu_Type")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Send_Docu_Type")}
        />
      ),
      width: "190px",
    },
    {
      name: "Supple_Docu",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          style={{
            width: "fit-content",
            minWidth: "300px",
            maxWidth: "100%",
          }}
          value={editedData[row.ID]?.Supple_Docu ?? row.Supple_Docu ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Supple_Docu")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Supple_Docu")}
        />
      ),
      width: "350px",
    },
    {
      name: "Supple_Docu_Type",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.ID]?.Supple_Docu_Type ?? row.Supple_Docu_Type ?? ""
          }
          onChange={(e) => handleChange(e, row.ID, "Supple_Docu_Type")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Supple_Docu_Type")}
        />
      ),
      width: "190px",
    },
    {
      name: "SOrder_CSV",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.SOrder_CSV ?? row.SOrder_CSV ?? ""}
          onChange={(e) => handleChange(e, row.ID, "SOrder_CSV")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "SOrder_CSV")}
        />
      ),
      width: "190px",
    },
    {
      name: "SOrder_CSV_BK",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.SOrder_CSV_BK ?? row.SOrder_CSV_BK ?? ""}
          onChange={(e) => handleChange(e, row.ID, "SOrder_CSV_BK")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "SOrder_CSV_BK")}
        />
      ),
      width: "190px",
    },
    {
      name: "SOrder_CSV_CP",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.SOrder_CSV_CP ?? row.SOrder_CSV_CP ?? ""}
          onChange={(e) => handleChange(e, row.ID, "SOrder_CSV_CP")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "SOrder_CSV_CP")}
        />
      ),
      width: "190px",
    },
    {
      name: "Order_CSV",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          style={{
            width: "fit-content",
            minWidth: "300px",
            maxWidth: "100%",
          }}
          value={editedData[row.ID]?.Order_CSV ?? row.Order_CSV ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Order_CSV")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Order_CSV")}
        />
      ),
      width: "350px",
    },
    {
      name: "Order_CSV_BK",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          style={{
            width: "fit-content",
            minWidth: "300px",
            maxWidth: "100%",
          }}
          value={editedData[row.ID]?.Order_CSV_BK ?? row.Order_CSV_BK ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Order_CSV_BK")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Order_CSV_BK")}
        />
      ),
      width: "350px",
    },
    {
      name: "Order_CSV_CP",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          style={{
            width: "fit-content",
            minWidth: "300px",
            maxWidth: "100%",
          }}
          value={editedData[row.ID]?.Order_CSV_CP ?? row.Order_CSV_CP ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Order_CSV_CP")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Order_CSV_CP")}
        />
      ),
      width: "350px",
    },
    {
      name: "Procure_CSV",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          style={{
            width: "fit-content",
            minWidth: "300px",
            maxWidth: "100%",
          }}
          value={editedData[row.ID]?.Procure_CSV ?? row.Procure_CSV ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Procure_CSV")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Procure_CSV")}
        />
      ),
      width: "350px",
    },
    {
      name: "Procure_CSV_BK",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          style={{
            width: "fit-content",
            minWidth: "300px",
            maxWidth: "100%",
          }}
          value={editedData[row.ID]?.Procure_CSV_BK ?? row.Procure_CSV_BK ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Procure_CSV_BK")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Procure_CSV_BK")}
        />
      ),
      width: "350px",
    },
    {
      name: "Procure_CSV_CP",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          style={{
            width: "fit-content",
            minWidth: "300px",
            maxWidth: "100%",
          }}
          value={editedData[row.ID]?.Procure_CSV_CP ?? row.Procure_CSV_CP ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Procure_CSV_CP")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Procure_CSV_CP")}
        />
      ),
      width: "350px",
    },
    {
      name: "Cost_CSV",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          style={{
            width: "fit-content",
            minWidth: "300px",
            maxWidth: "100%",
          }}
          value={editedData[row.ID]?.Cost_CSV ?? row.Cost_CSV ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Cost_CSV")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Cost_CSV")}
        />
      ),
      width: "350px",
    },
    {
      name: "Cost_Save",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Cost_Save}
          style={{ pointerEvents: "none" }}
          onChange={(e) => handleCheckboxChange(e, row, "Cost_Save")}
          className="mx-auto"
        />
      ),
      width: "180px",
    },
    {
      name: "Cost_Save_Time",
      selector: (row) => {
        const date = row.Cost_Save_Time ? new Date(row.Cost_Save_Time) : null;
        if (!date || isNaN(date)) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "190px",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="date"
          value={
            editedData[row.ID]?.Cost_Save_Time ??
            formatDateForInput(row.Cost_Save_Time) ??
            ""
          }
          onChange={(e) => handleChange(e, row.ID, "Cost_Save_Time")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Cost_Save_Time")}
        />
      ),
    },
    {
      name: "Cost_Write",
      selector: (row) => (
        <input
          type="checkbox"
          checked={row.Cost_Write}
          style={{ pointerEvents: "none" }}
          onChange={(e) => handleCheckboxChange(e, row, "Cost_Write")}
          className="mx-auto"
        />
      ),
      width: "180px",
    },
    {
      name: "Cost_Write_Time",
      selector: (row) => {
        const date = row.Cost_Write_Time ? new Date(row.Cost_Write_Time) : null;
        if (!date || isNaN(date)) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "190px",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="date"
          value={
            editedData[row.ID]?.Cost_Write_Time ??
            formatDateForInput(row.Cost_Write_Time) ??
            ""
          }
          onChange={(e) => handleChange(e, row.ID, "Cost_Write_Time")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Cost_Write_Time")}
        />
      ),
    },
    {
      name: "WIP_CSV",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.WIP_CSV ?? row.WIP_CSV ?? ""}
          onChange={(e) => handleChange(e, row.ID, "WIP_CSV")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "WIP_CSV")}
        />
      ),
      width: "220px",
    },
    {
      name: "WIP_CSV_Writing",
      selector: (row) => (
        <input
          type="checkbox"
          checked={row.WIP_CSV_Writing}
          style={{ pointerEvents: "none" }}
          onChange={(e) => handleCheckboxChange(e, row, "WIP_CSV_Writing")}
          className="mx-auto"
        />
      ),
      width: "180px",
    },
    {
      name: "TENKEI_CSV",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.TENKEI_CSV ?? row.TENKEI_CSV ?? ""}
          onChange={(e) => handleChange(e, row.ID, "TENKEI_CSV")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "TENKEI_CSV")}
        />
      ),
      width: "220px",
    },
    {
      name: "Delivery_CSV",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Delivery_CSV ?? row.Delivery_CSV ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Delivery_CSV")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Delivery_CSV")}
        />
      ),
      width: "250px",
    },
    {
      name: "Label_CSV",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          style={{
            width: "fit-content",
            minWidth: "250px",
            maxWidth: "100%",
          }}
          value={editedData[row.ID]?.Label_CSV ?? row.Label_CSV ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Label_CSV")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Label_CSV")}
        />
      ),
      width: "300px",
    },
    {
      name: "Label_CSV_FG",
      selector: (row) => (
        <input
          type="checkbox"
          checked={row.Label_CSV_FG}
          style={{ pointerEvents: "none" }}
          onChange={(e) => handleCheckboxChange(e, row, "Label_CSV_FG")}
          className="mx-auto"
        />
      ),
      width: "180px",
    },
    {
      name: "ASPROVA",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.ASPROVA ?? row.ASPROVA ?? ""}
          onChange={(e) => handleChange(e, row.ID, "ASPROVA")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "ASPROVA")}
        />
      ),
      width: "200px",
    },
    {
      name: "As_Operation_Csv",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.ID]?.As_Operation_Csv ?? row.As_Operation_Csv ?? ""
          }
          onChange={(e) => handleChange(e, row.ID, "As_Operation_Csv")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "As_Operation_Csv")}
        />
      ),
      width: "200px",
    },
    {
      name: "As_Resource_Csv",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.ID]?.As_Resource_Csv ?? row.As_Resource_Csv ?? ""
          }
          onChange={(e) => handleChange(e, row.ID, "As_Resource_Csv")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "As_Resource_Csv")}
        />
      ),
      width: "200px",
    },
    {
      name: "As_Plan_Csv",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.As_Plan_Csv ?? row.As_Plan_Csv ?? ""}
          onChange={(e) => handleChange(e, row.ID, "As_Plan_Csv")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "As_Plan_Csv")}
        />
      ),
      width: "200px",
    },
    {
      name: "As_Use_Csv",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.As_Use_Csv ?? row.As_Use_Csv ?? ""}
          onChange={(e) => handleChange(e, row.ID, "As_Use_Csv")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "As_Use_Csv")}
        />
      ),
      width: "200px",
    },
    {
      name: "As_Input_Csv",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.As_Input_Csv ?? row.As_Input_Csv ?? ""}
          onChange={(e) => handleChange(e, row.ID, "As_Input_Csv")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "As_Input_Csv")}
        />
      ),
      width: "200px",
    },
    {
      name: "As_Schedule_Csv",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.ID]?.As_Schedule_Csv ?? row.As_Schedule_Csv ?? ""
          }
          onChange={(e) => handleChange(e, row.ID, "As_Schedule_Csv")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "As_Schedule_Csv")}
        />
      ),
      width: "200px",
    },
    {
      name: "Us_Group_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Us_Group_CD ?? row.Us_Group_CD ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Us_Group_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Us_Group_CD")}
        />
      ),
      width: "200px",
    },
    {
      name: "Us_Group_Name",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Us_Group_Name ?? row.Us_Group_Name ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Us_Group_Name")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Us_Group_Name")}
        />
      ),
      width: "200px",
    },
    {
      name: "Us_Group_Abb",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Us_Group_Abb ?? row.Us_Group_Abb ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Us_Group_Abb")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Us_Group_Abb")}
        />
      ),
      width: "200px",
    },
    {
      name: "Us_Group_Symbol",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.ID]?.Us_Group_Symbol ?? row.Us_Group_Symbol ?? ""
          }
          onChange={(e) => handleChange(e, row.ID, "Us_Group_Symbol")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Us_Group_Symbol")}
        />
      ),
      width: "200px",
    },
    {
      name: "Us_Group_Mark",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Us_Group_Mark ?? row.Us_Group_Mark ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Us_Group_Mark")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Us_Group_Mark")}
        />
      ),
      width: "200px",
    },
    {
      name: "Us_Group_TEL",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Us_Group_TEL ?? row.Us_Group_TEL ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Us_Group_TEL")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Us_Group_TEL")}
        />
      ),
      width: "200px",
    },
    {
      name: "Us_Group_FAX",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Us_Group_FAX ?? row.Us_Group_FAX ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Us_Group_FAX")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Us_Group_FAX")}
        />
      ),
      width: "200px",
    },
    {
      name: "Us_Office_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Us_Office_CD ?? row.Us_Office_CD ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Us_Office_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Us_Office_CD")}
        />
      ),
      width: "200px",
    },
    {
      name: "Us_Office_Name",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Us_Office_Name ?? row.Us_Office_Name ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Us_Office_Name")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Us_Office_Name")}
        />
      ),
      width: "200px",
    },
    {
      name: "Us_Office_Abb",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Us_Office_Abb ?? row.Us_Office_Abb ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Us_Office_Abb")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Us_Office_Abb")}
        />
      ),
      width: "200px",
    },
    {
      name: "Us_Office_Symbol",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.ID]?.Us_Office_Symbol ?? row.Us_Office_Symbol ?? ""
          }
          onChange={(e) => handleChange(e, row.ID, "Us_Office_Symbol")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Us_Office_Symbol")}
        />
      ),
      width: "200px",
    },
    {
      name: "Us_Office_Mark",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Us_Office_Mark ?? row.Us_Office_Mark ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Us_Office_Mark")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Us_Office_Mark")}
        />
      ),
      width: "200px",
    },
    {
      name: "St_Target_Week1",
      selector: (row) => {
        const date = row.St_Target_Week1 ? new Date(row.St_Target_Week1) : null;
        if (!date || isNaN(date)) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "190px",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="date"
          value={
            editedData[row.ID]?.St_Target_Week1 ??
            formatDateForInput(row.St_Target_Week1) ??
            ""
          }
          onChange={(e) => handleChange(e, row.ID, "St_Target_Week1")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "St_Target_Week1")}
        />
      ),
    },
    {
      name: "Ed_Target_Week1",
      selector: (row) => {
        const date = row.Ed_Target_Week1 ? new Date(row.Ed_Target_Week1) : null;
        if (!date || isNaN(date)) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "190px",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="date"
          value={
            editedData[row.ID]?.Ed_Target_Week1 ??
            formatDateForInput(row.Ed_Target_Week1) ??
            ""
          }
          onChange={(e) => handleChange(e, row.ID, "Ed_Target_Week1")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Ed_Target_Week1")}
        />
      ),
    },
    {
      name: "St_Target_Week2",
      selector: (row) => {
        const date = row.St_Target_Week2 ? new Date(row.St_Target_Week2) : null;
        if (!date || isNaN(date)) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "190px",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="date"
          value={
            editedData[row.ID]?.St_Target_Week2 ??
            formatDateForInput(row.St_Target_Week2) ??
            ""
          }
          onChange={(e) => handleChange(e, row.ID, "St_Target_Week2")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "St_Target_Week2")}
        />
      ),
    },
    {
      name: "Ed_Target_Week2",
      selector: (row) => {
        const date = row.Ed_Target_Week2 ? new Date(row.Ed_Target_Week2) : null;
        if (!date || isNaN(date)) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "190px",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="date"
          value={
            editedData[row.ID]?.Ed_Target_Week2 ??
            formatDateForInput(row.Ed_Target_Week2) ??
            ""
          }
          onChange={(e) => handleChange(e, row.ID, "Ed_Target_Week2")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Ed_Target_Week2")}
        />
      ),
    },
    {
      name: "St_Target_Week3",
      selector: (row) => {
        const date = row.St_Target_Week3 ? new Date(row.St_Target_Week3) : null;
        if (!date || isNaN(date)) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "190px",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="date"
          value={
            editedData[row.ID]?.St_Target_Week3 ??
            formatDateForInput(row.St_Target_Week3) ??
            ""
          }
          onChange={(e) => handleChange(e, row.ID, "St_Target_Week3")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "St_Target_Week3")}
        />
      ),
    },
    {
      name: "Ed_Target_Week3",
      selector: (row) => {
        const date = row.Ed_Target_Week3 ? new Date(row.Ed_Target_Week3) : null;
        if (!date || isNaN(date)) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "190px",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="date"
          value={
            editedData[row.ID]?.Ed_Target_Week3 ??
            formatDateForInput(row.Ed_Target_Week3) ??
            ""
          }
          onChange={(e) => handleChange(e, row.ID, "Ed_Target_Week3")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Ed_Target_Week3")}
        />
      ),
    },
    {
      name: "St_Target_Week4",
      selector: (row) => {
        const date = row.St_Target_Week4 ? new Date(row.St_Target_Week4) : null;
        if (!date || isNaN(date)) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "190px",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="date"
          value={
            editedData[row.ID]?.St_Target_Week4 ??
            formatDateForInput(row.St_Target_Week4) ??
            ""
          }
          onChange={(e) => handleChange(e, row.ID, "St_Target_Week4")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "St_Target_Week4")}
        />
      ),
    },
    {
      name: "Ed_Target_Week4",
      selector: (row) => {
        const date = row.Ed_Target_Week4 ? new Date(row.Ed_Target_Week4) : null;
        if (!date || isNaN(date)) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "190px",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="date"
          value={
            editedData[row.ID]?.Ed_Target_Week4 ??
            formatDateForInput(row.Ed_Target_Week4) ??
            ""
          }
          onChange={(e) => handleChange(e, row.ID, "Ed_Target_Week4")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Ed_Target_Week4")}
        />
      ),
    },
    {
      name: "St_Target_Week5",
      selector: (row) => {
        const date = row.St_Target_Week5 ? new Date(row.St_Target_Week5) : null;
        if (!date || isNaN(date)) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "190px",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="date"
          value={
            editedData[row.ID]?.St_Target_Week5 ??
            formatDateForInput(row.St_Target_Week5) ??
            ""
          }
          onChange={(e) => handleChange(e, row.ID, "St_Target_Week5")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "St_Target_Week5")}
        />
      ),
    },
    {
      name: "Ed_Target_Week5",
      selector: (row) => {
        const date = row.Ed_Target_Week5 ? new Date(row.Ed_Target_Week5) : null;
        if (!date || isNaN(date)) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "190px",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="date"
          value={
            editedData[row.ID]?.Ed_Target_Week5 ??
            formatDateForInput(row.Ed_Target_Week5) ??
            ""
          }
          onChange={(e) => handleChange(e, row.ID, "Ed_Target_Week5")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Ed_Target_Week5")}
        />
      ),
    },
    {
      name: "Od_DrawNo_Reflect",
      selector: (row) => (
        <input
          type="checkbox"
          checked={row.Od_DrawNo_Reflect}
          style={{ pointerEvents: "none" }}
          onChange={(e) => handleCheckboxChange(e, row, "Od_DrawNo_Reflect")}
          className="mx-auto"
        />
      ),
      width: "180px",
    },
    {
      name: "Pl_Quote_Delivery",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.ID]?.Pl_Quote_Delivery ?? row.Pl_Quote_Delivery ?? ""
          }
          onChange={(e) => handleChange(e, row.ID, "Pl_Quote_Delivery")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Pl_Quote_Delivery")}
        />
      ),
      width: "200px",
    },
    {
      name: "Pl_Abst_St_Days",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.ID]?.Pl_Abst_St_Days ?? row.Pl_Abst_St_Days ?? ""
          }
          onChange={(e) => handleChange(e, row.ID, "Pl_Abst_St_Days")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Pl_Abst_St_Days")}
        />
      ),
      width: "190px",
    },
    {
      name: "Pl_Abst_Ed_Days",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.ID]?.Pl_Abst_Ed_Days ?? row.Pl_Abst_Ed_Days ?? ""
          }
          onChange={(e) => handleChange(e, row.ID, "Pl_Abst_Ed_Days")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Pl_Abst_Ed_Days")}
        />
      ),
      width: "190px",
    },
    {
      name: "Sc_Make_Type",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Sc_Make_Type ?? row.Sc_Make_Type ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Sc_Make_Type")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Sc_Make_Type")}
        />
      ),
      width: "200px",
    },
    {
      name: "Sc_Stagnat_Time",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.ID]?.Sc_Stagnat_Time ?? row.Sc_Stagnat_Time ?? ""
          }
          onChange={(e) => handleChange(e, row.ID, "Sc_Stagnat_Time")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Sc_Stagnat_Time")}
        />
      ),
      width: "190px",
    },
    {
      name: "Sc_Stagnat_Scale",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.ID]?.Sc_Stagnat_Scale ?? row.Sc_Stagnat_Scale ?? ""
          }
          onChange={(e) => handleChange(e, row.ID, "Sc_Stagnat_Scale")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Sc_Stagnat_Scale")}
        />
      ),
      width: "190px",
    },
    {
      name: "Sc_Person_Scale",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.ID]?.Sc_Person_Scale ?? row.Sc_Person_Scale ?? ""
          }
          onChange={(e) => handleChange(e, row.ID, "Sc_Person_Scale")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Sc_Person_Scale")}
        />
      ),
      width: "190px",
    },
    {
      name: "Sc_Machine_Scale",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.ID]?.Sc_Machine_Scale ?? row.Sc_Machine_Scale ?? ""
          }
          onChange={(e) => handleChange(e, row.ID, "Sc_Machine_Scale")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Sc_Machine_Scale")}
        />
      ),
      width: "190px",
    },
    {
      name: "Sc_Outside_Scale",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.ID]?.Sc_Outside_Scale ?? row.Sc_Outside_Scale ?? ""
          }
          onChange={(e) => handleChange(e, row.ID, "Sc_Outside_Scale")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Sc_Outside_Scale")}
        />
      ),
      width: "190px",
    },
    {
      name: "Sc_ManHour_Scale",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.ID]?.Sc_ManHour_Scale ?? row.Sc_ManHour_Scale ?? ""
          }
          onChange={(e) => handleChange(e, row.ID, "Sc_ManHour_Scale")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Sc_ManHour_Scale")}
        />
      ),
      width: "190px",
    },
    {
      name: "Ps_Delivery1",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Ps_Delivery1 ?? row.Ps_Delivery1 ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Ps_Delivery1")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Ps_Delivery1")}
        />
      ),
      width: "200px",
    },
    {
      name: "Ps_Delivery2",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Ps_Delivery2 ?? row.Ps_Delivery2 ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Ps_Delivery2")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Ps_Delivery2")}
        />
      ),
      width: "200px",
    },
    {
      name: "Ps_Delivery3",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Ps_Delivery3 ?? row.Ps_Delivery3 ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Ps_Delivery3")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Ps_Delivery3")}
        />
      ),
      width: "200px",
    },
    {
      name: "Ps_Delivery4",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Ps_Delivery4 ?? row.Ps_Delivery4 ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Ps_Delivery4")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Ps_Delivery4")}
        />
      ),
      width: "200px",
    },
    {
      name: "Ps_Draw_No_View",
      selector: (row) => (
        <input
          type="checkbox"
          checked={row.Ps_Draw_No_View}
          style={{ pointerEvents: "none" }}
          onChange={(e) => handleCheckboxChange(e, row, "Ps_Draw_No_View")}
          className="mx-auto"
        />
      ),
      width: "180px",
    },
    {
      name: "Ps_Entry_Text1",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Ps_Entry_Text1 ?? row.Ps_Entry_Text1 ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Ps_Entry_Text1")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Ps_Entry_Text1")}
        />
      ),
      width: "200px",
    },
    {
      name: "Ps_Entry_Text2",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Ps_Entry_Text2 ?? row.Ps_Entry_Text2 ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Ps_Entry_Text2")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Ps_Entry_Text2")}
        />
      ),
      width: "200px",
    },
    {
      name: "Ps_Entry_Text3",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Ps_Entry_Text3 ?? row.Ps_Entry_Text3 ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Ps_Entry_Text3")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Ps_Entry_Text3")}
        />
      ),
      width: "200px",
    },
    {
      name: "Ps_Under_Text",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Ps_Under_Text ?? row.Ps_Under_Text ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Ps_Under_Text")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Ps_Under_Text")}
        />
      ),
      width: "200px",
    },
    {
      name: "Rs_BarCode_Input",
      selector: (row) => (
        <input
          type="checkbox"
          checked={row.Rs_BarCode_Input}
          style={{ pointerEvents: "none" }}
          onChange={(e) => handleCheckboxChange(e, row, "Rs_BarCode_Input")}
          className="mx-auto"
        />
      ),
      width: "180px",
    },
    {
      name: "Rs_Move_Range",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Rs_Move_Range ?? row.Rs_Move_Range ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Rs_Move_Range")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Rs_Move_Range")}
        />
      ),
      width: "200px",
    },
    {
      name: "Rs_Time_Input",
      selector: (row) => (
        <input
          type="checkbox"
          checked={row.Rs_Time_Input}
          style={{ pointerEvents: "none" }}
          onChange={(e) => handleCheckboxChange(e, row, "Rs_Time_Input")}
          className="mx-auto"
        />
      ),
      width: "180px",
    },
    {
      name: "Rs_Auto_Finish",
      selector: (row) => (
        <input
          type="checkbox"
          checked={row.Rs_Auto_Finish}
          style={{ pointerEvents: "none" }}
          onChange={(e) => handleCheckboxChange(e, row, "Rs_Auto_Finish")}
          className="mx-auto"
        />
      ),
      width: "180px",
    },
    {
      name: "Od_List_ViewW",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={editedData[row.ID]?.Od_List_ViewW ?? row.Od_List_ViewW ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Od_List_ViewW")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Od_List_ViewW")}
        />
      ),
      width: "190px",
    },
    {
      name: "Od_List_ViewH",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={editedData[row.ID]?.Od_List_ViewH ?? row.Od_List_ViewH ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Od_List_ViewH")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Od_List_ViewH")}
        />
      ),
      width: "190px",
    },
    {
      name: "Pc_List_ViewW",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={editedData[row.ID]?.Pc_List_ViewW ?? row.Pc_List_ViewW ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Pc_List_ViewW")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Pc_List_ViewW")}
        />
      ),
      width: "190px",
    },
    {
      name: "Pc_List_ViewH",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={editedData[row.ID]?.Pc_List_ViewH ?? row.Pc_List_ViewH ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Pc_List_ViewH")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Pc_List_ViewH")}
        />
      ),
      width: "190px",
    },
    {
      name: "Pl_List_ViewW",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={editedData[row.ID]?.Pl_List_ViewW ?? row.Pl_List_ViewW ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Pl_List_ViewW")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Pl_List_ViewW")}
        />
      ),
      width: "190px",
    },
    {
      name: "Pl_List_ViewH",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={editedData[row.ID]?.Pl_List_ViewH ?? row.Pl_List_ViewH ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Pl_List_ViewH")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Pl_List_ViewH")}
        />
      ),
      width: "190px",
    },
    {
      name: "Rs_List_ViewW",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={editedData[row.ID]?.Rs_List_ViewW ?? row.Rs_List_ViewW ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Rs_List_ViewW")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Rs_List_ViewW")}
        />
      ),
      width: "190px",
    },
    {
      name: "Rs_List_ViewH",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={editedData[row.ID]?.Rs_List_ViewH ?? row.Rs_List_ViewH ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Rs_List_ViewH")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Rs_List_ViewH")}
        />
      ),
      width: "190px",
    },
    {
      name: "Od_Search_ViewW",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.ID]?.Od_Search_ViewW ?? row.Od_Search_ViewW ?? ""
          }
          onChange={(e) => handleChange(e, row.ID, "Od_Search_ViewW")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Od_Search_ViewW")}
        />
      ),
      width: "190px",
    },
    {
      name: "Od_Search_ViewH",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.ID]?.Od_Search_ViewH ?? row.Od_Search_ViewH ?? ""
          }
          onChange={(e) => handleChange(e, row.ID, "Od_Search_ViewH")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Od_Search_ViewH")}
        />
      ),
      width: "190px",
    },
    {
      name: "Pl_Search_ViewW",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.ID]?.Pl_Search_ViewW ?? row.Pl_Search_ViewW ?? ""
          }
          onChange={(e) => handleChange(e, row.ID, "Pl_Search_ViewW")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Pl_Search_ViewW")}
        />
      ),
      width: "190px",
    },
    {
      name: "Pl_Search_ViewH",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.ID]?.Pl_Search_ViewH ?? row.Pl_Search_ViewH ?? ""
          }
          onChange={(e) => handleChange(e, row.ID, "Pl_Search_ViewH")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Pl_Search_ViewH")}
        />
      ),
      width: "190px",
    },
    {
      name: "Pc_Change_Page",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Pc_Change_Page ?? row.Pc_Change_Page ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Pc_Change_Page")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Pc_Change_Page")}
        />
      ),
      width: "200px",
    },
    {
      name: "Pl_Change_Page",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Pl_Change_Page ?? row.Pl_Change_Page ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Pl_Change_Page")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Pl_Change_Page")}
        />
      ),
      width: "200px",
    },
    {
      name: "Pl_Schedule",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Pl_Schedule ?? row.Pl_Schedule ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Pl_Schedule")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Pl_Schedule")}
        />
      ),
      width: "200px",
    },
    {
      name: "Pl_Color_Separate",
      selector: (row) => (
        <input
          type="checkbox"
          checked={row.Pl_Color_Separate}
          style={{ pointerEvents: "none" }}
          onChange={(e) => handleCheckboxChange(e, row, "Pl_Color_Separate")}
          className="mx-auto"
        />
      ),
      width: "180px",
    },
    {
      name: "Pl_Delivery1",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Pl_Delivery1 ?? row.Pl_Delivery1 ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Pl_Delivery1")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Pl_Delivery1")}
        />
      ),
      width: "200px",
    },
    {
      name: "Pl_Delivery2",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Pl_Delivery2 ?? row.Pl_Delivery2 ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Pl_Delivery2")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Pl_Delivery2")}
        />
      ),
      width: "200px",
    },
    {
      name: "Pl_Delivery3",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.Pl_Delivery3 ?? row.Pl_Delivery3 ?? ""}
          onChange={(e) => handleChange(e, row.ID, "Pl_Delivery3")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Pl_Delivery3")}
        />
      ),
      width: "200px",
    },
    {
      name: "Job_Find_St_Days",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.ID]?.Job_Find_St_Days ?? row.Job_Find_St_Days ?? ""
          }
          onChange={(e) => handleChange(e, row.ID, "Job_Find_St_Days")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Job_Find_St_Days")}
        />
      ),
      width: "190px",
    },
    {
      name: "Job_Find_Ed_Days",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.ID]?.Job_Find_Ed_Days ?? row.Job_Find_Ed_Days ?? ""
          }
          onChange={(e) => handleChange(e, row.ID, "Job_Find_Ed_Days")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Job_Find_Ed_Days")}
        />
      ),
      width: "190px",
    },
    {
      name: "Settles",
      selector: (row) => (
        <input
          type="checkbox"
          checked={row.Settles}
          style={{ pointerEvents: "none" }}
          onChange={(e) => handleCheckboxChange(e, row, "Settles")}
          className="mx-auto"
        />
      ),
      width: "180px",
    },
    {
      name: "Settles_Day",
      selector: (row) => {
        const date = row.Settles_Day ? new Date(row.Settles_Day) : null;
        if (!date || isNaN(date)) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "190px",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="date"
          value={
            editedData[row.ID]?.Settles_Day ??
            formatDateForInput(row.Settles_Day) ??
            ""
          }
          onChange={(e) => handleChange(e, row.ID, "Settles_Day")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Settles_Day")}
        />
      ),
    },
    {
      name: "Pd_Revision_Days",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.ID]?.Pd_Revision_Days ?? row.Pd_Revision_Days ?? ""
          }
          onChange={(e) => handleChange(e, row.ID, "Pd_Revision_Days")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Pd_Revision_Days")}
        />
      ),
      width: "190px",
    },
    {
      name: "Od_Sach_S_Years",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.ID]?.Od_Sach_S_Years ?? row.Od_Sach_S_Years ?? ""
          }
          onChange={(e) => handleChange(e, row.ID, "Od_Sach_S_Years")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Od_Sach_S_Years")}
        />
      ),
      width: "190px",
    },
    {
      name: "Pl_Sach_S_Years",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.ID]?.Pl_Sach_S_Years ?? row.Pl_Sach_S_Years ?? ""
          }
          onChange={(e) => handleChange(e, row.ID, "Pl_Sach_S_Years")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Pl_Sach_S_Years")}
        />
      ),
      width: "190px",
    },
    {
      name: "LINK_Name1",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.LINK_Name1 ?? row.LINK_Name1 ?? ""}
          onChange={(e) => handleChange(e, row.ID, "LINK_Name1")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "LINK_Name1")}
        />
      ),
      width: "200px",
    },
    {
      name: "LINK1",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.LINK1 ?? row.LINK1 ?? ""}
          onChange={(e) => handleChange(e, row.ID, "LINK1")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "LINK1")}
        />
      ),
      width: "200px",
    },
    {
      name: "LINK_Name2",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.LINK_Name2 ?? row.LINK_Name2 ?? ""}
          onChange={(e) => handleChange(e, row.ID, "LINK_Name2")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "LINK_Name2")}
        />
      ),
      width: "200px",
    },
    {
      name: "LINK2",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.LINK2 ?? row.LINK2 ?? ""}
          onChange={(e) => handleChange(e, row.ID, "LINK2")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "LINK2")}
        />
      ),
      width: "200px",
    },
    {
      name: "LINK_Name3",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.LINK_Name3 ?? row.LINK_Name3 ?? ""}
          onChange={(e) => handleChange(e, row.ID, "LINK_Name3")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "LINK_Name3")}
        />
      ),
      width: "200px",
    },
    {
      name: "LINK3",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.LINK3 ?? row.LINK3 ?? ""}
          onChange={(e) => handleChange(e, row.ID, "LINK3")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "LINK3")}
        />
      ),
      width: "200px",
    },
    {
      name: "LINK_Name4",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.LINK_Name4 ?? row.LINK_Name4 ?? ""}
          onChange={(e) => handleChange(e, row.ID, "LINK_Name4")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "LINK_Name4")}
        />
      ),
      width: "200px",
    },
    {
      name: "LINK4",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.LINK4 ?? row.LINK4 ?? ""}
          onChange={(e) => handleChange(e, row.ID, "LINK4")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "LINK4")}
        />
      ),
      width: "200px",
    },
    {
      name: "LINK_Name5",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.LINK_Name5 ?? row.LINK_Name5 ?? ""}
          onChange={(e) => handleChange(e, row.ID, "LINK_Name5")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "LINK_Name5")}
        />
      ),
      width: "200px",
    },
    {
      name: "LINK5",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.LINK5 ?? row.LINK5 ?? ""}
          onChange={(e) => handleChange(e, row.ID, "LINK5")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "LINK5")}
        />
      ),
      width: "200px",
    },
    {
      name: "LINK_Name6",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.LINK_Name6 ?? row.LINK_Name6 ?? ""}
          onChange={(e) => handleChange(e, row.ID, "LINK_Name6")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "LINK_Name6")}
        />
      ),
      width: "200px",
    },
    {
      name: "LINK6",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.LINK6 ?? row.LINK6 ?? ""}
          onChange={(e) => handleChange(e, row.ID, "LINK6")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "LINK6")}
        />
      ),
      width: "200px",
    },
    {
      name: "LINK_Name7",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.LINK_Name7 ?? row.LINK_Name7 ?? ""}
          onChange={(e) => handleChange(e, row.ID, "LINK_Name7")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "LINK_Name7")}
        />
      ),
      width: "200px",
    },
    {
      name: "LINK7",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.LINK7 ?? row.LINK7 ?? ""}
          onChange={(e) => handleChange(e, row.ID, "LINK7")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "LINK7")}
        />
      ),
      width: "200px",
    },
    {
      name: "LINK_Name8",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.LINK_Name8 ?? row.LINK_Name8 ?? ""}
          onChange={(e) => handleChange(e, row.ID, "LINK_Name8")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "LINK_Name8")}
        />
      ),
      width: "200px",
    },
    {
      name: "LINK8",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.LINK8 ?? row.LINK8 ?? ""}
          onChange={(e) => handleChange(e, row.ID, "LINK8")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "LINK8")}
        />
      ),
      width: "200px",
    },
    {
      name: "LINK_Name9",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.LINK_Name9 ?? row.LINK_Name9 ?? ""}
          onChange={(e) => handleChange(e, row.ID, "LINK_Name9")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "LINK_Name9")}
        />
      ),
      width: "200px",
    },
    {
      name: "LINK9",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.LINK9 ?? row.LINK9 ?? ""}
          onChange={(e) => handleChange(e, row.ID, "LINK9")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "LINK9")}
        />
      ),
      width: "200px",
    },
    {
      name: "LINK_Name10",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.LINK_Name10 ?? row.LINK_Name10 ?? ""}
          onChange={(e) => handleChange(e, row.ID, "LINK_Name10")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "LINK_Name10")}
        />
      ),
      width: "200px",
    },
    {
      name: "LINK10",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.ID]?.LINK10 ?? row.LINK10 ?? ""}
          onChange={(e) => handleChange(e, row.ID, "LINK10")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "LINK10")}
        />
      ),
      width: "200px",
    },
  ];

  return (
    <div className="flex bg-[#E9EFEC] h-[150vh]">
      <Sidebar />
      <div className="flex flex-col w-full mr-2 ml-2">
        <Navbar />
        <div className="flex-1 flex-col p-2 overflow-x-auto">
          <div className="bg-white grid grid-cols-1">
            <div className="bg-white grid grid-cols-1">
              <h1 className="text-2xl font-bold text-center mt-3">
                System Set <br /> システム設定
              </h1>
              <hr className="my-6 h-0.5 bg-gray-500 opacity-150 dark:opacity-50 border-y-[1px] border-gray-300" />

              <div className="ml-5 text-lg">
                <input
                  className="border-2 border-gray-500 rounded-md w-52 h-9"
                  type="text"
                  placeholder=" Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex justify-center items-center mt-5">
                <div className="w-full px-5">
                  <DataTable
                    columns={columns}
                    data={filteredData}
                    pagination
                    paginationPerPage={5}
                    paginationRowsPerPageOptions={[5, 10, 15, 20]}
                    customStyles={{
                      rows: {
                        style: {
                          minHeight: "50px",
                          textAlign: "center",
                          justifyContent: "center",
                          borderBottom: "1px solid #ccc",
                          borderRight: "1px solid #ccc",
                        },
                      },
                      headCells: {
                        style: {
                          fontSize: "14px",
                          textAlign: "center",
                          justifyContent: "center",
                          border: "1px solid #ccc",
                        },
                      },
                      cells: {
                        style: {
                          textAlign: "center",
                          justifyContent: "center",
                          border: "1px solid #ccc",
                        },
                      },
                      table: {
                        style: {
                          borderCollapse: "collapse",
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
