import React, { useContext } from 'react';
import { SB1Context } from '../../context/sb1/SB1State';

export const SB1_buttonNext = () => {
  const { addStep } = useContext(SB1Context);

  const goToNextQuestion = () => {
    addStep();
  };

  return (
    <div className='flex-end-right'>
      <button className='next-button' onClick={goToNextQuestion}>
        NEXT
      </button>
    </div>
  );
};
