import React from "react";
import {
  Typography,
  Button,
  IconButton,
  Grid,
  Hidden,
  Badge,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./styles";
import {
  ACCOUNT_PAGE,
  CART_PAGE,
  HOME_PAGE,
  SHOP_PAGE,
} from "../../routes/routes";
import { useHistory } from "react-router";
import { Storefront } from "@material-ui/icons";
import { APP_NAME, LABELS } from "../../commons/texts";

export default function Header() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} container className={classes.container}>
        <Grid item xs container>
          <Typography className={classes.title}>{APP_NAME}</Typography>
        </Grid>
        <Grid item xs container className={classes.menu}>
          <Hidden smDown>
            <Button
              onClick={() => {
                history.push(HOME_PAGE);
              }}
            >
              {LABELS.LB_HOME}
            </Button>
            <Button
              onClick={() => {
                history.push(SHOP_PAGE);
              }}
            >
              {LABELS.LB_SHOP}
            </Button>
            <Button>{LABELS.LB_ABOUT}</Button>
            <Button
              onClick={() => {
                history.push(ACCOUNT_PAGE);
              }}
            >
              {LABELS.LB_ACCOUNT}
            </Button>
          </Hidden>

          <IconButton
            className={classes.icon}
            onClick={() => {
              history.push(CART_PAGE);
            }}
          >
            <Badge badgeContent={2} color="primary">
              <Storefront />
            </Badge>
          </IconButton>

          <Hidden mdUp>
            <IconButton className={classes.icon}>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Grid>
      </Grid>
    </Grid>
  );
}
