import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Roboto', Sans-Serif;
       /* background:  #4ED9D9;
        display: flex;
        justify-content: center;
        align-items: center;*/
    } 
    `
    

export default Global;