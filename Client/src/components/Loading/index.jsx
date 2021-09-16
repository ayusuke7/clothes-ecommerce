import React from "react";
import { Backdrop, CircularProgress, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99999999999,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
  },
  text: {
    fontSize: 18,
    fontWeight: 600,
    marginTop: theme.spacing(2),
    color: theme.appColors.white,
  },
}));

export default function Loading() {
  const classes = useStyles();
  const store = useSelector((state) => state);

  const isLoading = Object.keys(store).some((k) => store[k]["loading"]);

  return (
    <Backdrop className={classes.backdrop} open={isLoading}>
      <CircularProgress variant="indeterminate" color="primary" />
      <Typography className={classes.text}>Aguarde...</Typography>
    </Backdrop>
  );
}
