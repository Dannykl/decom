import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import "../signin.scss";
import logo from "../../../assets/images/logo.png";
import { signin } from "../../../store/actions/signin";
import { history } from "../../../utils/history";
import Alert from "@material-ui/lab/Alert";

const SignIn = () => {
  const [error, setError] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const dispatch = useDispatch();
  const logging = useSelector(state => state.authentication.logging);
  const loggedIn = useSelector(state => state.authentication.loggedIn);
  const errorMessage = useSelector(state => state.authentication.errorMessage);

  const handleChange = e => {
    const { name, value } = e.target;
    setUser(user => ({
      ...user,
      [name]: value
    }));
  };

  const handleFormSubmit = e => {
    setError(false);
    setErrorAlert(false);
    e.preventDefault();
    if ((user.email !== "") & (user.password !== "")) {
      dispatch(signin(user.email, user.password));
    }
  };

  React.useEffect(() => {
    // if (loggedIn) {
    //   history.push("/");
    // }
    if ((errorMessage !== null) & !errorAlert) {
      setError(true);
      setErrorAlert(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  });
  return (
    <Container
      className="home-container signin-container"
      component="main"
      maxWidth="xs"
    >
      <CssBaseline />
      <div>
        <Typography className="signin-home-logo" component="h1" variant="h5">
          <img
            src={logo}
            onClick={() => history.push("/")}
            width={100}
            height={50}
          />
        </Typography>
        <Typography className="signin-home-header" component="h1" variant="h5">
          Sign In
        </Typography>
        <form className="signin" onSubmit={handleFormSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            label="Email Address"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            name="password"
            required
            fullWidth
            id="password"
            label="Password"
            type="password"
            onChange={handleChange}
          />
          <div className="signin-btn">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              id="login-button"
              color="primary"
            >
              {logging ? "Logging..." : "Log in"}
            </Button>
            {error ? <Alert severity="error">{errorMessage}</Alert> : null}
          </div>
          <div style={{ textAlign: "center", paddingTop: "5px" }}>
            <Link href="/signup">Signup?</Link>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default SignIn;
