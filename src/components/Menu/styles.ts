import styled from "styled-components";

interface MenuProps {
    menuView: boolean
}
export const MenuContainer = styled.div<MenuProps>`
    width:  ${({ menuView }) => menuView ? '17.5rem' : '5rem'};
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 0px 8px 0px 8px ;
    flex-direction: column;
    background: var(--white);
`
export const LeftArrow = styled.div<MenuProps>`
    width: 100%;
    display: flex;
    justify-content: end;
    padding: ${({ menuView }) => menuView ? '1rem 1rem' : '1rem 0rem'};
    color: #777777;
    svg {
        cursor: pointer;
        color: black;
    }
`
export const Content = styled.div`
    width: 100%;
    max-height: 80vh;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
`
interface DropdownContainerProps {
    view: boolean
}

export const DropdownContainer = styled.button<DropdownContainerProps>`
    cursor: pointer;
    border: none;
    padding-bottom: 0.5rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    background: ${({ view }) => view ? 'var(--gray-100)' : 'transparent'};
    box-shadow: ${({ view }) => view ? '0px 0px 4px rgba(0, 0, 0, 0.25)' : 'transparent'};
`