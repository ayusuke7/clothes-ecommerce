import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  card: ({ margin }) => ({
    maxHeight: 450,
    margin: margin,

    "& img": {
      height: 250,
      width: "100%",
      objectFit: "cover",
      marginBottom: 15,
    },
  }),

  category: {
    fontSize: 14,
    marginBottom: 15,
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
