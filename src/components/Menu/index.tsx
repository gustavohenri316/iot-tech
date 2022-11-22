import { Dropdown } from "../../utils/Dropdown";
import { MenuContainer, Content, DropdownContainer, LeftArrow } from "./styles";
import { Wrench, Gauge, UserGear, ArrowLeft, ArrowRight, QrCode, Users, CurrencyDollar } from 'phosphor-react'
import { Navigation } from "../../utils/Navigation";
import { useState } from "react";

export function Menu() {
    const [menuView, setMenuView] = useState<boolean>(true)
    const [settingsView, setSettingsView] = useState<boolean>(false)
    const [usuariosView, setUsuariosView] = useState<boolean>(false)

    return (
        <MenuContainer menuView={menuView}>
            <LeftArrow menuView={menuView}>
                {menuView ? <ArrowLeft size={20} className='arrow' onClick={() => setMenuView(false)} />
                    : <ArrowRight size={20} className='arrow' onClick={() => setMenuView(true)} />}
            </LeftArrow>
            <Content>
                <Navigation size='95%' name="TELA 1" path="/io-tech/Produtos" icon={<Gauge size={20} />} menuView={menuView} />
                <Navigation size='95%' name="TELA 2" path="/io-tech/Produtos" icon={<QrCode size={20} />} menuView={menuView} />
                <Navigation size='95%' name="TELA 3" path="/io-tech/Produtos" icon={<Users size={20} />} menuView={menuView} />
                <Navigation size='95%' name="TELA 4" path="/io-tech/Produtos" icon={<CurrencyDollar size={20} />} menuView={menuView} />
                <DropdownContainer
                    view={settingsView}
                    onClick={() => { !settingsView ? setSettingsView(true) : setSettingsView(false) }}
                >
                    <Dropdown text='Configurações' icon={<Wrench size={20} />} menuView={menuView} />
                    {
                        settingsView ? (
                            <>
                                <Navigation size='200px' name='Usuarios' path="/io-tech/Usuarios" icon={<UserGear size={20} />} menuView={menuView} />
                                <Navigation size='200px' name='Notificações' path="/io-tech/Usuarios" icon={<UserGear size={20} />} menuView={menuView} />
                                <Navigation size='200px' name='Mensages' path="/io-tech/Usuarios" icon={<UserGear size={20} />} menuView={menuView} />
                            </>
                        ) : null
                    }
                </DropdownContainer>
                <DropdownContainer
                    view={usuariosView}
                    onClick={() => { !usuariosView ? setUsuariosView(true) : setUsuariosView(false) }}
                >
                    <Dropdown text='Usuarios' icon={<Wrench size={20} />} menuView={menuView} />
                    {
                        usuariosView ? (
                            <>
                                <Navigation size='200px' name='Usuarios' path="/io-tech/Usuarios" icon={<UserGear size={20} />} menuView={menuView} />
                                <Navigation size='200px' name='Notificações' path="/io-tech/Usuarios" icon={<UserGear size={20} />} menuView={menuView} />
                                <Navigation size='200px' name='Mensages' path="/io-tech/Usuarios" icon={<UserGear size={20} />} menuView={menuView} />
                            </>
                        ) : null
                    }
                </DropdownContainer>
            </Content>
        </MenuContainer>
    )
}