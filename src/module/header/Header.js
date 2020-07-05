import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Logo from "../../assets/images/code.svg";
import { Nav, Navbar } from "react-bootstrap";
import Cart from "../common/Cart";
import Favourite from "../common/Favourite";
import { history } from "../../utils/history";
import { InputBase, IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import "./common.scss";
import Button from "@material-ui/core/Button";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ""
    };
  }

  render() {
    const { currentPath } = this.props;
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
          <div style={{ display: "flex" }}>
            <Nav.Link style={{ padding: "0" }} href="/favourite">
              <Favourite
                val={this.props.favourite.length}
                className="favourite-icon"
              />
            </Nav.Link>
            <Nav.Link href="/cart" style={{ padding: "0" }}>
              <Cart val={this.props.cart.length} className="cart-icon" />
            </Nav.Link>
          </div>

          <div className="header-search-container">
            {this.state.searchQuery !== "" ? (
              <IconButton
                id="clear-btn"
                size="small"
                type="submit"
                arial-label="search"
              >
                <ClearIcon />
              </IconButton>
            ) : null}
            <InputBase
              style={{ width: "100%" }}
              id="search-input"
              className="inputbase"
              placeholder="Search"
              onChange={e => this.setState({ searchQuery: e.target.value })}
            />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
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
              <div className="login-signup-btn">
                <Button
                  id="login-signup-btn"
                  variant="outlined"
                  onClick={() => {
                    this.props.loggedIn
                      ? history.push("/logout")
                      : history.push("/login");
                  }}
                >
                  {this.props.loggedIn ? "LOGOUT" : "LOGIN"}
                </Button>
              </div>
              {!this.props.loggedIn ? (
                <div className="login-signup-btn">
                  <Button
                    id="login-signup-btn"
                    variant="outlined"
                    onClick={() => {
                      history.push("/signup");
                    }}
                  >
                    SIGNUP
                  </Button>
                </div>
              ) : null}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
Header.propTypes = {
  currentPath: PropTypes.string,
  favourite: PropTypes.array,
  cart: PropTypes.array,
  loggedIn: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    favourite: state.favouriteProducts.products,
    cart: state.cartProducts.products,
    loggedIn: state.authentication.loggedIn,
    currentUser: state.authentication.currentUser
  };
};

export default connect(mapStateToProps)(Header);
