import React from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";

import { useParams } from "react-router-dom";

import announcementApi from "../../fakeapi/AnnouncementAPI";

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

const AnnouncementDetail = () => {
  const classes = useStyles();
  let { id } = useParams();

  const idFilter = (data) => {
    return [data.find((data) => data.id === `${id}`)];
  };
  // api handle dynamically render announcement

  return (
    <>
      <>
        <h1 className={classes.header}>Announcement Detail</h1>
        <Grid item xs={12} md={12}>
          {idFilter(announcementApi.announcement).map((data) => {
            return (
              <>
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {data.title}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {`發布於${data.author}`}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {data.date}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {data.content}
                      </Typography>
                    </CardContent>
                  </div>
                </Card>
              </>
            );
          })}
        </Grid>
      </>
    </>
  );
};

export default AnnouncementDetail;
