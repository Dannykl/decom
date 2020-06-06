import React from "react";
import PropTypes from "prop-types";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import Cart from "./Cart";

const Header = ({ currentPath }) => {
  return (
    <div className="header-container">
      <Navbar collapseOnSelect expand="lg" className="header-container">
        {/* <Logo width={50} height={50} /> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Navbar.Text>LOGO</Navbar.Text>
            <ul className="nav nav-pills ">
              <li>
                {" "}
                <Nav.Link
                  href="/checkin"
                  active={currentPath == "/checkin" ? "active" : ""}
                >
                  Sale
                </Nav.Link>
              </li>
              <li>
                {" "}
                <Nav.Link
                  href="/admin"
                  active={currentPath == "/admin" ? "active" : ""}
                >
                  Masks
                </Nav.Link>{" "}
              </li>
            </ul>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Navbar.Collapse className="justify-content-end">
              {/* <Navbar.Text>
              {reactLocalStorage.getObject("currentStaff").userName}
            </Navbar.Text> */}
            </Navbar.Collapse>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <NavDropdown
              title="Login"
              id="basic-nav-dropdown"
              className="login-button"
            >
              <Nav.Link
                href="/admin"
                active={currentPath == "/admin" ? "active" : ""}
              >
                Login
              </Nav.Link>
              <Nav.Link
                href="/admin"
                active={currentPath == "/admin" ? "active" : ""}
              >
                Signup
              </Nav.Link>
            </NavDropdown>

            {/* <Navbar.Text>Login</Navbar.Text> */}
            <Cart />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
Header.propTypes = {
  currentPath: PropTypes.string
};

export default Header;
