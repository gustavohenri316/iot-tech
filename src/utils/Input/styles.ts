import styled from "styled-components";

interface InputProps{
    width?: string
    height?: string
}

export const InputContainer = styled.input<InputProps>`
    width: ${(props) => props.width ? props.width : ' 253px'};
    height: ${(props) => props.height ? props.height : ' 38px'};
    background: #FFFFFF;
    mix-blend-mode: normal;
    box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    border: none;
    outline: none;

    padding: 0.5rem;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #777777;

    &::placeholder{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #BDBDBD;
    }
`