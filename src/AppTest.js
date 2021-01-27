import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./theme";
import { Button } from "@material-ui/core";

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
      <div className={classes.root}>
        <Button variant="outlined" className={classes.buttonStyle}>
          Test
        </Button>
      </div>
    </ThemeProvider>
  );
}
