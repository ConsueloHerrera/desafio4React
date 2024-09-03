import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Home from "./Home";

function NavBar() {
  const total = 0;
  const token = false;
  const [currentPage, setCurrentPage] = useState("register");
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
    }
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Pizzeria Mamma Mia</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              {token ? (
                <>
                  <Nav.Link href="#profile">Profile</Nav.Link>
                  <Nav.Link href="#logout">Logout</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link
                    href="#login"
                    onClick={() => setCurrentPage("login")}>
                    Login
                  </Nav.Link>
                  <Nav.Link
                    href="#register"
                    onClick={() => setCurrentPage("register")}>
                    Register
                  </Nav.Link>
                </>
              )}
            </Nav>
            <Nav>
              <Nav.Item className="d-flex align-items-center carrito">
                <span>Total: $</span>
                <span className="ms-2">{total}</span>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container >{renderPage()}</Container>
    </>
  );
}

export default NavBar;