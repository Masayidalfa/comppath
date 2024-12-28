/* eslint-disable react/prop-types */
import { Fragment } from "react";
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";
import ProtectedRoute from "../../pages/admin/ProtectedRoute";

function Layout({ children }) {
    return (
        <Fragment>
            <Navbar /> {/* Menampilkan navbar */}
            <ProtectedRoute>
                <main>{children}</main> {/* Konten utama */}
            </ProtectedRoute>
            <Footer /> {/* Menampilkan footer */}
        </Fragment>
    );
}

export default Layout;