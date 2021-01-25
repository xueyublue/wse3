import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import AppBar from "./component/AppBar";
import NavBar from "./component/NavBar";
import Container from "./component/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar />
      <NavBar />
      <Container />
    </div>
  );
}
