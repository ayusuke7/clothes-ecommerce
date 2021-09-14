import React, { useCallback, useEffect, useState } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { NavigateNext } from "@material-ui/icons";
import { LABELS } from "../../commons/texts";
import { CATEGORYS_FIELDS as cf } from "../../commons/fields";
import { useDispatch, useSelector } from "react-redux";
import { categorysActions } from "../../store/slices/categorys";
import { useStyles, StyledMenu } from "./styles";

export default function Categorys() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);

  const { categorys } = useSelector((state) => ({
    categorys: state.categorys.data,
  }));

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getListCategorys = useCallback(() => {
    if (categorys.length === 0) {
      dispatch(categorysActions.getDataCategorys());
    }
  }, [dispatch, categorys.length]);

  useEffect(() => {
    getListCategorys();
  }, [getListCategorys]);

  const category = anchorEl?.category;
  const target = anchorEl?.target;

  return (
    <Grid container alignItems="center" className={classes.container}>
      <Grid item xs={12} md={2}>
        <Typography className={classes.title}>
          {LABELS.LB_CATEGORYS}:
        </Typography>
      </Grid>
      <Grid item xs={12} md={10}>
        {categorys.map((cat, i) => {
          let color = "default";
          if (category?.[cf.ID] === cat?.[cf.ID]) {
            color = "primary";
          }
          return (
            <Button
              onClick={({ currentTarget }) => {
                setAnchorEl({
                  category: cat,
                  target: currentTarget,
                });
              }}
              color={color}
              key={`mnu-${i}`}
            >
              {cat[cf.NAME]}
            </Button>
          );
        })}
        <StyledMenu
          keepMounted
          id="customized-menu"
          anchorEl={target}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Grid container item xs spacing={2}>
            {category?.[cf.TAGS]?.split(",").map((tag, j) => (
              <Grid item xs={6} key={`sub-${j}`} className={classes.subMenu}>
                <NavigateNext />
                <Typography component="a">{tag}</Typography>
              </Grid>
            ))}
          </Grid>
        </StyledMenu>
      </Grid>
    </Grid>
  );
}
