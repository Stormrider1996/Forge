import { typography } from '@variables'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  
  html {
    font-size: 100%;
  }
  
  body {
    font-size: ${typography.fontSize.text};
    font-family: ${typography.fontFamily.text};
    line-height: ${typography.lineHeight.text};
    
    p {
      font-size: ${typography.fontSize.base};
    }
  }
  
  a:focus-visible,
  button:focus-visible {
    outline: 1px solid; 
    outline-offset: 0.125rem;
  }
  
  a:focus:not(:focus-visible),
  button:focus:not(:focus-visible) {
    outline: 0;
    box-shadow: none;
  }
`
