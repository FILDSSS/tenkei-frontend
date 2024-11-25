import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import DataTable from "react-data-table-component";
import axios from "axios";

export function Customer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([
    {
      Customer_CD: "CUST001",
      Customer_Name: "John Doe",
      Customer_Name2: "J.D.",
      Customer_Abb: "JD",
      Customer_Add: "123 Main Street, Springfield",
      Customer_Add2: "Apt 4B, Springfield",
      Customer_Add3: null,
      Customer_Contact: "john.doe@example.com",
      Customer_TEL: "+1-555-123-4567",
      Posting_Group: "PG001",
      Payment_CD: "PAY001",
      Sl_Person_CD: "SP001",
      Blocked: false,
      Customer_FAX: "+1-555-765-4321",
      Branch_No: "BR001",
      Nationality: "American",
      Customer_Group: "Retail",
      VAT_Reg_No: "US123456789",
      Customer_Remark: "Preferred customer",
    },
    {
      Customer_CD: "CUST002",
      Customer_Name: "Jane Smith",
      Customer_Name2: null,
      Customer_Abb: "JS",
      Customer_Add: "456 Elm Street, Metropolis",
      Customer_Add2: null,
      Customer_Add3: null,
      Customer_Contact: "jane.smith@example.com",
      Customer_TEL: "+1-555-234-5678",
      Posting_Group: "PG002",
      Payment_CD: "PAY002",
      Sl_Person_CD: "SP002",
      Blocked: true,
      Customer_FAX: null,
      Branch_No: "BR002",
      Nationality: "Canadian",
      Customer_Group: "Wholesale",
      VAT_Reg_No: "CA987654321",
      Customer_Remark: "Account on hold",
    },
    {
      Customer_CD: "CUST003",
      Customer_Name: "Michael Johnson",
      Customer_Name2: "M.J.",
      Customer_Abb: "MJ",
      Customer_Add: "789 Oak Street, Gotham",
      Customer_Add2: "Suite 101, Gotham",
      Customer_Add3: "Building A, Gotham",
      Customer_Contact: "michael.j@example.com",
      Customer_TEL: "+1-555-345-6789",
      Posting_Group: "PG003",
      Payment_CD: "PAY003",
      Sl_Person_CD: "SP003",
      Blocked: false,
      Customer_FAX: "+1-555-987-6543",
      Branch_No: "BR003",
      Nationality: "British",
      Customer_Group: "Corporate",
      VAT_Reg_No: "GB456123789",
      Customer_Remark: "Key account",
    },
  ]);

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

          localStorage.setItem("customerData", JSON.stringify(updatedData));
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
      name: "Customer_CD",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Customer_CD}
          onChange={(e) => handleEdit(index, "Customer_CD", e.target.value)}
        />
      ),
      width: "150px",
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
      width: "200px",
    },
    {
      name: "Customer_Name2",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Customer_Name2}
          onChange={(e) => handleEdit(index, "Customer_Name2", e.target.value)}
        />
      ),
      width: "200px",
    },
    {
      name: "Customer_Abb",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Customer_Abb}
          onChange={(e) => handleEdit(index, "Customer_Abb", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Customer_Add",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Customer_Add}
          onChange={(e) => handleEdit(index, "Customer_Add", e.target.value)}
        />
      ),
      width: "300px",
    },
    {
      name: "Customer_Add2",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Customer_Add2}
          onChange={(e) => handleEdit(index, "Customer_Add2", e.target.value)}
        />
      ),
      width: "300px",
    },
    {
      name: "Customer_Add3",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Customer_Add3}
          onChange={(e) => handleEdit(index, "Customer_Add3", e.target.value)}
        />
      ),
      width: "300px",
    },
    {
      name: "Customer_Contact",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Customer_Contact}
          onChange={(e) =>
            handleEdit(index, "Customer_Contact", e.target.value)
          }
        />
      ),
      width: "250px",
    },
    {
      name: "Customer_TEL",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Customer_TEL}
          onChange={(e) => handleEdit(index, "Customer_TEL", e.target.value)}
        />
      ),
      width: "200px",
    },
    {
      name: "Posting_Group",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Posting_Group}
          onChange={(e) => handleEdit(index, "Posting_Group", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Payment_CD",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Payment_CD}
          onChange={(e) => handleEdit(index, "Payment_CD", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Sl_Person_CD",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Sl_Person_CD}
          onChange={(e) => handleEdit(index, "Sl_Person_CD", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Blocked",
      selector: (row, index) => (
        <input
          type="checkbox"
          checked={row.Blocked}
          onChange={(e) => handleEdit(index, "Blocked", e.target.checked)}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "100px",
    },
    {
      name: "Customer_FAX",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Customer_FAX}
          onChange={(e) => handleEdit(index, "Customer_FAX", e.target.value)}
        />
      ),
      width: "200px",
    },
    {
      name: "Branch_No",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Branch_No}
          onChange={(e) => handleEdit(index, "Branch_No", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Nationality",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Nationality}
          onChange={(e) => handleEdit(index, "Nationality", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Customer_Group",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Customer_Group}
          onChange={(e) => handleEdit(index, "Customer_Group", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "VAT_Reg_No",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.VAT_Reg_No}
          onChange={(e) => handleEdit(index, "VAT_Reg_No", e.target.value)}
        />
      ),
      width: "200px",
    },
    {
      name: "Customer_Remark",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          style={{
            width: "fit-content",
            minWidth: "240px",
            maxWidth: "100%",
          }}
          value={row.Customer_Remark}
          onChange={(e) => handleEdit(index, "Customer_Remark", e.target.value)}
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
                Customer <br /> (受注一覧)
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
