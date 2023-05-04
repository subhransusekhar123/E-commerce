import React from "react";
//bootstrap
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import  Nav  from "react-bootstrap/Nav";
import {Link} from "react-router-dom";
//useSelector

import { useSelector } from "react-redux";

const NavbarComponent = () => {
  let cartselector = useSelector((state) => state.cartStore.cart);
  console.log(cartselector);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Navbar.Text>
              <Link to="/">
                Home
              </Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link to="/cart">
                {`My Bag ${cartselector.length}`}
              </Link>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
