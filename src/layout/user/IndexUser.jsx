/* eslint-disable react/prop-types */
import Navbar from "../../components/user/Navbar"
import Container from "../../components/utils/constants/Container.styled"
import Footer from "../../components/user/Footer"

function LayoutUser({children}){
    return(
        <>
        <Navbar />
        <main>
            <Container>
            {children}
            </Container>
        </main>
        <Footer />
    </>
    )
}
export default LayoutUser