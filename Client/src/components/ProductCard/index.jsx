import React from "react";
import CustomButton from "../Button";
import { Grid } from "@material-ui/core";
import { useStyles } from "./styles";

export default function ProductCard({
  sizes,
  image,
  category,
  name,
  price,
  onClick,
  clickable,
  margin,
}) {
  const classes = useStyles({ margin });

  return (
    <Grid item className={classes.card} {...sizes}>
      <img src={image} alt="" />
      <div className={classes.category}>{category}</div>
      <div className={classes.name}>{name}</div>
      <div className={classes.price}>{price}</div>
      {onClick && (
        <CustomButton width={100} onClick={onClick}>
          COMPRAR
        </CustomButton>
      )}
    </Grid>
  );
}
