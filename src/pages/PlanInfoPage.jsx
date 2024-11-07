import React from 'react';
import PlanInfo from '../components/PlanInfo';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
export default function PlanInfoPage() {
  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
    <Sidebar />
    <div className="flex flex-col w-screen mr-2 ml-2">
      <Navbar />
      <div className="flex justify-center items-center py-3">
        <label className="text-xl font-bold">Plan Info</label>
      </div>
      <hr className="border-y-[1px] border-gray-300" />
      <PlanInfo />
    </div>
  </div>
  )
}
