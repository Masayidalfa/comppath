/* eslint-disable react/prop-types */
import { Fragment } from "react";
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";

function Layout({ children }) {
    return (
        <Fragment>
            <Navbar /> {/* Menampilkan navbar */}
            <main>{children}</main> {/* Konten utama */}
            <Footer /> {/* Menampilkan footer */}
        </Fragment>
    );
}

export default Layout;