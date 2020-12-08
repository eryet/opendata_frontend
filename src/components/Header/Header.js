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
  Badge,
  Popover,
  Button,
  Typography,
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

const useStyles = makeStyles((theme) => ({
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
  typography: {
    padding: theme.spacing(2),
  },
}));

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
  { title: `線性圖表`, path: `/linegraph`, component: <TimelineSharpIcon /> },
];

const Header = () => {
  const [left, setLeft] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const notificationOpen = Boolean(anchorEl);

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
            <>
              <IconButton
                aria-describedby={
                  notificationOpen ? "simple-popover" : undefined
                }
                edge="false"
                color="inherit"
                aria-label="home"
                onClick={handleClick}
              >
                <Badge color="secondary" overlap="circle" badgeContent={4}>
                  <NotificationsSharpIcon fontSize="large" />
                </Badge>
              </IconButton>
              <Popover
                id={notificationOpen ? "simple-popover" : undefined}
                open={notificationOpen}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "center",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <Typography className={classes.typography}>
                  Notification For User
                </Typography>
              </Popover>
            </>
            <>
              <IconButton
                aria-describedby={
                  notificationOpen ? "simple-popover" : undefined
                }
                edge="false"
                color="inherit"
                aria-label="home"
                onClick={handleClick}
              >
                <AccountCircleSharpIcon fontSize="large" />
              </IconButton>
              <Popover
                id={notificationOpen ? "simple-popover" : undefined}
                open={notificationOpen}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "center",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <Typography className={classes.typography}>
                  User Profile for user include link to setting
                </Typography>
              </Popover>
            </>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
