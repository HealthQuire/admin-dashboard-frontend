import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bgPrimary: string;
      bgSecondary: string,
      bgPads: string,
      br: string,
      textPrimary: string;
      textSecondary: string;
      accentOne: string;
      accentTwo: string;
      accentBr: string;
      declineColor: string;
      deleteColor: string;
    };
  }
}
