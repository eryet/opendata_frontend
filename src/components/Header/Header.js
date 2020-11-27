import React, { useState, setState } from "react";
import CLSX from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Divider,
  Drawer,
  FormLabel,
} from "@material-ui/core";
import { Link } from "react-router-dom";

// icons from material-ui/core
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import StorageSharpIcon from "@material-ui/icons/StorageSharp";
import MemorySharpIcon from "@material-ui/icons/MemorySharp";
import TimelineSharpIcon from "@material-ui/icons/TimelineSharp";
import NotificationsSharpIcon from "@material-ui/icons/NotificationsSharp";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";

const useStyles = makeStyles({
  navbarDisplayFlex: {
    width: "100%",
    display: `flex`,
    justifyContent: `space-between`,
  },
  navbarDisplayLeft: {
    display: `flex`,
    justifyContent: `flex-start`,
  },
  navbarDisplayRight: {
    display: `flex`,
    justifyContent: `flex-end`,
  },
  navbarLabel: {
    display: "block",
    paddingLeft: "18px",
    paddingRight: "18px",
    fontSize: "1.17em",
    color: "grey",
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const navLinks = [
  { title: `test`, path: `/dashboard` },
  { title: `gateway`, path: `/gateway` },
];

const sidebarTop = [
  { title: `首頁`, path: `/dashboard`, component: <HomeIcon /> },
];

const sidebarGateway = [
  { title: `個人資料`, path: `/gateway`, component: <StorageSharpIcon /> },
  { title: `Sensor狀態`, path: `/dashboard`, component: <MemorySharpIcon /> },
];

const sidebarChart = [
  { title: `線性圖表`, path: `/dashboard`, component: <TimelineSharpIcon /> },
];

const Header = () => {
  const [left, setLeft] = useState(false);
  const classes = useStyles();

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={() => setLeft(false)}
      onKeyDown={() => setLeft(false)}
    >
      <List>
        {sidebarTop.map((data, index) => (
          <ListItem button key={index} component={Link} to={data.path}>
            <ListItemIcon>{data.component}</ListItemIcon>
            <ListItemText primary={data.title} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <h1 className={classes.navbarLabel}>{"Gateway"}</h1>
      <List>
        {sidebarGateway.map((data, index) => (
          <ListItem button key={index} component={Link} to={data.path}>
            <ListItemIcon>{data.component}</ListItemIcon>
            <ListItemText primary={data.title} />
          </ListItem>
        ))}
      </List>
      <h1 className={classes.navbarLabel}>{"圖表"}</h1>
      <List>
        {sidebarChart.map((data, index) => (
          <ListItem button key={index} component={Link} to={data.path}>
            <ListItemIcon>{data.component}</ListItemIcon>
            <ListItemText primary={data.title} />
          </ListItem>
        ))}
      </List>
      <h1 className={classes.navbarLabel}>{"其他"}</h1>
    </div>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <div maxWidth="xl" className={classes.navbarDisplayFlex}>
          <div className={classes.navbarDisplayLeft}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="home"
              onClick={() => setLeft(true)}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Drawer anchor={"left"} open={left} onClose={() => setLeft(false)}>
              {list()}
            </Drawer>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {navLinks.map(({ title, path }) => (
                <a href={path} key={title} className={classes.linkText}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </a>
              ))}
            </List>
          </div>
          <div className={classes.navbarDisplayRight}>
            <IconButton edge="false" color="inherit" aria-label="home">
              <NotificationsSharpIcon fontSize="large" />
            </IconButton>
            <IconButton edge="false" color="inherit" aria-label="home">
              <AccountCircleSharpIcon fontSize="large" />
            </IconButton>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
