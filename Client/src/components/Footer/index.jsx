import React from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "./styles";

export default function Footer() {
  const classes = useStyles();

  return <Grid container className={classes.container}></Grid>;
}
