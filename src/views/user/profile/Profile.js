import React from "react";
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

// mock api
import ProfileAPI from "../../../fakeapi/ProfileAPI";
import { EmojiObjects } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  gateway_card: {
    margin: 30,
  },
  header: {
    fontSize: "3em",
  },
  table: {
    minWidth: 650,
  },
}));

const Profile = () => {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.header}>Profile</h1>
      <Card className={classes.root}>
        <CardContent>
          <Paper elevation={0}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableBody>
                  {Object.keys(ProfileAPI).map((key, value) => {
                    return (
                      <TableRow key={value}>
                        <TableCell component="th" scope="row">
                          {key}
                        </TableCell>
                        <TableCell align="left">{ProfileAPI[key]}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </CardContent>
      </Card>
    </>
  );
};

export default Profile;
