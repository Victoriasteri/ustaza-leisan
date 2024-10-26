import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#789dbc",
      light: "#a1bad0",
      dark: "#485e71",
      contrastText: "#fff",
    },
    secondary: {
      main: "#c9e9d2",
      light: "#d4eddb",
      dark: "#a1baa8",
      contrastText: "#000",
    },
    // Add more color customizations as needed
  },
});

export default theme;
