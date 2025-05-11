import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaBuilding,
  FaCalendarAlt,
  FaCogs,
  FaTachometerAlt,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";
import { useAuth } from "../../context/authContext";

const EmployeeSidebar = () => {
  const { user } = useAuth();
  return (
    <div className="bg-violet-950 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64">
      <div className="bg-violet-500 h-15 flex items-center justify-center">
        <h3 className="text-2xl text-center font-play">Leave App</h3>
      </div>
      <div>
        <div className="pl-4 pr-4">
          <NavLink
            to="/employee-dashboard"
            // className={({ isActive }) =>
            //   `flex items-center space-x-5 px-3 py-2.5 rounded-md transition-colors duration-200 ${
            //     isActive ? "bg-violet-700" : "hover:bg-violet-800"
            //   }`
            // }
            className={({ isActive }) =>
              `${
                isActive ? "bg-violet-600 " : " "
              } flex items-center space-x-5 block px-3 py-2.5 rounded-md hover:bg-violet-700 transition-colors duration-200`
            }
            end
          >
            <FaTachometerAlt />
            <span>Dashboard</span>
          </NavLink>
        </div>

        <div className="pl-4 pr-4">
          <NavLink
            to={`/employee-dashboard/my-profile/${user._id}`}
            className={({ isActive }) =>
              `${
                isActive ? "bg-violet-600 " : " "
              } flex items-center space-x-5 block px-3 py-2.5 rounded-md hover:bg-violet-700 transition-colors duration-200`
            }
          >
            <FaUserTie />
            <span>My Profile</span>
          </NavLink>
        </div>

        <div className="pl-4 pr-4">
          <NavLink
            to={`/employee-dashboard/leaves/${user._id}`}
            // className={({ isActive }) =>
            //   `flex items-center space-x-5 px-3 py-2.5 rounded-md transition-colors duration-200 ${
            //     isActive ? "bg-violet-700" : "hover:bg-violet-800"
            //   }`
            // }
            className={({ isActive }) =>
              `${
                isActive ? "bg-violet-600 " : " "
              } flex items-center space-x-5 block px-3 py-2.5 rounded-md hover:bg-violet-700 transition-colors duration-200`
            }
          >
            <FaCalendarAlt />
            <span>Leaves</span>
          </NavLink>
        </div>

        <div className="pl-4 pr-4">
          <NavLink
            to="/employee-dashboard/settings"
            // className={({ isActive }) =>
            //   `flex items-center space-x-5 px-3 py-2.5 rounded-md transition-colors duration-200 ${
            //     isActive ? "bg-violet-700" : "hover:bg-violet-800"
            //   }`
            // }
            className={({ isActive }) =>
              `${
                isActive ? "bg-violet-600 " : " "
              } flex items-center space-x-5 block px-3 py-2.5 rounded-md hover:bg-violet-700 transition-colors duration-200`
            }
          >
            <FaCogs />
            <span>Settings</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default EmployeeSidebar;
