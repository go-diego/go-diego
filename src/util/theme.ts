import {createTheme} from "@material-ui/core/styles";

export const gradient =
  "linear-gradient(45deg, rgba(5,138,162,1) 0%, rgba(179,62,148,1) 35%, rgba(65,38,48,1) 100%)";

const headerFont = ["Outfit", "sans-serif"].join(",");
const bodyFont = ["IBM Plex Sans", "sans-serif"].join(",");

const globalTheme = createTheme({
  palette: {
    primary: {
      main: "#14202B"
    },
    secondary: {
      main: "#22EDED"
    },
    background: {
      default: "rgb(241 245 249)",
      paper: "#fff"
    }
  },
  typography: {
    fontSize: 14,
    fontFamily: bodyFont,
    button: {textTransform: "none"},
    h1: {
      fontFamily: headerFont
    },
    h2: {
      fontFamily: headerFont
    },
    h3: {
      fontFamily: headerFont
    },
    h4: {
      fontFamily: headerFont
    },
    h5: {
      fontFamily: headerFont
    },
    h6: {
      fontFamily: headerFont
    },
    // @ts-ignore
    button: {textTransform: "none"}
  }
});

const theme = createTheme(
  {
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "#__next": {
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            "& > *": {
              flexShrink: 0
            }
          }
        }
      }
    }
  },
  globalTheme
);

export default theme;
