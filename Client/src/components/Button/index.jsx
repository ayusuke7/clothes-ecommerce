import React from "react";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: ({ height, width, bgColor, margin }) => ({
    backgroundColor: bgColor || theme.palette.primary.main,
    color: theme.appColors.white,
    fontWeight: 600,
    height: height || 40,
    width: width || "100%",
    margin: margin || 0,

    "&:hover": {
      backgroundColor: bgColor || theme.palette.primary.main,
      filter: "brightness(80%)",
    },
  }),
}));

export default function CustomButton({
  children,
  height,
  width,
  bgColor,
  margin,
  ...rest
}) {
  const classes = useStyles({ height, width, bgColor, margin });

  return (
    <Button {...rest} className={classes.root}>
      {children}
    </Button>
  );
}
