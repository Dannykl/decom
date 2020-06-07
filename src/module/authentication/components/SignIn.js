import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import "../signin.scss";
import { reactLocalStorage } from "reactjs-localstorage";
import Image from "../../../assets/images/code.svg";
import { signin } from "../state/actions/signAction";
import { history } from "../../../utils/history";

export class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  formHandler = () => {
    event.preventDefault();
    this.props.signin(this.state.email, this.state.password);
  };

  static getDerivedStateFromProps(props) {
    if (props.authentication.loggedIn) {
      reactLocalStorage.setObject(
        "currentUser",
        props.authentication.currentUser
      );
      history.push("/");
      return {};
    }
    return null;
  }

  render() {
    const { errorMessage, logging } = this.props;
    return (
      <Container
        className="home-container signin-container"
        component="main"
        maxWidth="xs"
      >
        <CssBaseline />
        <div>
          <Typography className="signin-home-logo" component="h1" variant="h5">
            <Image width={150} height={70} />
          </Typography>
          <Typography className="signin-home-header" component="h1" variant="h5">
            Sign In
          </Typography>
          <form
            className="signin"
            onSubmit={() => {
              this.formHandler();
            }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              onChange={e => this.setState({ email: e.target.value })}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              type="password"
              onChange={e => this.setState({ password: e.target.value })}
            />

            {errorMessage != null && (
              <div
                className="alert alert-success"
                style={{
                  position: "topCenter",
                  backgroundColor: "red",
                  color: "white"
                }}
              >
                <p>{errorMessage}</p>
              </div>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              id="login-button"
              color="primary"
            >
              {logging ? "Logging..." : "Log in"}
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}
SignIn.propTypes = {
  signin: PropTypes.func,
  authentication: PropTypes.object,
  errorMessage: PropTypes.string,
  logging: PropTypes.bool
};
function mapStateToProps(state) {
  return {
    authentication: state.authentication,
    errorMessage: state.authentication.errorMessage,
    logging: state.authentication.logging
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      signin
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
