import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      text: string;
      border: string;
      background: string;
    };
  }
}