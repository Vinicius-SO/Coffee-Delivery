import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "./theme/default";

type ThemeType = typeof defaultTheme 

export const GlobalStyles = createGlobalStyle<{theme:ThemeType}>`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
        font-family: 'Roboto', sans-serif;
    }

    body{
        background: ${(props)=>props.theme['gray-100']};
        height: 100vh;
        width: 80vw;
        margin: 0 auto;
    }
`
