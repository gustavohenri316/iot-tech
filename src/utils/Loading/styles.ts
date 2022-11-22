import styled from "styled-components";

export const LoadingButtonContainer = styled.div`
    animation: is-rotating 1s infinite;
    border: 3px solid var(--white);
    border-radius: 50%;
    border-top-color: var(--gray-300);
    height: 20px;
    width: 20px;

    @keyframes is-rotating {
        to {
            transform: rotate(1turn);
        }
    }
`
export const LoadingButtonTableContainer = styled.div`
    animation: is-rotating 1s infinite;
    border: 3px solid var(--white);
    border-radius: 50%;
    border-top-color: var(--gray-300);
    height: 50px;
    width: 50px;

    @keyframes is-rotating {
        to {
            transform: rotate(1turn);
        }
    }
`