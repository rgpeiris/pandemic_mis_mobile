import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          "& fieldset.MuiOutlinedInput-notchedOutline": {
            borderColor: "#C4C4C4",
          },
          "&.Mui-focused": {
            "& fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: "#C4C4C4",
            },
          },
          "&.Mui-error": {
            "& fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: "#C4C4C4",
            },
          },
        },
        input: {
          "&:-webkit-autofill": {
            transition: "background-color 5000s ease-in-out 0s",
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          "&.Mui-error": {
            color: "#8D8D8D",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: "#8D8D8D",
          },
          "&.Mui-error": {
            color: "#8D8D8D",
          },
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          p: 0,
          minWidth: "18%",
          color: "#C0183E",
          "&.Mui-selected": {
            borderBottom: "2px solid #c0183e",
            backgroundColor: "#fff0f4",
            "& .MuiBottomNavigationAction-label": {
              fontSize: "12px",
              fontWeight: "bold",
            },
            "& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label": {
              color: "#C0183E",
            },
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "#C0183E",
          "&.Mui-checked": {
            color: "#C0183E",
          },
        },
      },
    },
  },
});

export default theme;
