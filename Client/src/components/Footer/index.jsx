import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { LABELS } from "../../commons/texts";
import {
  POLITICA_PRIVACIDADE_PAGE,
  CONDICOES_GERAIS_PAGE,
} from "../../routes/routes";
import { useHistory } from "react-router";

export default function Footer() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container className={classes.container}>
      <Grid item xs container className={classes.content}>
        <Grid item xs={12} sm={4}></Grid>
        <Grid item xs={12} sm={4}>
          <Typography
            onClick={() => {
              history.push(POLITICA_PRIVACIDADE_PAGE);
            }}
            className={classes.links}
          >
            {LABELS.LB_POLITICAS_PRIVACIDADE}
          </Typography>
          <Typography
            onClick={() => {
              history.push(CONDICOES_GERAIS_PAGE);
            }}
            className={classes.links}
          >
            {LABELS.LB_CONDICOES_GERAIS}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
