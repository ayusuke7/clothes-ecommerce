import { makeStyles } from "@material-ui/core";
import { SIZES } from "../../commons/bounds";

export const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: SIZES.MAX_WIDHT,
    minHeight: "100vh",
    backgroundColor: theme.appColors.white,
    padding: theme.spacing(3, 4),
    margin: theme.spacing(4, 0),
    alignContent: "flex-start",
  },

  title: {
    fontSize: 28,
    color: theme.palette.primary.main,
    margin: theme.spacing(4, 1),
  },

  filter: {
    margin: theme.spacing(4, 1),
    justifyContent: "space-between",
  },

  slider: {
    width: 200,
    margin: theme.spacing(0, 4),

    [theme.breakpoints.down("xs")]: {
      margin: 0,
      width: "100%",
    },
  },

  formControl: {
    marginTop: 20,

    [theme.breakpoints.up("md")]: {
      maxWidth: 300,
    },
  },
}));
