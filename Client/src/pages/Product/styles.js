import { makeStyles } from "@material-ui/core";
import { SIZES } from "../../commons/bounds";

export const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: SIZES.MAX_WIDHT,
    minHeight: "100vh",
    backgroundColor: theme.appColors.white,
    padding: theme.spacing(10, 4),
    margin: theme.spacing(4, 0),
    alignContent: "flex-start",
  },
  image: {
    height: 450,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
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
      width: 150,
      height: 150,
      objectFit: "cover",
      marginRight: 15,
      marginTop: 15,
      opacity: 0.5,
    },

    "& img:hover": {
      opacity: 1,
      cursor: "pointer",
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
