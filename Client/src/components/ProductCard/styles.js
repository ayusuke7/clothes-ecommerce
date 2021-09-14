import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  card: ({ margin }) => ({
    maxHeight: 450,
    margin: margin,

    "& img": {
      height: 250,
      width: "100%",
      objectFit: "cover",
      marginBottom: 10,
    },
  }),

  category: {
    fontSize: 12,
    marginBottom: 15,

    "& a": {
      marginRight: 8,
      color: theme.appColors.primary,
      textDecoration: "none",
    },
  },

  name: {
    fontSize: 16,
    marginBottom: 15,
    fontWeight: 600,
  },

  price: {
    fontSize: 14,
    marginBottom: 15,
    //fontWeight: 600,

    "& span": {
      color: theme.appColors.gray,
      textDecoration: "line-through",
      marginRight: 10,
    },
  },

  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.appColors.white,
    fontWeight: 600,
    height: 35,

    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      filter: "brightness(80%)",
    },
  },
}));
