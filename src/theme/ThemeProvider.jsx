import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";

const appTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2d2d2d',
    },
    secondary: {
      main: '#009379',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#2d2d2d',
      secondary: 'rgba(45, 45, 45, 0.7)',
    },
    common: {
      black: '#2d2d2d',
      white: '#ffffff',
    },
  },
  typography: {
    fontFamily: "Epilogue, Helvetica",
    body1: {
      fontSize: "17px",
      fontWeight: 400,
      letterSpacing: "0px",
      lineHeight: "27px",
    },
    h1: {
      fontSize: "68px",
      fontWeight: 600,
      letterSpacing: "0px",
      lineHeight: "normal",
    },
    h2: {
      fontSize: "32px",
      fontWeight: 600,
      letterSpacing: "0px",
      lineHeight: "42px",
    },
    h3: {
      fontSize: "27px",
      fontWeight: 600,
      letterSpacing: "0px",
      lineHeight: "42px",
    },
    subtitle1: {
      fontSize: "20px",
      fontWeight: 600,
      letterSpacing: "0px",
      lineHeight: "30px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 4,
          padding: "10px 24px",
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: '1px solid #f3f3f3',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.h2,
        }),
        head: ({ theme }) => ({
          ...theme.typography.subtitle1,
        }),
        body: ({ theme }) => ({
          ...theme.typography.body1,
        }),
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: ({ theme }) => ({
          ...theme.typography.h2,
        }),
        secondary: ({ theme }) => ({
          ...theme.typography.body1,
        }),
      },
    },
  },
});

export const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
