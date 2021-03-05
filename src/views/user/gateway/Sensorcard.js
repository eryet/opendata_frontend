import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";

// mock api
import GatewayDetailAPI from "../../../fakeapi/GatewayDetailAPI";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

const SensorCard = () => {
  const classes = useStyles();

  // reference a sensor page with graph on dedicated sensor detail
  return (
    <>
      <h1>Sensor List</h1>
      {GatewayDetailAPI.sensor.map((data) => (
        <Grid item xs={12} md={6}>
          <CardActionArea to={`/sensor/${data.id}`}>
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography component="h2" variant="h5">
                    {`${data.id}: ${data.name}`}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {`Type: ${data.type}`}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    {data.description}
                  </Typography>
                </CardContent>
              </div>
              <Hidden xsDown>
                <CardMedia className={classes.cardMedia} title={"test"} />
              </Hidden>
            </Card>
          </CardActionArea>
        </Grid>
      ))}
    </>
  );
};

export default SensorCard;
