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
import ProfileAPI from "../../../fakeapi/ProfileAPI";
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

const Profile = () => {
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
  // </TableContainer>
  return (
    <>
      <h1 className={classes.header}>Profile</h1>
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
                    secondary="USERNAME"
                  />
                  <ListItemText
                    className={classes.listtext}
                    primary={ProfileAPI.username}
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
                    secondary="ROLES"
                  />
                  <ListItemText
                    className={classes.listtext}
                    primary={ProfileAPI.roles}
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
                    secondary="LAST LOGIN"
                  />
                  <ListItemText
                    className={classes.listtext}
                    primary={ProfileAPI.last_login}
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
                    secondary="EMAIL"
                  />
                  <ListItemText
                    className={classes.listtext}
                    primary={ProfileAPI.email}
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
                    secondary="FIRST NAME"
                  />
                  <ListItemText
                    className={classes.listtext}
                    primary={ProfileAPI.first_name}
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
                    secondary="LAST NAME"
                  />
                  <ListItemText
                    className={classes.listtext}
                    primary={ProfileAPI.last_name}
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
                    secondary="CICKNAME"
                  />
                  <ListItemText
                    className={classes.listtext}
                    primary={ProfileAPI.nickname}
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
                    pathname: "profile/edit/phonenumber",
                    state: { phonenumber: ProfileAPI.phone_number },
                  }}
                >
                  <ListItemText
                    className={classes.listtext}
                    secondary="PHONE NUMBER"
                  />
                  <ListItemText
                    className={classes.listtext}
                    primary={ProfileAPI.phone_number}
                  />
                  <ListItemSecondaryAction>
                    <NavigateNextIcon />
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem
                  button
                  alignItems="flex-start"
                  className={classes.listitem}
                >
                  <ListItemText
                    className={classes.listtext}
                    secondary="BIRTHDAY"
                  />
                  <ListItemText
                    className={classes.listtext}
                    primary={ProfileAPI.birthday}
                  />
                  <ListItemSecondaryAction>
                    <NavigateNextIcon />
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </Box>
            <Box display={{ xs: "block", sm: "block", md: "none", lg: "none" }}>
              <List component="nav" aria-label="profile">
                <ListItem
                  button
                  divider
                  alignItems="flex-start"
                  className={classes.listitem}
                >
                  <ListItemText
                    className={classes.listtext}
                    primary="USERNAME"
                    secondary={ProfileAPI.username}
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
                    primary="ROLES"
                    secondary={ProfileAPI.roles}
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
                    primary="LAST_LOGIN"
                    secondary={ProfileAPI.last_login}
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
                    primary="EMAIL"
                    secondary={ProfileAPI.email}
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
                    primary="FIRST NAME"
                    secondary={ProfileAPI.first_name}
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
                    primary="LAST NAME"
                    secondary={ProfileAPI.last_name}
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
                    primary="NICKNAME"
                    secondary={ProfileAPI.nickname}
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
                  to={"edit/phonenumber"}
                >
                  <ListItemText
                    className={classes.listtext}
                    primary="PHONE NUMBER"
                    secondary={ProfileAPI.phone_number}
                  />
                  <ListItemSecondaryAction>
                    <NavigateNextIcon />
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem
                  button
                  alignItems="flex-start"
                  className={classes.listitem}
                >
                  <ListItemText
                    className={classes.listtext}
                    primary="BIRTHDAY"
                    secondary={ProfileAPI.birthday}
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

export default Profile;
