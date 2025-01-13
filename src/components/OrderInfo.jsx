import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useOrder } from "../hooks/use-order";
import { usePlan } from "../hooks/use-plan";
import { FaArrowDownLong, FaArrowRightLong } from "react-icons/fa6";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function OrderInfo() {
  const generateSpaces = (count) => "\u00A0".repeat(count);
  const navigate = useNavigate();
  const location = useLocation();
  const [buttonState, setButtonState] = useState({
    F1: false,
    F2: false,
    newAddButton: true,
    F3: false,
    F4: false,
    F5: false,
    F6: false,
    F7: false,
    F8: true,
    F9: false,
    F10: false,
    F11: false,
    F12: true,
  });
  const [filteredWorkgData, setFilteredWorkgData] = useState([]);
  const [selectedWorkGName, setSelectedWorkGName] = useState("");
  const { searchOrderNo: initialSearchOrderNo = "" } = location.state || {};
  const [searchOrderNo, setSearchOrderNo] = useState(initialSearchOrderNo);
  const [remainningQuantity, setRemainningQuantity] = useState("");
  const [selectedSalesGrpAbb, setSelectedSalesGrpAbb] = useState("");
  const [selectedSalesPersonAbb, setSelectedSalesPerson] = useState("");
  const [selectedCustomerAbb, setSelectedCustomerAbb] = useState("");
  const [selectedCustomerName, setSelectedCustomerName] = useState("");
  const [request1Name, setRequest1Name] = useState("");
  const [request2Name, setRequest2Name] = useState("");
  const [request3Name, setRequest3Name] = useState("");
  const [quoteName, setQuoteName] = useState("");
  const [unitName, setUnitName] = useState("");
  const [itemName, setItemName] = useState("");
  const [supplyName, setSupplyName] = useState("");
  const [coatingName, setCoatingName] = useState("");
  const [targetName, setTargetName] = useState("");
  const [personName, setPersonName] = useState("");
  const [PriceName, setPriceName] = useState("");
  const [regPersonName, setregPersonName] = useState("");
  const [updPersonName, setupdPersonName] = useState("");
  const [destinationName, setDestinationName] = useState("");
  const [OrderNo, setOrderNo] = useState("");
  const [autoYearChange, setAutoYearChange] = useState(true);
  const [customerDraw, setCustomerDraw] = useState("");
  const [companyDraw, setCompanyDraw] = useState("");
  const [DocuName, setDocuName] = useState("");
  const [SpecificName, setSpecificName] = useState("");
  const [OdProgressName, setOdProgressName] = useState("");
  const [DeliveryName, setDeliveryName] = useState("");
  const [Schedule_Name, setSchedule_Name] = useState("");
  const orderNoRef = useRef(null);
  const SearchorderNoRef = useRef(null);
  const handleAutoYearChange = (event) => {
    setAutoYearChange(event.target.checked);
  };
  const { ScheduleData } = usePlan();
  const {
    CustomerData,
    WorkerData,
    WorkergData,
    orderData,
    searchOrderData,
    fetchOrders,
    editOrders,
    deleteOrder,
    setOrderData,
    createOrder,
    setWorkergData,
    setWorkerData,
    Request1Data,
    setRequest1Data,
    Request2Data,
    setRequest2Data,
    Request3Data,
    setRequest3Data,
    CoatingData,
    setCoatingData,
    TargetData,
    setTargetData,
    Item1Data,
    setItem1Data,
    SupplyData,
    setSupplyData,
    UnitData,
    setUnitData,
    WorkgData,
    setWorkgData,
    setCustomerData,
    QuoteData,
    setQuoteData,
    PriceData,
    setPriceData,
    ContractDocuData,
    setContractDocu,
    SpecificData,
    setSpecificData,
    OdProgressData,
    setOdProgressData,
    DeliveryData,
    setDeliveryData,
    CheckOrderData,
  } = useOrder();

  const confirmWhenSaveNull = (fieldName, defaultValue) => {
    const value = document.getElementById(fieldName).value;
    return value !== defaultValue && value.trim() !== "";
  };

  const handleF1Click = () => {
    if (searchOrderNo) {
      // ตรวจสอบว่ามีการกรอกหมายเลขคำสั่งซื้อ
      searchOrderData(searchOrderNo); // เรียกฟังก์ชันค้นหาข้อมูล
    } else {
      // ใช้ SweetAlert 2 แทน alert
      Swal.fire({
        title: "ข้อมูลไม่ถูกต้อง",
        text: "กรุณากรอกหมายเลขคำสั่งซื้อก่อน",
        icon: "warning",
        confirmButtonText: "ตกลง",
      });
    }
  };

  const handleF2Click = () => {
    console.log("F2 Clicked");
    try {
      searchPermission(false);
      editPermission(true);

      const orderNoInput = document.getElementById("Order_No");

      orderNoInput.disabled = true;
      setButtonState((prevState) => ({
        ...prevState,
        F2: false,
        F3: false,
        newAddButton: false,
        F4: false,
        F5: false,
        F6: false,
        F9: true,
        F10: false,
        F11: true,
        F12: false,
      }));
    } catch (error) {
      // จัดการข้อผิดพลาด
      alert("Error occurs when F2_Click\nPlease contact system administrator.");
    }
  };

  const handleF3Click = () => {
    try {
      searchPermission(false);
      editPermission(false);
      document.getElementById("Order_No").disabled = false;
      setSearchOrderNo("");
      setOrderData("");
      setRemainningQuantity("");
      setSelectedSalesGrpAbb("");
      setSelectedSalesPerson("");
      setSelectedCustomerAbb("");
      setSelectedCustomerName("");
      setRequest1Name("");
      setRequest2Name("");
      setRequest3Name("");
      setQuoteName("");
      setUnitName("");
      setItemName("");
      setSupplyName("");
      setCoatingName("");
      setTargetName("");
      setPersonName("");
      setPriceName("");
      setregPersonName("");
      setupdPersonName("");
      setDestinationName("");
      setOrderNo("");
      setCustomerDraw("");
      setCompanyDraw("");
      setDocuName("");
      setSpecificName("");
      setOdProgressName("");
      setDeliveryName("");
      setSchedule_Name("");
      if (orderNoRef.current) {
        orderNoRef.current.focus();
      }
      setButtonState((prevState) => ({
        F3: false,
        F8: true,
        F9: true,
        F11: true,
        F12: false,
      }));
    } catch (error) {
      // จัดการข้อผิดพลาด
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: "กรุณาลองอีกครั้ง",
        icon: "error",
        confirmButtonText: "ตกลง",
      });
      console.error("Error in F3_Click:", error); // แสดงข้อผิดพลาดใน Console
    }
  };

  const handleF4Click = async () => {
    try {
      const orderExists = await searchOrderData(searchOrderNo);
      if (orderExists) {
        navigate("/purchase-info", { state: { searchOrderNo } });
      } else {
        await Swal.fire({
          title: "ข้อมูลไม่ถูกต้อง",
          text: "ไม่มีพบหมายเลข order",
          icon: "warning",
          confirmButtonText: "ตกลง",
        });
      }
    } catch (error) {
      alert("Error occurs when F4_Click\nPlease contact system administrator.");
    }
  };
  const handleF5Click = () => {
    try {
      // ส่งค่า Search_Order_No ไปที่หน้า /plan-info
      navigate("/plan-info", { state: { OrderNo: orderData.Order_No } });
    } catch (error) {
      // จัดการข้อผิดพลาด
      alert("Error occurs when F5_Click\nPlease contact system administrator.");
    }
  };

  const handleF6Click = async () => {
    try {
      // ตรวจสอบว่า OrderNo เป็นค่าว่างหรือไม่
   
      // ส่ง OrderNo เป็นพารามิเตอร์ใน URL
      navigate(`/reports/RD_Process_Sheet24Page/${orderData.Order_No}`, {
        state: { OrderNo },
      });
    } catch (error) {
      // จัดการข้อผิดพลาด
      alert("Error occurs when F6_Click\nPlease contact system administrator.");
    }
  };
  const handleF8Click = async () => {
    try {
      Swal.fire({
        title: "Limit",
        html: "This feature is currently unavialable!<br>ปัจจุบันไม่สามารถใข้งานฟังก์ชั่นนี้ได้ !<br>現在この機能は使用出来7",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } catch (error) {
      console.error("Error in handleF9Click:", error);
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: "กรุณาติดต่อผู้ดูแลระบบ",
        icon: "error",
        confirmButtonText: "ตกลง",
      });
    }
  };

  const handleF9Click = async () => {
    try {
      // ตรวจสอบว่าฟิลด์ Order_No ถูกกรอกหรือไม่
      if (!confirmWhenSaveNull("Order_No", "")) {
        await Swal.fire({
          title: "ข้อมูลไม่ถูกต้อง",
          text: "(Order_No) เป็นค่าว่าง",
          icon: "warning",
          confirmButtonText: "ตกลง",
        });
        return; // ถ้าไม่ถูกกรอกให้หยุดทำงาน
      }

      // ตรวจสอบว่าฟิลด์ Quantity ถูกกรอกหรือไม่
      if (!confirmWhenSaveNull("Quantity", 0)) {
        await Swal.fire({
          title: "ข้อมูลไม่ถูกต้อง",
          text: "(Quantity) เป็นค่าว่าง",
          icon: "warning",
          confirmButtonText: "ตกลง",
        });
        return; // ถ้าไม่ถูกกรอกให้หยุดทำงาน
      }

      // ตรวจสอบว่ามี Order_No นี้อยู่ในฐานข้อมูลหรือไม่
      const orderExists = await searchOrderData(orderData.Order_No);

      if (orderExists) {
        const result = await Swal.fire({
          title: "ต้องการแก้ไขบันทึกข้อมูลหรือไม่",
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "ใช่",
          cancelButtonText: "ไม่ใช่",
        });

        if (result.isConfirmed) {
          // ดึงค่าจากฟิลด์ Order_No ที่มี id="Order_No"
          const orderNo = document.getElementById("Order_No").value;

          // ดึงวันที่และเวลาปัจจุบัน
          const now = new Date();
          const formattedDate = now.toISOString(); // รูปแบบวันที่เป็น ISO 8601 เช่น "2024-10-23T08:30:00.000Z"

          // อัปเดตฟิลด์ Od_Upd_Date ในอินพุตให้แสดงวันที่ปัจจุบัน
          document.getElementById("Od_Upd_Date").value = formattedDate;
          orderData.Od_Upd_Date = formattedDate;

          await editOrders(orderNo);
          await searchOrderData(searchOrderNo);
          // ปิดการแก้ไขสิทธิ์
          editPermission(false);
          setButtonState((prevState) => ({
            F2: true,
            newAddButton: true,
            F3: true,
            F4: true,
            F5: true,
            F6: true,
            F8: true,
            F10: true,
            F11: true,
            F9: false,
          }));
        }
      } else {
        const result = await Swal.fire({
          title: "ต้องการบันทึกข้อมูลหรือไม่",
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "ใช่",
          cancelButtonText: "ไม่ใช่",
        });

        if (result.isConfirmed) {
          // ดึงวันที่และเวลาปัจจุบัน
          const now = new Date();
          const formattedDate = now.toISOString(); // รูปแบบวันที่เป็น ISO 8601 เช่น "2024-10-23T08:30:00.000Z"

          // อัปเดตฟิลด์ Od_Upd_Date ในอินพุตให้แสดงวันที่ปัจจุบัน
          document.getElementById("Od_Upd_Date").value = formattedDate;
          orderData.Od_Upd_Date = formattedDate;

          await createOrder();
          await searchOrderData(searchOrderNo);
          // ปิดการแก้ไขสิทธิ์
          editPermission(false);
          setButtonState((prevState) => ({
            F2: true,
            newAddButton: true,
            F3: true,
            F4: true,
            F5: true,
            F6: true,
            F8: true,
            F10: true,
            F11: true,
            F9: false,
          }));
        }
      }
    } catch (error) {
      console.error("Error in handleF9Click:", error);
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: "กรุณาติดต่อผู้ดูแลระบบ",
        icon: "error",
        confirmButtonText: "ตกลง",
      });
    }
  };

  const handleF10Click = async () => {
    try {
      // แสดงกล่องยืนยันการลบข้อมูล
      const result = await Swal.fire({
        title: "ยืนยันการลบ?",
        text: "คุณต้องการลบข้อมูลนี้หรือไม่?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "ใช่, ลบเลย!",
        cancelButtonText: "ยกเลิก",
      });

      // ตรวจสอบว่าผู้ใช้เลือก "ยืนยัน" หรือไม่
      if (result.isConfirmed) {
        const response = await deleteOrder(searchOrderNo); // เรียกใช้ฟังก์ชันลบคำสั่ง
        console.log("Delete result:", response);

        // แสดงข้อความว่าลบเรียบร้อยแล้ว
        Swal.fire(
          "ลบเรียบร้อย!",
          "ข้อมูลของคุณได้ถูกลบเรียบร้อยแล้ว.",
          "success"
        );
      }
    } catch (error) {
      // จัดการข้อผิดพลาด
      alert(
        "Error occurs when F10_Click\nPlease contact system administrator."
      );
    }
  };
  const handleF11Click = async () => {
    try {
     
      const result = await Swal.fire({
        title: "Confirm",
        html: "Would you like to make the next input?<br>ป้อนข้อมูลต่อไปหรือไม่ ?<br>次入力しますか?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      });
     
      if (result.isConfirmed) {
        if (searchOrderNo) {
      setSearchOrderNo("")
      setRemainningQuantity("");
      setSelectedSalesGrpAbb("");
      setSelectedSalesPerson("");
      setSelectedCustomerAbb("");
      setSelectedCustomerName("");
      setRequest1Name("");
      setRequest2Name("");
      setRequest3Name("");
      setQuoteName("");
      setUnitName("");
      setItemName("");
      setSupplyName("");
      setCoatingName("");
      setTargetName("");
      setPersonName("");
      setPriceName("");
      setregPersonName("");
      setupdPersonName("");
      setDestinationName("");
      setOrderNo("");
      setCustomerDraw("");
      setCompanyDraw("");
      setDocuName("");
      setSpecificName("");
      setOdProgressName("");
      setDeliveryName("");
      setSchedule_Name("");
      const response = await fetchOrders(); 
      setButtonState((prevState) => ({
        ...prevState,
        F2: false,
        F3: false,
        F4: false,
        F5: false,
        F9: false,
        F10: false,
        F11: false,
      }));  
      editPermission(false);
      if (!response || !response.data || response.data.length === 0) {
        Swal.fire({
          title: "ไม่มีข้อมูลคำสั่งซื้อ",
          icon: "warning",
          confirmButtonText: "ตกลง",
        });
      } else {
        searchPermission(true);
        if (SearchorderNoRef.current) {
          SearchorderNoRef.current.focus();
        }
      }
        }else{
          
          const confirmResult = await Swal.fire({
            title: "Reconfirm",
            html: "Editing contents will be cancelled!<br>Really, are you sure?<br>เนื้อหาที่ทําการแก้ไขจะถูกยกเลิก! แน่ใจจริงๆแล้ว หรือไม่?<br>編集中の内容が取消されます!<br>本当に宜しいで",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "No",
          });
          if (confirmResult.isConfirmed) { 
            setSearchOrderNo("")
            setRemainningQuantity("");
            setSelectedSalesGrpAbb("");
            setSelectedSalesPerson("");
            setSelectedCustomerAbb("");
            setSelectedCustomerName("");
            setRequest1Name("");
            setRequest2Name("");
            setRequest3Name("");
            setQuoteName("");
            setUnitName("");
            setItemName("");
            setSupplyName("");
            setCoatingName("");
            setTargetName("");
            setPersonName("");
            setPriceName("");
            setregPersonName("");
            setupdPersonName("");
            setDestinationName("");
            setOrderNo("");
            setCustomerDraw("");
            setCompanyDraw("");
            setDocuName("");
            setSpecificName("");
            setOdProgressName("");
            setDeliveryName("");
            setSchedule_Name("");
            const response = await fetchOrders(); 
            setButtonState((prevState) => ({
              ...prevState,
              F2: false,
              newAddButton: true,
              F3: false,
              F4: false,
              F5: false,
              F9: false,
              F10: false,
              F11: false,
              F12: true,
            }));  
            editPermission(false);
            if (!response || !response.data || response.data.length === 0) {
              Swal.fire({
                title: "ไม่มีข้อมูลคำสั่งซื้อ",
                icon: "warning",
                confirmButtonText: "ตกลง",
              });
            } else {
              searchPermission(true);
              if (SearchorderNoRef.current) {
                SearchorderNoRef.current.focus();
              }
          }
        }
        }
      }
    } catch (error) {
      console.error("Error in handleF11Click:", error);
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: "กรุณาลองอีกครั้ง",
        icon: "error",
        confirmButtonText: "ตกลง",
      }); // แจ้งเตือนผู้ใช้เกี่ยวกับข้อผิดพลาด
    }
  };

  const handleF12Click = async () => {
    try {
      const confirmResult = await Swal.fire({
        title: "Confirm",
        html: "Do you want to close this window?<br>คุณต้องการปิดหน้าต่างนี้หรือไม่?<br>このウィンドウを閉じますか？",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      });
      if (confirmResult.isConfirmed) { 
         navigate("/dashboard")
      }
    } catch (error) {
      console.error("Error in handleF12Click:", error);
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: "กรุณาลองอีกครั้ง",
        icon: "error",
        confirmButtonText: "ตกลง",
      }); // แจ้งเตือนผู้ใช้เกี่ยวกับข้อผิดพลาด
    }
  };

  const handleInputChange = async (event) => {
    const { id, value, type, checked } = event.target;
    const supplyCD = orderData?.Supply_CD;
    let formattedValue = value;

    // ตรวจสอบว่าเป็น datetime-local และฟอร์แมตค่า
    if (type === "datetime-local" && value) {
      const dateWithCurrentTime = new Date(value);
      const year = dateWithCurrentTime.getFullYear();
      const month = String(dateWithCurrentTime.getMonth() + 1).padStart(2, "0");
      const day = String(dateWithCurrentTime.getDate()).padStart(2, "0");
      const hours = String(dateWithCurrentTime.getHours()).padStart(2, "0");
      const minutes = String(dateWithCurrentTime.getMinutes()).padStart(2, "0");
      const seconds = String(dateWithCurrentTime.getSeconds()).padStart(2, "0");

      formattedValue = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    // อัปเดตค่าของ orderData
    setOrderData((prevOrderData) => ({
      ...prevOrderData,
      [id]:
        type === "checkbox"
          ? checked
          : type === "datetime-local" && value
          ? formattedValue // ใช้ formattedValue
          : type === "date" && value !== ""
          ? new Date(`${value}T00:00:00.000Z`).toISOString()
          : value === ""
          ? null
          : value,
    }));

    switch (id) {
      case "Search_Order_No":
        setSearchOrderNo(value);
        if (value) {
          setSearchOrderNo(value);

          const result = await searchOrderData(value);

          if (result) {
            setButtonState((prevState) => ({
              ...prevState,
              F2: true,
              F3: true,
              F4: true,
              F5: true,
              F10: true,
              F11: true,
            }));
          } else {
            setButtonState((prevState) => ({
              ...prevState,
              F2: false,
              F3: false,
              F4: false,
              F5: false,
              F10: false,
              F11: false,
            }));
          }
        } else {
          setButtonState((prevState) => ({
            ...prevState,
            F2: false,
            F3: false,
            F4: false,
            F5: false,
            F10: false,
            F11: false,
          }));
        }
        break;
      case "Product_Grp_CD":
        setOrderData((prevOrderData) => ({
          ...prevOrderData,
          Product_Grp_CD: value,
        }));
        break;
      default:
        break;
    }

    // กรองข้อมูล WorkgData ตาม Supply_CD
    if (supplyCD === "0") {
      if (Array.isArray(WorkgData) && WorkgData.length > 0) {
        setFilteredWorkgData(WorkgData);
      }
    } else if (supplyCD === "1") {
      if (Array.isArray(CustomerData) && CustomerData.length > 0) {
        setFilteredWorkgData(CustomerData);
      }
    } else {
      setFilteredWorkgData(WorkgData);
    }
  };

  const handleRequestDeliveryChange = (newDeliveryDate) => {
    handleInputChange({
      target: { id: "Request_Delivery", value: newDeliveryDate },
    });
  };

  const handleProductDeliveryChange = (newProductDeliveryDate) => {
    handleInputChange({
      target: { id: "Product_Delivery", value: newProductDeliveryDate },
    });
  };

  const handleConfirmDeliveryChange = (newConfirmDeliveryDate) => {
    handleInputChange({
      target: { id: "Confirm_Delivery", value: newConfirmDeliveryDate },
    });
  };

  const handleNAVDeliveryChange = (newNAVDeliveryDate) => {
    handleInputChange({
      target: { id: "NAV_Delivery", value: newNAVDeliveryDate },
    });
  };

  const handleProduct_Grp_NameChange = (Product_Grp_Name) => {
    handleInputChange({
      target: { id: "Product_Grp_Name", value: Product_Grp_Name },
    });
  };

  const handleDeliveryDateUpdate = (deliveryDateStr, handleChange) => {
    // แปลงวันที่จากรูปแบบ DD/MM/YYYY เป็น Date object
    const parts = deliveryDateStr.split("/"); // แบ่งวันที่ออกเป็นส่วน ๆ
    const deliveryDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`); // สร้าง Date object โดยใช้รูปแบบ YYYY-MM-DD

    const now = new Date(); // วันที่ปัจจุบัน
    const differenceInDays = Math.floor(
      (now - deliveryDate) / (1000 * 60 * 60 * 24)
    ); // คำนวณความแตกต่างในวัน

    // ตรวจสอบว่าความแตกต่างมากกว่า 183 วันหรือไม่
    if (differenceInDays > 183) {
      const newDeliveryDate = new Date(
        deliveryDate.setFullYear(deliveryDate.getFullYear() + 1)
      ); // เพิ่มปี

      // แปลงวันที่ใหม่กลับไปเป็น DD/MM/YYYY
      const formattedNewDeliveryDate = `${newDeliveryDate.getFullYear()}-${String(
        newDeliveryDate.getMonth() + 1
      ).padStart(2, "0")}-${String(newDeliveryDate.getDate()).padStart(
        2,
        "0"
      )}`;
      // เรียกใช้ฟังก์ชันสำหรับการเปลี่ยนแปลงวันที่
      handleChange(formattedNewDeliveryDate);
    }
  };

  const handleRequestDeliveryAfterUpdate = () => {
    if (autoYearChange) {
      handleDeliveryDateUpdate(
        orderData.Request_Delivery,
        handleRequestDeliveryChange
      );
      handleDeliveryDateUpdate(
        orderData.Product_Delivery,
        handleProductDeliveryChange
      );
      handleDeliveryDateUpdate(
        orderData.Confirm_Delivery,
        handleConfirmDeliveryChange
      );
      handleDeliveryDateUpdate(orderData.NAV_Delivery, handleNAVDeliveryChange);
    }
  };

  useEffect(() => {
    if (
      autoYearChange &&
      orderData?.Request_Delivery &&
      orderData?.Product_Delivery &&
      orderData?.Confirm_Delivery &&
      orderData?.NAV_Delivery
    ) {
      handleRequestDeliveryAfterUpdate();
    }
  }, [
    autoYearChange,
    orderData?.Request_Delivery,
    orderData?.Product_Delivery,
    orderData?.Confirm_Delivery,
    orderData?.NAV_Delivery,
  ]);

  const handleProductName = (newProductName) => {
    handleInputChange({
      target: { id: "Product_Name", value: newProductName },
    });
  };

  const handleGoods_Name_Reflect = () => {
    handleProductName(orderData.NAV_Name); // เรียกใช้ฟังก์ชันเพื่ออัปเดต Product_Name ด้วยค่า navName
  };

  const handlenavSizeName = (newnavSizeName) => {
    handleInputChange({
      target: { id: "Product_Size", value: newnavSizeName },
    });
  };

  const handleGoods_Size_Reflect = () => {
    handlenavSizeName(orderData.NAV_Size);
  };

  const handProductDraw = (newProductDraw) => {
    handleInputChange({
      target: { id: "Product_Draw", value: newProductDraw },
    });
  };

  const handleConfirm = () => {
    const customer = orderData.Customer_Draw || customerDraw;
    const company = orderData.Company_Draw || companyDraw;

    if (customer) {
      if (company) {
        handProductDraw(`Com:${company}/Cus:${customer}`);
      } else {
        handProductDraw(`Cus:${customer}`);
      }
    } else {
      if (company) {
        handProductDraw(`Com:${company}`);
      } else {
        handProductDraw(null);
      }
    }
  };

  const handleDrawNoReflectClick = () => {
    const message = `
      Company Draw: ${orderData.Customer_Draw}
      Customer Draw: ${orderData.Company_Draw}
      Are you sure you want to proceed?
    `;

    Swal.fire({
      title: "Confirm Action",
      text: message,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        handleConfirm(); // เรียกใช้ฟังก์ชันยืนยันถ้าผู้ใช้กด Yes
      }
    });
  };

  const handPdTargetQty = (newPdTargetQty) => {
    handleInputChange({
      target: { id: "Pd_Target_Qty", value: newPdTargetQty },
    });
  };

  const confirmProductionTargetChange = async (value) => {
    try {
      const result = await Swal.fire({
        title: "Confirm",
        html: "Would you like to also change [Production_Target_Qty]?<br>ต้องการเปลี่ยนแปลง [Production_Target_Qty] ด้วยหรือไม่ ?<br>「Production_Target_Qty」 も変更しますか?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      });

      if (result.isConfirmed) {
        // ถ้าผู้ใช้กดยืนยัน จะเปลี่ยนค่าใหม่
        handPdTargetQty(orderData.Quantity);
      } else {
        // ถ้าผู้ใช้กดไม่ คืนค่าเดิม
        handPdTargetQty(orderData.Pd_Target_Qty);
      }
    } catch (error) {
      console.error("Error during confirmation:", error);
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: "ไม่สามารถเปลี่ยนค่า Production_Target_Qty ได้",
        icon: "error",
        confirmButtonText: "ตกลง",
      });
    }
  };

  useEffect(() => {
    if (orderData?.Product_Grp_CD && WorkergData.length > 0) {
      const selectedGroup = WorkergData.find(
        (item) => item.WorkG_CD === orderData.Product_Grp_CD
      );
      setSelectedWorkGName(selectedGroup ? selectedGroup.WorkG_Name : "");
    }

    if (orderData?.Sales_Grp_CD && WorkergData.length > 0) {
      const selectedGroup = WorkergData.find(
        (item) => item.WorkG_CD === orderData.Sales_Grp_CD
      );
      setSelectedSalesGrpAbb(selectedGroup ? selectedGroup.WorkG_Abb : "");
    }

    if (orderData?.Destination_CD && WorkergData.length > 0) {
      const selectedGroup = WorkergData.find(
        (item) => item.WorkG_CD === orderData.Destination_CD
      );
      setDestinationName(selectedGroup ? selectedGroup.WorkG_Abb : "");
    }
  }, [
    orderData?.Product_Grp_CD,
    orderData?.Sales_Grp_CD,
    orderData?.Destination_CD,
    WorkergData,
  ]);

  useEffect(() => {
    if (orderData?.Schedule_CD && ScheduleData.length > 0) {
      const selectedGroup = ScheduleData.find(
        (item) => item.Schedule_CD === orderData.Schedule_CD
      );

      setSchedule_Name(selectedGroup ? selectedGroup.Schedule_Symbol : "");
    }
  }, [orderData?.Schedule_CD, ScheduleData]);

  useEffect(() => {
    if (orderData?.Sales_Person_CD && WorkerData.length > 0) {
      const selectedGroup = WorkerData.find(
        (item) => item.Worker_CD === orderData.Sales_Person_CD
      );
      setSelectedSalesPerson(selectedGroup ? selectedGroup.Worker_Abb : "");
    }
  }, [orderData?.Sales_Person_CD, WorkerData]);

  useEffect(() => {
    if (orderData?.Od_Ctl_Person_CD && WorkerData.length > 0) {
      const selectedGroup = WorkerData.find(
        (item) => item.Worker_CD === orderData.Od_Ctl_Person_CD
      );
      setPersonName(selectedGroup ? selectedGroup.Worker_Name : "");
    }
  }, [orderData?.Od_Ctl_Person_CD, WorkerData]);

  useEffect(() => {
    if (orderData?.Od_Upd_Person_CD && WorkerData.length > 0) {
      const selectedGroup = WorkerData.find(
        (item) => item.Worker_CD === orderData.Od_Upd_Person_CD
      );
      setupdPersonName(selectedGroup ? selectedGroup.Worker_Name : "");
    }
  }, [orderData?.Od_Upd_Person_CD, WorkerData]);

  useEffect(() => {
    if (orderData?.Od_Reg_Person_CD && WorkerData.length > 0) {
      const selectedGroup = WorkerData.find(
        (item) => item.Worker_CD === orderData.Od_Reg_Person_CD
      );
      setregPersonName(selectedGroup ? selectedGroup.Worker_Name : "");
    }
  }, [orderData?.Od_Reg_Person_CD, WorkerData]);

  useEffect(() => {
    if (orderData?.Customer_CD && CustomerData.length > 0) {
      const selectedGroup = CustomerData.find(
        (item) => item.Customer_CD === orderData.Customer_CD
      );
      setSelectedCustomerName(selectedGroup ? selectedGroup.Customer_Name : "");
      setSelectedCustomerAbb(selectedGroup ? selectedGroup.Customer_Abb : "");
    }

    if (orderData?.Destination_CD && CustomerData.length > 0) {
      const selectedGroup = CustomerData.find(
        (item) => item.Customer_CD === orderData.Destination_CD
      );
      setDestinationName(selectedGroup ? selectedGroup.Customer_Abb : "");
    }
  }, [orderData?.Customer_CD, orderData?.Destination_CD, CustomerData]);

  useEffect(() => {
    if (orderData?.Request1_CD && Request1Data.length > 0) {
      const selectedGroup = Request1Data.find(
        (item) => item.Request1_CD === orderData.Request1_CD
      );

      setRequest1Name(selectedGroup ? selectedGroup.Request1_Name : "");
    }
  }, [orderData?.Request1_CD, Request1Data]);

  useEffect(() => {
    if (orderData?.Request2_CD && Request2Data.length > 0) {
      const selectedGroup = Request2Data.find(
        (item) => item.Request2_CD === orderData.Request2_CD
      );

      setRequest2Name(selectedGroup ? selectedGroup.Request2_Name : "");
    }
  }, [orderData?.Request2_CD, Request2Data]);

  useEffect(() => {
    if (orderData?.Request3_CD && Request3Data.length > 0) {
      const selectedGroup = Request3Data.find(
        (item) => item.Request3_CD === orderData.Request3_CD
      );

      setRequest3Name(selectedGroup ? selectedGroup.Request3_Name : "");
    }
  }, [orderData?.Request3_CD, Request3Data]);

  useEffect(() => {
    if (orderData?.Unit_CD && UnitData.length > 0) {
      const selectedGroup = UnitData.find(
        (item) => item.Unit_CD === orderData.Unit_CD
      );

      setUnitName(selectedGroup ? selectedGroup.Unit_Name : "");
    }
  }, [orderData?.Unit_CD, UnitData]);

  useEffect(() => {
    if (orderData?.Item1_CD && Item1Data.length > 0) {
      const selectedGroup = Item1Data.find(
        (item) => item.Item1_CD === orderData.Item1_CD
      );

      setItemName(selectedGroup ? selectedGroup.Item1_Name : "");
    }
  }, [orderData?.Item1_CD, Item1Data]);

  useEffect(() => {
    if (orderData?.Coating_CD && CoatingData.length > 0) {
      const selectedGroup = CoatingData.find(
        (item) => item.Coating_CD === orderData.Coating_CD
      );

      setCoatingName(selectedGroup ? selectedGroup.Coating_Name : "");
    }
  }, [orderData?.Coating_CD, CoatingData]);

  useEffect(() => {
    if (orderData?.Supply_CD && SupplyData.length > 0) {
      const selectedGroup = SupplyData.find(
        (item) => item.Supply_CD === orderData.Supply_CD
      );

      setSupplyName(selectedGroup ? selectedGroup.Supply_Name : "");
    }
  }, [orderData?.Supply_CD, SupplyData]);

  useEffect(() => {
    if (orderData?.Target_CD && TargetData.length > 0) {
      const selectedGroup = TargetData.find(
        (item) => item.Target_CD === orderData.Target_CD
      );

      setTargetName(selectedGroup ? selectedGroup.Target_Name : "");
    }
  }, [orderData?.Target_CD, TargetData]);

  useEffect(() => {
    const quantity = parseFloat(orderData?.Quantity) || 0;
    const completeQty = parseFloat(orderData?.I_Complete_Qty) || 0;
    setRemainningQuantity(quantity - completeQty);
  }, [orderData?.Quantity, orderData?.I_Complete_Qty]);

  useEffect(() => {
    if (orderData?.Quote_CD && QuoteData.length > 0) {
      const selectedGroup = QuoteData.find(
        (item) => item.Od_Quote_CD === orderData.Quote_CD
      );

      setQuoteName(selectedGroup ? selectedGroup.Od_Quote_Name : "");
    }
  }, [orderData?.Quote_CD, QuoteData]);

  useEffect(() => {
    if (orderData?.Unit_Price && PriceData.length > 0) {
      const selectedGroup = PriceData.find(
        (item) => item.Price_CD === orderData.Unit_Price
      );

      setPriceName(selectedGroup ? selectedGroup.Price_Name : "");
    }
  }, [orderData?.Unit_Price, PriceData]);

  useEffect(() => {
    if (orderData?.Contract_Docu_CD && ContractDocuData.length > 0) {
      const selectedGroup = ContractDocuData.find(
        (item) => item.Contract_Docu_CD === orderData.Contract_Docu_CD
      );

      setDocuName(selectedGroup ? selectedGroup.Contract_Docu_Name : "");
    }
  }, [orderData?.Contract_Docu_CD, ContractDocuData]);

  useEffect(() => {
    if (orderData?.Specific_CD && SpecificData.length > 0) {
      const selectedGroup = SpecificData.find(
        (item) => item.Specific_CD === orderData.Specific_CD
      );

      setSpecificName(selectedGroup ? selectedGroup.Specific_Name : "");
    }
  }, [orderData?.Specific_CD, SpecificData]);

  useEffect(() => {
    if (orderData?.Od_Progress_CD && OdProgressData.length > 0) {
      const selectedGroup = OdProgressData.find(
        (item) => item.Od_Progress_CD === orderData.Od_Progress_CD
      );

      setOdProgressName(selectedGroup ? selectedGroup.Od_Progress_Name : "");
    }
  }, [orderData?.Od_Progress_CD, OdProgressData]);

  useEffect(() => {
    if (orderData?.Delivery_CD && DeliveryData.length > 0) {
      const selectedGroup = DeliveryData.find(
        (item) => item.Delivery_CD === orderData.Delivery_CD
      );

      setDeliveryName(selectedGroup ? selectedGroup.Delivery_Name : "");
    }
  }, [orderData?.Delivery_CD, DeliveryData]);

  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-screen mr-2 ml-2">
        <Navbar />

        <div className="flex-1 flex-col overflow-x-auto flex-grow p-2">
          <div className="bg-white grid grid-cols-1">
            <div className="overflow-x-auto">
              <div className="grid  gap-2 mx-5 py-4 min-w-[1000px]">
                <div className="flex justify-center items-center py-3">
                  <label className="text-xl font-bold">Order Info</label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-5 py-4">
                  <div className="flex gap-2 items-center">
                    <label
                      htmlFor="Search_Order_No"
                      className="whitespace-nowrap"
                    >
                      Search Order No
                    </label>
                    <input
                       ref={SearchorderNoRef}
                      id="Search_Order_No"
                      value={searchOrderNo || ""}
                      onChange={handleInputChange}
                      type="text"
                      className="bg-[#ccffff] border-2 border-gray-500 rounded-md px-2 w-full"
                      placeholder="Search Order Number"
                      onBlur={async (e) => {
                        const value = e.target.value;
                        if (value) {
                          const result = await searchOrderData(value);
                          if (!result) {
                            Swal.fire({
                              title: "ไม่พบข้อมูล",
                              html: `${value} is not yet registered !<br>${value} ที่ป้อนไปยังไม่ได้ถูกลงทะเบียน !<br>${value} は登録されていません!`,
                              icon: "warning",
                              confirmButtonText: "ตกลง",
                            });
                          }
                        }
                      }}
                      onKeyDown={async (e) => {
                        if (e.key === "Enter") {
                          const value = e.target.value;
                          if (value) {
                            const result = await searchOrderData(value);
                            if (!result) {
                              Swal.fire({
                                title: "ไม่พบข้อมูล",
                                html: `${value} is not yet registered !<br>${value} ที่ป้อนไปยังไม่ได้ถูกลงทะเบียน !<br>${value} は登録されていません!`,
                                icon: "warning",
                                confirmButtonText: "ตกลง",
                              });
                            }
                          }
                        }
                      }}
                    />
                  </div>

                  {/* Order No */}
                  <div className="flex gap-2 items-center">
                    <label htmlFor="Order_No" className="whitespace-nowrap">
                      Order No.
                    </label>

                    <input
                      ref={orderNoRef}
                      disabled
                      id="Order_No"
                      value={orderData?.Order_No || ""}
                      onChange={handleInputChange}
                      type="text"
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1"
                      onBlur={async (e) => {
                        const value = e.target.value;

                        if (value) {
                          if (!orderData?.Order_No || searchOrderNo) return;
                          const result = await CheckOrderData(value);

                          if (result) {
                            Swal.fire({
                              title: "Confirm",
                              html: `${orderData.Order_No} is already registered!<br>${orderData.Order_No} ได้ถูกป้อนข้อมูลการลงทะเบียนแล้ว !<br>${orderData.Order_No} はすでに登録されています!`,
                              icon: "error",
                              confirmButtonText: "Ok",
                            }).then(() => {
                              editPermission(false);
                              document.getElementById("Order_No").disabled = false;
                            });
                          }else{
                            editPermission(true);
                            
                          }
                        }
                      }}
                      onKeyDown={async (e) => {
                        if (e.key === "Enter") {
                          const value = e.target.value;
                          if (value) {
                            if (!orderData?.Order_No || searchOrderNo) return;
                            const result = await CheckOrderData(value);
                            if (result) {
                              Swal.fire({
                                title: "Confirm",
                                html: `${orderData.Order_No} is already registered!<br>${orderData.Order_No} ได้ถูกป้อนข้อมูลการลงทะเบียนแล้ว !<br>${orderData.Order_No} はすでに登録されています!`,
                                icon: "error",
                                confirmButtonText: "Ok",
                              }).then(() => {
                                editPermission(false);
                                document.getElementById("Order_No").disabled = false;
                              });
                            }
                          }else{
                            editPermission(true);
                            
                          }
                        }
                      }}
                    />
                  </div>

                  {/* Production Group */}
                  <div className="flex gap-2 items-center">
                    <label
                      htmlFor="Product_Grp_CD"
                      className="whitespace-nowrap"
                    >
                      Production Group
                    </label>
                    <select
                      disabled
                      id="Product_Grp_CD"
                      value={orderData?.Product_Grp_CD || ""}
                      onChange={handleInputChange}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#cbfefe] w-20"
                    >
                      <option disabled>WorkG_CD | WorkG_Name</option>
                      <option value={orderData?.Product_Grp_CD || ""}>
                        {orderData?.Product_Grp_CD || ""}
                      </option>
                      {Array.isArray(WorkergData) && WorkergData.length > 0 ? (
                        WorkergData.map((item, index) => (
                          <option key={index} value={item.WorkG_CD}>
                            {item.WorkG_CD}{generateSpaces(2)} |{" "}{item.WorkG_Name}
                          </option>
                        ))
                      ) : (
                        <option value="">ไม่มีข้อมูล</option>
                      )}
                    </select>
                    <input
                      disabled
                      id="Product_Grp_Name"
                      value={selectedWorkGName || ""}
                      onChange={(event) => setWorkergData(event)}
                      type="text"
                      className="bg-white border-2 border-gray-500 rounded-md px-2 w-40"
                      placeholder="Enter Group"
                    />
                  </div>

                  {/* Auto Year Change */}
                  <div className="flex gap-2 items-center col-span-1 ml-[100px]">
                    <input
                      id="Auto_Year_Change"
                      checked={autoYearChange}
                      onChange={() => setAutoYearChange(!autoYearChange)}
                      type="checkbox"
                      className="w-6 h-6"
                    />
                    <label
                      htmlFor="Auto_Year_Change"
                      className="whitespace-nowrap"
                    >
                      Auto Year Change Group
                    </label>
                  </div>
                </div>

                <hr className="border-y-[1px] border-gray-300" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mx-5 py-4">
                  <div className="grid grid-cols-1">
                    <div className="flex gap-1">
                      <div className="w-7/12 content-around">
                        {/* Request Delivery Date Group */}
                        <div className="flex items-center mb-8">
                          <label className="w-4/6 text-xs font-semibold">
                            Request Delivery Date
                          </label>
                          <div>
                            {orderData ? (
                              <input
                                disabled
                                id="Request_Delivery"
                                value={
                                  orderData.Request_Delivery
                                    ? orderData.Request_Delivery.substring(
                                        0,
                                        10
                                      )
                                    : ""
                                }
                                onChange={(event) => handleInputChange(event)}
                                type="date"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            ) : (
                              <input
                                disabled
                                id="Request_Delivery"
                                value={
                                  orderData?.Request_Delivery
                                    ? orderData.Request_Delivery.substring(
                                        0,
                                        10
                                      )
                                    : ""
                                }
                                onChange={(event) => handleInputChange(event)}
                                type="date"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            )}
                          </div>
                        </div>
                        <div className="flex items-center mb-8">
                          <label className="w-4/6 text-xs font-semibold">
                            Production Delivery Date
                          </label>
                          <div>
                            {orderData ? (
                              <input
                                disabled
                                id="Product_Delivery"
                                value={
                                  orderData.Product_Delivery
                                    ? orderData.Product_Delivery.substring(
                                        0,
                                        10
                                      )
                                    : ""
                                }
                                onChange={(event) => handleInputChange(event)}
                                type="date"
                                className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            ) : (
                              <input
                                disabled
                                value={
                                  orderData?.Product_Delivery
                                    ? orderData.Product_Delivery.substring(
                                        0,
                                        10
                                      )
                                    : ""
                                }
                                onChange={(event) => handleInputChange(event)}
                                id="Product_Delivery"
                                type="date"
                                className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            )}
                          </div>
                        </div>
                        <div className="flex items-center mb-8  ">
                          <label className="w-4/6 text-xs font-semibold">
                            Comfirm Delivery Date
                          </label>
                          <div>
                            {orderData ? (
                              <input
                                disabled
                                id="Confirm_Delivery"
                                value={
                                  orderData.Confirm_Delivery
                                    ? orderData.Confirm_Delivery.substring(
                                        0,
                                        10
                                      )
                                    : ""
                                }
                                onChange={(event) => handleInputChange(event)}
                                type="date"
                                className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            ) : (
                              <input
                                disabled
                                id="Confirm_Delivery"
                                value={
                                  orderData?.Confirm_Delivery
                                    ? orderData.Confirm_Delivery.substring(
                                        0,
                                        10
                                      )
                                    : ""
                                }
                                onChange={(event) => handleInputChange(event)}
                                type="date"
                                className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            )}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <label className="w-4/6 text-xs font-semibold">
                            NAV Delivery Date
                          </label>
                          <div>
                            {orderData ? (
                              <input
                                disabled
                                id="NAV_Delivery"
                                value={
                                  orderData.NAV_Delivery
                                    ? orderData.NAV_Delivery.substring(0, 10)
                                    : ""
                                }
                                onChange={(event) => handleInputChange(event)}
                                type="date"
                                className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            ) : (
                              <input
                                disabled
                                id="NAV_Delivery"
                                value={
                                  orderData?.NAV_Delivery
                                    ? orderData.NAV_Delivery.substring(0, 10)
                                    : ""
                                }
                                onChange={(event) => handleInputChange(event)}
                                type="date"
                                className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="w-5/12 content-around">
                        <div className="flex items-center mb-3 gap-2">
                          {orderData ? (
                            <input
                              disabled
                              id="Od_Pending"
                              checked={orderData?.Od_Pending === true}
                              onChange={handleInputChange}
                              type="checkbox"
                              className="w-6 h-6"
                            />
                          ) : (
                            <input
                              disabled
                              id="Od_Pending"
                              checked={orderData?.Od_Pending === true}
                              onChange={handleInputChange}
                              type="checkbox"
                              className="w-6 h-6"
                            />
                          )}
                          <label className="w-3/5 text-xs font-semibold">
                            Order Pending
                          </label>
                        </div>
                        <div className="flex items-center mb-3 gap-2">
                          {orderData ? (
                            <input
                              disabled
                              id="Temp_Shipment"
                              checked={orderData?.Temp_Shipment === true}
                              onChange={handleInputChange}
                              type="checkbox"
                              className="w-6 h-6"
                            />
                          ) : (
                            <input
                              disabled
                              id="Temp_Shipment"
                              checked={orderData?.Temp_Shipment === true}
                              onChange={handleInputChange}
                              type="checkbox"
                              className="w-6 h-6"
                            />
                          )}
                          <label className="w-3/5 text-xs font-semibold">
                            Temporary Shipment
                          </label>
                        </div>
                        <div className="flex items-center mb-3 gap-2">
                          {orderData ? (
                            <input
                              disabled
                              id="Unreceived"
                              checked={orderData?.Unreceived === true}
                              onChange={handleInputChange}
                              type="checkbox"
                              className="w-6 h-6"
                            />
                          ) : (
                            <input
                              disabled
                              id="Unreceived"
                              checked={orderData?.Unreceived === true}
                              onChange={handleInputChange}
                              type="checkbox"
                              className="w-6 h-6"
                            />
                          )}
                          <label className="w-3/5 text-xs font-semibold">
                            Unreceived
                          </label>
                        </div>
                        <div className="flex items-center mb-3 gap-2">
                          {orderData ? (
                            <input
                              disabled
                              id="Od_CAT1"
                              checked={orderData?.Od_CAT1 === true}
                              onChange={handleInputChange}
                              type="checkbox"
                              className="w-6 h-6"
                            />
                          ) : (
                            <input
                              disabled
                              id="Od_CAT1"
                              checked={orderData?.Od_CAT1 === true}
                              onChange={handleInputChange}
                              type="checkbox"
                              className="w-6 h-6"
                            />
                          )}
                          <label className="w-3/5 text-xs font-semibold">
                            Order Identification1
                          </label>
                        </div>
                        <div className="flex items-center mb-3 gap-2">
                          {orderData ? (
                            <input
                              disabled
                              id="Od_CAT2"
                              checked={orderData?.Od_CAT2 === true}
                              onChange={handleInputChange}
                              type="checkbox"
                              className="w-6 h-6"
                            />
                          ) : (
                            <input
                              disabled
                              id="Od_CAT2"
                              checked={orderData?.Od_CAT2 === true}
                              onChange={handleInputChange}
                              type="checkbox"
                              className="w-6 h-6"
                            />
                          )}
                          <label className="w-3/5 text-xs font-semibold">
                            Order Identification2
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          {orderData ? (
                            <input
                              disabled
                              id="Od_CAT3"
                              checked={orderData?.Od_CAT3 === true}
                              onChange={handleInputChange}
                              type="checkbox"
                              className="w-6 h-6"
                            />
                          ) : (
                            <input
                              disabled
                              id="Od_CAT3"
                              checked={orderData?.Od_CAT3 === true}
                              onChange={handleInputChange}
                              type="checkbox"
                              className="w-6 h-6"
                            />
                          )}
                          <label className="w-3/5 text-xs font-semibold">
                            Order Identification3
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1">
                      <div className="flex items-center w-full gap-2 mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          NAV Goods Name
                        </label>
                        <div className="w-3/6">
                          {orderData ? (
                            <input
                              disabled
                              id="NAV_Name"
                              type="text"
                              value={orderData.NAV_Name || ""}
                              onChange={handleInputChange}
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          ) : (
                            <input
                              disabled
                              id="NAV_Name"
                              type="text"
                              value={orderData?.NAV_Name || ""}
                              onChange={handleInputChange}
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          )}
                        </div>
                        <div className="w-1/6">
                          <button
                            onClick={handleGoods_Name_Reflect}
                            className="bg-blue-500 text-white text-lg w-full py-[5px] rounded-md hover:bg-blue-700 text-[12px] flex justify-center items-center"
                          >
                            <FaArrowDownLong />
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center w-full gap-2 mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Production Goods Name
                        </label>
                        <div className="w-4/6">
                          {orderData ? (
                            <input
                              disabled
                              id="Product_Name"
                              type="text"
                              value={orderData.Product_Name || ""}
                              onChange={(event) => handleInputChange(event)}
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          ) : (
                            <input
                              disabled
                              id="Product_Name"
                              type="text"
                              value={orderData?.Product_Name || ""}
                              onChange={(event) => handleInputChange(event)}
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex items-center w-full gap-2 mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          NAV Goods Size
                        </label>
                        <div className="w-3/6">
                          {orderData ? (
                            <input
                              disabled
                              id="NAV_Size"
                              type="text"
                              value={orderData.NAV_Size || ""}
                              onChange={handleInputChange}
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          ) : (
                            <input
                              disabled
                              id="NAV_Size"
                              type="text"
                              value={orderData?.NAV_Size || ""}
                              onChange={handleInputChange}
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          )}
                        </div>
                        <div className="w-1/6">
                          <button
                            onClick={handleGoods_Size_Reflect}
                            className="bg-blue-500 text-white text-lg w-full py-[5px] rounded-md hover:bg-blue-700 text-[12px] flex justify-center items-center"
                          >
                            <FaArrowDownLong />
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center w-full gap-2 mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Production Goods Size
                        </label>
                        <div className="w-4/6">
                          {orderData ? (
                            <input
                              disabled
                              id="Product_Size"
                              type="text"
                              value={orderData.Product_Size || ""}
                              onChange={(event) => handleInputChange(event)}
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          ) : (
                            <input
                              disabled
                              id="Product_Size"
                              type="text"
                              value={orderData?.Product_Size || ""}
                              onChange={(event) => handleInputChange(event)}
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex items-center w-full gap-2 mb-2">
                        <div className="w-5/6">
                          <div className="flex gap-2  mb-2">
                            <label className="text-xs font-semibold w-2/5">
                              Cutomer_Draw
                            </label>
                            <div className="w-3/5">
                              {orderData ? (
                                <input
                                  disabled
                                  id="Customer_Draw"
                                  value={orderData.Customer_Draw || ""}
                                  onChange={handleInputChange}
                                  type="text"
                                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                              ) : (
                                <input
                                  disabled
                                  id="Customer_Draw"
                                  value={orderData?.Customer_Draw || ""}
                                  onChange={handleInputChange}
                                  type="text"
                                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                              )}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <label className="text-xs font-semibold w-2/5">
                              Company_Draw
                            </label>
                            <div className="w-3/5">
                              {orderData ? (
                                <input
                                  disabled
                                  id="Company_Draw"
                                  value={orderData.Company_Draw || ""}
                                  onChange={handleInputChange}
                                  type="text"
                                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                              ) : (
                                <input
                                  disabled
                                  id="Company_Draw"
                                  value={orderData?.Company_Draw || ""}
                                  onChange={handleInputChange}
                                  type="text"
                                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="w-1/6">
                          <button
                            onClick={handleDrawNoReflectClick}
                            className="bg-blue-500 text-white text-lg w-full py-[22px] rounded-md hover:bg-blue-700 text-[12px] flex justify-center items-center"
                          >
                            <FaArrowDownLong />
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center w-full gap-2 mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Production Draw
                        </label>
                        <div className="w-4/6">
                          {orderData ? (
                            <input
                              disabled
                              id="Product_Draw"
                              value={orderData.Product_Draw || ""}
                              onChange={(event) => handleInputChange(event)}
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          ) : (
                            <input
                              disabled
                              id="Product_Draw"
                              value={orderData?.Product_Draw || ""}
                              onChange={(event) => handleInputChange(event)}
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex justify-between w-full gap-2 mb-2">
                        <div className="w-7/12 flex gap-1 items-center">
                          <label className="text-xs font-semibold w-5/12">
                            Quantity
                          </label>
                          <div className="w-3/12">
                            <input
                              disabled
                              id="Quantity"
                              value={orderData?.Quantity || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              onBlur={async (e) => {
                                const value = e.target.value;
                                if (value) {
                                  await confirmProductionTargetChange(value);
                                }
                              }}
                              onKeyDown={async (e) => {
                                if (e.key === "Enter") {
                                  const value = e.target.value;
                                  if (value) {
                                    await confirmProductionTargetChange(value);
                                  }
                                }
                              }}
                            />
                          </div>
                          <div className="w-2/12">
                            <select
                              id="Unit_CD"
                              value={orderData?.Unit_CD || ""}
                              onChange={handleInputChange}
                              className="border-gray-500 border-solid border-2 rounded-md bg-[#cbfefe] w-full"
                            >
                              <option disabled>Unit_CD | Unit_Name</option>
                              <option value={orderData?.Unit_CD || ""}>
                                {orderData?.Unit_CD || ""}
                              </option>
                              {Array.isArray(UnitData) &&
                              UnitData.length > 0 ? (
                                UnitData.map((item, index) => (
                                  <option key={index} value={item.Unit_CD}>
                                    {item.Unit_CD}{generateSpaces(2)} |{" "}{item.Unit_Name}
                                  </option>
                                ))
                              ) : (
                                <option value="">ไม่มีข้อมูล</option>
                              )}
                            </select>
                          </div>

                          <div className="w-3/12">
                            <input
                              disabled
                              id="Unit_CD_Name"
                              value={unitName || ""}
                              onChange={(event) => setUnitData(event)}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                        </div>
                        <div className="w-5/12 flex items-center">
                          <label className="text-xs font-semibold w-1/2">
                            Remaining Qty
                          </label>
                          <div className="w-1/2">
                            <input
                              disabled
                              id="Remainning_Quantity"
                              value={remainningQuantity}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex w-full gap-2 items-center mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Sale Instructions
                        </label>
                        <div className="w-4/6">
                          {orderData ? (
                            <input
                              disabled
                              id="Sl_Instructions"
                              value={orderData.Sl_Instructions || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          ) : (
                            <input
                              disabled
                              id="Sl_Instructions"
                              value={orderData?.Sl_Instructions || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex w-full gap-2 items-center mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Production Instructions
                        </label>
                        <div className="w-4/6">
                          {orderData ? (
                            <input
                              disabled
                              id="Pd_Instructions"
                              value={orderData.Pd_Instructions || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          ) : (
                            <input
                              disabled
                              id="Pd_Instructions"
                              value={orderData?.Pd_Instructions || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex w-full gap-2 items-center mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Production Remark
                        </label>
                        <div className="w-4/6">
                          {orderData ? (
                            <input
                              disabled
                              id="Pd_Remark"
                              value={orderData.Pd_Remark || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          ) : (
                            <input
                              disabled
                              id="Pd_Remark"
                              value={orderData?.Pd_Remark || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex w-full gap-2 items-center mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Inspection Remark
                        </label>
                        <div className="w-4/6">
                          {orderData ? (
                            <input
                              disabled
                              id="I_Remark"
                              value={orderData.I_Remark || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          ) : (
                            <input
                              disabled
                              id="I_Remark"
                              value={orderData?.I_Remark || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1">
                    <div>
                      <div className="flex items-center w-full gap-2 mb-2">
                        <label className="text-xs font-semibold w-1/5">
                          Sales Group
                        </label>
                        <div className="w-2/5">
                          <select
                            disabled
                            id="Sales_Grp_CD"
                            value={orderData?.Sales_Grp_CD || ""}
                            onChange={handleInputChange}
                            className="border-gray-500 border-solid border-2 rounded-md bg-[#cbfefe] w-full"
                          >
                            <option disabled>WorkG_CD | WorkG_Abb</option>
                            <option value={orderData?.Sales_Grp_CD || ""}>
                              {orderData?.Sales_Grp_CD || ""}
                            </option>
                            {Array.isArray(WorkergData) &&
                            WorkergData.length > 0 ? (
                              WorkergData.map((item, index) => (
                                <option key={index} value={item.WorkG_CD}>
                                  {item.WorkG_CD}{generateSpaces(2)} |{" "} {item.WorkG_Abb}
                                </option>
                              ))
                            ) : (
                              <option value="">ไม่มีข้อมูล</option>
                            )}
                          </select>
                        </div>
                        <div className="w-2/5">
                          <input
                            disabled
                            id="Sales_Grp_CD_Name"
                            value={selectedSalesGrpAbb || ""}
                            onChange={(event) => setWorkergData(event)}
                            type="text"
                            className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>
                      <div className="flex items-center w-full gap-2 mb-2">
                        <label className="text-xs font-semibold w-1/5">
                          Sales Person
                        </label>
                        <div className="w-2/5">
                          <select
                            disabled
                            id="Sales_Person_CD"
                            value={orderData?.Sales_Person_CD || ""}
                            onChange={handleInputChange}
                            className="border-gray-500 border-solid border-2 rounded-md bg-[#cbfefe] w-full"
                          >
                            <option disabled>Worker_CD | Worker_Abb</option>
                            <option value={orderData?.Sales_Person_CD || ""}>
                              {orderData?.Sales_Person_CD || ""}
                            </option>
                            {Array.isArray(WorkerData) &&
                            WorkerData.length > 0 ? (
                              WorkerData.map((item, index) => (
                                <option key={index} value={item.Worker_CD}>
                                  {item.Worker_CD}{generateSpaces(2)} |{" "}{item.Worker_Abb}
                                </option>
                              ))
                            ) : (
                              <option value="">ไม่มีข้อมูล</option>
                            )}
                          </select>
                        </div>
                        <div className="w-2/5">
                          <input
                            disabled
                            id="Sales_Person_CD_Name"
                            value={selectedSalesPersonAbb}
                            onChange={(event) => setWorkerData(event)}
                            type="text"
                            className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>
                      <div className="flex items-center w-full gap-2 mb-2">
                        <label className="text-xs font-semibold w-2/12">
                          Req Category
                        </label>
                        <div className="w-1/12">
                          <select
                            disabled
                            id="Request1_CD"
                            value={orderData?.Request1_CD || ""}
                            onChange={handleInputChange}
                            className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                          >
                            <option disabled>Request1_CD | Request1_Name</option>
                            <option value={orderData?.Request1_CD || ""}>
                              {orderData?.Request1_CD || ""}
                            </option>
                            {Array.isArray(Request1Data) &&
                            Request1Data.length > 0 ? (
                              Request1Data.map((item, index) => (
                                <option key={index} value={item.Request1_CD}>
                                  {item.Request1_CD}{generateSpaces(2)} |{" "}{item.Request1_Name}
                                </option>
                              ))
                            ) : (
                              <option value="">ไม่มีข้อมูล</option>
                            )}
                          </select>
                        </div>

                        <div className="w-2/12">
                          <input
                            disabled
                            id="Request1_CD_Name"
                            value={request1Name}
                            onChange={(event) => setRequest1Data(event)}
                            type="text"
                            className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                        <div className="w-1/12">
                          <select
                            disabled
                            id="Request2_CD"
                            value={orderData?.Request2_CD || ""}
                            onChange={handleInputChange}
                            className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full"
                          >
                            <option disabled>Request2_CD | Request2_Name</option>
                            <option value={orderData?.Request2_CD || ""}>
                              {orderData?.Request2_CD || ""}
                            </option>
                            {Array.isArray(Request2Data) &&
                            Request2Data.length > 0 ? (
                              Request2Data.map((item, index) => (
                                <option key={index} value={item.Request2_CD}>
                                  {item.Request2_CD}{generateSpaces(2)} |{" "}{item.Request2_Name}
                                </option>
                              ))
                            ) : (
                              <option value="">ไม่มีข้อมูล</option>
                            )}
                          </select>
                        </div>
                        <div className="w-2/12">
                          <input
                            disabled
                            id="Request2_CD_Name"
                            value={request2Name}
                            onChange={(event) => setRequest2Data(event)}
                            type="text"
                            className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                        <div className="w-1/12">
                          <select
                            disabled
                            id="Request3_CD"
                            value={orderData?.Request3_CD || ""}
                            onChange={handleInputChange}
                            className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                          >
                            <option disabled>CD | Abb | Request3_Name</option>
                            <option value={orderData?.Request3_CD || ""}>
                              {orderData?.Request3_CD || ""}
                            </option>
                            {Array.isArray(Request3Data) &&
                            Request3Data.length > 0 ? (
                              Request3Data.map((item, index) => (
                                <option key={index} value={item.Request3_CD}>
                                  {item.Request3_CD}{generateSpaces(2)} |{" "}{item.Request3_Abb}{generateSpaces(2)} |{" "}{item.Request3_Name}
                                </option>
                              ))
                            ) : (
                              <option value="">ไม่มีข้อมูล</option>
                            )}
                          </select>
                        </div>
                        <div className="w-2/12">
                          <input
                            disabled
                            id="Request3_CD_Name"
                            value={request3Name}
                            onChange={(event) => setRequest3Data(event)}
                            type="text"
                            className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>
                      <div className="flex w-full gap-2 mb-2">
                        <div className="flex w-full gap-2">
                          <label className="text-xs font-semibold w-2/5">
                            Material1
                          </label>
                          <div className="w-3/5">
                            {orderData ? (
                              <input
                                disabled
                                id="Material1"
                                value={orderData.Material1 || ""}
                                onChange={handleInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            ) : (
                              <input
                                disabled
                                id="Material1"
                                value={orderData?.Material1 || ""}
                                onChange={handleInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            )}
                          </div>
                        </div>
                        <div className="flex w-full gap-2 mb-2">
                          <label className="text-xs font-semibold w-1/5">
                            H/T
                          </label>
                          <div className="w-4/5">
                            {orderData ? (
                              <input
                                disabled
                                id="H_Treatment1"
                                value={orderData.H_Treatment1 || ""}
                                onChange={handleInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            ) : (
                              <input
                                disabled
                                id="H_Treatment1"
                                value={orderData?.H_Treatment1 || ""}
                                onChange={handleInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex w-full gap-2 mb-2">
                        <div className="flex w-1/2 gap-2">
                          <label className="text-xs font-semibold w-2/5">
                            Material2
                          </label>
                          <div className="w-3/5">
                            {orderData ? (
                              <input
                                disabled
                                id="Material2"
                                value={orderData.Material2 || ""}
                                onChange={handleInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            ) : (
                              <input
                                disabled
                                id="Material2"
                                value={orderData?.Material2 || ""}
                                onChange={handleInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            )}
                          </div>
                        </div>
                        <div className="flex w-1/2 gap-2">
                          <label className="text-xs font-semibold w-1/5">
                            H/T
                          </label>
                          <div className="w-4/5">
                            {orderData ? (
                              <input
                                disabled
                                id="H_Treatment2"
                                value={orderData.H_Treatment2 || ""}
                                onChange={handleInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            ) : (
                              <input
                                disabled
                                id="H_Treatment2"
                                value={orderData?.H_Treatment2 || ""}
                                onChange={handleInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex w-full gap-2 mb-2">
                        <div className="flex w-1/2 gap-2">
                          <label className="text-xs font-semibold w-2/5">
                            Material3
                          </label>
                          <div className="w-3/5">
                            {orderData ? (
                              <input
                                disabled
                                id="Material3"
                                value={orderData.Material3 || ""}
                                onChange={handleInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            ) : (
                              <input
                                disabled
                                id="Material3"
                                value={orderData?.Material3 || ""}
                                onChange={handleInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            )}
                          </div>
                        </div>
                        <div className="flex w-1/2 gap-2">
                          <label className="text-xs font-semibold w-1/5">
                            H/T
                          </label>
                          <div className="w-4/5">
                            {orderData ? (
                              <input
                                disabled
                                id="H_Treatment3"
                                value={orderData.H_Treatment3 || ""}
                                onChange={handleInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            ) : (
                              <input
                                disabled
                                id="H_Treatment3"
                                value={orderData?.H_Treatment3 || ""}
                                onChange={handleInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex w-full gap-2 mb-2">
                        <div className="flex w-1/2 gap-2">
                          <label className="text-xs font-semibold w-2/5">
                            Material4
                          </label>
                          <div className="w-3/5">
                            {orderData ? (
                              <input
                                disabled
                                id="Material4"
                                value={orderData.Material4 || ""}
                                onChange={handleInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            ) : (
                              <input
                                disabled
                                id="Material4"
                                value={orderData?.Material4 || ""}
                                onChange={handleInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            )}
                          </div>
                        </div>
                        <div className="flex w-1/2 gap-2">
                          <label className="text-xs font-semibold w-1/5">
                            H/T
                          </label>
                          <div className="w-4/5">
                            {orderData ? (
                              <input
                                disabled
                                id="H_Treatment4"
                                value={orderData.H_Treatment4 || ""}
                                onChange={handleInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            ) : (
                              <input
                                disabled
                                id="H_Treatment4"
                                value={orderData?.H_Treatment4 || ""}
                                onChange={handleInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex w-full gap-2 mb-2">
                        <div className="flex w-1/2 gap-2">
                          <label className="text-xs font-semibold w-2/5">
                            Material5
                          </label>
                          <div className="w-3/5">
                            {orderData ? (
                              <input
                                disabled
                                id="Material5"
                                value={orderData.Material5 || ""}
                                onChange={handleInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            ) : (
                              <input
                                disabled
                                id="Material5"
                                value={orderData?.Material5 || ""}
                                onChange={handleInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            )}
                          </div>
                        </div>
                        <div className="flex w-1/2 gap-2">
                          <label className="text-xs font-semibold w-1/5">
                            H/T
                          </label>
                          <div className="w-4/5">
                            {orderData ? (
                              <input
                                disabled
                                id="H_Treatment5"
                                value={orderData.H_Treatment5 || ""}
                                onChange={handleInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            ) : (
                              <input
                                disabled
                                id="H_Treatment5"
                                value={orderData?.H_Treatment5 || ""}
                                onChange={handleInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 mb-2">
                        <div className="flex w-2/5 gap-2">
                          <label className="text-xs font-semibold w-2/6">
                            Coating
                          </label>
                          <div className="w-2/6">
                            <select
                              disabled
                              id="Coating_CD"
                              value={orderData?.Coating_CD || ""}
                              onChange={handleInputChange}
                              className="border-gray-500 border-solid border-2 rounded-md bg-[#cbfefe] w-full"
                            >
                              <option disabled>Coating_CD | Coating_Name</option>
                              <option value={orderData?.Coating_CD || ""}>
                                {orderData?.Coating_CD || ""}
                              </option>
                              {Array.isArray(CoatingData) &&
                              CoatingData.length > 0 ? (
                                CoatingData.map((item, index) => (
                                  <option key={index} value={item.Coating_CD}>
                                    {item.Coating_CD}{generateSpaces(2)} |{" "}{item.Coating_Name}
                                  </option>
                                ))
                              ) : (
                                <option value="">ไม่มีข้อมูล</option>
                              )}
                            </select>
                          </div>

                          <div className="w-2/6">
                            <input
                              disabled
                              id="Coating_Name"
                              value={coatingName || ""}
                              onChange={(event) => setCoatingData(event)}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                        </div>
                        <div className="flex w-3/5 gap-2">
                          <label className="text-xs font-semibold w-2/6">
                            CT_Detail
                          </label>
                          <div className="w-4/6">
                            {orderData ? (
                              <input
                                disabled
                                id="Coating"
                                value={orderData.Coating || ""}
                                onChange={handleInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            ) : (
                              <input
                                disabled
                                id="Coating"
                                value={orderData?.Coating || ""}
                                onChange={handleInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex w-full gap-2 mb-2">
                        <label className="text-xs font-semibold w-1/5">
                          Tolerance
                        </label>
                        <div className="w-4/5">
                          {orderData ? (
                            <input
                              disabled
                              id="Tolerance"
                              value={orderData.Tolerance || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          ) : (
                            <input
                              disabled
                              id="Tolerance"
                              value={orderData?.Tolerance || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex w-full gap-2 mb-2">
                        <div className="flex w-6/12 gap-2 items-center">
                          <label className="text-xs font-semibold w-2/5">
                            Quotation No
                          </label>
                          <div className="w-3/5">
                            {orderData ? (
                              <input
                                disabled
                                id="Quote_No"
                                value={orderData.Quote_No || ""}
                                onChange={handleInputChange}
                                type="text"
                                className="bg-[#ffff00] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            ) : (
                              <input
                                disabled
                                id="Quote_No"
                                value={orderData?.Quote_No || ""}
                                onChange={handleInputChange}
                                type="text"
                                className="bg-[#ffff00] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            )}
                          </div>
                        </div>
                        <div className="flex w-6/12 gap-2 items-center">
                          <label className="text-xs font-semibold w-1/5">
                            CAT
                          </label>
                          <div className="w-2/5">
                            <select
                              id="Quote_CD"
                              value={orderData?.Quote_CD || ""}
                              onChange={handleInputChange}
                              className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full"
                            >
                              <option disabled>Od_Quote_CD | Od_Quote_Name</option>
                              <option value={orderData?.Quote_CD || ""}>
                                {orderData?.Quote_CD || ""}
                              </option>
                              {Array.isArray(QuoteData) &&
                              QuoteData.length > 0 ? (
                                QuoteData.map((item, index) => (
                                  <option key={index} value={item.Od_Quote_CD}>
                                    {item.Od_Quote_CD}{generateSpaces(2)} |{" "}{item.Od_Quote_Name}
                                  </option>
                                ))
                              ) : (
                                <option value="">ไม่มีข้อมูล</option>
                              )}
                            </select>
                          </div>

                          <div className="w-2/5">
                            <input
                              disabled
                              id="Quote_CD_Name"
                              value={quoteName || ""}
                              onChange={(event) => setQuoteData(event)}
                              type="text"
                              className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex w-full gap-2 items-center mb-2">
                        <label className="text-xs font-semibold w-1/5">
                          Item
                        </label>
                        <div className="w-2/5">
                          <select
                            id="Item1_CD"
                            value={orderData?.Item1_CD || ""}
                            onChange={handleInputChange}
                            className="border-gray-500 border-solid border-2 rounded-md bg-[#cbfefe] w-full"
                          >
                            <option disabled>Item1_CD | Item1_Name</option>
                            <option value={orderData?.Item1_CD || ""}>
                              {orderData?.Item1_CD || ""}
                            </option>
                            {Array.isArray(Item1Data) &&
                            Item1Data.length > 0 ? (
                              Item1Data.map((item, index) => (
                                <option key={index} value={item.Item1_CD}>
                                  {item.Item1_CD}{generateSpaces(2)} |{" "}{item.Item1_Name}
                                </option>
                              ))
                            ) : (
                              <option value="">ไม่มีข้อมูล</option>
                            )}
                          </select>
                        </div>

                        <div className="w-2/5">
                          <input
                            disabled
                            id="Item1_CD_Name"
                            value={itemName || ""}
                            onChange={(event) => setItem1Data(event)}
                            type="text"
                            className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>
                      <div className="flex w-full items-center mb-2">
                        <label className="text-xs font-semibold w-3/12">
                          Customer Materail
                        </label>
                        <div className="w-9/12">
                          {orderData ? (
                            <input
                              disabled
                              id="Custom_Material"
                              value={orderData.Custom_Material || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          ) : (
                            <input
                              disabled
                              id="Custom_Material"
                              value={orderData?.Custom_Material || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex w-full items-center mb-2">
                        <label className="text-xs font-semibold w-1/5">
                          PO No
                        </label>
                        <div className="w-4/5">
                          {orderData ? (
                            <input
                              disabled
                              id="Od_No_of_Custom"
                              value={orderData.Od_No_of_Custom || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          ) : (
                            <input
                              disabled
                              id="Od_No_of_Custom"
                              value={orderData?.Od_No_of_Custom || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex w-full items-center gap-2 mb-2">
                        <label className="text-xs font-semibold w-1/5">
                          Production Docu
                        </label>
                        <div className="w-3/5">
                          <input
                            disabled
                            id=""
                            type="text"
                            className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                        <div className="w-1/5">
                          <button className="bg-blue-500 text-white w-full py-[5px] rounded-md hover:bg-blue-700 text-[12px]">
                            Setting
                          </button>
                        </div>
                      </div>
                      <div className="flex w-full items-center gap-2 mb-2">
                        <label className="text-xs font-semibold w-1/5">
                          Supplement_Docu
                        </label>
                        <div className="w-3/5">
                          <input
                            disabled
                            id=""
                            type="text"
                            className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                        <div className="w-1/5">
                          <button className="bg-blue-500 text-white w-full py-[5px] rounded-md hover:bg-blue-700 text-[12px]">
                            Setting
                          </button>
                        </div>
                      </div>
                      <div className="flex w-full items-center gap-2 mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Production_Received
                        </label>
                        <div className="w-4/6">
                          {orderData ? (
                            <input
                              disabled
                              id="Pd_Received_Date"
                              value={
                                orderData?.Pd_Received_Date
                                  ? new Date(orderData.Pd_Received_Date)
                                      .toISOString()
                                      .substring(0, 16)
                                  : ""
                              }
                              onChange={handleInputChange}
                              type="datetime-local"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          ) : (
                            <input
                              disabled
                              id="Pd_Received_Date"
                              value={
                                orderData?.Pd_Received_Date
                                  ? new Date(orderData.Pd_Received_Date)
                                      .toISOString()
                                      .substring(0, 16)
                                  : ""
                              }
                              onChange={handleInputChange}
                              type="datetime-local"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex w-full items-center gap-2 mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Production_Completed
                        </label>
                        <div className="w-4/6">
                          {orderData ? (
                            <input
                              disabled
                              id="Pd_Complete_Date"
                              value={
                                orderData?.Pd_Complete_Date
                                  ? new Date(orderData.Pd_Complete_Date)
                                      .toISOString()
                                      .split("T")[0]
                                  : ""
                              }
                              onChange={handleInputChange}
                              type="date"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          ) : (
                            <input
                              disabled
                              id="Pd_Complete_Date"
                              value={
                                orderData?.Pd_Complete_Date
                                  ? new Date(orderData.Pd_Complete_Date)
                                      .toISOString()
                                      .split("T")[0]
                                  : ""
                              }
                              onChange={handleInputChange}
                              type="date"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex w-full items-center gap-2 mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          QC_Completed
                        </label>
                        <div className="w-4/6">
                          {orderData ? (
                            <input
                              disabled
                              id="I_Completed_Date"
                              value={
                                orderData?.I_Completed_Date
                                  ? new Date(orderData.I_Completed_Date)
                                      .toISOString()
                                      .substring(0, 16)
                                  : ""
                              }
                              onChange={handleInputChange}
                              type="datetime-local"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          ) : (
                            <input
                              disabled
                              id="I_Completed_Date"
                              value={
                                orderData?.I_Completed_Date
                                  ? new Date(orderData.I_Completed_Date)
                                      .toISOString()
                                      .substring(0, 16)
                                  : ""
                              }
                              onChange={handleInputChange}
                              type="datetime-local"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex w-full items-center gap-2 mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Shipment_Date
                        </label>
                        <div className="w-4/6">
                          {orderData ? (
                            <input
                              disabled
                              id="Shipment_Date"
                              value={
                                orderData?.Shipment_Date
                                  ? new Date(orderData.Shipment_Date)
                                      .toISOString()
                                      .split("T")[0]
                                  : ""
                              }
                              onChange={handleInputChange}
                              type="date"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          ) : (
                            <input
                              disabled
                              id="Shipment_Date"
                              value={
                                orderData?.Shipment_Date
                                  ? new Date(orderData.Shipment_Date)
                                      .toISOString()
                                      .split("T")[0]
                                  : ""
                              }
                              onChange={handleInputChange}
                              type="date"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex w-full items-center gap-2 mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Production_Calc_Date
                        </label>
                        <div className="w-4/6">
                          {orderData ? (
                            <input
                              disabled
                              id="Pd_Calc_Date"
                              value={
                                orderData?.Pd_Calc_Date
                                  ? new Date(orderData.Pd_Calc_Date)
                                      .toISOString()
                                      .split("T")[0]
                                  : ""
                              }
                              onChange={handleInputChange}
                              type="date"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          ) : (
                            <input
                              disabled
                              id="Pd_Calc_Date"
                              value={
                                orderData?.Pd_Calc_Date
                                  ? new Date(orderData.Pd_Calc_Date)
                                      .toISOString()
                                      .split("T")[0]
                                  : ""
                              }
                              onChange={handleInputChange}
                              type="date"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex w-full items-center gap-2 mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Calc_processing_Data
                        </label>
                        <div className="w-4/6">
                          {orderData ? (
                            <input
                              disabled
                              id="Calc_Process_Date"
                              value={
                                orderData?.Calc_Process_Date
                                  ? new Date(orderData.Calc_Process_Date)
                                      .toISOString()
                                      .substring(0, 16)
                                  : ""
                              }
                              onChange={handleInputChange}
                              type="datetime-local"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          ) : (
                            <input
                              disabled
                              id="Calc_Process_Date"
                              value={
                                orderData?.Calc_Process_Date
                                  ? new Date(orderData.Calc_Process_Date)
                                      .toISOString()
                                      .substring(0, 16)
                                  : ""
                              }
                              onChange={handleInputChange}
                              type="datetime-local"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex w-full items-center gap-2 mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Order_Modify_Date
                        </label>
                        <div className="w-4/6">
                          {orderData ? (
                            <input
                              disabled
                              id="Od_Upd_Date"
                              value={
                                orderData?.Od_Upd_Date
                                  ? new Date(orderData.Od_Upd_Date)
                                      .toISOString()
                                      .substring(0, 16)
                                  : ""
                              }
                              onChange={handleInputChange}
                              type="datetime-local"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          ) : (
                            <input
                              disabled
                              id="Od_Upd_Date"
                              value={
                                orderData?.Od_Upd_Date
                                  ? new Date(orderData.Od_Upd_Date)
                                      .toISOString()
                                      .substring(0, 16)
                                  : ""
                              }
                              onChange={handleInputChange}
                              type="datetime-local"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1">
                    <div className="grid justify-between">
                      <div className="flex gap-2 items-center mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Customer
                        </label>
                        <div className="w-2/6">
                          <select
                            disabled
                            id="Customer_CD"
                            value={orderData?.Customer_CD || ""}
                            onChange={handleInputChange}
                            className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                          >
                            <option disabled>Customer_CD | Customer_Abb</option>
                            <option value={orderData?.Customer_CD || ""}>
                              {orderData?.Customer_CD || ""}
                            </option>
                            {Array.isArray(CustomerData) &&
                            CustomerData.length > 0 ? (
                              CustomerData.map((item, index) => (
                                <option key={index} value={item.Customer_CD}>
                                  {item.Customer_CD}{generateSpaces(2)} |{" "} {item.Customer_Abb}
                                </option>
                              ))
                            ) : (
                              <option value="">ไม่มีข้อมูล</option>
                            )}
                          </select>
                        </div>

                        <div className="w-2/6">
                          <input
                            disabled
                            id="Customer_CD_Name"
                            value={selectedCustomerAbb || ""}
                            onChange={(event) => setCustomerData(event)}
                            type="text"
                            className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 items-center mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Long Name
                        </label>
                        <div className="w-4/6">
                          <input
                            disabled
                            id="Customer_Name"
                            value={selectedCustomerName || ""}
                            onChange={(event) => setCustomerData(event)}
                            type="text"
                            className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 items-center mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Delivery Category
                        </label>
                        <div className="w-2/6">
                          <select
                            disabled
                            id="Supply_CD"
                            value={orderData?.Supply_CD || ""}
                            onChange={handleInputChange}
                            className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full"
                          >
                            <option disabled>Supply_CD | Supply_Name</option>
                            <option value={orderData?.Supply_CD || ""}>
                              {orderData?.Supply_CD || ""}
                            </option>
                            {Array.isArray(SupplyData) &&
                            SupplyData.length > 0 ? (
                              SupplyData.map((item, index) => (
                                <option key={index} value={item.Supply_CD}>
                                  {item.Supply_CD}{generateSpaces(2)} |{" "}{item.Supply_Name}
                                </option>
                              ))
                            ) : (
                              <option value="">ไม่มีข้อมูล</option>
                            )}
                          </select>
                        </div>

                        <div className="w-2/6">
                          <input
                            disabled
                            id="Supply_CD_Name"
                            value={supplyName || ""}
                            onChange={(event) => setSupplyData(event)}
                            type="text"
                            className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 items-center mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Delivery Destination
                        </label>
                        <div className="w-2/6">
                          <select
                            disabled
                            id="Destination_CD"
                            value={orderData?.Destination_CD || ""}
                            onChange={handleInputChange}
                            className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full"
                          >
                            <option disabled>WorkG_CD | Supply_Name</option>
                            <option value={orderData?.Destination_CD || ""}>
                              {orderData?.Destination_CD || ""}
                            </option>
                            {filteredWorkgData.length > 0 ? (
                              filteredWorkgData.map((item, index) =>
                                item.WorkG_CD ? (
                                  <option
                                    key={`workg-${index}`}
                                    value={item.WorkG_CD}
                                  >
                                    {item.WorkG_CD}
                                  </option>
                                ) : item.Customer_CD ? (
                                  <option
                                    key={`customer-${index}`}
                                    value={item.Customer_CD}
                                  >
                                    {item.Customer_CD}
                                  </option>
                                ) : null
                              )
                            ) : (
                              <option value="">ไม่มีข้อมูล</option>
                            )}
                          </select>
                        </div>

                        <div className="w-2/6">
                          <input
                            disabled
                            id="Destination_CD_Name"
                            value={destinationName}
                            onChange={(event) => setWorkgData(event)}
                            type="text"
                            className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                        
                      </div>
                      <div className="flex gap-2 items-center mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Contract Document
                        </label>
                        <div className="w-2/6">
                          <select
                            disabled
                            id="Contract_Docu_CD"
                            value={orderData?.Contract_Docu_CD || ""}
                            onChange={handleInputChange}
                            className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full"
                          >
                            <option disabled>Contract_Docu_CD | Item1_Name</option>
                            <option value={orderData?.Contract_Docu_CD || ""}>
                              {orderData?.Contract_Docu_CD || ""}
                            </option>
                            {Array.isArray(ContractDocuData) &&
                            ContractDocuData.length > 0 ? (
                              ContractDocuData.map((item, index) => (
                                <option
                                  key={index}
                                  value={item.Contract_Docu_CD}
                                >
                                  {item.Contract_Docu_CD}{generateSpaces(2)} |{" "}{item.Contract_Docu_Name}
                                </option>
                              ))
                            ) : (
                              <option value="">ไม่มีข้อมูล</option>
                            )}
                          </select>
                        </div>

                        <div className="w-2/6">
                          <input
                            disabled
                            id="Contract_Docu_CD_Name"
                            value={DocuName || ""}
                            onChange={(event) => setContractDocu(event)}
                            type="text"
                            className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 items-center mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Unit Price
                        </label>
                        <div className="w-2/6">
                          <select
                            disabled
                            id="Price_CD"
                            value={orderData?.Price_CD || ""}
                            onChange={handleInputChange}
                            className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full"
                          >
                            <option value=""></option>
                            <option value={orderData?.Price_CD || ""}>
                              {orderData?.Price_CD || ""}
                            </option>
                            {Array.isArray(PriceData) &&
                            PriceData.length > 0 ? (
                              PriceData.map((item, index) => (
                                <option key={index} value={item.Price_CD}>
                                  {item.Price_CD}
                                </option>
                              ))
                            ) : (
                              <option value="">ไม่มีข้อมูล</option>
                            )}
                          </select>
                        </div>

                        <div className="w-2/6 flex gap-1">
                          <div className="w-2/5">
                            <input
                              disabled
                              id="Price_Name"
                              value={PriceName || ""}
                              onChange={(event) => setPriceData(event)}
                              type="text"
                              className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                          <div className="w-3/5">
                            <input
                              disabled
                              id="Unit_Price"
                              value={orderData?.Unit_Price || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 items-center mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Order No of Production Split
                        </label>
                        <div className="w-3/6">
                          {orderData ? (
                            <input
                              disabled
                              id="Od_No_of_Pd_Split"
                              value={orderData.Od_No_of_Pd_Split || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-[#ffff00] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          ) : (
                            <input
                              disabled
                              id="Od_No_of_Pd_Split"
                              value={orderData?.Od_No_of_Pd_Split || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-[#ffff00] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          )}
                        </div>
                        <div className="w-1/6">
                          <button className="bg-blue-500 text-white w-full py-[5px] rounded-md hover:bg-blue-700 text-[12px] flex justify-center items-center gap-2">
                            Quot <FaArrowRightLong />
                          </button>
                        </div>
                      </div>
                      <div className="flex gap-2 items-center mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Order Controller Person
                        </label>
                        <div className="w-2/6">
                          <select
                            disabled
                            id="Od_Ctl_Person_CD"
                            value={orderData?.Od_Ctl_Person_CD || ""}
                            onChange={handleInputChange}
                            className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                          >
                            <option disabled>Worker_CD | Worker_Name | Worker_Remark</option>
                            <option value={orderData?.Od_Ctl_Person_CD || ""}>
                              {orderData?.Od_Ctl_Person_CD || ""}
                            </option>
                            {Array.isArray(WorkerData) &&
                            WorkerData.length > 0 ? (
                              WorkerData.map((item, index) => (
                                <option key={index} value={item.Worker_CD}>
                                  {item.Worker_CD}{generateSpaces(2)} |{" "}{item.Worker_Name}{generateSpaces(2)} |{" "}{item.Worker_Remark}
                                </option>
                              ))
                            ) : (
                              <option value="">ไม่มีข้อมูล</option>
                            )}
                          </select>
                        </div>

                        <div className="w-2/6">
                          <input
                            disabled
                            id="Od_Ctl_Person_CD_Name"
                            value={personName || ""}
                            onChange={(event) => setWorkerData(event)}
                            type="text"
                            className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 items-center mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Order Register Person
                        </label>
                        <div className="w-2/6">
                          <select
                            disabled
                            id="Od_Reg_Person_CD"
                            value={orderData?.Od_Reg_Person_CD || ""}
                            onChange={handleInputChange}
                            className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                          >
                            <option disabled>Worker_CD | Worker_Name | Worker_Remark</option>
                            <option value={orderData?.Od_Reg_Person_CD || ""}>
                              {orderData?.Od_Reg_Person_CD || ""}
                            </option>
                            {Array.isArray(WorkerData) &&
                            WorkerData.length > 0 ? (
                              WorkerData.map((item, index) => (
                                <option key={index} value={item.Worker_CD}>
                                  {item.Worker_CD}{generateSpaces(2)} |{" "}{item.Worker_Name}{generateSpaces(2)} |{" "}{item.Worker_Remark}
                                </option>
                              ))
                            ) : (
                              <option value="">ไม่มีข้อมูล</option>
                            )}
                          </select>
                        </div>

                        <div className="w-2/6">
                          <input
                            disabled
                            id="Od_Reg_Person_CD_Name"
                            value={regPersonName || ""}
                            onChange={(event) => setWorkerData(event)}
                            type="text"
                            className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 items-center mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Order Update Person
                        </label>
                        <div className="w-2/6">
                          <select
                            disabled
                            id="Od_Upd_Person_CD"
                            value={orderData?.Od_Upd_Person_CD || ""}
                            onChange={handleInputChange}
                            className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                          >
                            <option disabled>Worker_CD | Worker_Name | Worker_Remark</option>
                            <option value={orderData?.Od_Upd_Person_CD || ""}>
                              {orderData?.Od_Upd_Person_CD || ""}
                            </option>
                            {Array.isArray(WorkerData) &&
                            WorkerData.length > 0 ? (
                              WorkerData.map((item, index) => (
                                <option key={index} value={item.Worker_CD}>
                                  {item.Worker_CD}{generateSpaces(2)} |{" "}{item.Worker_Name}{generateSpaces(2)} |{" "}{item.Worker_Remark}
                                </option>
                              ))
                            ) : (
                              <option value="">ไม่มีข้อมูล</option>
                            )}
                          </select>
                        </div>

                        <div className="w-2/6">
                          <input
                            disabled
                            id="Od_Upd_Person_Name"
                            value={updPersonName || ""}
                            onChange={(event) => setWorkerData(event)}
                            type="text"
                            className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 items-center mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Specific Item
                        </label>
                        <div className="w-2/6">
                          <select
                            disabled
                            id="Specific_CD"
                            value={orderData?.Specific_CD || ""}
                            onChange={handleInputChange}
                            className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                          >
                            <option disabled>Specific_CD | Specific_Name | Specific_Remark</option>
                            <option value={orderData?.Specific_CD || ""}>
                              {orderData?.Specific_CD || ""}
                            </option>
                            {Array.isArray(SpecificData) &&
                            SpecificData.length > 0 ? (
                              SpecificData.map((item, index) => (
                                <option key={index} value={item.Specific_CD}>
                                  {item.Specific_CD}{generateSpaces(2)} |{" "}{item.Specific_Name}{generateSpaces(2)} |{" "}{item.Specific_Remark}
                                </option>
                              ))
                            ) : (
                              <option value="">ไม่มีข้อมูล</option>
                            )}
                          </select>
                        </div>

                        <div className="w-2/6">
                          <input
                            disabled
                            id="Specific_Name"
                            value={SpecificName || ""}
                            onChange={(event) => setSpecificData(event)}
                            type="text"
                            className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 items-center mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Order Progress CAT
                        </label>
                        <div className="w-2/6">
                          <select
                            disabled
                            id="Od_Progress_CD"
                            value={orderData?.Od_Progress_CD || ""}
                            onChange={handleInputChange}
                            className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                          >
                            <option disabled>Od_Progress_CD | Od_Progress_Name | Od_Progress_Remark</option>
                            <option value={orderData?.Od_Progress_CD || ""}>
                              {orderData?.Od_Progress_CD || ""}
                            </option>
                            {Array.isArray(OdProgressData) &&
                            OdProgressData.length > 0 ? (
                              OdProgressData.map((item, index) => (
                                <option key={index} value={item.Od_Progress_CD}>
                                  {item.Od_Progress_CD}{generateSpaces(2)} |{" "}{item.Od_Progress_Name}{generateSpaces(2)} |{" "}{item.Od_Progress_Remark}
                                </option>
                              ))
                            ) : (
                              <option value="">ไม่มีข้อมูล</option>
                            )}
                          </select>
                        </div>

                        <div className="w-2/6">
                          <input
                            disabled
                            id="Od_Progress_Name"
                            value={OdProgressName || ""}
                            onChange={(event) => setOdProgressData(event)}
                            type="text"
                            className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 items-center mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Delivery Date CAT
                        </label>
                        <div className="w-2/6">
                          <select
                            disabled
                            id="Delivery_CD"
                            value={orderData?.Delivery_CD || ""}
                            onChange={handleInputChange}
                            className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                          >
                            <option disabled>Delivery_CD | Delivery_Name | Delivery_Remark</option>
                            <option value={orderData?.Delivery_CD || ""}>
                              {orderData?.Delivery_CD || ""}
                            </option>
                            {Array.isArray(DeliveryData) &&
                            DeliveryData.length > 0 ? (
                              DeliveryData.map((item, index) => (
                                <option key={index} value={item.Delivery_CD}>
                                  {item.Delivery_CD}{generateSpaces(2)} |{" "}{item.Delivery_Name}{generateSpaces(2)} |{" "}{item.Delivery_Remark}
                                </option>
                              ))
                            ) : (
                              <option value="">ไม่มีข้อมูล</option>
                            )}
                          </select>
                        </div>

                        <div className="w-2/6">
                          <input
                            disabled
                            id="Delivery_Name"
                            value={DeliveryName || ""}
                            onChange={(event) => setDeliveryData(event)}
                            type="text"
                            className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 items-center mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Schedule CAT
                        </label>
                        <div className="w-2/6">
                          {orderData ? (
                            <select
                              disabled
                              id="Schedule_CD"
                              value={orderData.Schedule_CD || ""}
                              onChange={handleInputChange}
                              className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                            >
                              <option disabled>Schedule_CD | Schedule_Name | Schedule_Remark</option>
                              <option value={orderData.Schedule_CD || ""}>
                                {orderData.Schedule_CD || ""}
                              </option>
                              {Array.isArray(ScheduleData) &&
                              ScheduleData.length > 0 ? (
                                ScheduleData.map((item, index) => (
                                  <option key={index} value={item.Schedule_CD}>
                                    {item.Schedule_CD}{generateSpaces(2)} |{" "}{item.Schedule_Name}{generateSpaces(2)} |{" "}{item.Schedule_Remark}
                                  </option>
                                ))
                              ) : (
                                <option value="">ไม่มีข้อมูล</option>
                              )}
                            </select>
                          ) : (
                            <select
                              disabled
                              id="Schedule_CD"
                              value={orderData?.Schedule_CD || ""}
                              onChange={handleInputChange}
                              className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                            >
                              <option value={orderData?.Schedule_CD || ""}>
                                {orderData?.Schedule_CD || ""}
                              </option>
                              {Array.isArray(ScheduleData) &&
                              ScheduleData.length > 0 ? (
                                ScheduleData.map((item, index) => (
                                  <option key={index} value={item.Schedule_CD}>
                                    {item.Schedule_CD}
                                  </option>
                                ))
                              ) : (
                                <option value="">ไม่มีข้อมูล</option>
                              )}
                            </select>
                          )}
                        </div>
                        <div className="w-2/6">
                          <input
                            disabled
                            id="Pl_Schedule_Name"
                            value={Schedule_Name || ""}
                            onChange={(event) => setScheduleData(event)}
                            className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 items-center mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Target CAT
                        </label>
                        <div className="w-2/6">
                          <select
                            disabled
                            id="Target_CD"
                            value={orderData?.Target_CD || ""}
                            onChange={handleInputChange}
                            className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                          >
                            <option disabled>Target_CD | Target_Name | Target_Remark</option>
                            <option value={orderData?.Target_CD || ""}>
                              {orderData?.Target_CD || ""}
                            </option>
                            {Array.isArray(TargetData) &&
                            TargetData.length > 0 ? (
                              TargetData.map((item, index) => (
                                <option key={index} value={item.Target_CD}>
                                  {item.Target_CD}{generateSpaces(2)} |{" "}{item.Target_Name}{generateSpaces(2)} |{" "}{item.Target_Remark}
                                </option>
                              ))
                            ) : (
                              <option value="">ไม่มีข้อมูล</option>
                            )}
                          </select>
                        </div>

                        <div className="w-2/6">
                          <input
                            disabled
                            id="Target_Name"
                            value={targetName || ""}
                            onChange={(event) => setTargetData(event)}
                            type="text"
                            className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 items-center mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Production Target Qty
                        </label>
                        <div className="w-4/6">
                          {orderData ? (
                            <input
                              disabled
                              id="Pd_Target_Qty"
                              value={orderData?.Pd_Target_Qty ?? 0}
                              onChange={(event) => handleInputChange(event)}
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          ) : (
                            <input
                              disabled
                              id="Pd_Target_Qty"
                              value={orderData?.Pd_Target_Qty ?? 0}
                              onChange={(event) => handleInputChange(event)}
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2 items-center mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Pruduction Completed Qty
                        </label>
                        <div className="w-4/6">
                          {orderData ? (
                            <input
                              disabled
                              id="Pd_Complete_Qty"
                              value={orderData?.Pd_Complete_Qty ?? 0}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          ) : (
                            <input
                              disabled
                              id="Pd_Complete_Qty"
                              value={orderData?.Pd_Complete_Qty ?? 0}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2 items-center mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Inspection Completed Qty
                        </label>
                        <div className="w-4/6">
                          {orderData ? (
                            <input
                              disabled
                              id="I_Complete_Qty"
                              value={orderData?.I_Complete_Qty ?? 0}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          ) : (
                            <input
                              disabled
                              id="I_Complete_Qty"
                              value={orderData?.I_Complete_Qty ?? 0}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2 items-center mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Delivery Qty
                        </label>
                        <div className="w-4/6">
                          {orderData ? (
                            <input
                              disabled
                              id="Shipment_Qty"
                              value={orderData?.Shipment_Qty ?? 0}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          ) : (
                            <input
                              disabled
                              id="Shipment_Qty"
                              value={orderData?.Shipment_Qty ?? 0}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2 items-center mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Production Split Qty
                        </label>
                        <div className="w-4/6">
                          {orderData ? (
                            <input
                              disabled
                              id="Pd_Split_Qty"
                              value={orderData?.Pd_Split_Qty ?? 0}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          ) : (
                            <input
                              disabled
                              id="Pd_Split_Qty"
                              value={orderData?.Pd_Split_Qty ?? 0}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2 items-center mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          Production Calculation Qty
                        </label>
                        <div className="w-4/6">
                          {orderData ? (
                            <input
                              disabled
                              id="Pd_Calc_Qty"
                              value={orderData?.Pd_Calc_Qty ?? 0}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          ) : (
                            <input
                              disabled
                              id="Pd_Calc_Qty"
                              value={orderData?.Pd_Calc_Qty ?? 0}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2 items-center mb-2">
                        <label className="text-xs font-semibold w-2/6">
                          NG Qty
                        </label>
                        <div className="w-4/6">
                          {orderData ? (
                            <input
                              disabled
                              id="NG_Qty"
                              value={orderData?.NG_Qty ?? 0}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          ) : (
                            <input
                              disabled
                              id="NG_Qty"
                              value={orderData?.NG_Qty ?? 0}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-4">
                    {/* Column of Buttons */}
                    <button
                      disabled={!buttonState.F1}
                      id="F1"
                      onClick={handleF1Click}
                      className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
                    >
                      Search <br />
                      検索 (F1)
                    </button>
                    <button
                      disabled={!buttonState.F2}
                      id="F2"
                      onClick={handleF2Click}
                      className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
                    >
                      Edit <br />
                      編集 (F2)
                    </button>
                    <button
                      disabled={!buttonState.newAddButton}
                      id="newAddButton"
                      onClick={handleF3Click}
                      className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
                    >
                      New Add <br />
                      追加 (F3)
                    </button>
                    <button
                      id="F3"
                      disabled={!buttonState.F3}
                      onClick={handleF4Click}
                      className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
                    >
                      Sub-Con <br />
                      手配(F3)
                    </button>

                    <button
                      id="F4"
                      disabled={!buttonState.F4}
                      onClick={handleF5Click}
                      className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
                    >
                      Plan <br />
                      計画 (F4)
                    </button>
                    <button
                      id="F5"
                      disabled={!buttonState.F5}
                      onClick={handleF6Click}
                      className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
                    >
                      All P-Sheet <br />
                      全指示書(F5)
                    </button>
                    <button
                      id="F7"
                      disabled={!buttonState.F7}
                      className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
                    >
                      (F7)
                    </button>
                    <button
                      id="F8"
                      disabled={!buttonState.F8}
                      onClick={handleF8Click}
                      className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
                    >
                      Master <br />
                      マスタ (F8)
                    </button>

                    <button
                      disabled={!buttonState.F9}
                      id="F9"
                      onClick={handleF9Click}
                      className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
                    >
                      Save <br />
                      登録 (F9)
                    </button>
                    <button
                      id="F10"
                      disabled={!buttonState.F10}
                      onClick={handleF10Click}
                      className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
                    >
                      Delete <br />
                      削除 (F10)
                    </button>
                    <button
                      disabled={!buttonState.F11}
                      id="F11"
                      onClick={handleF11Click}
                      className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
                    >
                      NextInput <br />
                      次へ (F11)
                    </button>
                    <button
                      disabled={!buttonState.F12}
                      id="F12"
                      onClick={handleF12Click}
                      className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
                    >
                      Exit <br />
                      終了 (F12)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const searchPermission = (status) => {
  document.getElementById("Search_Order_No").disabled = !status;
};

const editPermission = (status) => {
  document.getElementById("Order_No").disabled = !status;
  document.getElementById("Product_Grp_CD").disabled = !status;
  document.getElementById("Request_Delivery").disabled = !status;
  document.getElementById("Product_Delivery").disabled = !status;
  document.getElementById("Confirm_Delivery").disabled = !status;
  document.getElementById("NAV_Delivery").disabled = !status;
  document.getElementById("Od_Pending").disabled = !status;
  document.getElementById("Temp_Shipment").disabled = !status;
  document.getElementById("Unreceived").disabled = !status;
  document.getElementById("Od_CAT1").disabled = !status;
  document.getElementById("Od_CAT2").disabled = !status;
  document.getElementById("Od_CAT3").disabled = !status;
  document.getElementById("NAV_Name").disabled = !status;
  document.getElementById("Product_Name").disabled = !status;
  document.getElementById("NAV_Size").disabled = !status;
  document.getElementById("Product_Size").disabled = !status;
  document.getElementById("Customer_Draw").disabled = !status;
  document.getElementById("Company_Draw").disabled = !status;
  document.getElementById("Product_Draw").disabled = !status;
  document.getElementById("Quantity").disabled = !status;
  document.getElementById("Unit_CD").disabled = !status;
  document.getElementById("Sl_Instructions").disabled = !status;
  document.getElementById("Pd_Instructions").disabled = !status;
  document.getElementById("Pd_Remark").disabled = !status;
  document.getElementById("I_Remark").disabled = !status;
  document.getElementById("Sales_Grp_CD").disabled = !status;
  document.getElementById("Sales_Person_CD").disabled = !status;
  document.getElementById("Request1_CD").disabled = !status;
  document.getElementById("Request2_CD").disabled = !status;
  document.getElementById("Request3_CD").disabled = !status;
  document.getElementById("Material1").disabled = !status;
  document.getElementById("H_Treatment1").disabled = !status;
  document.getElementById("Material2").disabled = !status;
  document.getElementById("H_Treatment2").disabled = !status;
  document.getElementById("Material3").disabled = !status;
  document.getElementById("H_Treatment3").disabled = !status;
  document.getElementById("Material4").disabled = !status;
  document.getElementById("H_Treatment4").disabled = !status;
  document.getElementById("Material5").disabled = !status;
  document.getElementById("H_Treatment5").disabled = !status;
  document.getElementById("Tolerance").disabled = !status;
  document.getElementById("Coating_CD").disabled = !status;
  document.getElementById("Coating").disabled = !status;
  document.getElementById("Quote_No").disabled = !status;
  document.getElementById("Quote_CD").disabled = !status;
  document.getElementById("Item1_CD").disabled = !status;
  document.getElementById("Custom_Material").disabled = !status;
  document.getElementById("Od_No_of_Custom").disabled = !status;
  document.getElementById("Pd_Received_Date").disabled = !status;
  document.getElementById("Pd_Complete_Date").disabled = !status;
  document.getElementById("Shipment_Date").disabled = !status;
  document.getElementById("Pd_Calc_Date").disabled = !status;
  document.getElementById("Calc_Process_Date").disabled = !status;
  document.getElementById("Od_Upd_Date").disabled = !status;
  document.getElementById("Customer_CD").disabled = !status;
  document.getElementById("Supply_CD").disabled = !status;
  document.getElementById("Destination_CD").disabled = !status;
  document.getElementById("Contract_Docu_CD").disabled = !status;
  document.getElementById("Price_CD").disabled = !status;
  document.getElementById("Od_No_of_Pd_Split").disabled = !status;
  document.getElementById("Od_Ctl_Person_CD").disabled = !status;
  document.getElementById("Od_Reg_Person_CD").disabled = !status;
  document.getElementById("Od_Upd_Person_CD").disabled = !status;
  document.getElementById("Specific_CD").disabled = !status;
  document.getElementById("Od_Progress_CD").disabled = !status;
  document.getElementById("Delivery_CD").disabled = !status;
  document.getElementById("Schedule_CD").disabled = !status;
  document.getElementById("Target_CD").disabled = !status;
  document.getElementById("Pd_Target_Qty").disabled = !status;
  document.getElementById("Pd_Complete_Qty").disabled = !status;
  document.getElementById("I_Complete_Qty").disabled = !status;
  document.getElementById("Shipment_Qty").disabled = !status;
  document.getElementById("Pd_Split_Qty").disabled = !status;
  document.getElementById("Pd_Calc_Qty").disabled = !status;
  document.getElementById("NG_Qty").disabled = !status;
};
