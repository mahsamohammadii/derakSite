import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Navbar from "../Partials/Navbar";
import Bergermenu from "../Partials/Bergermenu";
import Logo from "../Elements/Logo";
// import styles from '../../styles/index.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  roottwo: {
    color: "white",
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Grid className="rootheader">
      <Grid className="backgroundheader" container item md={12}>
        <Grid item xs={6} className={classes.roottwo}>
          <Bergermenu />
        </Grid>
        <Grid item md={2} xs={6}>
          <Logo logopic="/static/logo.jpg" alt="logo" />
        </Grid>

        <Grid item md={10} xs={6} className={classes.root}>
          <Navbar />
        </Grid>
      </Grid>
    </Grid>
  );
}
