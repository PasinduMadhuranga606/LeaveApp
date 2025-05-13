import React from "react";
import { FaUserTie } from "react-icons/fa";
import { useAuth } from "../../context/authContext";

const EmployeeSummary = () => {
  const { user } = useAuth();
  return (
    <div className="p-6">
      <div className="flex items-center w-full shadow-md rounded-lg bg-white p-3 space-x-10">
        <div
          className={`text-3xl flex justify-center items-center bg-violet-700 text-white rounded-full p-4 px-6`}
        >
          <FaUserTie />
        </div>
        <div>
          <p className="text-lg font-medium">Welcome Back</p>
          <p className="text-2xl font-bold">{user.name}</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeSummary;
