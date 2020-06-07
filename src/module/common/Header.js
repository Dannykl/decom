import React from "react";
import PropTypes from "prop-types";
import Logo from "../../assets/images/code.svg";
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
    <Navbar collapseOnSelect expand="lg" className="header-container">
      <Nav.Link href="/">
        <Logo width={50} height={50} className="header-logo" />
      </Nav.Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/* <Navbar.Text>LOGO</Navbar.Text> */}
          <ul className="nav nav-pills header-nav">
            <li>
              {" "}
              <Nav.Link
                href="/sale"
                active={currentPath == "/sale" ? "active" : ""}
              >
                Sale
              </Nav.Link>
            </li>
            <li>
              {" "}
              <Nav.Link
                href="/masks"
                active={currentPath == "/masks" ? "active" : ""}
              >
                Masks
              </Nav.Link>{" "}
            </li>
          </ul>
          <NavDropdown title="Category" id="basic-nav-dropdown">
            <NavDropdown.Item
              href="/action"
              active={currentPath == "/action" ? "active" : ""}
            >
              Action
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/another-action"
              active={currentPath == "/another-action" ? "active" : ""}
            >
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              href="/separate-link"
              active={currentPath == "/separate-link" ? "active" : ""}
            >
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
          <Form inline className="header-form">
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2 header-search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <NavDropdown
            title="Account"
            id="basic-nav-dropdown"
            className="account"
          >
            <Nav.Link href="#action/3.2" className="account-username">
              <Navbar.Text>
                {reactLocalStorage.getObject("currentUser").userName}
              </Navbar.Text>
            </Nav.Link>
            {Object.keys(reactLocalStorage.getObject("currentUser")).length ==
            0 ? (
              <Nav.Link href="/signin" className="account-btn">
                <button type="button" className="btn btn-success">
                  Login
                </button>
              </Nav.Link>
            ) : (
              <Nav.Link href="/log-out" className="account-btn">
                <button type="button" className="btn btn-danger">
                  Logout
                </button>
              </Nav.Link>
            )}
            <Nav.Link href="/signup" className="account-signup">
              <Navbar.Text>Signup</Navbar.Text>
            </Nav.Link>
          </NavDropdown>
          <Nav.Link>
            <Cart className="cart-icon" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
Header.propTypes = {
  currentPath: PropTypes.string
};

export default Header;
