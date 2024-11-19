import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

export function SystemSet() {
  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-full mr-2 ml-2">
        <Navbar />
        <div className="flex-1 flex-col p-2 overflow-x-auto">
          <div className="bg-white grid grid-cols-1">
            <div className="flex justify-center items-center">
              <h1 className="text-2xl font-bold text-center">
                System Set <br /> システム設定
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
