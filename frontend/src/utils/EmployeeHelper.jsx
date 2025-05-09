import axios from "axios";
import { useNavigate } from "react-router-dom";

export const columns = [
  {
    name: "S No",
    selector: (row) => row.sno,
    width: "100px",
  },
  {
    name: "Image",
    selector: (row) => row.profileImage,
    width: "150px",
  },
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
    width: "200px",
  },
  {
    name: "Designation",
    selector: (row) => row.designation,
    width: "200px",
  },
  {
    name: "Department",
    selector: (row) => row.dep_name,
    width: "200px",
  },
  {
    name: "Action",
    selector: (row) => row.action,
    center: "true",
  },
];

export const fetchDepartments = async () => {
  let departments;
  try {
    const response = await axios.get("http://localhost:5000/api/department", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.data.success) {
      departments = response.data.departments;
    }
  } catch (error) {
    if (error.response && !error.response.data.success) {
      alert(error.response.data.error);
    }
  }
  return departments;
};

export const EmployeeButtons = ({ _id, onDepartmentDelete }) => {
  const navigate = useNavigate();

  // const handleDelete = async (id) => {
  //   const confirm = window.confirm("Do you want to delete?");
  //   if (confirm) {
  //     try {
  //       const response = await axios.delete(
  //         `http://localhost:5000/api/department/${id}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${localStorage.getItem("token")}`,
  //           },
  //         }
  //       );
  //       //console.log(response.data);
  //       if (response.data.success) {
  //         onDepartmentDelete(id);
  //       }
  //     } catch (error) {
  //       if (error.response && !error.response.data.success) {
  //         alert(error.response.data.error);
  //       }
  //     }
  //   }
  // };

  return (
    <div className="flex space-x-3">
      <button
        className="px-3 py-1 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
        onClick={() => navigate(`/admin-dashboard/employees/view/${_id}`)}
      >
        View
      </button>
      <button
        className="px-3 py-1 rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
        onClick={() => navigate(`/admin-dashboard/employees/${_id}`)}
      >
        Edit
      </button>
      <button
        className="px-3 py-1 rounded-md text-white bg-yellow-600 hover:bg-yellow-700 transition-colors duration-200"
        //onClick={() => handleDelete(_id)}
      >
        Leave
      </button>
      <button
        className="px-3 py-1 rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-200"
        //onClick={() => handleDelete(_id)}
      >
        Delete
      </button>
    </div>
  );
};
