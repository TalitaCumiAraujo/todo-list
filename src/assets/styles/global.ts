import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
font-family: 'Roboto', sans-serif;
margin: 0!important;
border: 0;
padding: 0;
box-sizing: border-box;
}
`;
export const Container = styled.div`
background: #17181f;
color: #797A81;
min-height: 100vh;
`;
export const Content = styled.div`
margin: auto;
max-width: 980px;
padding: 1rem;
`;
export const Header = styled.h1`
color: #fff;
text-align: center;
border-bottom: 1px solid #444;
padding-bottom: 20px;

`;