import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export const config = extendTheme(
  {
    fonts: {
      heading: "Noto Sans",
      body: "Noto Sans",
    },
    colors: {
      brand: {
        50: "#d3dbe1",
        100: "#d3dbe1",
        200: "#a6b7c4",
        300: "#7a93a6",
        400: "#4d6f89",
        500: "#214b6b",
        600: "#1a3c56",
        700: "#142d40",
        800: "#0d1e2b",
        900: "#070f15",
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" })
);
