import { makeStyles } from "@material-ui/core";
import { SIZES } from "../../commons/bounds";

export const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: SIZES.MAX_WIDHT,
    minHeight: "100vh",
    backgroundColor: theme.appColors.white,
    padding: theme.spacing(10, 4),
    margin: theme.spacing(4, 0),
    justifyContent: "center",
    alignContent: "flex-start",
  },
}));
