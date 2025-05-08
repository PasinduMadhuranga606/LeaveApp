import React from "react";
import { Link } from "react-router-dom";

const EmployeesList = () => {
  return (
    <div className="p-5">
      <div className="text-center">
        <h3 className="text-3xl md:text-3xl font-semibold">Manage Employees</h3>
      </div>
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search By Employee Id"
          className="px-4 py-0.5 rounded-md border border-black bg-white"
          //className="px-4 py-0.5 border"
          //onChange={filterDepartments}
        />
        <Link
          to="/admin-dashboard/add-employee"
          className="px-6 py-1.5 rounded-md text-white bg-violet-700 hover:bg-violet-800 transition-colors duration-200"
        >
          Add New Employee
        </Link>
      </div>
      {/* <div className="mt-5">
        <DataTable columns={columns} data={filteredDepartments} pagination />
      </div> */}
    </div>
  );
};

export default EmployeesList;
