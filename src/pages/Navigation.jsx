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
    <div className="flex flex-col w-72 items-center justify-center gap-5">
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
    </div>
  );
};

export default Navigation;
