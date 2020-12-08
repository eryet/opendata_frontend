import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
import Box from "@material-ui/core/Box";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
// component
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container } from "@material-ui/core";

const Dashboard = (props) => {
  //   const [value, setValue] = useState();

  //   const handleChange = (event, value) => {
  //     setValue(value);
  //   };

  return (
    <>
      <Header />
      <Container>{props.component}</Container>
      <Footer />
    </>
  );
};

export default Dashboard;
