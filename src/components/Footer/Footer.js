import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// makeStyles doesnt need anonymous function to work
const useStyles = makeStyles({
  footerFixed: {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    color: "gray",
    textAlign: "center",
  },
});

const Footer = () => {
  const classes = useStyles();

  return <p className={classes.footerFixed}>this is a footer</p>;
};

export default Footer;
