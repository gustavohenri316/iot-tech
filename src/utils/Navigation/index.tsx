import { NavigationContainer, Text } from "./styles";

interface NavigationProps {
    path: string
    name: string
    icon: any
    size: string
    menuView?: boolean
}

export function Navigation({ path, name, icon, size, menuView }: NavigationProps) {

    return (
        <NavigationContainer to={path} size={size} menuView={menuView}>
            <Text menuView={menuView}>
                {icon}
                {menuView ? name : null}
            </Text>
        </NavigationContainer>
    )
}