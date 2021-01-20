import React from "react";
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
import { Link } from "react-router-dom";

// component
import Copyright from "./Copyright";

// styles
import useStyles from "./loginStyles";

// school logo
import schoollogo from "../../static/images/2x.png";

const Login = () => {
  const classes = useStyles();

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
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="使用者名稱"
              name="username"
              autoComplete="username"
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
            />
            <Grid container>
              <Grid item xs className={classes.forgotpassword}>
                <a href="/forgotpassword">忘記密碼 ?</a>
              </Grid>
            </Grid>
            <Button
              component={Link}
              to={"/dashboard"}
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
