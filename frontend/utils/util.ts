import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export const theme = extendTheme(
  {
    colors: {
      brand: {
        50: "#fae8d3",
        100: "#fae8d3",
        200: "#f4d2a6",
        300: "#efbb7a",
        400: "#e9a54d",
        500: "#e48e21",
        600: "#b6721a",
        700: "#895514",
        800: "#5b390d",
        900: "#2e1c07",
      },
    },
    fonts: {
      heading: "Roboto",
      body: "Lato",
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" })
);
