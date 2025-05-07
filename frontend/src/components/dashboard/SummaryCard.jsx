import React from "react";

const SummaryCard = ({ icon, text, number, color }) => {
  return (
    <div className="flex items-center w-full shadow-md rounded-lg bg-white p-3 space-x-10">
      <div
        className={`text-3xl flex justify-center items-center ${color} text-white rounded-full p-4 px-6`}
      >
        {icon}
      </div>
      <div>
        <p className="text-lg font-medium">{text}</p>
        <p className="text-2xl font-bold">{number}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
