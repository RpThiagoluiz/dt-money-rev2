import { useState } from "react";
import Modal from "react-modal";
import { NewTransactionModal } from "../../components/NewTransactionModal";
import { Header } from "../../components/Header";
import { Dashboard } from "../../components/Dashboard";

//Acessibilidade
Modal.setAppElement("#root");

export const Home = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  };

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  };
  return (
    <>
      <Header onOpen={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  );
};
