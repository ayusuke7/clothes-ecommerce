import { makeStyles } from "@material-ui/core";
import { SIZES } from "../../commons/bounds";

export const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: SIZES.MAX_WIDHT,
    minHeight: 600,
    backgroundColor: theme.appColors.white,
    padding: theme.spacing(4),
    margin: theme.spacing(4, 0),
    alignContent: "flex-start",
    justifyContent: "center",
  },

  header: {
    backgroundColor: theme.appColors.white,
    padding: theme.spacing(4),
    margin: theme.spacing(4, 0),
    justifyContent: "center",
  },

  avatar: {
    width: 100,
    height: 100,

    fontSize: 40,
    margin: "0 auto 20px auto",
  },

  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    padding: theme.spacing(1, 2),
    marginBottom: theme.spacing(2),
  },

  title: {
    marginBottom: 10,
    color: theme.palette.primary.main,
    fontSize: 20,
    fontWeight: 500,
  },

  options: {
    marginTop: 32,
  },
}));
