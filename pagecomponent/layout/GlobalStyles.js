import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html , body {
    margin: 0;
    padding: 0;
    border: 0;
}
a {
    text-decoration: none;
    color: inherit;
}
*{
    box-sizing: border-box;
    border: 0;
    font-family: 'Poppins', sans-serif;
}
button{
    background-color: inherit;
}
li {
    list-style: none;
}
`;
