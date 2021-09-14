import { makeStyles } from "@material-ui/core";
import { SIZES } from "../../commons/bounds";

export const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: SIZES.MAX_WIDHT,
    minHeight: "100vh",
    backgroundColor: theme.appColors.white,
    alignContent: "flex-start",
    margin: theme.spacing(4, 0),
    padding: theme.spacing(10, 4),

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(5, 2),
    },
  },
  image: {
    height: 450,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,

    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },

    [theme.breakpoints.down("xs")]: {
      marginBottom: 10,
    },
  },

  info: {
    marginBottom: 20,

    "& h4": {
      fontWeight: 600,
    },

    "& h4,h5,h6": {
      marginBottom: 20,
    },

    "& h6": {
      letterSpacing: "1.05px",
      fontWeight: 400,
    },
  },

  inputs: {
    alignContent: "space-between",
  },

  description: {
    margin: theme.spacing(5, 0),
    minHeight: 300,
  },

  carrocel: {
    "& img": {
      width: "100%",
      height: "100%",
      maxHeight: 130,
      objectFit: "contain",
      opacity: 0.5,
    },

    "& img:hover": {
      opacity: 1,
      cursor: "pointer",
    },

    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
    },

    "& .MuiGrid-grid-xs-3, .MuiGrid-grid-xs-4": {
      padding: "0 5px",
    },
  },

  slide: {
    overflowX: "scroll",
    flexWrap: "noWrap",

    "& > div": {
      minWidth: 250,
    },
  },

  price: {
    "& span": {
      color: theme.appColors.gray,
      textDecoration: "line-through",
      marginRight: 10,
    },
  },
}));
