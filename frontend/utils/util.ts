import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export const theme = extendTheme(
  {
    colors: {
      brand: {
        50: "#fbd2e1",
        100: "#fbd2e1",
        200: "#f7a4c3",
        300: "#f477a4",
        400: "#f04986",
        500: "#ec1c68",
        600: "#bd1653",
        700: "#8e113e",
        800: "#5e0b2a",
        900: "#2f0615",
      },
      secondary: {
        100: "#d8d8d8",
        200: "#b1b1b1",
        300: "#8a8a8a",
        400: "#636363",
        500: "#3c3c3c",
        600: "#303030",
        700: "#242424",
        800: "#181818",
        900: "#0c0c0c",
      },
    },
    fonts: {
      heading: "Lato",
      body: "Roboto",
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" })
);
