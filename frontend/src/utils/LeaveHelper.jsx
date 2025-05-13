import axios from "axios";
import { useNavigate } from "react-router-dom";

const leaveTypeMap = {
  sickLeave: "Sick Leave",
  casualLeave: "Casual Leave",
  annualLeave: "Annual Leave",
  lieuLeave: "Lieu Leave",
};

const leaveDurationMap = {
  fullDay: "Full Day",
  halfDayMorning: "Half Day - Morning",
  halfDayAfternoon: "Half Day - Afternoon",
};

export const columns = [
  {
    name: "S No",
    selector: (row) => row.sno,
    width: "70px",
  },
  {
    name: "Emp ID",
    selector: (row) => row.employeeId,
    width: "160px",
  },
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
    width: "200px",
  },
  {
    name: "Leave Type",
    selector: (row) => leaveTypeMap[row.leaveType] || row.leaveType,
    sortable: true,
    width: "130px",
  },
  {
    name: "Leave Duration",
    selector: (row) => leaveDurationMap[row.leaveDuration] || row.leaveDuration,
    sortable: true,
    width: "160px",
  },
  {
    name: "Department",
    selector: (row) => row.department,
    sortable: true,
    width: "120px",
  },
  {
    name: "Days",
    selector: (row) => row.days,
    sortable: true,
    width: "100px",
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
    width: "100px",
  },
  {
    name: "Action",
    selector: (row) => row.action,
    center: "true",
  },
];

// export const fetchDepartments = async () => {
//   let departments;
//   try {
//     const response = await axios.get("http://localhost:5000/api/department", {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     });
//     if (response.data.success) {
//       departments = response.data.departments;
//     }
//   } catch (error) {
//     if (error.response && !error.response.data.success) {
//       alert(error.response.data.error);
//     }
//   }
//   return departments;
// };

export const LeaveButtons = ({ Id }) => {
  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/admin-dashboard/leaves/view/${id}`);
  };

  return (
    <div className="flex space-x-3">
      <button
        className="px-3 py-1 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
        onClick={() => handleView(Id)}
      >
        View
      </button>
    </div>
  );
};
