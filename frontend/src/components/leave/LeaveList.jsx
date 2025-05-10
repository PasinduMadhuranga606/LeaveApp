import React from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const LeaveList = () => {
  return (
    <div className="p-5">
      <div className="text-center">
        <h3 className="text-3xl md:text-3xl font-semibold">Manage Leaves</h3>
      </div>
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search By Leave Name"
          className="px-4 py-0.5 rounded-md border border-black bg-white"
          //className="px-4 py-0.5 border"
          //onChange={filterEmployees}
        />
        <Link
          to="/employee-dashboard/add-leave"
          className="px-6 py-1.5 rounded-md text-white bg-violet-700 hover:bg-violet-800 transition-colors duration-200"
        >
          Add New Leave
        </Link>
      </div>
      <div className="mt-5">
        {/* <DataTable columns={columns} data={filteredEmployees} pagination /> */}
      </div>
    </div>
  );
};

export default LeaveList;
