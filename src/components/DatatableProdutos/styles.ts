import styled from "styled-components";

export const DatatableProdutosContainer = styled.div`
    height: 500px;
    width: 100%;
    overflow: hidden;
    background: #F9F9F9;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    .header {
        display: flex;
        width: 500px;
    }
`
export const Action = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    svg{
        cursor: pointer;
    }
`