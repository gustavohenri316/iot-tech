import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --background-Login: #1E1E26;
        --gray: gray;
        --gray-50: #F9F9F9;
        --gray-100: #e5e5e5;
        --gray-200: #BDBDBD;
        --gray-300: #777777;
        --gray-400: #898080;
        --white: #fff;
        --blue-400: #3158A3;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background: var(--gray-100);
    }

    button {
        cursor: pointer;
        
        &:disabled {
            cursor: not-allowed;
        }
    }
    .react-modal-overlay {
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius:0.25rem;
  }
  .react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;
    &:hover{
      filter: brightness(0.8);
    }
  }
`