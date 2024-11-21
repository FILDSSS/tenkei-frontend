import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import DataTable from "react-data-table-component";

export function NAV_FG() {
  const [searchTerm, setSearchTerm] = useState("");

  const [data, setData] = useState([
    {
      Item_Name: "GROOVING PLUG",
      Customer_Name: "FTC-P2",
      Order_Date: "19/11/2567",
      Order_No: "BEC2403001",
      Request_Delivery: "12/12/2567",
      I_Complete_Date: "01/01/2568",
      Date_of_Delay: 9,
      NAV_Name: "JUKKUUUUU",
      NAV_Size: "AAA 3 A",
      Item1_CD: 99,
      Quantity: 55,
      Unit_Price: 99999,
      Amount: 20000,
    },
    {
      Item_Name: "SHAPING TOOL",
      Customer_Name: "XYZ-P5",
      Order_Date: "20/11/2567",
      Order_No: "BEC2403002",
      Request_Delivery: "15/12/2567",
      I_Complete_Date: "05/01/2568",
      Date_of_Delay: 5,
      NAV_Name: "SHAPEMASTER",
      NAV_Size: "BB 2 B",
      Item1_CD: 101,
      Quantity: 30,
      Unit_Price: 5000,
      Amount: 150000,
    },
    {
      Item_Name: "CUTTING INSERT",
      Customer_Name: "ABC-P1",
      Order_Date: "18/11/2567",
      Order_No: "BEC2403003",
      Request_Delivery: "10/12/2567",
      I_Complete_Date: "03/01/2568",
      Date_of_Delay: 12,
      NAV_Name: "CUTTERPRO",
      NAV_Size: "CC 5 C",
      Item1_CD: 102,
      Quantity: 80,
      Unit_Price: 1200,
      Amount: 96000,
    },
  ]);

  const filteredData = data.filter((row) => {
    return Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // สำหรับ Dummy Data
  const handleEdit = (index, field, newValue) => {
    const updatedData = [...data];
    updatedData[index][field] = newValue;
    setData(updatedData);
  };

  const columns = [
    {
      name: "Item_Name",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Item_Name}
          onChange={(e) => handleEdit(index, "Item_Name", e.target.value)}
        />
      ),
      sortable: true,
      width: "180px",
    },
    {
      name: "Customer_Name",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Customer_Name}
          onChange={(e) => handleEdit(index, "Customer_Name", e.target.value)}
        />
      ),
      sortable: true,
      width: "180px",
    },
    {
      name: "Order_Date",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Order_Date}
          onChange={(e) => handleEdit(index, "Order_Date", e.target.value)}
        />
      ),
      sortable: true,
      width: "170px",
    },
    {
      name: "Order_No",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Order_No}
          onChange={(e) => handleEdit(index, "Order_No", e.target.value)}
        />
      ),
      sortable: true,
      width: "180px",
    },
    {
      name: "Request_Delivery",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Request_Delivery}
          onChange={(e) =>
            handleEdit(index, "Request_Delivery", e.target.value)
          }
        />
      ),
      sortable: true,
      width: "180px",
    },
    {
      name: "I_Complete_Date",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.I_Complete_Date}
          onChange={(e) => handleEdit(index, "I_Complete_Date", e.target.value)}
        />
      ),
      sortable: true,
      width: "180px",
    },
    {
      name: "Date_of_Delay",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={row.Date_of_Delay}
          onChange={(e) => handleEdit(index, "Date_of_Delay", e.target.value)}
        />
      ),
      sortable: true,
      width: "160px",
    },
    {
      name: "NAV_Name",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.NAV_Name}
          onChange={(e) => handleEdit(index, "NAV_Name", e.target.value)}
        />
      ),
      sortable: true,
      width: "180px",
    },
    {
      name: "NAV_Size",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.NAV_Size}
          onChange={(e) => handleEdit(index, "NAV_Size", e.target.value)}
        />
      ),
      sortable: true,
      width: "180px",
    },
    {
      name: "Item1_CD",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={row.Item1_CD}
          onChange={(e) => handleEdit(index, "Item1_CD", e.target.value)}
        />
      ),
      sortable: true,
      width: "180px",
    },
    {
      name: "Quantity",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={row.Quantity}
          onChange={(e) => handleEdit(index, "Quantity", e.target.value)}
        />
      ),
      sortable: true,
      width: "180px",
    },
    {
      name: "Unit_Price",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={row.Unit_Price}
          onChange={(e) => handleEdit(index, "Unit_Price", e.target.value)}
        />
      ),
      sortable: true,
      width: "180px",
    },
    {
      name: "Amount",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={row.Amount}
          onChange={(e) => handleEdit(index, "Amount", e.target.value)}
        />
      ),
      sortable: true,
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
            <div className="bg-white grid grid-cols-1">
              <h1 className="text-2xl font-bold text-center mt-3">
                NAV_FG Copy DATA
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
