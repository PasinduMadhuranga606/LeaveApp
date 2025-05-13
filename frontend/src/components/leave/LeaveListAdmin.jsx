import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LeaveButtons } from "../../utils/LeaveHelper";
import DataTable from "react-data-table-component";
import { columns } from "../../utils/LeaveHelper";

const LeaveListAdmin = () => {
  const [leaves, setLeaves] = useState(null);
  const [filteredLeaves, setFilteredLeaves] = useState([]);

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/leave", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.data.success) {
          let sno = 1;
          console.log(response.data);
          const data = await response.data.leaves.map((leave) => ({
            _id: leave._id,
            sno: sno++,
            employeeId: leave.employeeId.employeeId,
            name: leave.employeeId.userId.name,
            leaveType: leave.leaveType,
            leaveDuration: leave.leaveDuration,
            department: leave.employeeId.department.dep_name,
            days:
              new Date(leave.toDate).getDate() -
              new Date(leave.fromDate).getDate(),
            status: leave.status,
            action: (
              <LeaveButtons
                Id={leave._id}
                //onDepartmentDelete={onDepartmentDelete}
              />
            ),
          }));
          setLeaves(data);
          setFilteredLeaves(data);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    };

    fetchLeaves();
  }, []);

  const filterLeaves = (e) => {
    const data = leaves.filter((leave) =>
      leave.leaveType.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredLeaves(data);
  };

  const filterByButton = (status) => {
    const data = leaves.filter((leave) =>
      leave.status.toLowerCase().includes(status.toLowerCase())
    );
    setFilteredLeaves(data);
  };

  return (
    <>
      {filteredLeaves ? (
        <div className="p-5">
          <div className="text-center">
            <h3 className="text-3xl md:text-3xl font-semibold">
              Manage Leaves
            </h3>
          </div>
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Search By Leave Type"
              className="px-4 py-0.5 rounded-md border border-black bg-white"
              //className="px-4 py-0.5 border"
              onChange={filterLeaves}
            />
            <div className="space-x-3">
              <button
                className="px-2 py-1 rounded-md text-white bg-violet-700 hover:bg-violet-800 transition-colors duration-200"
                onClick={() => filterByButton("Pending")}
              >
                Pending
              </button>
              <button
                className="px-2 py-1 rounded-md text-white bg-violet-700 hover:bg-violet-800 transition-colors duration-200"
                onClick={() => filterByButton("Approved")}
              >
                Approved
              </button>
              <button
                className="px-2 py-1 rounded-md text-white bg-violet-700 hover:bg-violet-800 transition-colors duration-200"
                onClick={() => filterByButton("Rejected")}
              >
                Rejected
              </button>
            </div>
          </div>

          <div className="mt-3">
            <DataTable columns={columns} data={filteredLeaves} pagination />
          </div>
        </div>
      ) : (
        <div>Loading......</div>
      )}
    </>
  );
};

export default LeaveListAdmin;
