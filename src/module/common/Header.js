import React from "react";
import PropTypes from "prop-types";
import Logo from "../../assets/images/code.svg";
import { Nav, Navbar, NavDropdown, FormControl, Button } from "react-bootstrap";
import Cart from "./Cart";
import Favourite from "./Favourite";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { reactLocalStorage } from "reactjs-localstorage";
import SearchIcon from "@material-ui/icons/Search";
import { history } from "../../utils/history";

const goTo = () => {
  history.push("/favourite");
};

const Header = ({ currentPath }) => {
  return (
    <div>
      <Navbar className="navbar" expand="md" id="custom-navbar">
        <Navbar.Brand href="/" className="brand-name-desktop">
          <Logo width={50} height={50} className="header-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Brand href="/" className="brand-name-mobile">
          <Logo width={50} height={50} className="header-logo" />
        </Navbar.Brand>
        <div style={{ display: "flex" }} onClick={() => goTo()}>
          <Nav.Link style={{ padding: "0" }}>
            <Favourite className="favourite-icon" />
          </Nav.Link>
          <Nav.Link style={{ padding: "0" }}>
            <Cart className="cart-icon" />
          </Nav.Link>
        </div>

        <div className="header-search-container">
          <FormControl
            className="search-input"
            type="text"
            placeholder="Search"
            style={{ width: "90%" }}
          />
          <Button
            type="submit"
            aria-label="search"
            style={{ backgroundColor: "grey" }}
          >
            <SearchIcon />
          </Button>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavDropdown
              title={<PermIdentityIcon />}
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
          </Nav>
          <Nav className="navbar-custom-nav">
            <Nav.Link
              className="navbar-custom-link"
              href="/sale"
              active={currentPath == "/sale" ? "active" : ""}
            >
              SALE
            </Nav.Link>
            <Nav.Link
              href="/masks"
              active={currentPath == "/masks" ? "active" : ""}
            >
              MASKS
            </Nav.Link>
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
