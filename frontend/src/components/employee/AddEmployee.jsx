import React, { useEffect, useState } from "react";
import { fetchDepartments } from "../../utils/EmployeeHelper";

const AddEmployee = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const getDepartments = async () => {
      const departments = await fetchDepartments();
      setDepartments(departments);
    };
    getDepartments();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
      <h3 className="text-2xl font-semibold mb-6">Add New Employee</h3>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
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
              //onChange={handleChange}
              placeholder="Insert Name"
              className="mt-1 w-full p-2 block border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label
              //htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              //onChange={handleChange}
              placeholder="Insert Email"
              className="mt-1 w-full p-2 block border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label
              //htmlFor="employeeId"
              className="block text-sm font-medium text-gray-700"
            >
              Employee ID
            </label>
            <input
              type="text"
              name="employeeId"
              //onChange={handleChange}
              placeholder="Employee ID"
              className="mt-1 w-full p-2 block border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label
              //htmlFor="dob"
              className="block text-sm font-medium text-gray-700"
            >
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              //onChange={handleChange}
              placeholder="DOB"
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
              //onChange={handleChange}
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
              //onChange={handleChange}
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
              //onChange={handleChange}
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
              //onChange={handleChange}
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
              //htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              //onChange={handleChange}
              placeholder="******"
              className="mt-1 w-full p-2 block border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label
              //htmlFor="role"
              className="block text-sm font-medium text-gray-700"
            >
              Role
            </label>
            <select
              name="role"
              //onChange={handleChange}
              className="mt-1 w-full p-2 block border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="employee">Employee</option>
            </select>
          </div>

          <div>
            <label
              //htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Image
            </label>
            <input
              type="file"
              name="image"
              //onChange={handleChange}
              placeholder="Upload Image"
              accept="image/*"
              className="mt-1 w-full p-2 block border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-violet-700 hover:bg-violet-800 text-white py-2 px-4 rounded-md transition-colors duration-200"
        >
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
