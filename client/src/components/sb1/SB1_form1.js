import React, { useContext, useState } from 'react';
import DrawingOne from '../../images/SB1_DrawingOne.png';
import { SB1Context } from '../../context/sb1/SB1State';
import { SB1_form1AdditionalQuestion } from './SB1_form1AdditionalQuestion';
import { SB1_form1YesOrNo } from './SB1_form1YesOrNo';
import { SB1_buttonNext } from './SB1_buttonNext';

export const SB1_form1 = () => {
  const { questionOneYesNo, questionOneComplete } = useContext(SB1Context);

  return (
    <div>
      <div className='mb-20'>
        <h3 className='mb-20'>Question 1.</h3>
        <p>
          The recommended minimum width of the bathroom door, shower door, or
          walkway area, is 575mm but this can be narrower, refer to results.
        </p>
      </div>
      <div className='mtb-20 form-image-container'>
        <img src={DrawingOne} alt='' />
      </div>
      <div className='mtb-20'>
        <div className='question'>
          <p>
            Are your doorways to the bathroom, or shower and the walk through
            areas 575mm or wider? {questionOneYesNo}
          </p>
        </div>
      </div>

      {questionOneYesNo === '' ? <SB1_form1YesOrNo /> : ''}

      <SB1_form1AdditionalQuestion />

      {questionOneComplete ? <SB1_buttonNext /> : ''}
    </div>
  );
};
