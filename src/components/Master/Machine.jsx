import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import DataTable from "react-data-table-component";
import axios from "axios";

export function Machine() {
  const [data, setData] = useState([
    {
      Resource_CD: "R001",
      Change_CD: null,
      ResourceG_CD: null,
      CostG_CD: "CG01",
      ManageG_CD: "MG01",
      Resource_Name: "Resource A",
      Resource_Abb: "RA",
      Resource_Symbol: "SYM1",
      Resource_Mark: "Mark1",
      Use: true,
      End: false,
      M_Coefficient: 1.2,
      P_Coefficient: 1.5,
      Before: "Setup A",
      After: "Clean A",
      T_Type: "T1",
      P_Type: "P1",
      Resource_Remark: "Remark for Resource A",
    },
    {
      Resource_CD: "R002",
      Change_CD: null,
      ResourceG_CD: null,
      CostG_CD: "CG02",
      ManageG_CD: "MG02",
      Resource_Name: "Resource B",
      Resource_Abb: "RB",
      Resource_Symbol: "SYM2",
      Resource_Mark: "Mark2",
      Use: false,
      End: true,
      M_Coefficient: 1.0,
      P_Coefficient: 1.3,
      Before: "Setup B",
      After: "Clean B",
      T_Type: "T2",
      P_Type: "P2",
      Resource_Remark: "Remark for Resource B",
    },
    {
      Resource_CD: "R003",
      Change_CD: null,
      ResourceG_CD: null,
      CostG_CD: "CG03",
      ManageG_CD: "MG03",
      Resource_Name: "Resource C",
      Resource_Abb: "RC",
      Resource_Symbol: "SYM3",
      Resource_Mark: "Mark3",
      Use: true,
      End: true,
      M_Coefficient: 1.1,
      P_Coefficient: 1.4,
      Before: "Setup C",
      After: "Clean C",
      T_Type: "T3",
      P_Type: "P3",
      Resource_Remark: "Remark for Resource C",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [editedData, setEditedData] = useState({});
  const [isChanged, setIsChanged] = useState(false);
  const editedDataRef = useRef(editedData);

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

  const handleChange = (e, resourceCd, field) => {
    const newValue = e.target.value;

    if (editedDataRef.current[resourceCd]?.[field] !== newValue) {
      setIsChanged(true);

      const updatedData = { ...editedDataRef.current };

      updatedData[resourceCd] = updatedData[resourceCd] || {};
      updatedData[resourceCd][field] = newValue;

      setEditedData(updatedData);
      editedDataRef.current = updatedData;
    }
  };

  const handleSave = (resourceCd, field) => {
    const newValue = editedData[resourceCd]?.[field];
    const oldValue = data.find((row) => row.Resource_CD === resourceCd)?.[
      field
    ];

    if (newValue !== oldValue) {
      try {
        const updatedData = [...data];
        const rowIndex = updatedData.findIndex(
          (row) => row.Customer_CD === customerCd
        );

        if (rowIndex !== -1) {
          updatedData[rowIndex][field] = newValue;
          setData(updatedData);

          localStorage.setItem("resourceData", JSON.stringify(updatedData));
          alert("Edit Successfully!");
        }

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
      name: "Resource_CD	",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Resource_CD}
          onChange={(e) => handleEdit(index, "Resource_CD	", e.target.value)}
        />
      ),
      width: "190px",
    },
    {
      name: "Change_CD	",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Change_CD}
          onChange={(e) => handleEdit(index, "Change_CD	", e.target.value)}
        />
      ),
      width: "190px",
    },
    {
      name: "ResourceG_CD	",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.ResourceG_CD}
          onChange={(e) => handleEdit(index, "ResourceG_CD	", e.target.value)}
        />
      ),
      width: "190px",
    },
    {
      name: "CostG_CD	",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.CostG_CD}
          onChange={(e) => handleEdit(index, "CostG_CD	", e.target.value)}
        />
      ),
      width: "170px",
    },
    {
      name: "ManageG_CD	",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.ManageG_CD}
          onChange={(e) => handleEdit(index, "ManageG_CD	", e.target.value)}
        />
      ),
      width: "190px",
    },
    {
      name: "Resource_Name	",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Resource_Name}
          onChange={(e) => handleEdit(index, "Resource_Name	", e.target.value)}
        />
      ),
      width: "190px",
    },
    {
      name: "Resource_Abb	",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Resource_Abb}
          onChange={(e) => handleEdit(index, "Resource_Abb	", e.target.value)}
        />
      ),
      width: "190px",
    },
    {
      name: "Resource_Symbol	",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Resource_Symbol}
          onChange={(e) => handleEdit(index, "Resource_Symbol	", e.target.value)}
        />
      ),
      width: "190px",
    },
    {
      name: "Resource_Mark	",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Resource_Mark}
          onChange={(e) => handleEdit(index, "Resource_Mark	", e.target.value)}
        />
      ),
      width: "190px",
    },
    {
      name: "Use",
      selector: (row, index) => (
        <input
          type="checkbox"
          checked={row.Use}
          onChange={(e) => handleEdit(index, "Use", e.target.checked)}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "100px",
    },
    {
      name: "End",
      selector: (row, index) => (
        <input
          type="checkbox"
          checked={row.End}
          onChange={(e) => handleEdit(index, "End", e.target.checked)}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "100px",
    },
    {
      name: "M_Coefficient",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.M_Coefficient}
          onChange={(e) => handleEdit(index, "M_Coefficient", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "P_Coefficient",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.P_Coefficient}
          onChange={(e) => handleEdit(index, "P_Coefficient", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Before",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Before}
          onChange={(e) => handleEdit(row, "Before", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "After",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={row.After}
          onChange={(e) => handleEdit(row, "After", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "T_Type",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.T_Type}
          onChange={(e) => handleEdit(row, "T_Type", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "P_Type",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.P_Type}
          onChange={(e) => handleEdit(row, "P_Type", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Resource_Remark",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Resource_Remark}
          onChange={(e) => handleEdit(row, "Resource_Remark", e.target.value)}
        />
      ),
      width: "240px",
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
                Machine <br /> 機械マスタ
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
