import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ItemMasterSender from "./sender/ItemMasterSender";
import StoragePlanSender from "./sender/StoragePlanSender";
import PickingPlanSender from "./sender/PickingPlanSender";
import StockTakeSender from "./sender/StockTakeSender";
import Home from "./Home";

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
  },
}));

export default function Container({ location }) {
  const classes = useStyles();
  const path = location.pathname;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {path === "/" || path === "/home" ? <Home /> : null}
      {path === "/sender/imm" ? <ItemMasterSender /> : null}
      {path === "/sender/spm" ? <StoragePlanSender /> : null}
      {path === "/sender/ppm" ? <PickingPlanSender /> : null}
      {path === "/sender/stm" ? <StockTakeSender /> : null}
    </main>
  );
}
