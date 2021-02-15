import React, { useContext } from 'react';
import { SB1Context } from '../../context/sb1/SB1State';

export const SB1_form1YesOrNo = () => {
  const { setQuestionOneToYesOrNo, setQuestionOneComplete } = useContext(
    SB1Context
  );

  const completeQuestionOne = () => {
    setQuestionOneToYesOrNo('Yes');
    setQuestionOneComplete(true);
  };

  return (
    <div className='mtb-20 yes-no-container'>
      <div className='yes-no-buttons-container'>
        <button className='questions-buttons' onClick={completeQuestionOne}>
          YES
        </button>
      </div>
      <div className='yes-no-buttons-container'>
        <button
          className='questions-buttons'
          onClick={() => setQuestionOneToYesOrNo('No')}
        >
          NO
        </button>
      </div>
    </div>
  );
};
