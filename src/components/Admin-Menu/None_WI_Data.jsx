import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import DataTable from "react-data-table-component";
import axios from "axios";

export function None_WI_Data() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editedData, setEditedData] = useState({});
  const [isChanged, setIsChanged] = useState(false);
  const editedDataRef = useRef(editedData);

  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:4000/order/td-orders");
      // console.log("Fetched data:", response.data);
      setData(response.data.data.orders || []);
    } catch (error) {
      // console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    const initialEditedData = data.reduce((acc, row, index) => {
      if (!editedData[index]) {
        acc[index] = { ...row };
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

  const handleChange = (e, orderNo, field) => {
    const newValue = e.target.value;

    if (editedDataRef.current[orderNo]?.[field] !== newValue) {
      setIsChanged(true);

      const updatedData = { ...editedDataRef.current };

      updatedData[orderNo] = updatedData[orderNo] || {};
      updatedData[orderNo][field] = newValue;

      setEditedData(updatedData);
      editedDataRef.current = updatedData;
    }
  };

  const handleSave = async (orderNo, field) => {
    const newValue = editedData[orderNo]?.[field];
    const oldValue = data.find((row) => row.Order_No === orderNo)?.[field];

    if (newValue !== oldValue) {
      try {
        const payload = {
          Order_No: orderNo,
          [field]: newValue,
        };

        const response = await axios.put(
          "http://localhost:4000/order/edit-order",
          payload
        );

        const updatedData = [...data];
        const rowIndex = updatedData.findIndex(
          (row) => row.Order_No === orderNo
        );
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
      name: "Order_No",
      selector: (row) => row.Order_No,
      width: "150px",
    },
    {
      name: "Product_Grp_CD",
      selector: (row) => row.Product_Grp_CD,
      width: "180px",
    },
    {
      name: "Customer_CD",
      selector: (row) => row.Customer_CD,
      width: "160px",
    },
    {
      name: "NAV_Name",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.NAV_Name !== undefined
              ? editedData[row.Order_No]?.NAV_Name
              : row.NAV_Name || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "NAV_Name")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "NAV_Name")}
        />
      ),
      width: "250px",
    },
    {
      name: "Product_Name",
      selector: (row) => row.Product_Name,
      width: "250px",
    },
    {
      name: "NAV_Size",
      selector: (row) => row.NAV_Size,
      width: "250px",
    },
    {
      name: "Product_Size",
      selector: (row) => row.Product_Size,
      width: "250px",
    },
    {
      name: "Tolerance",
      selector: (row) => row.Tolerance,
      width: "150px",
    },
    {
      name: "Customer_Draw",
      selector: (row) => row.Customer_Draw,
      width: "220px",
    },
    {
      name: "Company_Draw",
      selector: (row) => row.Company_Draw,
      width: "200px",
    },
    {
      name: "Product_Draw",
      selector: (row) => row.Product_Draw,
      width: "250px",
    },
    {
      name: "Quantity",
      selector: (row) => row.Quantity,
      width: "160px",
    },
    {
      name: "Pd_Target_Qty",
      selector: (row) => row.Pd_Target_Qty,
      width: "170px",
    },
    {
      name: "Pd_Complete_Qty",
      selector: (row) => row.Pd_Complete_Qty,
      width: "180px",
    },
    {
      name: "I_Complete_Qty",
      selector: (row) => row.I_Complete_Qty,
      width: "180px",
    },
    {
      name: "Shipment_Qty",
      selector: (row) => row.Shipment_Qty,
      width: "170px",
    },
    {
      name: "Pd_Split_Qty",
      selector: (row) => row.Pd_Split_Qty,
      width: "170px",
    },
    {
      name: "Pd_Calc_Qty",
      selector: (row) => row.Pd_Calc_Qty,
      width: "170px",
    },
    {
      name: "NG_Qty",
      selector: (row) => row.NG_Qty,
      width: "170px",
    },
    {
      name: "Unit_CD",
      selector: (row) => row.Unit_CD,
      width: "170px",
    },
    {
      name: "Sales_Grp_CD",
      selector: (row) => row.Sales_Grp_CD,
      width: "200px",
    },
    {
      name: "Sales_Person_CD",
      selector: (row) => row.Sales_Person_CD,
      width: "200px",
    },
    {
      name: "Request1_CD",
      selector: (row) => row.Request1_CD,
      width: "190px",
    },
    {
      name: "Request2_CD",
      selector: (row) => row.Request2_CD,
      width: "190px",
    },
    {
      name: "Request3_CD",
      selector: (row) => row.Request3_CD,
      width: "190px",
    },
    {
      name: "Material1",
      selector: (row) => row.Material1,
      width: "180px",
    },
    {
      name: "H_Treatment1",
      selector: (row) => row.H_Treatment1,
      width: "180px",
    },
    {
      name: "Material2",
      selector: (row) => row.Material2,
      width: "180px",
    },
    {
      name: "H_Treatment2",
      selector: (row) => row.H_Treatment2,
      width: "180px",
    },
    {
      name: "Material3",
      selector: (row) => row.Material3,
      width: "180px",
    },
    {
      name: "H_Treatment3",
      selector: (row) => row.H_Treatment3,
      width: "180px",
    },
    {
      name: "Material4",
      selector: (row) => row.Material4,
      width: "180px",
    },
    {
      name: "H_Treatment4",
      selector: (row) => row.H_Treatment4,
      width: "180px",
    },
    {
      name: "Material5",
      selector: (row) => row.Material5,
      width: "180px",
    },
    {
      name: "H_Treatment5",
      selector: (row) => row.H_Treatment5,
      width: "180px",
    },
    {
      name: "Coating_CD",
      selector: (row) => row.Coating_CD,
      width: "180px",
    },
    {
      name: "Coating",
      selector: (row) => row.Coating,
      width: "180px",
    },
    {
      name: "Quote_No",
      selector: (row) => row.Quote_No,
      width: "180px",
    },
    {
      name: "Quote_CD",
      selector: (row) => row.Quote_CD,
      width: "180px",
    },
    {
      name: "Od_No_of_Pd_Split",
      selector: (row) => row.Od_No_of_Pd_Split,
      width: "210px",
    },
    {
      name: "ItemO_CD",
      selector: (row) => row.ItemO_CD,
      width: "170px",
    },
    {
      name: "Item1_CD",
      selector: (row) => row.Item1_CD,
      width: "170px",
    },
    {
      name: "Item2_CD",
      selector: (row) => row.Item2_CD,
      width: "170px",
    },
    {
      name: "Item3_CD",
      selector: (row) => row.Item3_CD,
      width: "170px",
    },
    {
      name: "Item4_CD",
      selector: (row) => row.Item4_CD,
      width: "170px",
    },
    {
      name: "Custom_Material",
      selector: (row) => row.Custom_Material,
      width: "200px",
    },
    {
      name: "Od_No_of_Custom",
      selector: (row) => row.Od_No_of_Custom,
      width: "200px",
    },
    {
      name: "Supply_CD",
      selector: (row) => row.Supply_CD,
      width: "180px",
    },
    {
      name: "Destination_CD",
      selector: (row) => row.Destination_CD,
      width: "180px",
    },
    {
      name: "Contract_Docu_CD",
      selector: (row) => row.Contract_Docu_CD,
      width: "200px",
    },
    {
      name: "Price_CD",
      selector: (row) => row.Price_CD,
      width: "180px",
    },
    {
      name: "Unit_Price",
      selector: (row) => row.Unit_Price,
      width: "180px",
    },
    {
      name: "Specific_CD",
      selector: (row) => row.Specific_CD,
      width: "180px",
    },
    {
      name: "Od_Progress_CD",
      selector: (row) => row.Od_Progress_CD,
      width: "180px",
    },
    {
      name: "Delivery_CD",
      selector: (row) => row.Delivery_CD,
      width: "180px",
    },
    {
      name: "Schedule_CD",
      selector: (row) => row.Schedule_CD,
      width: "180px",
    },
    {
      name: "Target_CD",
      selector: (row) => row.Target_CD,
      width: "180px",
    },
    {
      name: "Product_Docu",
      selector: (row) => row.Product_Docu,
      width: "500px",
    },
    {
      name: "Procure_Docu",
      selector: (row) => row.Procure_Docu,
      width: "170px",
    },
    {
      name: "Outside_Docu",
      selector: (row) => row.Outside_Docu,
      width: "170px",
    },
    {
      name: "Inspect_Docu",
      selector: (row) => row.Inspect_Docu,
      width: "170px",
    },
    {
      name: "Send_Docu",
      selector: (row) => row.Send_Docu,
      width: "180px",
    },
    {
      name: "Supple_Docu",
      selector: (row) => row.Supple_Docu,
      width: "180px",
    },
    {
      name: "Sl_Instructions",
      selector: (row) => row.Sl_Instructions,
      width: "180px",
    },
    {
      name: "Pd_Instructions",
      selector: (row) => row.Pd_Instructions,
      width: "180px",
    },
    {
      name: "Pd_Remark",
      selector: (row) => row.Pd_Remark,
      width: "180px",
    },
    {
      name: "I_Remark",
      selector: (row) => row.I_Remark,
      width: "180px",
    },
    {
      name: "Od_Ctl_Person_CD",
      selector: (row) => row.Od_Ctl_Person_CD,
      width: "200px",
    },
    {
      name: "Od_Reg_Person_CD",
      selector: (row) => row.Od_Reg_Person_CD,
      width: "200px",
    },
    {
      name: "Od_Upd_Person_CD",
      selector: (row) => row.Od_Upd_Person_CD,
      width: "200px",
    },
    {
      name: "Request_Delivery",
      selector: (row) => {
        const date = row.Request_Delivery
          ? new Date(row.Request_Delivery)
          : null;
        if (!date) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "220px",
    },
    {
      name: "Product_Delivery",
      selector: (row) => {
        const date = row.Product_Delivery
          ? new Date(row.Product_Delivery)
          : null;
        if (!date) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "220px",
    },
    {
      name: "Confirm_Delivery",
      selector: (row) => {
        const date = row.Confirm_Delivery
          ? new Date(row.Confirm_Delivery)
          : null;
        if (!date) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "200px",
    },
    {
      name: "NAV_Delivery",
      selector: (row) => row.NAV_Delivery,
      width: "180px",
    },
    {
      name: "ASP_Delivery",
      selector: (row) => row.ASP_Delivery,
      width: "180px",
    },
    {
      name: "Order_Date",
      selector: (row) => {
        const date = row.Order_Date ? new Date(row.Order_Date) : null;
        if (!date || isNaN(date)) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "180px",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="date"
          value={
            editedData[row.Order_No]?.Order_Date ||
            formatDateForInput(row.Order_Date)
          }
          onChange={(e) => handleChange(e, row.Order_No, "Order_Date")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Order_Date")}
        />
      ),
    },
    {
      name: "Pd_Received_Date",
      selector: (row) => {
        const date = row.Pd_Received_Date
          ? new Date(row.Pd_Received_Date)
          : null;
        if (!date) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "190px",
    },
    {
      name: "Pd_Complete_Date",
      selector: (row) => row.Pd_Complete_Date,
      width: "200px",
    },
    {
      name: "I_Completed_Date",
      selector: (row) => {
        const date = row.I_Completed_Date
          ? new Date(row.I_Completed_Date)
          : null;
        if (!date) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "180px",
    },
    {
      name: "Shipment_Date",
      selector: (row) => row.Shipment_Date,
      width: "180px",
    },
    {
      name: "Pd_Calc_Date",
      selector: (row) => row.Pd_Calc_Date,
      width: "180px",
    },
    {
      name: "Calc_Process_Date",
      selector: (row) => row.Calc_Process_Date,
      width: "180px",
    },
    {
      name: "Rs_Confirm_Date",
      selector: (row) => row.Rs_Confirm_Date,
      width: "180px",
    },
    {
      name: "Od_Reg_Date",
      selector: (row) => {
        const date = row.Od_Reg_Date ? new Date(row.Od_Reg_Date) : null;
        if (!date) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "190px",
    },
    {
      name: "Od_Upd_Date",
      selector: (row) => {
        const date = row.Od_Upd_Date ? new Date(row.Od_Upd_Date) : null;
        if (!date) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "190px",
    },
    {
      name: "Od_NAV_Upd_Date",
      selector: (row) => {
        const date = row.Od_NAV_Upd_Date ? new Date(row.Od_NAV_Upd_Date) : null;
        if (!date) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "190px",
    },
    {
      name: "Carbide_Cost",
      selector: (row) => row.Carbide_Cost,
      width: "180px",
    },
    {
      name: "Steel_Cost",
      selector: (row) => row.Steel_Cost,
      width: "180px",
    },
    {
      name: "Outsourcing_Cost",
      selector: (row) => row.Outsourcing_Cost,
      width: "180px",
    },
    {
      name: "H_Treatment_Cost",
      selector: (row) => row.H_Treatment_Cost,
      width: "190px",
    },
    {
      name: "Coating_Cost",
      selector: (row) => row.Coating_Cost,
      width: "180px",
    },
    {
      name: "Electrode_Cost",
      selector: (row) => row.Electrode_Cost,
      width: "180px",
    },
    {
      name: "Electroplate_Cost",
      selector: (row) => row.Electroplate_Cost,
      width: "180px",
    },
    {
      name: "Tooling_Cost",
      selector: (row) => row.Tooling_Cost,
      width: "180px",
    },
    {
      name: "Jig_Cost",
      selector: (row) => row.Jig_Cost,
      width: "180px",
    },
    {
      name: "Fixtures_Cost",
      selector: (row) => row.Fixtures_Cost,
      width: "180px",
    },
    {
      name: "Od_CAT1",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Od_CAT1}
          onChange={(e) => handleCheckboxChange(e, row, "Od_CAT1")}
        />
      ),
      width: "180px",
    },
    {
      name: "Od_CAT2",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Od_CAT2}
          onChange={(e) => handleCheckboxChange(e, row, "Od_CAT2")}
        />
      ),
      width: "180px",
    },
    {
      name: "Od_CAT3",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Od_CAT3}
          onChange={(e) => handleCheckboxChange(e, row, "Od_CAT3")}
        />
      ),
      width: "180px",
    },
    {
      name: "Od_Pending",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Od_Pending}
          onChange={(e) => handleCheckboxChange(e, row, "Od_Pending")}
        />
      ),
      width: "180px",
    },
    {
      name: "Temp_Shipment",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Temp_Shipment}
          onChange={(e) => handleCheckboxChange(e, row, "Temp_Shipment")}
        />
      ),
      width: "180px",
    },
    {
      name: "Unreceived",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Unreceived}
          onChange={(e) => handleCheckboxChange(e, row, "Unreceived")}
        />
      ),
      width: "180px",
    },
    {
      name: "Current_Order",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Current_Order}
          onChange={(e) => handleCheckboxChange(e, row, "Current_Order")}
        />
      ),
      width: "180px",
    },
    {
      name: "Month_Plan",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Month_Plan}
          onChange={(e) => handleCheckboxChange(e, row, "Month_Plan")}
        />
      ),
      width: "180px",
    },
    {
      name: "Week_Plan",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Week_Plan}
          onChange={(e) => handleCheckboxChange(e, row, "Week_Plan")}
        />
      ),
      width: "180px",
    },
    {
      name: "Today_Plan",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Today_Plan}
          onChange={(e) => handleCheckboxChange(e, row, "Today_Plan")}
        />
      ),
      width: "180px",
    },
    {
      name: "Must_Delivery",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Must_Delivery}
          onChange={(e) => handleCheckboxChange(e, row, "Must_Delivery")}
        />
      ),
      width: "180px",
    },
    {
      name: "Into_I",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Into_I}
          onChange={(e) => handleCheckboxChange(e, row, "Into_I")}
        />
      ),
      width: "180px",
    },
    {
      name: "Input_Confirm",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Input_Confirm}
          onChange={(e) => handleCheckboxChange(e, row, "Input_Confirm")}
        />
      ),
      width: "180px",
    },
    {
      name: "Pd_Confirm",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Pd_Confirm}
          onChange={(e) => handleCheckboxChange(e, row, "Pd_Confirm")}
        />
      ),
      width: "180px",
    },
    {
      name: "I_Confirm",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.I_Confirm}
          onChange={(e) => handleCheckboxChange(e, row, "I_Confirm")}
        />
      ),
      width: "180px",
    },
    {
      name: "Od_Confirm",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Od_Confirm}
          onChange={(e) => handleCheckboxChange(e, row, "Od_Confirm")}
        />
      ),
      width: "180px",
    },
    {
      name: "I_Target",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.I_Target}
          onChange={(e) => handleCheckboxChange(e, row, "I_Target")}
        />
      ),
      width: "180px",
    },
    {
      name: "Urgent_Goods",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Urgent_Goods}
          onChange={(e) => handleCheckboxChange(e, row, "Urgent_Goods")}
        />
      ),
      width: "180px",
    },
  ];

  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-full mr-2 ml-2">
        <Navbar />
        <div className="flex-1 flex-col p-2 overflow-x-auto">
          <div className="bg-white grid grid-cols-1">
            <h1 className="text-2xl font-bold text-center mt-3">
              None WI DATA In NAV
            </h1>
            <hr className="my-6 h-0.5 bg-gray-500 opacity-100 dark:opacity-50 border-y-[1px] border-gray-300" />

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
              <div className="w-full text-center px-5">
                <DataTable
                  columns={columns}
                  data={filteredData}
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
  );
}
