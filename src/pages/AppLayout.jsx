import React from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router";
import Footer from "./Footer";
const AppLayout = () => {
  return (
    <>
      <div className="flex h-screen w-screen ">
        <>
          <Navigation></Navigation>
        </>
        <div className="flex-1 ">
          <Outlet></Outlet>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </>
  );
};

export default AppLayout;
