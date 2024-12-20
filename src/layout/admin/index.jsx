/* eslint-disable react/prop-types */
import { Fragment, useState } from "react";
import Header from "../../components/admin/Header";
import Sidebar from "../../components/admin/Sidebar";
import Footer from "../../components/admin/Footer";

function Layout({ children }) {
  // State untuk toggle sidebar
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <Fragment>
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} />
        <div
          className={`flex-1 flex flex-col min-h-screen transition-all ${
            isSidebarOpen ? "ml-64" : "ml-16"
          }`}
        >
          <main className="flex-grow p-4 bg-gray-50">{children}</main>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
}

export default Layout;
