import { NavLink } from "react-router-dom"
import { NavbarContainer, Content, Section, Line, Logo } from "./styles"
import logoImg from '../../assets/images/Frame.svg'

export function Navbar() {
    return (
        <NavbarContainer>
            <Content>
                <Logo>
                    <NavLink to='/io-tech/home'>
                        <img src={logoImg} alt="" />
                    </NavLink>
                    <Line></Line>
                </Logo>
                <Section>
                    <NavLink to='/'>Sair</NavLink>
                </Section>
            </Content>
        </NavbarContainer>
    )
}
