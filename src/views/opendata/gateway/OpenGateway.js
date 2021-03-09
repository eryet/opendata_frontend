import React from "react";
import { Link } from "react-router-dom";
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

import { makeStyles } from "@material-ui/core/styles";

// mock api
import gatewayListAPI from "../../../fakeapi/GatewayListAPI";

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
  good: {
    fill: "#00FF00",
  },
  error: {
    fill: "#FF0000",
  },
}));

const OpenGateWay = () => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <h1 className={classes.header}>閘道器列表</h1>
      <Card className={classes.root}>
        <CardContent>
          <Grid item xs={12} md={12}>
            <Typography variant="h6">你擁有的閘道器</Typography>
            <div className={classes.demo}>
              <List component="nav">
                {gatewayListAPI.gatewayList.map((data) => {
                  return (
                    <ListItem
                      button
                      component={Link}
                      to={`/gatewaydetail/${data.id}`}
                      selected={selectedIndex === data.id}
                      onClick={(event) => handleListItemClick(event, data.id)}
                    >
                      <ListItemIcon>
                        <StorageIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={data.name}
                        secondary={data.description}
                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="status">
                          <Brightness1Icon
                            className={
                              data.status === "0" ? classes.good : classes.error
                            }
                          />
                        </IconButton>
                      </ListItemSecondaryAction>
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

export default OpenGateWay;
