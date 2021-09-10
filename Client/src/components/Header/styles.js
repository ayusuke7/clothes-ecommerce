import { makeStyles } from "@material-ui/core/styles";
import { SIZES } from "../../commons/bounds";

export const useStyles = makeStyles((theme) => ({
  root: {
    //color: theme.appColors.white,
    height: SIZES.TOOLBAR_HEIGHT,
    backgroundColor: theme.appColors.white,
    justifyContent: "center",
    borderBottom: "1px solid #f8f8f8",
  },
  container: {
    maxWidth: SIZES.MAX_WIDHT,
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(0, 2),
  },
  title: {
    fontSize: 25,
    fontWeight: 600,

    "& svg": {
      //color: theme.appColors.white,
      fontWeight: 600,
    },
  },
  menu: {
    alignItems: "center",
    justifyContent: "flex-end",

    "& button": {
      marginLeft: 15,
      fontSize: 14,
      fontWeight: 300,
    },

    "& button:hover": {
      color: theme.appColors.white,
      backgroundColor: theme.appColors.primaryColor,
      fontWeight: 600,
    },
  },

  icon: {
    color: theme.appColors.primaryColor,
    "& svg": {
      fontSize: 36,
    },
  },
}));
