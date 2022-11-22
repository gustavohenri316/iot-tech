import { LayoutDefaultContainer, Content, Rotas } from "./styles";
import { Outlet } from 'react-router-dom'
import { Navbar } from "../components/Navbar";
import { Menu } from "../components/Menu";

export function LayoutDefault() {
    return (
        <LayoutDefaultContainer>
            <Navbar />
            <Content>
                <Menu />
                <Rotas>
                    <Outlet />
                </Rotas>
            </Content>
        </LayoutDefaultContainer>
    )
}