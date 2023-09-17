import React from "react";
import { ICard } from "../Card";

 // Certifique-se de importar ICard do local correto

interface Props {
  isModalVisible: boolean;
  selectedCardInfo: ICard;
  closeModal: () => void;
}

const CardsSelected: React.FC<Props> = ({ isModalVisible, selectedCardInfo, closeModal }) => {
  return (
    <div>
      {isModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal p-4 bg-white w-64 rounded shadow-md">
            <h2 className="text-lg font-bold mb-2">Detalhes do Cartão</h2>
            <p>Nome: {selectedCardInfo.title}</p>
            <p>Preço: {selectedCardInfo.originalPrice}</p>
            {/* Adicione mais informações conforme necessário */}
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
            >
              Fechar Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default CardsSelected



