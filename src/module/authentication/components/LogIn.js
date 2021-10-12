import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { signin } from "../../../actions/signin";
import Alert from "@material-ui/lab/Alert";
import { history } from "../../../utils/history";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  const dispatch = useDispatch();
  const errorMessage = useSelector(state => state.authentication.errorMessage);
  const logging = useSelector(state => state.authentication.logging);
  const loggedIn = useSelector(state => state.authentication.loggedIn);

  const handleChange = e => {
    const { name, value } = e.target;
    setUser(user => ({
      ...user,
      [name]: value
    }));
  };

  const loginHandler = e => {
    setError(false);
    e.preventDefault();
    if ((user.email !== "") & (user.password !== "")) {
      dispatch(signin(user));
    }
  };

  React.useEffect(() => {
    if (loggedIn) {
      history.push("/");
    }
    if (errorMessage != null) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  });
  return (
    <>
      <form onSubmit={loginHandler}>
        <TextField
          name="email"
          id="email"
          label="Email"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          name="password"
          id="password"
          label="password"
          onChange={handleChange}
        />
        <Button type="submit">{logging ? "logging" : "login"}</Button>
      </form>
      {error ? <Alert severity="error">{errorMessage}</Alert> : null}
    </>
  );
};
export default Login;
