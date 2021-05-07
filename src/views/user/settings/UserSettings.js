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
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link, useRouteMatch } from "react-router-dom";

// mock api
import SettingsAPI from "../../../fakeapi/UserSettingsAPI";
import { EmojiObjects } from "@material-ui/icons";

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
}));

const UserSettings = () => {
  const classes = useStyles();
  let { path, url } = useRouteMatch();

  // {Object.keys(ProfileAPI).map((key, value) => {
  //   return (
  //     <TableRow key={value}>
  //       <TableCell component="th" scope="row">
  //         {key}
  //       </TableCell>
  //       <TableCell align="left">{ProfileAPI[key]}</TableCell>
  //     </TableRow>
  //   );
  // })}
  //   <TableContainer component={Paper}>
  //   <Table className={classes.table} aria-label="simple table">
  //     <TableBody>
  //       <TableRow>
  //         <TableCell component="th" scope="row">
  //           {key}
  //         </TableCell>
  //         <TableCell align="left"></TableCell>
  //       </TableRow>
  //     </TableBody>
  //   </Table>
  // </TableContainer
  console.log(SettingsAPI.language);
  return (
    <>
      <h1 className={classes.header}>Settings</h1>
      <Card className={classes.root}>
        <CardContent>
          <Paper elevation={0}>
            <Box display={{ xs: "none", sm: "none", md: "block", lg: "block" }}>
              <List component="nav" aria-label="profile">
                <ListItem
                  button
                  divider
                  alignItems="flex-start"
                  className={classes.listitem}
                >
                  <ListItemText
                    className={classes.listtext}
                    secondary="LANGUAGE"
                  />
                  <ListItemText
                    className={classes.listtext}
                    primary={SettingsAPI.language}
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
                    primary={SettingsAPI.timezone}
                  />
                  <ListItemSecondaryAction>
                    <NavigateNextIcon />
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </Box>
            <Box display={{ xs: "block", sm: "block", md: "none", lg: "none" }}>
              <List component="nav" aria-label="user settings">
                <ListItem
                  button
                  divider
                  alignItems="flex-start"
                  className={classes.listitem}
                >
                  <ListItemText
                    className={classes.listtext}
                    primary="LANGUAGE"
                    secondary={SettingsAPI.language}
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
                    primary="TIMEZONE"
                    secondary={SettingsAPI.timezone}
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
  );
};

export default UserSettings;
