import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

import AppBar from "./component/AppBar";
import NavBar from "./component/NavBar";
import Container from "./component/Container";
import theme from "./theme";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar />
        <NavBar />
        <Container />
      </div>
    </ThemeProvider>
  );
}
