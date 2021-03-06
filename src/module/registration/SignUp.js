import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/signup";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { history } from "../../utils/history";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import logo from "../../assets/images/logo.png";
import Alert from "@material-ui/lab/Alert";
import "./signin.scss";

const SignUp = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [alert, setAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const dispatch = useDispatch();
  const registering = useSelector(state => state.registerNewUser.registering);
  const registered = useSelector(state => state.registerNewUser.registered);
  const errorMessage = useSelector(state => state.registerNewUser.errorMessage);

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
    setSuccess(false);
    setAlert(false);
    e.preventDefault();
    if (
      (user.email !== "") &
      (user.password !== "") &
      (user.firstName !== "") &
      (user.lastName !== "")
    ) {
      //TODO api should be updated to accomodate fName & lName
      const tempUser = {
        email: user.email,
        password: user.password
      };
      dispatch(register(tempUser));
    } else {
      setInputVal("All fields must be completed!");
      setTimeout(() => {
        setInputVal("");
      }, 3000);
    }
  };

  React.useEffect(() => {
    if (registered & !alert) {
      setSuccess(true);
      setAlert(true);
      setTimeout(() => {
        setSuccess(false);
        history.push("/login");
      }, 3000);
    }
    if ((errorMessage !== null) & !errorAlert) {
      setError(true);
      setErrorAlert(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  });

  return (
    <Container className=" signup-container" component="main" maxWidth="xs">
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
        <Typography className="signup-home-header" component="h1" variant="h5">
          Sign up
        </Typography>
        <form noValidate className="signin" onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive promotions and updates"
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary">
            {registering ? "Signing up" : "Sign up"}
          </Button>
          {error ? <Alert severity="error">{errorMessage}</Alert> : null}
          {inputVal != "" ? <Alert severity="error">{inputVal}</Alert> : null}
          {success ? (
            <Alert severity="success">Successfully Registered!</Alert>
          ) : null}
          <div style={{ textAlign: "center", paddingTop: "5px" }}>
            <Link href="/login">Signin?</Link>
          </div>
        </form>
      </div>
    </Container>
  );
};
export default SignUp;
