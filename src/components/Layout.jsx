import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./common/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div
        className="main overflowX-hidden overflowY-auto"
        style={{ maxHeight: "95vh" }}
      >
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
