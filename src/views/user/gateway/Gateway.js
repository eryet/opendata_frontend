import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "#E5E5E5",
  },
}));

const Gateway = () => {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={3} className={classes.paper}>
        <h1>Gateway Page for user</h1>
      </Paper>
      <Paper elevation={3} />
    </>
  );
};

export default Gateway;
