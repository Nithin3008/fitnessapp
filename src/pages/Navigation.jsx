import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  const setActiveStyle = ({ isActive }) => ({
    backgroundColor: isActive ? "#007FFF" : "",
    borderRadius: isActive ? "3px" : "",
    fontSize: "24px",
    padding: "6px",
  });
  return (
    <>
      <div className="flex flex-col w-72 items-center justify-center gap-5 bg-orange-200">
        <NavLink style={setActiveStyle} to="/">
          Home
        </NavLink>
        <NavLink style={setActiveStyle} to="/Exercise">
          Exercise
        </NavLink>
        <NavLink style={setActiveStyle} to="/Goal">
          Goals
        </NavLink>
        <NavLink style={setActiveStyle} to="/Food">
          Food
        </NavLink>
        <a
          href="https://github.com/Nithin3008/fitnessapp"
          className="text-xl text-blue-500 font-bold"
        >
          Github Link
        </a>
        <a
          href="https://replit.com/@nithinrocky30/assignment17"
          className="text-xl text-blue-500 font-bold"
        >
          Repl Link
        </a>
      </div>
    </>
  );
};

export default Navigation;
