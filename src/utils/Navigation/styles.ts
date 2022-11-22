import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface NavigationProps{
    size?: string
    menuView?: boolean
}

export const NavigationContainer = styled(NavLink)<NavigationProps>`
    cursor: pointer;
    text-decoration: none;
    width: ${({size, menuView}) => (!menuView && size === '200px') ? '2.5rem' : size && (!menuView && size === '215px') ? '3rem' : size};
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
        box-shadow: ${({menuView}) => menuView ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : 'none'} ;
    }

    &:active {
        background: #777777;
        color: #ffff;
    }
`
export const Text = styled.span<NavigationProps>`
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