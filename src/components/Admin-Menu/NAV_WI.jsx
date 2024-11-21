import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import DataTable from "react-data-table-component";

export function NAV_WI() {
  const [searchTerm, setSearchTerm] = useState("");

  const [data, setData] = useState([
    {
      Item_Name: "DRILL BIT",
      Customer_Name: "ABC-P1",
      Order_Date: "01/11/2567",
      Order_No: "BEC2403007",
      Request_Delivery: "15/12/2567",
      NAV_Name: "DRILLPRO",
      NAV_Size: "GG 2 G",
      Item1_CD: 106,
      Quantity: 35,
      Unit_Price: 1200,
      Amount: 42000,
    },
    {
      Item_Name: "CUTTING TOOL",
      Customer_Name: "XYZ-P2",
      Order_Date: "05/11/2567",
      Order_No: "BEC2403008",
      Request_Delivery: "20/12/2567",
      NAV_Name: "CUTTERMAX",
      NAV_Size: "HH 3 H",
      Item1_CD: 107,
      Quantity: 50,
      Unit_Price: 1800,
      Amount: 90000,
    },
    {
      Item_Name: "GRINDING WHEEL",
      Customer_Name: "GHI-P5",
      Order_Date: "10/11/2567",
      Order_No: "BEC2403009",
      Request_Delivery: "30/12/2567",
      NAV_Name: "GRINDPRO",
      NAV_Size: "II 5 I",
      Item1_CD: 108,
      Quantity: 40,
      Unit_Price: 3000,
      Amount: 120000,
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

  const handleKeyDown = (e, index, field) => {
    if (e.key === "Enter") {
      handleSave(index, field);
      setIsChanged(false);
    }
  };

  const handleBlur = (index, field) => {
    if (isChanged) {
      setEditedData((prevState) => {
        const updatedData = { ...prevState };
        updatedData[index] = { ...data[index] };
        return updatedData;
      });
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
      width: "200px",
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
                NAV_WI Copy DATA
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
