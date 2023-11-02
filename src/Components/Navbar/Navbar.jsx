import React from "react";
import "./style.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// import Image
import Logo from "../../assets/logoDesk.svg"


const NavigationBar = () => {
  return (
    <Navbar expand="lg" fixed="top">
      <Container className="nav-container">
        <Navbar.Brand href="#home"><img src={Logo} width={'100%'} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Beranda</Nav.Link>
            <Nav.Link href="#Project">Project</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
