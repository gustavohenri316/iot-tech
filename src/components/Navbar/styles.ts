import styled from "styled-components";

export const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 4.18rem;
    box-shadow:0px 2px 2px rgba(0, 0, 0, 0.25);
    background: white;
    padding: 0.5rem 2rem;
`
export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7rem;
    a{
        text-decoration: none;
        color: black;
    }
    img {
        width: 168px;
        height: 100%;
    }
`
export const Line = styled.div`
    height: 60px;
    width: 1px;
    background: var(--gray-200);
    border: 1px solid var(--gray-200);
`
export const Section = styled.div`
    flex: 1;
    display: flex;
    justify-content: end;
`