import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { useParams } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

// icon
import PhoneIcon from "@material-ui/icons/Phone";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
  },
  header: {
    fontSize: "3em",
  },
  label: {
    display: "inline-block",
    marginTop: "6px",
    marginBottom: "6px",
  },
  button: {
    margin: theme.spacing(1),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  editTitle: {
    padding: theme.spacing(0, 0, 5),
  },
}));

const EditProfile = (props) => {
  const classes = useStyles();
  let { edit } = useParams();
  return (
    <>
      <CssBaseline />
      <h1 className={classes.header}>Edit</h1>
      <p> Here you change detail about your profile</p>
      <Card className={classes.root}>
        <CardContent>
          <Paper elevation={0}>
            <Grid container spacing={0} direction="column">
              {edit === "phonenumber" && (
                <>
                  <label className={classes.label}>CHANGE PHONE NUMBER</label>
                  <form noValidate autoComplete="off">
                    <TextField
                      required
                      id="phone_number"
                      label="電話"
                      name="phone_number"
                      variant="outlined"
                      autoFocus
                    />
                  </form>
                  <div className={classes.buttons}>
                    <Button
                      className={classes.button}
                      component={Link}
                      to="/profile"
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      startIcon={<CloudUploadIcon />}
                    >
                      Update
                    </Button>
                  </div>
                </>
              )}
            </Grid>
          </Paper>
        </CardContent>
      </Card>
    </>
  );
};

export default EditProfile;
