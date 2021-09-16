import React from "react";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: ({ height, width, bgColor, color, margin }) => ({
    backgroundColor: bgColor || theme.palette.primary.main,
    color: color || theme.appColors.white,
    fontWeight: 600,
    height: height || 40,
    width: width || "100%",
    margin: margin || 0,
    border: color ? `1px solid ${color}` : null,

    "&:hover": {
      backgroundColor: bgColor || theme.palette.primary.main,
      filter: "brightness(80%)",
    },

    "&.MuiButton-root.Mui-disabled": {
      color: theme.appColors.white,
      opacity: 0.5,
    },
  }),
}));

export default function CustomButton({
  children,
  height,
  width,
  bgColor,
  color,
  margin,
  ...rest
}) {
  const classes = useStyles({ height, width, bgColor, color, margin });

  return (
    <Button {...rest} className={classes.root}>
      {children}
    </Button>
  );
}
