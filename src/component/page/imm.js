import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Divider, Grid, TextField } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import AddIcon from "@material-ui/icons/Add";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import TelegramIcon from "@material-ui/icons/Telegram";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 5,
    marginBottom: 5,
  },
  table: {
    minWidth: 650,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function IMM() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={6} sm={3} md={2}>
          <TextField variant="outlined" label="Sequence No" size="small" />
        </Grid>
      </Grid>
      <Divider />
      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <TextField variant="outlined" label="Sequence No" size="small" />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <TextField variant="outlined" label="Item Code" size="small" />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <TextField variant="outlined" label="Item Name" size="small" />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <TextField variant="outlined" label="UOM" size="small" />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <TextField variant="outlined" label="Pallet QTY" size="small" />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <TextField variant="outlined" label="Soft Zone" size="small" />
        </Grid>
      </Grid>
      <Divider />
      <div className={classes.buttons}>
        <Button variant="outlined" color="primary" size="small">
          <AddIcon />
          Add Detail (F2)
        </Button>
        <Button variant="outlined" color="secondary" size="small">
          <ClearAllIcon /> Clear All (F9)
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          style={{ float: "right" }}
        >
          <TelegramIcon /> Send (F4)
        </Button>
      </div>
      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}
