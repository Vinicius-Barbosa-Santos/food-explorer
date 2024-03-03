import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['light-100']};
  }

  body {
    background-color: ${({ theme }) => theme['dark-400']};
    color: ${({ theme }) => theme['light-100']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem 'Poppins', sans-serif
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  @media(max-width: 768px) {
        html {
            font-size: 87.5%;
        }
    }
`