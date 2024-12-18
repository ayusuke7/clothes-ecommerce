import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  customInput: ({ height, width, textAlign }) => ({
    width,

    "& .MuiOutlinedInput-root": { height, width },

    "& .MuiOutlinedInput-input": { textAlign },

    "& .MuiInputBase-root.Mui-disabled": {
      color: "rgba(0, 0, 0, 0.65)",
    },
  }),
  typography: {
    marginTop: "6px",
  },
  maskedInput: ({ height }) => ({
    height: `calc(${height} - 5px)`,
    width: "100%",
    border: "1px solid #c4c4c4",
    borderRadius: "4px",
    borderStyle: "double",
  }),
}));
