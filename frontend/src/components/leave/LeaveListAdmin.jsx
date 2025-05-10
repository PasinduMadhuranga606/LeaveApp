import React from "react";
import { Link } from "react-router-dom";

const LeaveListAdmin = () => {
  return (
    <div className="p-5">
      <div className="text-center">
        <h3 className="text-3xl md:text-3xl font-semibold">Manage Leaves</h3>
      </div>
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search By Leave Type"
          className="px-4 py-0.5 rounded-md border border-black bg-white"
          //className="px-4 py-0.5 border"
          //onChange={filterEmployees}
        />
        <div className="space-x-3">
          <button className="px-2 py-1 rounded-md text-white bg-violet-700 hover:bg-violet-800 transition-colors duration-200">
            Pending
          </button>
          <button className="px-2 py-1 rounded-md text-white bg-violet-700 hover:bg-violet-800 transition-colors duration-200">
            Approved
          </button>
          <button className="px-2 py-1 rounded-md text-white bg-violet-700 hover:bg-violet-800 transition-colors duration-200">
            Rejected
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaveListAdmin;
