import styled from "styled-components";

export const LayoutDefaultContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`
export const Content = styled.div`
    display: flex;
    width: 100%;
    &:last-child{
        flex: 1;
        margin-right: 2rem;
        width: 100%;
    }
`
export const Rotas = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem 2rem;
`