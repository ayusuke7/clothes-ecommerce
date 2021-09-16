import { InputBase, Tooltip } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  typography: {
    marginTop: "6px",
  },
  menuPaper: {
    maxHeight: 350,
    maxWidth: "60%",
  },
  error: {
    color: theme.appColors.errorColor,
    marginLeft: 14,
  },
  label: {
    backgroundColor: "white",
    padding: "0 5px",
  },
  formControl: ({ height }) => ({
    minHeight: height || "50px",

    "& .MuiInputLabel-outlined": {
      transform: "translate(14px, 14px) scale(1)",
    },

    "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
      transform: "translate(14px, -6px) scale(0.75)",
    },
  }),
  hide: {
    display: "none",
  },
}));

export const InputStyles = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: "1rem",
    textAlign: "start",
    padding: "18px 26px 18px 14px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

export const LightTooltip = withStyles((theme) => ({
  tooltip: {
    textAlign: "center",
    padding: theme.spacing(1),
    fontSize: 16,
  },
}))(Tooltip);
