import React from "react";
import { Link } from "react-router-dom";

const DepartmentsList = () => {
  return (
    <div className="p-5">
      <div className="text-center">
        <h3 className="text-3xl md:text-3xl font-semibold">
          Manage Departments
        </h3>
      </div>
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search Department Name"
          className="px-4 py-0.5 rounded-md border border-black bg-white"
          //className="px-4 py-0.5 border"
        />
        <Link
          to="/admin-dashboard/add-department"
          className="px-6 py-1.5 rounded-md text-white border border-black bg-violet-700 hover:bg-violet-800 transition-colors duration-200"
        >
          Add New Department
        </Link>
      </div>
    </div>
  );
};

export default DepartmentsList;
