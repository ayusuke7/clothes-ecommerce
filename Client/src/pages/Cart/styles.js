import { makeStyles } from "@material-ui/core";
import { SIZES } from "../../commons/bounds";

export const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: SIZES.MAX_WIDHT,
    minHeight: "100vh",
    backgroundColor: theme.appColors.white,
    padding: theme.spacing(5, 4),
    margin: theme.spacing(4, 0),
    alignContent: "flex-start",
  },
  title: {
    fontSize: 28,
    color: theme.palette.primary.main,
    margin: theme.spacing(4, 1),
  },

  header: {
    height: 60,
    backgroundColor: theme.appColors.ligthGray,
    alignContent: "center",
  },
}));
