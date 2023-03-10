import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-appearance: none;
  }

  body {
    background: ${(props) => props.theme.colors.background.primary};
    font-size: 14px;
    color: ${(props) => props.theme.text};
    font-family: sans-serif;
  }
`;
