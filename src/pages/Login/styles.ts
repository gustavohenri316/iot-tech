import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logoImg from '../../assets/images/2-removebg-preview.png'

export const LoginContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    //background-image: url(${logoImg});
    background: gray;
    //background: linear-gradient(90deg, rgba(248,251,193,0.6908964269301471) 0%, rgba(255,208,71,1) 35%, rgba(164,122,0,0.5704482476584384) 100%); 
`

export const Content = styled.div`
    width: 20rem;
    height: 25.93rem;
    box-shadow: 2px 6px 6px rgba(0, 0, 0, 0.25);
    background: white;
    /* background: linear-gradient(
        90deg, rgba(223,223,223,1) 0%,
        rgba(210,210,222,1) 35%,
        rgba(238,238,238,0.7385154745491946) 100%); */
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`
export const Logo = styled.h1`
    color: black;

    img {
        width: 178px;
        height: 5rem;
    }
`
export const FormContainer = styled.form`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
`
export const FormContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 0.250rem;
`
export const Label = styled.label`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.87rem;
    color: var(--gray-300);
`
export const Input = styled.input`
    width: 15.93rem;
    height: 2.5rem;
    background: var(--gray-50);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    border: none;
    outline: none;
    padding-left: 0.5rem;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 0.87rem;
    color: var(--gray-300);

    &::placeholder{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 300;
        font-size: 0.87rem;
        color: var(--gray-300);
    }

`
export const Navigation = styled(NavLink)`
    font-size: 0.75rem;
`
export const Button = styled.button`
    width: 15.93rem;
    height: 2.5rem;
    margin-top: 1rem;
    cursor: pointer;
    background: #ff9c00;
    border: none;
    border-radius: 5px;
    color: var(--gray-50);
    font-family: 'Lato', sans-serif;
    font-size: 0.87rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;

    &:hover{
        filter: brightness(0.9);
    }
`