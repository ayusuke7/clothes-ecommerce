import { makeStyles, Menu } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    borderTop: "1px solid",
    borderBottom: `1px solid ${theme.appColors.darkGray}`,
    padding: theme.spacing(1, 1),
  },

  title: {
    fontSize: 16,
    fontWeight: 600,

    [theme.breakpoints.down("sm")]: {
      marginBottom: 10,
    },
  },

  subMenu: {
    display: "flex",
    alignItems: "center",
    marginBottom: 10,
  },
}));

export const StyledMenu = withStyles({
  paper: {
    border: "1px solid #f3f3f3",
    padding: 20,
    width: 400,
  },
})((props) => (
  <Menu
    elevation={5}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));
