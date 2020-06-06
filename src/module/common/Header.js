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
import { reactLocalStorage } from "reactjs-localstorage";

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
              title="Account"
              id="basic-nav-dropdown"
              className="account"
            >
              <Nav.Link style={{ textAlign: "center" }}>
                <Navbar.Text>
                  {reactLocalStorage.getObject("currentUser").userName}
                </Navbar.Text>
              </Nav.Link>

              {Object.keys(reactLocalStorage.getObject("currentUser")).length ==
              0 ? (
                <Nav.Link href="/signin" style={{ textAlign: "center" }}>
                  <button type="button" className="btn btn-success">
                    Login
                  </button>
                </Nav.Link>
              ) : (
                <Nav.Link href="/log-out" style={{ textAlign: "center" }}>
                  <button type="button" className="btn btn-danger">
                    Logout
                  </button>
                </Nav.Link>
              )}
              <Nav.Link href="/signup" style={{ textAlign: "center" }}>
                <Navbar.Text>signup?</Navbar.Text>
              </Nav.Link>
            </NavDropdown>
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
