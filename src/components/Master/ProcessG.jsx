import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import DataTable from "react-data-table-component";
import axios from "axios";

export function ProcessG() {
  const [data, setData] = useState([
    {
      ProcessG_CD: "PG001",
      Change_CD: "CH001",
      ManageG_CD: "MG001",
      ProcessG_Name: "Assembly",
      ProcessG_Abb: "ASM",
      ProcessG_Symbol: "",
      ProcessG_Mark: "ASSFSD",
      Use: true,
      Use_Object: false,
      Graph: true,
      List: false,
      Coefficient: "1",
      M_Coefficient: "1",
      P_Coefficient: "1",
      Std_M_CAT: 2.5,
      Std_M_Time: 3.5,
      Std_P_CAT: 1.8,
      Std_P_Time: 4.0,
      M_Resource_N: "Machine A",
      S_Resource_N: "Worker B",
      ProcessG_Remark: "Critical process for product assembly",
    },
    {
      ProcessG_CD: "PG002",
      Change_CD: "CH002",
      ManageG_CD: "MG002",
      ProcessG_Name: "Inspection",
      ProcessG_Abb: "INS",
      ProcessG_Symbol: "",
      ProcessG_Mark: "ADFHFHG",
      Use: true,
      Use_Object: false,
      Graph: true,
      List: false,
      Coefficient: "1",
      M_Coefficient: "1",
      P_Coefficient: "1",
      Std_M_CAT: 1.5,
      Std_M_Time: 2.5,
      Std_P_CAT: 1.2,
      Std_P_Time: 3.0,
      M_Resource_N: "Machine C",
      S_Resource_N: "Inspector D",
      ProcessG_Remark: "Mandatory process for quality check before shipping",
    },
    {
      ProcessG_CD: "PG003",
      Change_CD: "CH003",
      ManageG_CD: "MG003",
      ProcessG_Name: "Packaging",
      ProcessG_Abb: "PKG",
      ProcessG_Symbol: "",
      ProcessG_Mark: "LKHFFKJFG",
      Use: true,
      Use_Object: false,
      Graph: true,
      List: false,
      Coefficient: "1",
      M_Coefficient: "1",
      P_Coefficient: "1",
      Std_M_CAT: 2.0,
      Std_M_Time: 3.0,
      Std_P_CAT: 1.7,
      Std_P_Time: 4.5,
      M_Resource_N: "Machine B",
      S_Resource_N: "Worker E",
      ProcessG_Remark: "Final step before dispatch to customers",
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

  const handleChange = (e, customerCd, field) => {
    const newValue = e.target.value;

    if (editedDataRef.current[customerCd]?.[field] !== newValue) {
      setIsChanged(true);

      const updatedData = { ...editedDataRef.current };

      updatedData[customerCd] = updatedData[customerCd] || {};
      updatedData[customerCd][field] = newValue;

      setEditedData(updatedData);
      editedDataRef.current = updatedData;
    }
  };

  const handleSave = (customerCd, field) => {
    const newValue = editedData[customerCd]?.[field];
    const oldValue = data.find((row) => row.Customer_CD === customerCd)?.[
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

          localStorage.setItem("processGData", JSON.stringify(updatedData));
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
      name: "ProcessG_CD",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.ProcessG_CD}
          onChange={(e) => handleEdit(index, "ProcessG_CD", e.target.value)}
        />
      ),
      width: "190px",
    },
    {
      name: "Change_CD",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Change_CD}
          onChange={(e) => handleEdit(index, "Change_CD", e.target.value)}
        />
      ),
      width: "190px",
    },
    {
      name: "ManageG_CD",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.ManageG_CD}
          onChange={(e) => handleEdit(index, "ManageG_CD", e.target.value)}
        />
      ),
      width: "190px",
    },
    {
      name: "ProcessG_Name",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.ProcessG_Name}
          onChange={(e) => handleEdit(index, "ProcessG_Name", e.target.value)}
        />
      ),
      width: "190px",
    },
    {
      name: "ProcessG_Abb",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.ProcessG_Abb}
          onChange={(e) => handleEdit(index, "ProcessG_Abb", e.target.value)}
        />
      ),
      width: "190px",
    },
    {
      name: "ProcessG_Symbol",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.ProcessG_Symbol}
          onChange={(e) => handleEdit(index, "ProcessG_Symbol", e.target.value)}
        />
      ),
      width: "190px",
    },
    {
      name: "ProcessG_Mark",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.ProcessG_Mark}
          onChange={(e) => handleEdit(index, "ProcessG_Mark", e.target.value)}
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
      name: "Use_Object",
      selector: (row, index) => (
        <input
          type="checkbox"
          checked={row.Use_Object}
          onChange={(e) => handleEdit(index, "Use_Object", e.target.checked)}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "150px",
    },
    {
      name: "Graph",
      selector: (row, index) => (
        <input
          type="checkbox"
          checked={row.Graph}
          onChange={(e) => handleEdit(index, "Graph", e.target.checked)}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "100px",
    },
    {
      name: "List",
      selector: (row, index) => (
        <input
          type="checkbox"
          value={row.List}
          onChange={(e) => handleEdit(index, "List", e.target.value)}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "150px",
    },
    {
      name: "Coefficient",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Coefficient}
          onChange={(e) => handleEdit(index, "Coefficient", e.target.value)}
        />
      ),
      width: "150px",
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
      name: "Std_M_CAT",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Std_M_CAT}
          onChange={(e) => handleEdit(index, "Std_M_CAT", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Std_M_Time",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={row.Std_M_Time}
          onChange={(e) => handleEdit(index, "Std_M_Time", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Std_P_CAT",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={row.Std_P_CAT}
          onChange={(e) => handleEdit(index, "Std_P_CAT", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Std_P_Time",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={row.Std_P_Time}
          onChange={(e) => handleEdit(index, "Std_P_Time", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "M_Resource_N",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.M_Resource_N}
          onChange={(e) => handleEdit(index, "M_Resource_N", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "S_Resource_N",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.S_Resource_N}
          onChange={(e) => handleEdit(index, "S_Resource_N", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "ProcessG_Remark",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          style={{
            width: "fit-content",
            minWidth: "340px",
            maxWidth: "100%",
          }}
          value={row.ProcessG_Remark}
          onChange={(e) => handleEdit(index, "ProcessG_Remark", e.target.value)}
        />
      ),
      width: "400px",
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
                ProcessG <br /> 工程Gマスタ
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
