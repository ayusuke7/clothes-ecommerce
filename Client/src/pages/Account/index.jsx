import { Grid } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

export default function AccountPage() {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}></Grid>
    </Grid>
  );
}