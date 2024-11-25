import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import DataTable from "react-data-table-component";
import axios from "axios";

export function Holiday() {
  const [data, setData] = useState([
    {
      Holiday: "2024-12-25",
      Holiday_Name: "Christmas Day",
      Coefficient: 1.5,
      Holiday_Remark: "National holiday",
    },
    {
      Holiday: "2024-01-01",
      Holiday_Name: "New Year's Day",
      Coefficient: 1.2,
      Holiday_Remark: "Start of the new year",
    },
    {
      Holiday: "2024-04-13",
      Holiday_Name: "Songkran Festival",
      Coefficient: 1.3,
      Holiday_Remark: "Traditional Thai New Year",
    },
    {
      Holiday: "2024-05-01",
      Holiday_Name: "Labor Day",
      Coefficient: 1.0,
      Holiday_Remark: "Holiday for workers",
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

  const formatDateForInput = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);

    if (isNaN(date)) return "";

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

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

          localStorage.setItem("holidayData", JSON.stringify(updatedData));
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

  const columns = [
    {
      name: "Holiday",
      selector: (row) => {
        const date = row.Holiday ? new Date(row.Holiday) : null;
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
            editedData[row.ID]?.Holiday ||
            formatDateForInput(row.Holiday)
          }
          onChange={(e) => handleChange(e, row.ID, "Holiday")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Holiday")}
        />
      ),
    },
    {
      name: "Holiday_Name",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Holiday_Name}
          onChange={(e) => handleEdit(row, "Holiday_Name", e.target.value)}
        />
      ),
      width: "200px",
    },
    {
      name: "Coefficient",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={row.Coefficient}
          onChange={(e) => handleEdit(row, "Coefficient", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Holiday_Remark",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          style={{
            width: "fit-content",
            minWidth: "240px",
            maxWidth: "100%",
          }}
          value={row.Holiday_Remark}
          onChange={(e) => handleEdit(row, "Holiday_Remark", e.target.value)}
        />
      ),
      width: "280px",
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
              Holiday <br /> 休日設定
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
                  pagination
                  paginationPerPage={10}
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
  );
}
