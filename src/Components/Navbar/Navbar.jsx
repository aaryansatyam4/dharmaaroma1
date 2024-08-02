import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import all_product from '../Assets/all_product'; // Ensure this path is correct
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand as={Link} to="/">MyLogo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
          <NavDropdown title="Products" id="basic-nav-dropdown">
            {all_product.map(product => (
              <NavDropdown.Item key={product.id} as={NavLink} to={`/product/${product.id}`}>
                {product.name}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
          <Nav.Link as={NavLink} to="/about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
