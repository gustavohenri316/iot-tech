import { ButtonContainer } from "./styles";

interface ButtonProps {
    nome?: string
    bg: string
    width: string
    height: string
    fontColor?: string
    icon?: any
    onClick?: any
    value?: any
}
export function Button(props: ButtonProps) {
    return (
        <ButtonContainer
            bg={props.bg}
            width={props.width}
            fontColor={props.fontColor}
            height={props.height}
            onClick={props.onClick}
            value={props.value}
        >
            {props.icon}
            {props.nome}
        </ButtonContainer>
    )
}