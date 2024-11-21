import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import DataTable from "react-data-table-component";
import axios from "axios";

export function MonthTarget() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editedData, setEditedData] = useState({});
  const [isChanged, setIsChanged] = useState(false);
  const editedDataRef = useRef(editedData);

  const fetchWorkG = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/workg/fetch-workg"
      );
      setData(response.data.data.workg || []);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchWorkG();
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

  const handleChange = (e, workgCd, field) => {
    const newValue = e.target.value;
    setIsChanged(true);

    if (editedDataRef.current[workgCd]?.[field] !== newValue) {
      const updatedEditedData = { ...editedDataRef.current };
      updatedEditedData[workgCd] = updatedEditedData[workgCd] || {};
      updatedEditedData[workgCd][field] = newValue;

      setEditedData(updatedEditedData);
      editedDataRef.current = updatedEditedData;
    }
  };

  const handleSave = (workgCd, field) => {
    const newValue = editedData[workgCd]?.[field];
    const oldValue = data.find((row) => row.WorkG_CD === workgCd)?.[field];

    if (newValue !== oldValue) {
      const updatedData = [...data];
      const rowIndex = updatedData.findIndex((row) => row.WorkG_CD === workgCd);

      if (rowIndex !== -1) {
        updatedData[rowIndex][field] = newValue;
        setData(updatedData);
      }

      localStorage.setItem("workgData", JSON.stringify(updatedData));

      alert("Edit Successfully!");
      setIsChanged(false);
    }
  };

  const handleKeyDown = (e, workgCd, field) => {
    if (e.key === "Enter") {
      handleSave(workgCd, field);
      setIsChanged(false);
    }
  };

  const handleBlur = (workgCd, field) => {
    if (isChanged) {
      setEditedData((prevState) => {
        const updatedData = { ...prevState };
        updatedData[workgCd] = {
          ...data.find((row) => row.WorkG_CD === workgCd),
        };
        return updatedData;
      });
      setIsChanged(false);
    }
  };

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const columns = [
    {
      name: "WorkG_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedDataRef.current[row.WorkG_CD]?.WorkG_CD || row.WorkG_CD || ""
          }
          onChange={(e) => handleChange(e, row.WorkG_CD, "WorkG_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.WorkG_CD, "WorkG_CD")}
          onBlur={() => handleBlur(row.WorkG_CD, "WorkG_CD")}
        />
      ),
      sortable: true,
      width: "170px",
    },
    {
      name: "WorkG_Abb",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedDataRef.current[row.WorkG_CD]?.WorkG_Abb ||
            row.WorkG_Abb ||
            ""
          }
          onChange={(e) => handleChange(e, row.WorkG_CD, "WorkG_Abb")}
          onKeyDown={(e) => handleKeyDown(e, row.WorkG_CD, "WorkG_Abb")}
          onBlur={() => handleBlur(row.WorkG_CD, "WorkG_Abb")}
        />
      ),
      sortable: true,
      width: "170px",
    },
    {
      name: "Target_Amount",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedDataRef.current[row.WorkG_CD]?.Target_Amount ??
            row.Target_Amount ??
            ""
          }
          onChange={(e) => handleChange(e, row.WorkG_CD, "Target_Amount")}
          onKeyDown={(e) => handleKeyDown(e, row.WorkG_CD, "Target_Amount")}
          onBlur={() => handleBlur(row.WorkG_CD, "Target_Amount")}
        />
      ),
      sortable: true,
      width: "160px",
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
              Month Target Setting
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
            <div className="flex justify-left items-center mt-5 mb-3">
              <div className="w-full sm:w-auto text-center px-5">
                <DataTable
                  columns={columns}
                  data={filteredData}
                  customStyles={{
                    rows: {
                      style: {
                        minHeight: "50px",
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
