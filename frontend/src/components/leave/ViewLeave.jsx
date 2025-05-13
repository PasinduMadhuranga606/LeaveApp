import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ViewLeave = () => {
  const { id } = useParams();
  const [leave, setLeave] = useState(null);
  //const [empLoading, setEmpLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLeave = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/leave/view/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(response.data);
        if (response.data.success) {
          setLeave(response.data.leave);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    };

    fetchLeave();
  }, []);

  const changeStatus = async (id, status) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/leave/${id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      //console.log(response.data);
      if (response.data.success) {
        navigate("/admin-dashboard/leaves");
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
  };

  return (
    <>
      {leave ? (
        <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
          <h3 className="text-3xl font-semibold mb-12 text-center">
            Leave Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src={`http://localhost:5000/${leave.employeeId.userId.profileImage}`}
                className="rounded-full border w-72"
              />
            </div>

            <div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-semibold">Name:</p>
                <p className="text-lg font-normal">
                  {leave.employeeId.userId.name || "N/A"}
                </p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-semibold">Employee ID:</p>
                <p className="text-lg font-normal">
                  {leave.employeeId.employeeId}
                </p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-semibold">Leave Type:</p>
                <p className="text-lg font-normal">
                  {{
                    sickLeave: "Sick Leave",
                    casualLeave: "Casual Leave",
                    annualLeave: "Annual Leave",
                    lieuLeave: "Lieu Leave",
                  }[leave.leaveType] || leave.leaveType}
                </p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-semibold">Leave Duration:</p>
                <p className="text-lg font-normal">
                  {{
                    fullDay: "Full Day",
                    halfDayMorning: "Half Day - Morning",
                    halfDayAfternoon: "Half Day - Afternoon",
                  }[leave.leaveDuration] || leave.leaveDuration}
                </p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-semibold">Description:</p>
                <p className="text-lg font-normal">{leave.description}</p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-semibold">Department:</p>
                <p className="text-lg font-normal">
                  {leave.employeeId.department.dep_name}
                </p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-semibold">Employment Type:</p>
                <p className="text-lg font-normal">
                  {{
                    fullTime: "Full-time",
                    partTime: "Part-time",
                    contract: "Contract",
                  }[leave.employeeId.employmentType] ||
                    leave.employeeId.employmentType}
                </p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-semibold">Start Date:</p>
                <p className="text-lg font-normal">
                  {new Date(leave.fromDate).toLocaleDateString()}
                </p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-semibold">End Date:</p>
                <p className="text-lg font-normal">
                  {new Date(leave.toDate).toLocaleDateString()}
                </p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-semibold">
                  {leave.status === "Pending" ? "Action:" : "Status:"}
                </p>
                {leave.status === "Pending" ? (
                  <div className="flex space-x-2">
                    <button
                      className="px-3 py-1 rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
                      onClick={() => changeStatus(leave._id, "Approved")}
                    >
                      Approve
                    </button>
                    <button
                      className="px-3 py-1 rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-200"
                      onClick={() => changeStatus(leave._id, "Rejected")}
                    >
                      Reject
                    </button>
                  </div>
                ) : (
                  <p className="text-lg font-normal">{leave.status}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading......</div>
      )}
    </>
  );
};

export default ViewLeave;
