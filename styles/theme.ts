// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";

//Set additional colours for Chakra
const colors = {
  brand: {
    white: "hsla(0, 0%, 100%, 1)",
    yellow: "hsla(52, 100%, 49%, 1)",
    onyx: "hsla(224, 10%, 21%, 1)",
    green: "hsla(138, 25%, 39%, 1)",
    blue: "hsla(198, 37%, 46%, 1)",
  },
};
//Set Chakra fonts
const fonts = {
  body: "Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: (props: any) => ({
    body: {
      color: mode(colors.brand.onyx, colors.brand.white)(props),
      bg: mode(colors.brand.white, colors.brand.onyx)(props),
    },
  }),
};

const components = {
  Drawer: {
    // setup light/dark mode component defaults
    baseStyle: (props: Dict<any> | StyleFunctionProps) => ({
      dialog: {
        bg: mode("white", "#141214")(props),
      },
    }),
  },
};

const theme = extendTheme({ colors, fonts, config, styles, components });

export default theme;
