import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { columns, EmployeeButtons } from "../../utils/EmployeeHelper";

const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);
  const [empLoading, setEmpLoading] = useState(false);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      setEmpLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/api/employee", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.data.success) {
          let sno = 1;
          //console.log(response.data);
          const data = await response.data.employees.map((emp) => ({
            _id: emp._id,
            sno: sno++,
            profileImage: (
              <img
                width={60}
                className="rounded-full"
                src={`http://localhost:5000/${emp.userId.profileImage}`}
              />
            ),
            name: emp.userId.name,
            designation: emp.designation,
            dep_name: emp.department.dep_name,
            action: (
              <EmployeeButtons
                _id={emp._id}
                //onDepartmentDelete={onDepartmentDelete}
              />
            ),
          }));
          setEmployees(data);
          setFilteredEmployees(data);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      } finally {
        setEmpLoading(false);
      }
    };

    fetchEmployees();
  }, []);

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
      <div className="mt-5">
        {/* <DataTable columns={columns} data={filteredDepartments} pagination /> */}
        <DataTable columns={columns} data={employees} />
      </div>
    </div>
  );
};

export default EmployeesList;
