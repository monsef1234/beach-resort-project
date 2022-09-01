import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const SharedLayouts = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default SharedLayouts;
