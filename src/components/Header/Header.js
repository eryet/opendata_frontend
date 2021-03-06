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
  Grid,
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
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ExitToApp } from "@material-ui/icons";
import StorageIcon from "@material-ui/icons/Storage";

// mock api
import GatewayListAPI from "../../fakeapi/GatewayListAPI";

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

const navLinks = [];

const sidebarTop = [
  { title: `首頁`, path: `/dashboard`, component: <HomeIcon /> },
];

const sidebarGateway = [
  { title: `Gateway列表`, path: `/gateway`, component: <StorageSharpIcon /> },
  {
    title: `Gateway組別`,
    path: `/gatewaygroup`,
    component: <MemorySharpIcon />,
  },
  { title: `Sensor表格`, path: `/sensor`, component: <MemorySharpIcon /> },
  { title: `Test`, path: `/test`, component: <MemorySharpIcon /> },
];

const sidebarChart = [
  { title: `線性圖表`, path: `/linegraph`, component: <TimelineSharpIcon /> },
];

const sidebarOpenData = [
  {
    title: `已公開的Gateway`,
    path: `/opengateway`,
    component: <MemorySharpIcon />,
  },
];

const sidebarOther = [
  {
    title: "個人資料",
    path: "/profile",
    component: <AccountCircleIcon />,
  },
  {
    title: "個人設定",
    path: "/usersettings",
    component: <SettingsIcon/>,
  }
];

const Header = () => {
  const [left, setLeft] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);
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
      {/* <h1 className={classes.navbarLabel}>{"Gateway List"}</h1>
      <List>
        {GatewayListAPI.gatewayList.map((data, index) => (
          <ListItem button key={index} component={Link} to={data.path}>
            <ListItemIcon>
              <StorageIcon />
            </ListItemIcon>
            <ListItemText primary={data.name} />
          </ListItem>
        ))}
      </List> */}
      <h1 className={classes.navbarLabel}>{"圖表"}</h1>
      <List>
        {sidebarChart.map((data, index) => (
          <ListItem button key={index} component={Link} to={data.path}>
            <ListItemIcon>{data.component}</ListItemIcon>
            <ListItemText primary={data.title} />
          </ListItem>
        ))}
      </List>
      <h1 className={classes.navbarLabel}>{"公開資訊"}</h1>
      <List>
        {sidebarOpenData.map((data, index) => (
          <ListItem button key={index} component={Link} to={data.path}>
            <ListItemIcon>{data.component}</ListItemIcon>
            <ListItemText primary={data.title} />
          </ListItem>
        ))}
      </List>
      <h1 className={classes.navbarLabel}>{"其他"}</h1>
      <List>
        {sidebarOther.map((data, index) => (
          <ListItem button key={index} component={Link} to={data.path}>
            <ListItemIcon>{data.component}</ListItemIcon>
            <ListItemText primary={data.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClose2 = () => {
    setAnchorE2(null);
  };

  const notificationOpen = Boolean(anchorEl);
  const notificationOpen2 = Boolean(anchorE2);

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
                aria-describedby={2 ? "simple-popover" : undefined}
                edge="false"
                color="inherit"
                aria-label="home"
                onClick={handleClick2}
              >
                <AccountCircleSharpIcon fontSize="large" />
              </IconButton>
              <Popover
                id={notificationOpen2 ? "simple-popover" : undefined}
                open={notificationOpen2}
                anchorEl={anchorE2}
                onClose={handleClose2}
                anchorOrigin={{
                  vertical: "center",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <Grid item xs={12} md={12}>
                  <div className={classes.demo}>
                    <List component="nav">
                      <ListItem button onClick={() => {}}>
                        <ListItemIcon>
                          <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={"Eryet Chen"}
                          secondary={"查看個人資料"}
                        />
                      </ListItem>
                      <ListItem button onClick={() => {}}>
                        <ListItemIcon>
                          <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary={"設定"} />
                      </ListItem>
                      <ListItem button onClick={() => {}}>
                        <ListItemIcon>
                          <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary={"登出"} />
                      </ListItem>
                    </List>
                  </div>
                </Grid>
              </Popover>
            </>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
