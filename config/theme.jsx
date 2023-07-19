import { colors } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

export let theme = createTheme({
  palette: {
    common: {
      white: "#FFFFFF",
      black: "#000000",
    },
    primary: {
      light: "#EBF8FF",
      main: "#0356B2",
      dark: "#001C50",
      contrastText: "#000000",
    },

    secondary: {
      light: "#E4E7F1",
      main: "#002F86",
      dark: "#00215E",
      contrastText: "#000000",
    },
    info: {
      light: colors.grey[500],
      main: colors.grey[500],
      dark: colors.grey[500],
      contrastText: "#FFFFFF",
    },
    success: {
      light: "#DFFFE9",
      main: "#038A30",
      dark: "#024518",
      contrastText: "#212B36",
    },
    warning: {
      light: "#FFF1D3",
      main: "#FFAB00",
      dark: "#CC8900",
      contrastText: "#000000",
    },
    error: {
      light: "#FFA48D",
      main: "#FB4B5B",
      dark: "#C93C49",
      contrastText: "#212B36",
    },
    grey: {
      50: "#F2F2F2",
      100: "#767575",
      200: "#DBDBDB",
      300: "#6C6C6C",
      400: "#282B2F",
    },
    action: {
      active: "#637381",
      hover: "#919EAB14",
      selected: "#919EAB29",
      disabled: "#919EAB",
      disabledBackground: "#919EAB3D",
      focus: "#919EAB3D",
    },
    text: {
      primary: "#212B36",
      secondary: "#6C6C6C",
      disabled: "#919EAB",
    },
    divider: "#E4E7F1",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

theme = createTheme({
  typography: {
    fontFamily: ["Nunito Sans", "sans-serif"].join(),
    fontSize: 12,
    fontWeightRegular: 400,
    fontWeightBold: 600,
    button: {
      textTransform: "none",
      fontSize: "1rem",
    },
    h1: {
      fontSize: "2rem", // 32px
    },
    h2: {
      fontSize: "1.5rem", // 24px
    },
    h3: {
      fontSize: "1.5em", // 20px
      // [theme.breakpoints.down("md")]: {
      //   fontSize: "1rem", // 16 px
      // },
      fontWeight: 500,
    },
    body1: {
      fontSize: "1.125rem", // 18px
      color: "#282B2F",
    },
    body2: {
      fontSize: "1rem", // 16px
      [theme.breakpoints.down("md")]: {
        fontSize: "0.938rem", // 15px
      },
    },
    subtitle1: {
      fontSize: "13px",
      opacity: 0.4
    },
    caption: {
      fontSize: "0.875rem", // 14px
      [theme.breakpoints.down("md")]: {
        fontSize: "0.813rem", // 13px
      },
    },
  },
  zIndex: { modal: 50000 },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            borderRadius: "4px",
            background: "#FCFCFC",
            textTransform: "none",
            fontWeight: 400,
            border: "1px solid #D2D2D2 !important",
            color: "#252429",
            height: "45px !important",
            fontSize: 13
          },
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        icon: "&#751",
      },
    },

    MuiModal: {
      styleOverrides: {
        root: {
          "& .MuiBox-root": {
            borderRadius: 8,
            border: "none",
          },
        },
      },
    },
    MuiPopover: {
      defaultProps: {
        PaperProps: {
          style: {
            borderRadius: 10,
          },
        },
      },
    },
    MuiPaper: {},
    MuiFab: {
      defaultProps: {
        variant: "circular",
        size: "small",
        style: {
          boxShadow: "none",
          background: "#F1F1F1",
        },
      },
    },
    MuiCard: {
      defaultProps: {
        variant: "outlined",
        style: {
          border: "1px solid #E4E7F1",
          borderRadius: "8px",
        },
      },
    },
    MuiBadge: {
      defaultProps: {
        style: {
          boxShadow: "none",
          background: "#F1F1F1",
        },
      },
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          "& .MuiIcon-root": {
            color: "grey !important"
          },
        }
      }
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
        style: {
          borderRadius: 8,
          textTransform: "capitalize",
          border: 0,
          fontSize: 14,
          height: "48px",
        },
      },
      variants: [
        {
          props: { variant: "contained" },
          style: {
            background: "#0356B2",
            color: "#FFFFFF",
            ":hover": {
              background: "#001C50",
            },
            ":focus": {
              background: "#002F86",
            },
            ":active": {
              background: "#002F86",
            },
          },
        },
        {
          props: { variant: "text" },
          style: {
            height: "30px",
          },
        },
      ],
    },
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export default responsiveFontSizes(theme);

[
    "primary",
    "secondary",
    "neutral",
    "success",
    "info",
    "grey",
    "warning",
    "error",
    "common",
    "text",
    "background",
    "action",
  ].forEach((paletteKey) => {
    if (theme.palette[paletteKey] !== undefined) {
      Object.keys(theme.palette[paletteKey]).forEach((paletteKeyColor) => {
        document.documentElement.style.setProperty(
          `--color-${paletteKey}-${paletteKeyColor}`,
          theme.palette[paletteKey][paletteKeyColor]
        );
      });
    }
});
  