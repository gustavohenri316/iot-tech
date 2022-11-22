import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { Button } from "../../utils/Button";
import { Input } from "../../utils/Input";
import { FilterProdutosContainer, Content, Label } from "./styles";

export function FilterProdutos() {
    const [buscarProdutos, setBuscarProdutos] = useState<string>('')
    const [buscarQuantidade, setBuscarQuantidade] = useState<string>('')
    const [buscarDataCompra, setBuscarDataCompra] = useState<string>('')
    const [find, setFind] = useState({})

    function handleClick() {
        setFind({buscarProdutos, buscarQuantidade, buscarDataCompra })
    }

    return (
        <FilterProdutosContainer>
            <Content>
                <Label>Produto</Label>
                <Input
                    type="text"
                    placeholder="Buscar Produtos"
                    value={buscarProdutos}
                    setValue={setBuscarProdutos}
                    width='100%'
                    height='2.5rem'
                />
            </Content>
            <Content>
                <Label>Quantidade</Label>
                <Input
                    type="text"
                    placeholder="Buscar Quantidade"
                    value={buscarQuantidade}
                    setValue={setBuscarQuantidade}
                    width='100%'
                    height='2.5rem'
                />
            </Content>
            <Content>
                <Label>Data Compra</Label>
                <Input
                    type="text"
                    placeholder="Buscar Data de Compra"
                    value={buscarDataCompra}
                    setValue={setBuscarDataCompra}
                    width='100%'
                    height='2.5rem'
                />
            </Content>
            <Content>
                <Button
                    icon={<MagnifyingGlass size={20} /> }
                    nome='Buscar Produtos'
                    bg="gray"
                    width='100%'
                    height='2.5rem'
                    fontColor='#fff'
                    onClick={handleClick}
                />
            </Content>
        </FilterProdutosContainer>
    )
}