import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  //const [empLoading, setEmpLoading] = useState(false);

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
          setEmployee(response.data.employee);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    };

    fetchEmployees();
  }, []);

  return (
    <>
      {employee ? (
        <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
          <h3 className="text-3xl font-semibold mb-12 text-center">
            Employee Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src={`http://localhost:5000/${employee.userId.profileImage}`}
                className="rounded-full border w-72"
              />
            </div>

            <div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-semibold">Name:</p>
                <p className="text-lg font-normal">{employee.userId.name}</p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-semibold">Employee ID:</p>
                <p className="text-lg font-normal">{employee.employeeId}</p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-semibold">Date of Birth:</p>
                <p className="text-lg font-normal">
                  {new Date(employee.dob).toLocaleDateString("en-GB")}
                </p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-semibold">Gender:</p>
                <p className="text-lg font-normal">
                  {{
                    male: "Male",
                    female: "Female",
                    other: "Other",
                  }[employee.gender] || employee.gender}
                </p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-semibold">Designation:</p>
                <p className="text-lg font-normal">{employee.designation}</p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-semibold">Department:</p>
                <p className="text-lg font-normal">
                  {employee.department.dep_name}
                </p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-semibold">Employment Type:</p>
                <p className="text-lg font-normal">
                  {{
                    fullTime: "Full-time",
                    partTime: "Part-time",
                    contract: "Contract",
                  }[employee.employmentType] || employee.employmentType}
                </p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-semibold">Marital Status:</p>
                <p className="text-lg font-normal">
                  {{
                    single: "Single",
                    married: "Married",
                  }[employee.maritalStatus] || employee.maritalStatus}
                </p>
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

export default ViewEmployee;
