import React from "react";

const DashboardUi = ({ values, Names }) => {
  return (
    <li className="border-2 border-gray-500 rounded-md p-4 w-64">
      <h1 className="text-xl font-semibold text-blue-500">{Names}:</h1>
      <h2 className="text-lg font-medium">{values}</h2>
    </li>
  );
};

export default DashboardUi;
