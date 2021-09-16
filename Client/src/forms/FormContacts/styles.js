import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  itemCard: {
    padding: "0 5px",
    marginBottom: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
  },
  iconAdd: {
    backgroundColor: "grey",
    color: theme.appColors.whiteColor,
    borderRadius: "50%",
  },
  listContatos: ({ height }) => ({
    overflowY: "scroll",
    height: height || 150,
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: 10,
  }),
}));
