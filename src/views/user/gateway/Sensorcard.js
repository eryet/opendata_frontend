import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";

// mock api
import GatewayDetailAPI from "../../../fakeapi/GatewayDetailAPI";

// component
import AddSensor from "./AddSensor";

const useStyles = makeStyles({
  card: {
    display: "flex",
    backgroundColor: "#007BFF",
  },
  cardDetails: {
    flex: 1,
    color: "white",
  },
  cardMedia: {
    width: 160,
  },
  dividerStyle: {
    background: "white",
  },
  header: {
    alignItems: "center",
  },
});

const SensorCard = () => {
  const classes = useStyles();

  // reference a sensor page with graph on dedicated sensor detail
  return (
    <>
      <Box display="flex" className={classes.header}>
        <Box p={1} flexGrow={1}>
          <h1 flexGrow={1}>Sensor List</h1>
        </Box>
        <Box p={1}>
          <AddSensor />
        </Box>
      </Box>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          {GatewayDetailAPI.sensor.map((data) => (
            <Grid item xs={4}>
              <CardActionArea component={Link} to={`/sensor/${data.id}`}>
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {`${data.id}: ${data.name}`}
                      </Typography>
                      <Divider className={classes.dividerStyle} />
                      <Typography variant="subtitle1">
                        {`Type: ${data.type}`}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {data.description}
                      </Typography>
                    </CardContent>
                  </div>
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default SensorCard;
