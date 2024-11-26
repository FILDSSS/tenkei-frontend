import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import DataTable from "react-data-table-component";
import axios from "axios";

export function ProcessG() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [editedData, setEditedData] = useState({});
  const [isChanged, setIsChanged] = useState(false);
  const editedDataRef = useRef(editedData);

  const fetchProcessg = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/processg/fetch-processg"
      );
      // console.log("Fetched data:", response.data);
      setData(response.data.data.processg || []);
    } catch (error) {
      // console.error("Error fetching coating:", error);
    }
  };

  useEffect(() => {
    fetchProcessg();
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

  const handleChange = (e, processgCd, field) => {
    const newValue = e.target.value;

    if (editedDataRef.current[processgCd]?.[field] !== newValue) {
      setIsChanged(true);

      const updatedData = { ...editedDataRef.current };

      updatedData[processgCd] = updatedData[processgCd] || {};
      updatedData[processgCd][field] = newValue;

      setEditedData(updatedData);
      editedDataRef.current = updatedData;
    }
  };

  const handleSave = async (processgCd, field) => {
    const newValue = editedData[processgCd]?.[field];
    const oldValue = data.find((row) => row.ProcessG_CD === processgCd)?.[field];

    if (newValue !== oldValue) {
      try {
        const payload = {
          ProcessG_CD: processgCd,
          [field]: newValue === "" ? null : newValue,
        };

        const response = await axios.put(
          "http://localhost:4000/coating/update-coating",
          payload
        );

        const updatedData = [...data];
        const rowIndex = updatedData.findIndex(
          (row) => row.ProcessG_CD === processgCd
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

  const filteredData = data.filter((row) => {
    return Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

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
