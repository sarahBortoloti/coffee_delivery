import { createGlobalStyle } from "styled-components";
import defaultTheme from "./defaultTheme";

const theme = defaultTheme();

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus {
  outline: 0;
}

body {
    background:${theme.colors.base.background};
    color:  ${theme.colors.base.text};
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button, select {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  background-color: ${theme.colors.base.label};
}`;
