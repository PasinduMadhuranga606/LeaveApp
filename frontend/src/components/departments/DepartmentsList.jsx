import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { columns, DepartmentButtons } from "../../utils/DepartmentHelper";
import axios from "axios";

const DepartmentsList = () => {
  const [departments, setDepartments] = useState([]);
  const [depLoading, setDepLoading] = useState(false);

  useEffect(() => {
    const fetchDepartments = async () => {
      setDepLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:5000/api/department",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          let sno = 1;
          //console.log(response.data);
          const data = await response.data.departments.map((dep) => ({
            _id: dep._id,
            sno: sno++,
            dep_name: dep.dep_name,
            action: <DepartmentButtons _id={dep._id} />,
          }));
          setDepartments(data);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      } finally {
        setDepLoading(false);
      }
    };

    fetchDepartments();
  }, []);

  return (
    <>
      {depLoading ? (
        <div>Loading......</div>
      ) : (
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
          <div className="mt-5">
            <DataTable columns={columns} data={departments} />
          </div>
        </div>
      )}
    </>
  );
};

export default DepartmentsList;
