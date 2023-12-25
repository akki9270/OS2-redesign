import { createTheme } from "@mui/material";
import { red } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000000"
    },
    secondary: {
      main: "#D9DBDE"
    },
    error: {
      main: red.A400,
    },
  }
});