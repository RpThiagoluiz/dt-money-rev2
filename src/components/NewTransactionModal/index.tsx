import { FormEvent } from "react";
import Modal from "react-modal";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import closeImg from "../../assets/close.svg";
import * as S from "./styles";
import { useState } from "react";
import { useTransaction } from "../../context/TransactinsContext";

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export const NewTransactionModal = ({ isOpen, onRequestClose }: Props) => {
  const [formData, setFormData] = useState({
    title: "",
    amount: 0,
    category: "",
  });
  const [type, setType] = useState("deposit" || "withdraw");

  const { createTransaction } = useTransaction();

  const handleFormDataTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
  const handleFormDataValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => {
      return { ...prevState, amount: Number(event.target.value) };
    });
  };
  const handleFormDataCategory = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prevState) => {
      return { ...prevState, category: event.target.value };
    });
  };

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault();

    await createTransaction({
      id: Math.random() * 9,
      ...formData,
      type,
      createdAt: String(new Date("2021-02-12 09:00:00")),
    });

    setFormData({
      title: "",
      amount: 0,
      category: "",
    });
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        className="react-modal-close"
        type="button"
        onClick={onRequestClose}
      >
        <img
          src={closeImg}
          alt="icone de fundo transparente, com um x vermelho no meio"
        />
      </button>
      <S.Form onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transacao</h2>
        <input
          placeholder="Titulo"
          value={formData.title}
          onChange={handleFormDataTitle}
        />
        <input
          type="number"
          placeholder="Valor"
          value={formData.amount}
          onChange={handleFormDataValue}
        />
        <input
          placeholder="Categoria"
          value={formData.category}
          onChange={handleFormDataCategory}
        />
        <S.TransactionTypeContainer>
          <S.ButtonTypeTransaction
            isActive={type === "deposit"}
            Activecolor="green"
            type="button"
            //className={type === "deposit" ? "active" : ""}
            onClick={() => setType("deposit")}
          >
            <img
              src={incomeImg}
              alt="Entrada, icone de fundo branco, redondo com as bordas e um seta apontando para cima na cor verde"
            />
            <span>Entrada</span>
          </S.ButtonTypeTransaction>
          <S.ButtonTypeTransaction
            isActive={type === "withdraw"}
            Activecolor="red"
            type="button"
            //className={type === "withdraw" ? "active" : ""}
            onClick={() => setType("withdraw")}
          >
            <img
              src={outcomeImg}
              alt="Saida, icone de fundo branco, redondo com as bordas e um seta apontando para baixo na cor vermelha"
            />
            <span>Saida</span>
          </S.ButtonTypeTransaction>
        </S.TransactionTypeContainer>
        <button type="submit">Cadastrar</button>
      </S.Form>
    </Modal>
  );
};
