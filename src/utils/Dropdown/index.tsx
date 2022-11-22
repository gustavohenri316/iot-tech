import { DropdownContainer, Text } from "./styles";
import { CaretDown, CaretUp } from 'phosphor-react'
import { useState } from "react";

interface DropdownProps {
    text: string
    icon?: any
    menuView?: boolean
}
export function Dropdown({ text, icon, menuView }: DropdownProps) {
    const [caretDown, setCaretDown] = useState(true)

    function handleCaret() {
        if (caretDown) {
            setCaretDown(false)
        } else { setCaretDown(true) }
    }
    return (
        <DropdownContainer onClick={handleCaret} menuView={menuView}>
            <Text>
                {icon}
                {menuView ? text : null}
            </Text>
            {menuView ? (caretDown ? <CaretDown size={20} /> : <CaretUp size={20} />) : null}
        </DropdownContainer>
    )
}