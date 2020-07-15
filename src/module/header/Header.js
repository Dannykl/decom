import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import logo from "../../assets/images/logo.png";
import { Nav, Navbar } from "react-bootstrap";
import Cart from "../common/Cart";
import Favourite from "../common/Favourite";
import { history } from "../../utils/history";
import { InputBase, IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import "./header.scss";
import Button from "@material-ui/core/Button";
import { addSearch, removeSearch } from "../../store/actions/search";
import { bindActionCreators } from "redux";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ""
    };
  }

  handleSearchBox = e => {
    this.props.addSearch(e.target.value);
  };
  handleRemoveBox = () => {
    this.props.removeSearch("");
  };
  render() {
    const { currentPath, searchValue } = this.props;

    return (
      <div>
        <Navbar className="navbar" expand="md" id="custom-navbar">
          <Navbar.Brand href="/" className="brand-name-desktop">
            <img
              width={100}
              height={50}
              src={logo}
              alt="logo"
              className="header-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Brand href="/" className="brand-name-mobile">
            <img
              width={100}
              height={50}
              src={logo}
              alt="logo"
              className="header-logo"
            />
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

          {this.props.currentPath === "/" ? (
            <div className="header-search-container">
              <InputBase
                style={{ width: "100%" }}
                id="search-input"
                className="inputbase"
                placeholder="Search"
                onChange={this.handleSearchBox}
                value={searchValue}
              />
              {searchValue !== "" ? (
                <IconButton
                  className="clear-btn"
                  id="clear-btn"
                  size="small"
                  type="submit"
                  arial-label="search"
                  onClick={this.handleRemoveBox}
                >
                  <ClearIcon />
                </IconButton>
              ) : null}
            </div>
          ) : null}
          <Navbar.Collapse id="basic-navbar-nav" style={{ float: "right" }}>
            <Nav
              className={
                this.props.currentPath === "/"
                  ? "navbar-custom-nav"
                  : "navbar-custom-nav-without-search"
              }
            >
              <Nav.Link
                className="navbar-custom-link"
                href="/"
                active={currentPath == "/" ? "active" : ""}
              >
                HOME
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
  loggedIn: PropTypes.bool,
  addSearch: PropTypes.func,
  removeSearch: PropTypes.func,
  searchValue: PropTypes.string
};

const mapStateToProps = state => {
  return {
    favourite: state.favouriteProducts.products,
    cart: state.cartProducts.products,
    loggedIn: state.authentication.loggedIn,
    currentUser: state.authentication.currentUser,
    searchValue: state.search.value
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addSearch,
      removeSearch
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
