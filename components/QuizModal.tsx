// components/QuizModal.tsx
import React, { useState } from "react";
import Quiz from "./quiz";

const QuizModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCloseOnOverlay = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <button
        onClick={openModal}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Take Quiz
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-[200px] h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-700"
            >
              &times;
            </button>
            <Quiz />
          </div>
  
        </div>
      )}
    </>
  );
};

export default QuizModal;
