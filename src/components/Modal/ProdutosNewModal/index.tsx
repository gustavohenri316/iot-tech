import { useState, } from "react";
import Modal from 'react-modal'
import { ProdutosModalContainer } from "./styles";


interface ProdutosNewModalProps {
  isOpen: boolean;
  onRequestClose: () => void
}
export function ProdutosNewModal({ isOpen, onRequestClose }: ProdutosNewModalProps) {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <ProdutosModalContainer>
        <h3>Cadastrar Novo Produto</h3>

      </ProdutosModalContainer>
    </Modal>
  )
}