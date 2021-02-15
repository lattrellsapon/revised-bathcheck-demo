import React, { useContext } from 'react';
import { SB1Context } from '../../context/sb1/SB1State';

export const SB1_form2YesOrNo = () => {
  const { setQuestionTwoToYesOrNo, setQuestionTwoComplete } = useContext(
    SB1Context
  );

  const completeQuestionTwo = () => {
    setQuestionTwoToYesOrNo('Yes');
    setQuestionTwoComplete(true);
  };

  return (
    <div className='mtb-20 yes-no-container'>
      <div className='yes-no-buttons-container'>
        <button className='questions-buttons' onClick={completeQuestionTwo}>
          YES
        </button>
      </div>
      <div className='yes-no-buttons-container'>
        <button
          className='questions-buttons'
          onClick={() => setQuestionTwoToYesOrNo('No')}
        >
          NO
        </button>
      </div>
    </div>
  );
};
