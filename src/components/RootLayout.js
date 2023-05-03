import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComponent from "./NavbarComponent";
import { Provider } from "react-redux";
import store from "../store/Store";

const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <NavbarComponent />
        <Outlet />
      </Provider>
    </>
  );
};

export default RootLayout;
