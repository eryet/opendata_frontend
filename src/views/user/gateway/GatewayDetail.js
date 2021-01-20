import React from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Paper from "@material-ui/core/Paper";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import IconButton from "@material-ui/core/IconButton";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import Chip from "@material-ui/core/Chip";
import { Link, useRouteMatch } from "react-router-dom";

import { useParams } from "react-router-dom";

// mock api
import GatewayDetailAPI from "../../../fakeapi/GatewayDetailAPI";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
  },
  gateway_card: {
    margin: 30,
  },
  header: {
    fontSize: "3em",
  },
  table: {
    minWidth: 650,
  },
  listtext: {
    flex: 0.3,
  },
  listtextlabel: {
    flex: 0.3,
    fontWeight: "bold",
  },
  listitem: {
    paddingTop: "20px",
    paddingBtm: "20px",
  },
  good: {
    backgroundColor: "#00FF00",
  },
  error: {
    backgroundColor: "#FF0000",
  },
}));

const GatewayDetail = () => {
  const classes = useStyles();
  let { id } = useParams();

  return (
    <>
      <>
        <h1 className={classes.header}>Gateway Detail</h1>
        <Card className={classes.root}>
          <CardContent>
            <Paper elevation={0}>
              <Box
                display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
              >
                <List component="nav" aria-label="profile">
                  <ListItem
                    button
                    divider
                    alignItems="flex-start"
                    className={classes.listitem}
                  >
                    <ListItemText className={classes.listtext} secondary="ID" />
                    <ListItemText
                      className={classes.listtext}
                      primary={GatewayDetailAPI.id}
                    />

                    <ListItemSecondaryAction>
                      <NavigateNextIcon />
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem
                    button
                    divider
                    alignItems="flex-start"
                    className={classes.listitem}
                    component={Link}
                    to={{
                      pathname: `/gatewaydetail/${GatewayDetailAPI.id}/edit/name`,
                      state: { phonenumber: GatewayDetailAPI.name },
                    }}
                  >
                    <ListItemText
                      className={classes.listtext}
                      secondary="NAME"
                    />
                    <ListItemText
                      className={classes.listtext}
                      primary={GatewayDetailAPI.name}
                    />
                    <ListItemSecondaryAction>
                      <NavigateNextIcon />
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem
                    button
                    divider
                    alignItems="flex-start"
                    className={classes.listitem}
                  >
                    <ListItemText
                      className={classes.listtext}
                      secondary="DESCRIPTION"
                    />
                    <ListItemText
                      className={classes.listtext}
                      primary={GatewayDetailAPI.description}
                    />
                    <ListItemSecondaryAction>
                      <NavigateNextIcon />
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem
                    button
                    divider
                    alignItems="flex-start"
                    className={classes.listitem}
                  >
                    <ListItemText
                      className={classes.listtext}
                      secondary="MAC_ADDRESSS"
                    />
                    <ListItemText
                      className={classes.listtext}
                      primary={GatewayDetailAPI.mac_address}
                    />
                    <ListItemSecondaryAction>
                      <NavigateNextIcon />
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem
                    button
                    divider
                    alignItems="flex-start"
                    className={classes.listitem}
                  >
                    <ListItemText
                      className={classes.listtext}
                      secondary="TIMEZONE"
                    />
                    <ListItemText
                      className={classes.listtext}
                      primary={GatewayDetailAPI.timezone}
                    />
                    <ListItemSecondaryAction>
                      <NavigateNextIcon />
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem
                    button
                    divider
                    alignItems="flex-start"
                    className={classes.listitem}
                  >
                    <ListItemText
                      className={classes.listtext}
                      secondary="LATITUDE"
                    />
                    <ListItemText
                      className={classes.listtext}
                      primary={GatewayDetailAPI.latitude}
                    />
                    <ListItemSecondaryAction>
                      <NavigateNextIcon />
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem
                    button
                    divider
                    alignItems="flex-start"
                    className={classes.listitem}
                  >
                    <ListItemText
                      className={classes.listtext}
                      secondary="LONGTITUDE"
                    />
                    <ListItemText
                      className={classes.listtext}
                      primary={GatewayDetailAPI.longtitude}
                    />
                    <ListItemSecondaryAction>
                      <NavigateNextIcon />
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem
                    button
                    divider
                    alignItems="flex-start"
                    className={classes.listitem}
                  >
                    <ListItemText
                      className={classes.listtext}
                      secondary="STATUS"
                    />
                    <ListItemText
                      className={classes.listtext}
                      primary={
                        <Chip
                          label={
                            GatewayDetailAPI.status === "0" ? "Online" : "Down"
                          }
                          className={
                            GatewayDetailAPI.status === "0"
                              ? classes.good
                              : classes.error
                          }
                        />
                      }
                    />
                    <ListItemSecondaryAction>
                      <NavigateNextIcon />
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
              </Box>
              <Box
                display={{ xs: "block", sm: "block", md: "none", lg: "none" }}
              >
                <List component="nav" aria-label="profile">
                  <ListItem
                    button
                    divider
                    alignItems="flex-start"
                    className={classes.listitem}
                  >
                    <ListItemText
                      className={classes.listtext}
                      primary="ID"
                      secondary={GatewayDetailAPI.id}
                    />
                    <ListItemSecondaryAction>
                      <NavigateNextIcon />
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem
                    button
                    divider
                    alignItems="flex-start"
                    className={classes.listitem}
                  >
                    <ListItemText
                      className={classes.listtext}
                      primary="NAME"
                      secondary={GatewayDetailAPI.name}
                    />
                    <ListItemSecondaryAction>
                      <NavigateNextIcon />
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem
                    button
                    divider
                    alignItems="flex-start"
                    className={classes.listitem}
                  >
                    <ListItemText
                      className={classes.listtext}
                      primary="DESCRIPTION"
                      secondary={GatewayDetailAPI.description}
                    />
                    <ListItemSecondaryAction>
                      <NavigateNextIcon />
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem
                    button
                    divider
                    alignItems="flex-start"
                    className={classes.listitem}
                  >
                    <ListItemText
                      className={classes.listtext}
                      primary="STATUS"
                      secondary={
                        <IconButton edge="end" aria-label="status">
                          <Brightness1Icon
                            className={
                              GatewayDetailAPI.status === "0"
                                ? classes.good
                                : classes.error
                            }
                          />
                        </IconButton>
                      }
                    />
                    <ListItemSecondaryAction>
                      <NavigateNextIcon />
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
              </Box>
            </Paper>
          </CardContent>
        </Card>
      </>
    </>
  );
};

export default GatewayDetail;
