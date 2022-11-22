import { useEffect, useState } from "react";
import DatatableProdutos from "../../components/DatatableProdutos";
import { FilterProdutos } from "../../components/FilterProdutos";
import { ProdutosContainer, Total, Content, Section, ButtonContent } from "./styles";

import data from '../../assets/data.json'
import { Button } from "../../utils/Button";
import { FileCsv, Plus } from "phosphor-react";
import { Pagination } from "../../utils/Pagination";
import { ProdutosNewModal } from "../../components/Modal/ProdutosNewModal";

export function Produtos() {
    const [items, setItems] = useState<any>([])
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }
    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    useEffect(() => {
        setItems(data)
    }, [])

    return (
        <>
            <ProdutosContainer>
                <Pagination nome="Produtos >" />
                <FilterProdutos />
                <Content>
                    <Section>
                        <Total>{items.length} resultados</Total>
                        <ButtonContent>
                            <Button
                                bg="#ff9c00"
                                height='2.5rem'
                                width="30%"
                                nome="CADASTRAR "
                                fontColor="white"
                                icon={<Plus size={20} />}
                                onClick={handleOpenNewTransactionModal}
                            />
                            <Button
                                bg="#ff9c00"
                                height='2.5rem'
                                width="30%"
                                nome="EXPORTAR"
                                fontColor="white"
                                icon={<FileCsv size={20} />}
                            />
                        </ButtonContent>
                    </Section>
                    <DatatableProdutos data={items} />
                </Content>
            </ProdutosContainer>
            <ProdutosNewModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
            />
        </>
    )
}