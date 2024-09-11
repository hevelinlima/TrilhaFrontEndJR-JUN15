import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    transition: background-color 0.3s, color 0.3s;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: #000000;
    }

    &::-webkit-scrollbar-thumb {
      background: ${(props)=>props.theme.iconColor};
      border-radius: 10px;
      max-height: 20px;
    }

    &::-webkit-scrollbar-thumb:active {
      background: ${(props)=>props.theme.borderColor};
    } 
  }
`