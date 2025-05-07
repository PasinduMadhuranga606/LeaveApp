import React from "react";
import { useAuth } from "../../context/authContext";

const Navbar = () => {
  const { user } = useAuth();

  //   console.log(user.name);
  return (
    <div className="flex items-center text-white justify-between h-15 bg-violet-500 px-6 shadow-md">
      <p className="text-lg font-medium">Welcome {user.name}</p>
      <button className="px-4 py-1.5 rounded-md border border-white bg-violet-700 hover:bg-violet-800 transition-colors duration-200">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
