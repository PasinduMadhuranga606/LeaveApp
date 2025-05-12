import React, { useEffect, useState } from "react";
import SummaryCard from "./SummaryCard";
import { FaBuilding, FaFile, FaMoneyBillWave, FaUsers } from "react-icons/fa";
import axios from "axios";

const AdminSummary = () => {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const summary = await axios.get(
          "http://localhost:5000/api/dashboard/summary",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setSummary(summary.data);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.error);
        }
        console.log(error.message);
      }
    };
    fetchSummary();
  }, []);

  if (!summary) {
    return <div>Loading......</div>;
  }

  return (
    <div className="p-8 md:p-8 space-y-6">
      <h3 className="text-3xl md:text-3xl font-semibold">Dashboard Overview</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <SummaryCard
          icon={<FaUsers />}
          text={"Total Employees"}
          number={summary.totalEmployees}
          color="bg-gray-600"
        />
        <SummaryCard
          icon={<FaBuilding />}
          text={"Total Departments"}
          number={summary.totalDepartments}
          color="bg-gray-600"
        />
      </div>

      <div className="mt-12">
        <h4 className="text-3xl md:text-3xl font-semibold">Leave Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <SummaryCard
            icon={<FaFile />}
            text={"Applied Leaves"}
            number={0}
            color="bg-gray-600"
          />
          <SummaryCard
            icon={<FaFile />}
            text={"Approved Leaves"}
            number={0}
            color="bg-gray-600"
          />
          <SummaryCard
            icon={<FaFile />}
            text={"Pending Leaves"}
            number={0}
            color="bg-gray-600"
          />
          <SummaryCard
            icon={<FaFile />}
            text={"Rejected Leaves"}
            number={0}
            color="bg-gray-600"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminSummary;
