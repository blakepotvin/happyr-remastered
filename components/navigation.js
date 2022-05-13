import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function Navigation() {
  return (
    <>
      <Navbar expand="lg" variant="dark" className="transparent-bg">
        <Container>
          <Navbar.Brand href="#home" style={{ fontSize: "2.2rem" }}>
            Happyr
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto gap-3">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            </Nav>
            <Nav className="gap-3">
              <Button className="nav-btn" variant="outline-light">Login</Button>
              <Button className="nav-btn" variant="light">Register</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
