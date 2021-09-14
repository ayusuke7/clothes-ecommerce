import React from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import { Redirect } from "react-router-dom";
import session from "../../utils/session";
import { LOGIN_OR_REGISTER_PAGE } from "../../routes/routes";
import { useSelector } from "react-redux";

export default function AccountPage() {
  const classes = useStyles();
  const user = session.getToken();

  const { loading } = useSelector((state) => ({
    user: state.user.data,
  }));

  if (!user) {
    return <Redirect to={LOGIN_OR_REGISTER_PAGE} />;
  }

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}></Grid>
    </Grid>
  );
}
