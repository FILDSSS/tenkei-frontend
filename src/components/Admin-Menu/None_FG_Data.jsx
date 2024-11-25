import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import DataTable from "react-data-table-component";
import axios from "axios";

export function None_FG_Data() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([
    {
      Order_No: "ORD001",
      Parts_No: "PART001",
      Cost_No: "COST001",
      Process_No: "PROC001",
      OdPt_No: "ODPT001",
      OdPtCs_No: "ODPTCS001",
      OdPtPr_No: "ODPTPR001",
      CMC: "CMC001",
      CMT: "CMT001",
      CPC: "CPC001",
      CPT: "CPT001",
      CPD: "CPD001",
      CPN: "CPN001",
      Cs_Progress_CD: "P001",
      Cs_Complete_Date: "2024-11-01",
      Cs_Complete_Qty: 150,
      Cs_Label_CSV: "Label001",
      Cs_All_Complete: true,
      Cs_Order_All_Complete: true,
      Cs_Parts_Complete: true,
      Cs_Final_Complete: false,
      Cs_Remark: "First Order",
      Cs_Register_Date: "2024-10-01",
      Cs_Modify_Date: "2024-11-15",
      Cs_Reg_Person_CD: "USER001",
      Cs_Upd_Person_CD: "USER002",
      Sequence_No: 1,
      ProcessCD: "P001",
      Comp_Month: "2024-11",
      Amount: 1500.0,
    },
    {
      Order_No: "ORD002",
      Parts_No: "PART002",
      Cost_No: "COST002",
      Process_No: "PROC002",
      OdPt_No: "ODPT002",
      OdPtCs_No: "ODPTCS002",
      OdPtPr_No: "ODPTPR002",
      CMC: "CMC002",
      CMT: "CMT002",
      CPC: "CPC002",
      CPT: "CPT002",
      CPD: "CPD002",
      CPN: "CPN002",
      Cs_Progress_CD: "P002",
      Cs_Complete_Date: "2024-11-05",
      Cs_Complete_Qty: 200,
      Cs_Label_CSV: "Label002",
      Cs_All_Complete: false,
      Cs_Order_All_Complete: false,
      Cs_Parts_Complete: true,
      Cs_Final_Complete: false,
      Cs_Remark: "Second Order",
      Cs_Register_Date: "2024-10-05",
      Cs_Modify_Date: "2024-11-17",
      Cs_Reg_Person_CD: "USER003",
      Cs_Upd_Person_CD: "USER004",
      Sequence_No: 2,
      ProcessCD: "P002",
      Comp_Month: "2024-11",
      Amount: 2000.0,
    },
    {
      Order_No: "ORD003",
      Parts_No: "PART003",
      Cost_No: "COST003",
      Process_No: "PROC003",
      OdPt_No: "ODPT003",
      OdPtCs_No: "ODPTCS003",
      OdPtPr_No: "ODPTPR003",
      CMC: "CMC003",
      CMT: "CMT003",
      CPC: "CPC003",
      CPT: "CPT003",
      CPD: "CPD003",
      CPN: "CPN003",
      Cs_Progress_CD: "P003",
      Cs_Complete_Date: "2024-11-10",
      Cs_Complete_Qty: 300,
      Cs_Label_CSV: "Label003",
      Cs_All_Complete: true,
      Cs_Order_All_Complete: true,
      Cs_Parts_Complete: false,
      Cs_Final_Complete: true,
      Cs_Remark: "Third Order",
      Cs_Register_Date: "2024-10-10",
      Cs_Modify_Date: "2024-11-18",
      Cs_Reg_Person_CD: "USER005",
      Cs_Upd_Person_CD: "USER006",
      Sequence_No: 3,
      ProcessCD: "P003",
      Comp_Month: "2024-11",
      Amount: 3000.0,
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

    if (editedDataRef.current[workgCd]?.[field] !== newValue) {
      setIsChanged(true);

      const updatedData = { ...editedDataRef.current };

      updatedData[workgCd] = updatedData[workgCd] || {};
      updatedData[workgCd][field] = newValue;

      setEditedData(updatedData);
      editedDataRef.current = updatedData;
    }
  };

  const handleSave = (workgCd, field) => {
    const newValue = editedData[workgCd]?.[field];
    const oldValue = data.find((row) => row.WorkG_CD === workgCd)?.[field];

    if (newValue !== oldValue) {
      try {
        const updatedData = [...data];
        const rowIndex = updatedData.findIndex(
          (row) => row.WorkG_CD === workgCd
        );

        if (rowIndex !== -1) {
          updatedData[rowIndex][field] = newValue;
          setData(updatedData);

          localStorage.setItem("noneFgData", JSON.stringify(updatedData));
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
      name: "Order_No",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Order_No}
          onChange={(e) => handleEdit(index, "Order_No", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Parts_No",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Parts_No}
          onChange={(e) => handleEdit(index, "Parts_No", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Cost_No",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Cost_No}
          onChange={(e) => handleEdit(index, "Cost_No", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Process_No",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Process_No}
          onChange={(e) => handleEdit(index, "Process_No", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "OdPt_No",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.OdPt_No}
          onChange={(e) => handleEdit(index, "OdPt_No", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "OdPtCs_No",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.OdPtCs_No}
          onChange={(e) => handleEdit(index, "OdPtCs_No", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "OdPtPr_No",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.OdPtPr_No}
          onChange={(e) => handleEdit(index, "OdPtPr_No", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "CMC",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.CMC}
          onChange={(e) => handleEdit(index, "CMC", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "CMT",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.CMT}
          onChange={(e) => handleEdit(index, "CMT", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "CPC",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.CPC}
          onChange={(e) => handleEdit(index, "CPC", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "CPT",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.CPT}
          onChange={(e) => handleEdit(index, "CPT", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "CPD",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.CPD}
          onChange={(e) => handleEdit(index, "CPD", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "CPN",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.CPN}
          onChange={(e) => handleEdit(index, "CPN", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Cs_Progress_CD",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Cs_Progress_CD}
          onChange={(e) => handleEdit(index, "Cs_Progress_CD", e.target.value)}
        />
      ),
      width: "180px",
    },
    {
      name: "Cs_Complete_Date",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Cs_Complete_Date}
          onChange={(e) =>
            handleEdit(index, "Cs_Complete_Date", e.target.value)
          }
        />
      ),
      width: "200px",
    },
    {
      name: "Cs_Complete_Qty",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Cs_Complete_Qty}
          onChange={(e) => handleEdit(index, "Cs_Complete_Qty", e.target.value)}
        />
      ),
      width: "180px",
    },
    {
      name: "Cs_Label_CSV",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Cs_Label_CSV}
          onChange={(e) => handleEdit(index, "Cs_Label_CSV", e.target.value)}
        />
      ),
      width: "180px",
    },
    {
      name: "Cs_All_Complete",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Cs_All_Complete}
          onChange={(e) => handleEdit(index, "Cs_All_Complete", e.target.value)}
        />
      ),
      width: "180px",
    },
    {
      name: "Cs_Order_All_Complete",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Cs_Order_All_Complete}
          onChange={(e) =>
            handleEdit(index, "Cs_Order_All_Complete", e.target.value)
          }
        />
      ),
      width: "220px",
    },
    {
      name: "Cs_Parts_Complete",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Cs_Parts_Complete}
          onChange={(e) =>
            handleEdit(index, "Cs_Parts_Complete", e.target.value)
          }
        />
      ),
      width: "200px",
    },
    {
      name: "Cs_Final_Complete",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Cs_Final_Complete}
          onChange={(e) =>
            handleEdit(index, "Cs_Final_Complete", e.target.value)
          }
        />
      ),
      width: "200px",
    },
    {
      name: "Cs_Remark",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Cs_Remark}
          onChange={(e) => handleEdit(index, "Cs_Remark", e.target.value)}
        />
      ),
      width: "200px",
    },
    {
      name: "Cs_Register_Date",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Cs_Register_Date}
          onChange={(e) =>
            handleEdit(index, "Cs_Register_Date", e.target.value)
          }
        />
      ),
      width: "200px",
    },
    {
      name: "Cs_Modify_Date",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Cs_Modify_Date}
          onChange={(e) => handleEdit(index, "Cs_Modify_Date", e.target.value)}
        />
      ),
      width: "200px",
    },
    {
      name: "Cs_Reg_Person_CD",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Cs_Reg_Person_CD}
          onChange={(e) =>
            handleEdit(index, "Cs_Reg_Person_CD", e.target.value)
          }
        />
      ),
      width: "200px",
    },
    {
      name: "Cs_Upd_Person_CD",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Cs_Upd_Person_CD}
          onChange={(e) =>
            handleEdit(index, "Cs_Upd_Person_CD", e.target.value)
          }
        />
      ),
      width: "200px",
    },
    {
      name: "Sequence_No",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Sequence_No}
          onChange={(e) => handleEdit(index, "Sequence_No", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "ProcessCD",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.ProcessCD}
          onChange={(e) => handleEdit(index, "ProcessCD", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Comp_Month",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Comp_Month}
          onChange={(e) => handleEdit(index, "Comp_Month", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Amount",
      selector: (row, index) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Amount}
          onChange={(e) => handleEdit(index, "Amount", e.target.value)}
        />
      ),
      width: "150px",
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
                None FG DATA In NAV
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
