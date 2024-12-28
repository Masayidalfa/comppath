/* eslint-disable react/prop-types */
import { Fragment } from "react";
import Navbar from "../../components/user/Navbar";
import Container from "../../components/utils/constants/Container.styled"
import Footer from "../../components/user/Footer";

function Layout({ children }) {
    return (
        <Fragment>
            <Navbar /> {/* Menampilkan navbar */}

            <main>
            <Container>
            {children}
            </Container>
             </main>
            <Footer /> {/* Menampilkan footer */}
        </Fragment>
    );
}

export default Layout;