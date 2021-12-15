/* eslint-disable max-len */
import { createGlobalStyle } from 'styled-components';
import { device, minDevice } from '../constants';

export const GlobalStyles = createGlobalStyle`

  html {
    height: 100%;
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.contrast.quaternary};
    height: 100%;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%;
    font-family: 'Circular Std Book', sans-serif;
    scrollbar-color: #000000 #F5F5F5;
    scrollbar-width: thin;


    // 1921px - 1441px
    @media ${device.laptopXL} and ${minDevice.laptopL} { 
      font-size: 50%;
    }

    // 2560px - 1920px
    @media ${device.desktop} and ${minDevice.laptopXL} {
      font-size: 62.5%;
    }
 
    // 1440px - 768px
    @media ${device.laptopL} and ${minDevice.tablet} {
      font-size: 47.5%;
    }

    }
  p {
    user-select: none;
    }
  a {
    text-decoration: none;
    }
  
  .dynamicSVGIcon{
    height: auto;
  }
    
    ::-webkit-scrollbar-track
    {
      -webkit-box-shadow: inset 0 0 6px ${({ theme }) => theme.core.pureSecondary};
      background-color: ${({ theme }) => theme.core.pureSecondary}; 
      border-radius: 10px;
    }
    
    ::-webkit-scrollbar
    {
      width: 5px;
      height: 5px;
      background-color: transprent;
    }
    
    ::-webkit-scrollbar-thumb
    {
      background-color: ${({ theme }) => theme.customTheme.primary};
      border-radius: 10px;
    }`;
