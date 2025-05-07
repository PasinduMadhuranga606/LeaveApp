import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaBuilding,
  FaCalendarAlt,
  FaCogs,
  FaTachometerAlt,
  FaUsers,
} from "react-icons/fa";

const AdminSidebar = () => {
  return (
    <div className="bg-violet-950 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64">
      <div className="bg-violet-500 h-15 flex items-center justify-center">
        <h3 className="text-2xl text-center font-play">Leave App</h3>
      </div>
      <div>
        <div className="pl-4 pr-4">
          <NavLink
            to="/admin-dashboard"
            className={({ isActive }) =>
              `flex items-center space-x-5 px-3 py-2.5 rounded-md transition-colors duration-200 ${
                isActive ? "bg-violet-700" : "hover:bg-violet-800"
              }`
            }
          >
            <FaTachometerAlt />
            <span>Dashboard</span>
          </NavLink>
        </div>

        <div className="pl-4 pr-4">
          <NavLink
            to="/admin-dashboard"
            className="flex items-center space-x-5 block py-2.5 px-4 rounded"
          >
            <FaUsers />
            <span>Employees</span>
          </NavLink>
        </div>

        <div className="pl-4 pr-4">
          <NavLink
            to="/admin-dashboard"
            className="flex items-center space-x-5 block py-2.5 px-4 rounded"
          >
            <FaBuilding />
            <span>Departments</span>
          </NavLink>
        </div>

        <div className="pl-4 pr-4">
          <NavLink
            to="/admin-dashboard"
            className="flex items-center space-x-5 block py-2.5 px-4 rounded"
          >
            <FaCalendarAlt />
            <span>Leaves</span>
          </NavLink>
        </div>

        <div className="pl-4 pr-4">
          <NavLink
            to="/admin-dashboard"
            className="flex items-center space-x-5 block py-2.5 px-4 rounded"
          >
            <FaCogs />
            <span>Settings</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
