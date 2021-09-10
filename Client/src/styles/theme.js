import { ptBR } from "@material-ui/core/locale";
import { createTheme } from "@material-ui/core";

export const appColors = {
  primaryColor: "#D6A2E8",
  primaryColorDark: "#D6A2E8",
  secondaryColor: "#FFB8B8",
  white: "#FFF",
  black: "#000",
  gray: "#C4C4C4",
  darkGray: "#313131",
};

const AppTheme = createTheme(
  {
    appColors,
    palette: {
      primary: {
        main: appColors.primaryColor,
        dark: appColors.primaryColorDark,
      },
      secondary: {
        main: appColors.secondaryColor,
      },
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      body1: {
        fontFamily: "Poppins",
      },
      body2: {
        fontFamily: "Poppins",
      },
      subtitle1: {
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: 600,
      },
      subtitle2: {
        fontFamily: "Poppins",
      },
    },
  },
  ptBR
);

export default AppTheme;
