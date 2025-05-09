import React, { useEffect, useState } from "react";
import { fetchDepartments } from "../../utils/EmployeeHelper";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    name: "",
    gender: "",
    maritalStatus: "",
    designation: "",
    department: "",
    employmentType: "",
  });
  const [departments, setDepartments] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getDepartments = async () => {
      const departments = await fetchDepartments();
      setDepartments(departments);
    };
    getDepartments();
  }, []);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/employee/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        //console.log(response.data);
        if (response.data.success) {
          const employee = response.data.employee;
          setEmployee((prev) => ({
            ...prev,
            name: employee.userId.name,
            gender: employee.gender,
            maritalStatus: employee.maritalStatus,
            designation: employee.designation,
            department: employee.department,
            employmentType: employee.employmentType,
          }));
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    };

    fetchEmployees();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/employee/${id}`,
        employee,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        navigate("/admin-dashboard/employees");
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
  };

  return (
    <>
      {departments && employee ? (
        <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
          <h3 className="text-2xl font-semibold mb-6">Edit Employee</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  //htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={employee.name}
                  placeholder="Insert Name"
                  className="mt-1 w-full p-2 block border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label
                  //htmlFor="gender"
                  className="block text-sm font-medium text-gray-700"
                >
                  Gender
                </label>
                <select
                  name="gender"
                  onChange={handleChange}
                  value={employee.gender}
                  className="mt-1 w-full p-2 block border border-gray-300 rounded-md"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  //htmlFor="maritalStatus"
                  className="block text-sm font-medium text-gray-700"
                >
                  Marital Status
                </label>
                <select
                  name="maritalStatus"
                  onChange={handleChange}
                  value={employee.maritalStatus}
                  className="mt-1 w-full p-2 block border border-gray-300 rounded-md"
                  required
                >
                  <option value="">Select Status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                </select>
              </div>

              <div>
                <label
                  //htmlFor="designation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Designation
                </label>
                <input
                  type="text"
                  name="designation"
                  onChange={handleChange}
                  value={employee.designation}
                  placeholder="Designation"
                  className="mt-1 w-full p-2 block border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label
                  //htmlFor="department"
                  className="block text-sm font-medium text-gray-700"
                >
                  Department
                </label>
                <select
                  name="department"
                  onChange={handleChange}
                  value={employee.department}
                  className="mt-1 w-full p-2 block border border-gray-300 rounded-md"
                  required
                >
                  <option value="">Select Department</option>
                  {departments.map((dep) => (
                    <option key={dep._id} value={dep._id}>
                      {dep.dep_name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  //htmlFor="employmentType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Employment Type
                </label>
                <select
                  name="employmentType"
                  onChange={handleChange}
                  value={employee.employmentType}
                  className="mt-1 w-full p-2 block border border-gray-300 rounded-md"
                  required
                >
                  <option value="">Select Type</option>
                  <option value="fullTime">Full-time</option>
                  <option value="partTime">Part-time</option>
                  <option value="contract">Contract</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-violet-700 hover:bg-violet-800 text-white py-2 px-4 rounded-md transition-colors duration-200"
            >
              Edit Employee
            </button>
          </form>
        </div>
      ) : (
        <div>Loading......</div>
      )}
    </>
  );
};

export default EditEmployee;
