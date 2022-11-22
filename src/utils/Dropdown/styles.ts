import styled from "styled-components";

interface DropdownProps {
    menuView?: boolean
}

export const DropdownContainer = styled.button<DropdownProps>`
    border: none;
    cursor: pointer;
    width: ${({menuView}) => menuView ? '215px' : '3rem'} ;
    height: 2.5rem;
    background: transparent;
    mix-blend-mode: normal;
    border-radius: 5px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: ${({menuView}) => menuView ? 'space-between' : 'center'} ;
    color: #777777;
    &:hover {
        background: #ff9c00;
        color: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`
export const Text = styled.span`
   font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-transform: capitalize;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`
