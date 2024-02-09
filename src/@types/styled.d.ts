import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bgPrimary: string;
      bgSecondary: string;
      bgThird: string,
      textPrimary: string;
      textSecondary: string;
      accentOne: string;
      accentTwo: string;
      accentThree: string;
    };
  }
}
