import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
}));

export default function MyAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar} color="primary">
      <Toolbar>
        <Typography variant="h6" noWrap>
          Item Mater Message
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
