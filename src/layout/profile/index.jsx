/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Fragment } from "react";
import Navbar from "../../components/user/Navbar"
import Footer from "../..//components/user/Footer"
import Sidebar from "../../components/profile/Sidebar"

function Layout({ children }) {
  return (
    <Fragment>
      <Navbar />
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">{children}</div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Layout;
