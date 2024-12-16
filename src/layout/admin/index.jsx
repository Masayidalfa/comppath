import { Fragment } from "react";
import Header from "../../components/admin/Header";
import Sidebar from "../../components/admin/Sidebar";
import Footer from "../../components/admin/Footer";

function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <div id="layoutSidenav" style={{ width: "200vh" }}>
        <Sidebar />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">{children}</div>
          </main>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
}
export default Layout;
