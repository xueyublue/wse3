import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import theme from "../theme";
import HomeTest from "./HomeTest";
import AboutTest from "./AboutTest";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  buttonStyle: {
    color: (props) => (props.cool ? "blue" : "red"),
  },
}));

export default function AppTest(props) {
  const classes = useStyles(props);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={HomeTest} />
            <Route path="/home" exact component={HomeTest} />
            <Route path="/about/:name" component={AboutTest} />
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
