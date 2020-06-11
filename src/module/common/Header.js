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
import Favourite from "./Favourite";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { reactLocalStorage } from "reactjs-localstorage";

import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import TextField from "@material-ui/core/TextField";

import Input from "@material-ui/core/Input";

const Header = ({ currentPath }) => {
  return (
    <Navbar bg="light" expand="lg" className="header-container">
      <Navbar.Brand href="/">
        <Logo width={50} height={50} className="header-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto header-nav">
          <Nav.Link
            href="/sale"
            active={currentPath == "/sale" ? "active" : ""}
          >
            Sale
          </Nav.Link>
          <Nav.Link
            href="/masks"
            active={currentPath == "/masks" ? "active" : ""}
          >
            Masks
          </Nav.Link>
        </Nav>
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
          <Nav.Link>
            <Favourite className="favourite-icon" />
          </Nav.Link>
          <Nav.Link>
            <Cart className="cart-icon" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav className="header-search-wrapper">
        <div className="header-search-container">
          <Input
            placeholder="Search"
            className="header-search"
            inputProps={{ "aria-label": "description" }}
          />
          <IconButton
            type="submit"
            // className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </div>
      </Nav>
    </Navbar>
  );
};
Header.propTypes = {
  currentPath: PropTypes.string
};

export default Header;
