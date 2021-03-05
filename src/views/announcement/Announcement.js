import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// Icon
import StorageIcon from "@material-ui/icons/Storage";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import AnnouncementIcon from "@material-ui/icons/Announcement";

// mock api
import announcementApi from "../../fakeapi/AnnouncementAPI";

const useStyles = makeStyles((theme) => ({
  header: {
    fontSize: "3em",
  },
  inline: {
    display: "inline",
  },
}));

const Announcement = () => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <h1 className={classes.header}>Announcement</h1>
      <Card className={classes.root}>
        <CardContent>
          <Grid item xs={12} md={12}>
            <Typography variant="h6">公告</Typography>
            <div className={classes.demo}>
              <List component="nav">
                {announcementApi.announcement.map((data) => {
                  return (
                    <ListItem
                      button
                      component={Link}
                      to={`/announcementdetail/${data.id}`}
                      selected={selectedIndex === data.id}
                      onClick={(event) => handleListItemClick(event, data.id)}
                    >
                      <ListItemIcon>
                        <AnnouncementIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={data.title}
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              className={classes.inline}
                              color="textPrimary"
                            >
                              {data.date}
                            </Typography>
                            {" - "}
                            {data.content}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  );
                })}
              </List>
            </div>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Announcement;
