import styled, {css} from "styled-components";

interface ButtonProps {
    bg: string
    width: string
    fontColor?: string
    height?: string
}

export const ButtonContainer = styled.button<ButtonProps>`
    width: ${(props) => props.width };
    height: ${(props) => props.height ? props.height : '38px'};
    background-color: ${(props) => props.bg };
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    border: none;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: ${(props) => props.fontColor ? props.fontColor : 'black'};
    transition: all .3s;
    &:hover{
        filter: brightness(0.9);
    }

`