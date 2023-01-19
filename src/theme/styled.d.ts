import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    text: string;

    colors: {
      primary: string;
      secondary: string;
      tertiary: string;

      background: {
        primary: string;
        secondary: string;
        contrast: string;
      };
      button: {
        primary: string;
        secondary: string;
      };
    };
  }
}
