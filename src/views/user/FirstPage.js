import React from "react";
import { Container, Paper } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";

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

function createData(label, data) {
  return { label, data };
}

const rows = [
  createData("Gateway Name:", "Chi Nan Uni"),
  createData("Gateway Status:", "Down"),
  createData("Available Sensor:", "39"),
  createData("Types Avaliable:", "5"),
  createData("MAC Address:", "K4HATW562N"),
];

// map maybe not use????
const FirstPage = () => {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.header}>Gateway Status</h1>
      <Paper elevation={0}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableBody>
              {console.log(rows)}
              {rows.map((row) => (
                <TableRow key={row.label}>
                  <TableCell component="th" scope="row">
                    {row.label}
                  </TableCell>
                  <TableCell align="left">
                    {row.data === "Alive" || row.data === "Down" ? (
                      <span
                        style={{
                          display: "inline-block",
                          background:
                            row.data === "Down" ? "#2C974B" : "#ff000042",
                          padding: "0.3rem",
                        }}
                      >
                        {row.data}
                      </span>
                    ) : (
                      row.data
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default FirstPage;
