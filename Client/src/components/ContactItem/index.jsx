import React from "react";
import { Grid, IconButton, Paper, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { Delete, Phone } from "@material-ui/icons";

export default function ContactItem({
  text,
  icon,
  onClickIcon,
  onClickRemove,
}) {
  const classes = useStyles();

  return (
    <Paper className={classes.itemCard}>
      <IconButton onClick={onClickIcon}>
        {icon || <Phone style={{ color: "green" }} />}
      </IconButton>
      <Typography variant="subtitle2" align="center">
        {text}
      </Typography>
      {onClickRemove ? (
        <IconButton onClick={onClickRemove}>
          <Delete style={{ color: "#cf3b3b" }} />
        </IconButton>
      ) : (
        <Grid />
      )}
    </Paper>
  );
}
