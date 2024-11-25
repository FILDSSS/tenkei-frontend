import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import DataTable from "react-data-table-component";
import axios from "axios";

export function Process() {
  const [data, setData] = useState([
    {
      Process_CD: "P001",
      Change_CD: "CH01",
      ProcessG_CD: "PG01",
      ResourceG_CD: "RG01",
      ManageG_CD: null,
      Manhour_Calc: null,
      Days_Calc: null,
      Process_Name: "Process 1",
      Process_Abb: "P1",
      Process_Symbol: "SYM1",
      Process_Mark: "Mark1",
      Use: true,
      For_Plan: false,
      For_Info: true,
      Graph: false,
      List: true,
      Outside_On: false,
      Outside_Off: true,
      End: false,
      Coefficient: null,
      M_Coefficient: null,
      P_Coefficient: null,
      Before: null,
      After: 1.5,
      Operation_Time: 2.0,
      Std_M_CAT: 1.2,
      Std_M_Time: 1.0,
      Std_P_CAT: 1.3,
      Std_P_Time: 1.1,
      T_Type: "T1",
      P_Type: "P1",
      S_Type: "S1",
      Process_Remark: "Remark for process 1",
    },
    {
      Process_CD: "P002",
      Change_CD: "CH02",
      ProcessG_CD: "PG02",
      ResourceG_CD: "RG02",
      ManageG_CD: "MG02",
      Manhour_Calc: "Calc1",
      Days_Calc: "Day1",
      Process_Name: "Process 2",
      Process_Abb: "P2",
      Process_Symbol: "SYM2",
      Process_Mark: "Mark2",
      Use: false,
      For_Plan: true,
      For_Info: false,
      Graph: true,
      List: false,
      Outside_On: true,
      Outside_Off: false,
      End: true,
      Coefficient: "1.1",
      M_Coefficient: "1.2",
      P_Coefficient: "1.3",
      Before: "Before2",
      After: 2.5,
      Operation_Time: 3.0,
      Std_M_CAT: 2.2,
      Std_M_Time: 2.0,
      Std_P_CAT: 2.3,
      Std_P_Time: 2.1,
      T_Type: "T2",
      P_Type: "P2",
      S_Type: "S2",
      Process_Remark: "Remark for process 2",
    },
    {
      Process_CD: "P003",
      Change_CD: "CH03",
      ProcessG_CD: "PG03",
      ResourceG_CD: "RG03",
      ManageG_CD: "MG03",
      Manhour_Calc: "Calc1",
      Days_Calc: "Day1",
      Process_Name: "Process 3",
      Process_Abb: "P3",
      Process_Symbol: "SYM3",
      Process_Mark: "Mark3",
      Use: false,
      For_Plan: true,
      For_Info: false,
      Graph: true,
      List: false,
      Outside_On: true,
      Outside_Off: false,
      End: true,
      Coefficient: "1.1",
      M_Coefficient: "1.2",
      P_Coefficient: "1.3",
      Before: "Before2",
      After: 2.5,
      Operation_Time: 3.0,
      Std_M_CAT: 2.2,
      Std_M_Time: 2.0,
      Std_P_CAT: 2.3,
      Std_P_Time: 2.1,
      T_Type: "T3",
      P_Type: "P3",
      S_Type: "S3",
      Process_Remark: "Remark for process 2",
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

  const handleChange = (e, processCd, field) => {
    const newValue = e.target.value;

    if (editedDataRef.current[processCd]?.[field] !== newValue) {
      setIsChanged(true);

      const updatedData = { ...editedDataRef.current };

      updatedData[processCd] = updatedData[processCd] || {};
      updatedData[processCd][field] = newValue;

      setEditedData(updatedData);
      editedDataRef.current = updatedData;
    }
  };

  const handleSave = (processCd, field) => {
    const newValue = editedData[processCd]?.[field];
    const oldValue = data.find((row) => row.Process_CD === processCd)?.[field];

    if (newValue !== oldValue) {
      try {
        const updatedData = [...data];
        const rowIndex = updatedData.findIndex(
          (row) => row.Process_CD === processCd
        );

        if (rowIndex !== -1) {
          updatedData[rowIndex][field] = newValue;
          setData(updatedData);

          localStorage.setItem("processData", JSON.stringify(updatedData));
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
      name: "Process_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Process_CD}
          onChange={(e) => handleEdit(row, "Process_CD", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Change_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Change_CD}
          onChange={(e) => handleEdit(row, "Change_CD", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "ProcessG_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.ProcessG_CD}
          onChange={(e) => handleEdit(row, "ProcessG_CD", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "ResourceG_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.ResourceG_CD}
          onChange={(e) => handleEdit(row, "ResourceG_CD", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "ManageG_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.ManageG_CD}
          onChange={(e) => handleEdit(row, "ManageG_CD", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Manhour_Calc",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Manhour_Calc}
          onChange={(e) => handleEdit(row, "Manhour_Calc", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Days_Calc",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Days_Calc}
          onChange={(e) => handleEdit(row, "Days_Calc", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Process_Name",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Process_Name}
          onChange={(e) => handleEdit(row, "Process_Name", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Process_Abb",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Process_Abb}
          onChange={(e) => handleEdit(row, "Process_Abb", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Process_Symbol",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Process_Symbol}
          onChange={(e) => handleEdit(row, "Process_Symbol", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Process_Mark",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Process_Mark}
          onChange={(e) => handleEdit(row, "Process_Mark", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Use",
      selector: (row) => (
        <input
          type="checkbox"
          checked={row.Use}
          onChange={(e) => handleEdit(row, "Use", e.target.checked)}
        />
      ),
      width: "150px",
    },
    {
      name: "For_Plan",
      selector: (row) => (
        <input
          type="checkbox"
          checked={row.For_Plan}
          onChange={(e) => handleEdit(row, "For_Plan", e.target.checked)}
        />
      ),
      width: "150px",
    },
    {
      name: "For_Info",
      selector: (row) => (
        <input
          type="checkbox"
          checked={row.For_Info}
          onChange={(e) => handleEdit(row, "For_Info", e.target.checked)}
        />
      ),
      width: "150px",
    },
    {
      name: "Graph",
      selector: (row) => (
        <input
          type="checkbox"
          checked={row.Graph}
          onChange={(e) => handleEdit(row, "Graph", e.target.checked)}
        />
      ),
      width: "150px",
    },
    {
      name: "List",
      selector: (row) => (
        <input
          type="checkbox"
          checked={row.List}
          onChange={(e) => handleEdit(row, "List", e.target.checked)}
        />
      ),
      width: "150px",
    },
    {
      name: "Outside_On",
      selector: (row) => (
        <input
          type="checkbox"
          checked={row.Outside_On}
          onChange={(e) => handleEdit(row, "Outside_On", e.target.checked)}
        />
      ),
      width: "150px",
    },
    {
      name: "Outside_Off",
      selector: (row) => (
        <input
          type="checkbox"
          checked={row.Outside_Off}
          onChange={(e) => handleEdit(row, "Outside_Off", e.target.checked)}
        />
      ),
      width: "150px",
    },
    {
      name: "End",
      selector: (row) => (
        <input
          type="checkbox"
          checked={row.End}
          onChange={(e) => handleEdit(row, "End", e.target.checked)}
        />
      ),
      width: "150px",
    },
    {
      name: "Coefficient",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Coefficient}
          onChange={(e) => handleEdit(row, "Coefficient", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "M_Coefficient",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.M_Coefficient}
          onChange={(e) => handleEdit(row, "M_Coefficient", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "P_Coefficient",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.P_Coefficient}
          onChange={(e) => handleEdit(row, "P_Coefficient", e.target.value)}
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
      name: "Operation_Time",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={row.Operation_Time}
          onChange={(e) => handleEdit(row, "Operation_Time", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Std_M_CAT",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={row.Std_M_CAT}
          onChange={(e) => handleEdit(row, "Std_M_CAT", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Std_M_Time",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={row.Std_M_Time}
          onChange={(e) => handleEdit(row, "Std_M_Time", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Std_P_CAT",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={row.Std_P_CAT}
          onChange={(e) => handleEdit(row, "Std_P_CAT", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Std_P_Time",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={row.Std_P_Time}
          onChange={(e) => handleEdit(row, "Std_P_Time", e.target.value)}
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
      name: "S_Type",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.S_Type}
          onChange={(e) => handleEdit(row, "S_Type", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Process_Remark",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Process_Remark}
          onChange={(e) => handleEdit(row, "Process_Remark", e.target.value)}
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
                Process <br /> 工程マスタ
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
