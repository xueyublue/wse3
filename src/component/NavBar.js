import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TelegramIcon from "@material-ui/icons/Telegram";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";

const drawerWidth = 240;

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
        <Toolbar></Toolbar>
      </div>
      <Divider />
      <List>
        <ListItem button key={"Item Master Message"}>
          <ListItemIcon>
            <TelegramIcon />
          </ListItemIcon>
          <Link to="/sender/imm">
            <ListItemText primary={"Item Master Message"} />
          </Link>
        </ListItem>
        <ListItem button key={"Storage Plan Message"}>
          <ListItemIcon>
            <TelegramIcon />
          </ListItemIcon>
          <Link to="/sender/spm">
            <ListItemText primary={"Storage Plan Message"} />
          </Link>
        </ListItem>
        <ListItem button key={"Picking Plan Message"}>
          <ListItemIcon>
            <TelegramIcon />
          </ListItemIcon>
          <Link to="/sender/ppm">
            <ListItemText primary={"Picking Plan Message"} />
          </Link>
        </ListItem>
        <ListItem button key={"Stock Take Message"}>
          <ListItemIcon>
            <TelegramIcon />
          </ListItemIcon>
          <Link to="/sender/stm">
            <ListItemText primary={"Stock Take Message"} />
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        {[
          "Database Maintenance",
          "User Maintenance",
          "Terminal Maintenance",
          "Message Query",
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
