import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import TelegramIcon from "@material-ui/icons/Telegram";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Toolbar from "@material-ui/core/Toolbar";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar}>
        <Toolbar>
          <TelegramIcon color="primary" fontSize="large" />
        </Toolbar>
      </div>
      <Divider />
      <ListItem button key={"Home"}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary={"Home"} />
      </ListItem>
      <Divider />
      <List>
        {["Item Master", "Storage Plan", "Picking Plan", "Stock Take"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <TelegramIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <Divider />
      <List>
        {[
          "Database Maintenance",
          "User Maintenance",
          "Terminal Maintenance",
          "Host Communication Query",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <SettingsIcon /> : <SettingsIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <ListItem button key={"Logout"}>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary={"Logout"} />
      </ListItem>
    </Drawer>
  );
}
