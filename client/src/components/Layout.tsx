import { NavLink, Outlet, Link } from 'react-router-dom'
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarBrand,
    MDBContainer,
    MDBFooter,
    MDBIcon,
} from 'mdb-react-ui-kit'

const Layout = () => (
    <>
        <MDBNavbar expand="lg" light bgColor="light">
            <MDBContainer fluid>
                <MDBNavbarBrand tag={NavLink} to="/">
                    Служба доставки пиццы
                </MDBNavbarBrand>

                <MDBNavbarNav>
                    <MDBNavbarItem>
                        <MDBNavbarLink tag={NavLink} to="/cart">
                            Корзина
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                </MDBNavbarNav>
            </MDBContainer>
        </MDBNavbar>

        <main className="py-3">
            <Outlet />
        </main>

        <MDBFooter
            className="text-center text-white"
            style={{ backgroundColor: '#f1f1f1' }}
        >
            <MDBContainer className="pt-4">
                <section className="mb-4">
                    <MDBIcon
                        fab
                        icon="facebook-f"
                        className="me-4 text-reset"
                    />
                    <MDBIcon fab icon="twitter" className="me-4 text-reset" />
                    <MDBIcon fab icon="google" className="me-4 text-reset" />
                    <MDBIcon fab icon="instagram" className="me-4 text-reset" />
                </section>
            </MDBContainer>

            <div
                className="text-center text-dark p-3"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
            >
                &copy; {new Date().getFullYear()} Служба доставки пиццы
            </div>
        </MDBFooter>
    </>
)

export default Layout
