import { InputContainer } from "./styles";

interface InputProps {
    type: string
    placeholder: string
    value: any
    setValue: any
    width?: string
    height?: string
}

export function Input({ type, placeholder, value, setValue, height, width }: InputProps) {
    return (
        <InputContainer
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e: any) => setValue(e.target.value) }
            width={width}
            height={height}
        />
    )
}