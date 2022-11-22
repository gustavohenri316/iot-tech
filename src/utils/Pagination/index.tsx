import { PaginationContainer } from "./styles";

interface PaginationProps {
    nome: string
}

export function Pagination(props : PaginationProps) {
    return(
        <PaginationContainer >
           <i>{props.nome}</i>
        </PaginationContainer>
    )
}