import React, { useState, useEffect } from "react";
// material ui
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
// router
import { Link, useHistory } from "react-router-dom";

// component
import Copyright from "./Copyright";

// styles
import useStyles from "./loginStyles";

// school logo
import schoollogo from "../../static/images/2x.png";

// api
import { LogIn, GetUser } from "../../api/LoginApi";
import { ContactsOutlined } from "@material-ui/icons";

const Login = () => {
  const classes = useStyles();
  let history = useHistory();
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // save state
  const handleChange = (e) => {
    const { id, value } = e.target;
    setLoginInfo((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const doLogin = (event) => {
    // login logic
    event.preventDefault();
    console.log(loginInfo);
    // GetUser().then((response) => {
    //   console.log(response);
    // });
    LogIn(loginInfo.username, loginInfo.password)
      .then((response) => {
        console.log(response);
        history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (
      loginInfo.username.trim() &&
      loginInfo.password.trim() &&
      loginInfo.password.length >= 3
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [loginInfo.username, loginInfo.password]);

  return (
    <div className={classes.loginimage}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <CssBaseline />
        <div className={classes.paper}>
          <img
            src={schoollogo}
            alt="NCNU school logo"
            className={classes.schoollogo}
          />
          <h1 className={classes.loginfont}>登入</h1>
          <form className={classes.form} noValidate onSubmit={doLogin}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="使用者名稱"
              name="username"
              autoComplete="username"
              value={loginInfo.username}
              onChange={handleChange}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="密碼"
              type="password"
              id="password"
              autoComplete="current-password"
              value={loginInfo.password}
              onChange={handleChange}
            />
            <Grid container>
              <Grid item xs className={classes.forgotpassword}>
                <a href="/forgotpassword">忘記密碼 ?</a>
              </Grid>
            </Grid>
            <Button
              // component={Link}
              // to={"/dashboard"}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              登入
            </Button>
          </form>
          <Box mt={8}>
            <Copyright />
          </Box>
        </div>
      </Grid>
    </div>
  );
};

export default Login;
