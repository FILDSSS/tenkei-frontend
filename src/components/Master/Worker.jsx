import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import DataTable from "react-data-table-component";
import axios from "axios";

export function Worker() {
  const [data, setData] = useState([
    {
      Worker_CD: "WR001",
      Worker_Pass: "pass123",
      WorkerG_CD: "WG001",
      WorkG_CD: "WK001",
      Worker_Name: "Taro Yamada",
      Worker_Abb: "TY",
      Worker_JPN: "山田 太郎",
      Access_Lv: 3,
      Worker_Level: "Senior",
      Worker_Menu: "Main Menu",
      Worker_Remark: "Experienced in management",
    },
    {
      Worker_CD: "WR002",
      Worker_Pass: "pass456",
      WorkerG_CD: "WG002",
      WorkG_CD: "WK002",
      Worker_Name: "Hanako Suzuki",
      Worker_Abb: "HS",
      Worker_JPN: "鈴木 花子",
      Access_Lv: 2,
      Worker_Level: "Intermediate",
      Worker_Menu: "Admin Menu",
      Worker_Remark: "Specialized in customer support",
    },
    {
      Worker_CD: "WR003",
      Worker_Pass: "pass789",
      WorkerG_CD: "WG003",
      WorkG_CD: "WK003",
      Worker_Name: "Kenji Tanaka",
      Worker_Abb: "KT",
      Worker_JPN: "田中 健二",
      Access_Lv: 1,
      Worker_Level: "Junior",
      Worker_Menu: "Restricted Menu",
      Worker_Remark: "New employee in training",
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

          localStorage.setItem("workerData", JSON.stringify(updatedData));
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
      name: "Worker_CD",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Worker_CD}
          onChange={(e) => handleEdit(index, "Worker_CD", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Worker_Pass",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Worker_Pass}
          onChange={(e) => handleEdit(index, "Worker_Pass", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "WorkerG_CD",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.WorkerG_CD}
          onChange={(e) => handleEdit(index, "WorkerG_CD", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "WorkG_CD",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.WorkG_CD}
          onChange={(e) => handleEdit(index, "WorkG_CD", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Worker_Name",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Worker_Name}
          onChange={(e) => handleEdit(index, "Worker_Name", e.target.value)}
        />
      ),
      width: "200px",
    },
    {
      name: "Worker_Abb",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Worker_Abb}
          onChange={(e) => handleEdit(index, "Worker_Abb", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Worker_JPN",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Worker_JPN}
          onChange={(e) => handleEdit(index, "Worker_JPN", e.target.value)}
        />
      ),
      width: "200px",
    },
    {
      name: "Access_Lv",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={row.Access_Lv}
          onChange={(e) => handleEdit(index, "Access_Lv", e.target.value)}
        />
      ),
      width: "100px",
    },
    {
      name: "Worker_Level",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Worker_Level}
          onChange={(e) => handleEdit(index, "Worker_Level", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Worker_Menu",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Worker_Menu}
          onChange={(e) => handleEdit(index, "Worker_Menu", e.target.value)}
        />
      ),
      width: "200px",
    },
    {
      name: "Worker_Remark",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          style={{
            width: "fit-content",
            minWidth: "240px",
            maxWidth: "100%",
          }}
          value={row.Worker_Remark}
          onChange={(e) => handleEdit(index, "Worker_Remark", e.target.value)}
        />
      ),
      width: "300px",
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
                Worker <br /> 社員マスタ
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
