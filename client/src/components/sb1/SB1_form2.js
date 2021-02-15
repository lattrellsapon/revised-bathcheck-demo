import React, { useContext, useState } from 'react';
import DrawingTwo from '../../images/SB1_DrawingTwo.png';
import { SB1Context } from '../../context/sb1/SB1State';
import { SB1_buttonNext } from './SB1_buttonNext';
import { SB1_form2YesOrNo } from './SB1_form2YesOrNo';
import { SB1_form2AdditionalQuestion } from './SB1_form2AdditionalQuestion';

export const SB1_form2 = () => {
  const { questionTwoYesNo, questionTwoComplete } = useContext(SB1Context);

  return (
    <div>
      <div className='mb-20'>
        <h3 className='mb-20'>Question 2.</h3>
        <p>
          The recommended space in front of the shower doors, for connection of
          the chair to the bridge and shower base is 950mm, but this can be
          reduced using an accessory.
        </p>
      </div>
      <div className='mtb-20 form-image-container'>
        <img src={DrawingTwo} alt='' />
      </div>
      <div className='mtb-20'>
        <div className='question'>
          <p>Do you have 950mm in front of the shower? {questionTwoYesNo}</p>
        </div>
      </div>

      {questionTwoYesNo === '' ? <SB1_form2YesOrNo /> : ''}

      <SB1_form2AdditionalQuestion />

      {questionTwoComplete ? <SB1_buttonNext /> : ''}
    </div>
  );
};
