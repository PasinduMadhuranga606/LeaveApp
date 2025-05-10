import React from "react";

const AddLeave = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
      <h3 className="text-2xl font-semibold mb-6">Request for Leave</h3>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              //htmlFor="leaveType"
              className="block text-sm font-medium text-gray-700"
            >
              Leave Type
            </label>
            <select
              name="leaveType"
              //   onChange={handleChange}
              className="mt-1 w-full p-2 block border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Type</option>
              <option value="sickLeave">Sick Leave</option>
              <option value="casualLeave">Casual Leave</option>
              <option value="annualLeave">Annual Leave</option>
              <option value="lieuLeave">Lieu Leave</option>
            </select>
          </div>

          <div>
            <label
              //htmlFor="leaveDuration"
              className="block text-sm font-medium text-gray-700"
            >
              Leave Duration
            </label>
            <select
              name="leaveDuration"
              //   onChange={handleChange}
              className="mt-1 w-full p-2 block border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Duration</option>
              <option value="fullDay">Full Day</option>
              <option value="halfDayMorning">Half Day - Morning</option>
              <option value="halfDayAfternoon">Half Day - Afternoon</option>
            </select>
          </div>

          <div>
            <label
              //htmlFor="fromDate"
              className="block text-sm font-medium text-gray-700"
            >
              From Date
            </label>
            <input
              type="date"
              name="fromDate"
              //   onChange={handleChange}
              placeholder="From Date"
              className="mt-1 w-full p-2 block border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label
              //htmlFor="toDate"
              className="block text-sm font-medium text-gray-700"
            >
              To Date
            </label>
            <input
              type="date"
              name="toDate"
              //   onChange={handleChange}
              placeholder="To Date"
              className="mt-1 w-full p-2 block border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <label
            //htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            name="description"
            //onChange={handleChange}
            placeholder="Description"
            className="mt-1 w-full p-2 block border border-gray-300 rounded-md"
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-violet-700 hover:bg-violet-800 text-white py-2 px-4 rounded-md transition-colors duration-200"
        >
          Request New Leave
        </button>
      </form>
    </div>
  );
};

export default AddLeave;
