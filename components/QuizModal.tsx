import React, { useState } from "react";
import Quiz from "./Quiz";

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
        className='bg-green-700 text-white px-4 py-2 rounded w-full lg:w-auto'
      >
        Take Quiz
      </button>
      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='bg-white w-[2000px] h-full'>
            <button
              onClick={closeModal}
              className='absolute text-4xl top-4 right-4 text-gray-500 hover:text-gray-700'
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
