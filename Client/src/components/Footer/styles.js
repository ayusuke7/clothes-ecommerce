import { makeStyles } from "@material-ui/core";
import { SIZES } from "../../commons/bounds";

export const useStyles = makeStyles((theme) => ({
  container: {
    height: 300,
    backgroundColor: theme.appColors.darkGray,
    padding: theme.spacing(2, 6),
  },

  content: {
    justifyContent: "space-between",
    maxWidth: SIZES.MAX_WIDHT,
    alignItems: "center",
    padding: theme.spacing(0, 2),
  },

  links: {
    color: theme.appColors.white,
    fontSize: 20,
    marginTop: 10,
    textAlign: "right",
    cursor: "pointer",

    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
}));
