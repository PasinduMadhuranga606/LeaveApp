export const columns = [
  {
    name: "S No",
    selector: (row) => row.sno,
  },
  {
    name: "Department Name",
    selector: (row) => row.dep_name,
  },
  {
    name: "Action",
    selector: (row) => row.action,
  },
];

export const DepartmentButtons = () => {
  return (
    <div className="flex space-x-3">
      <button className="px-3 py-1 rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200">
        Edit
      </button>
      <button className="px-3 py-1 rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-200">
        Delete
      </button>
    </div>
  );
};
