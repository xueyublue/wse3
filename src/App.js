import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

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
  const counter = useSelector((state) => state.counter);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar />
          {counter}
          <NavBar />
          <Switch>
            <Route path="/" component={Container} />
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
