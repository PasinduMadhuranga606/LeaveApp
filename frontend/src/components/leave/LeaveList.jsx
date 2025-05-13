import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const LeaveList = () => {
  const [leaves, setLeaves] = useState(null);
  const { id } = useParams();
  const { user } = useAuth();
  let sno = 1;

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/leave/${id}/${user.role}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(response.data);
        if (response.data.success) {
          setLeaves(response.data.leaves);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    };

    fetchLeaves();
  }, []);

  if (!leaves) {
    return <div>Loading......</div>;
  }

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
        {user.role === "employee" && (
          <Link
            to="/employee-dashboard/add-leave"
            className="px-6 py-1.5 rounded-md text-white bg-violet-700 hover:bg-violet-800 transition-colors duration-200"
          >
            Add New Leave
          </Link>
        )}
      </div>

      <div className="mt-5">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 titlecase bg-gray-50 border border-gray-200">
            <tr>
              <th className="px-6 py-3">S No</th>
              <th className="px-6 py-3">Leave Type</th>
              <th className="px-6 py-3">Leave Duration</th>
              <th className="px-6 py-3">From</th>
              <th className="px-6 py-3">To</th>
              <th className="px-6 py-3">Description</th>
              <th className="px-6 py-3">Applied Date</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map((leave) => (
              <tr
                key={leave._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-3">{sno++}</td>
                <td className="px-6 py-3">
                  {{
                    sickLeave: "Sick Leave",
                    casualLeave: "Casual Leave",
                    annualLeave: "Annual Leave",
                    lieuLeave: "Lieu Leave",
                  }[leave.leaveType] || leave.leaveType}
                </td>
                <td className="px-6 py-3">
                  {{
                    fullDay: "Full Day",
                    halfDayMorning: "Half Day - Morning",
                    halfDayAfternoon: "Half Day - Afternoon",
                  }[leave.leaveDuration] || leave.leaveDuration}
                </td>
                <td className="px-6 py-3">
                  {new Date(leave.fromDate).toLocaleDateString("en-GB")}
                </td>
                <td className="px-6 py-3">
                  {new Date(leave.toDate).toLocaleDateString("en-GB")}
                </td>
                <td className="px-6 py-3">{leave.description}</td>
                <td className="px-6 py-3">
                  {new Date(leave.createdAt).toLocaleDateString("en-GB")}
                </td>
                <td className="px-6 py-3">{leave.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveList;
