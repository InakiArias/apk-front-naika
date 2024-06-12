"use client"

import { DefaultMantineColor, MantineColorsTuple, MantineTheme, MantineThemeOverride, createTheme, mergeThemeOverrides } from "@mantine/core";

function mergeThemes(themes: MantineThemeOverride[]) {
  return mergeThemeOverrides(baseTheme, ...themes);
}

const baseTheme = createTheme({
  fontFamily: 'Gotham, sans-serif'
})

const themeExtensions = {
  colors: {
    "naika-green": [
      "#009440",
      "#009440",
      "#009440",
      "#009440",
      "#009440",
      "#009440",
      "#009440",
      "#009440",
      "#009440",
      "#009440",
    ],
    "naika-blue": [
      "#2f508f",
      "#2f508f",
      "#2f508f",
      "#2f508f",
      "#2f508f",
      "#2f508f",
      "#2f508f",
      "#2f508f",
      "#2f508f",
    ],
  },
} as unknown as MantineTheme;

// Add keys to typescript for Intellisense

type ExtendedCustomColors =
  | 'naika-blue'
  | 'naika-green'
  | DefaultMantineColor;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>;
  }
}

export default mergeThemes([baseTheme, themeExtensions]);