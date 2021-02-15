import React, { useContext } from 'react';
import { SB1Context } from '../../context/sb1/SB1State';
import { SB1_form1 } from './SB1_form1';
import { SB1_form2 } from './SB1_form2';

export const SB1_formContainer = () => {
  const { step } = useContext(SB1Context);

  switch (step) {
    case 1:
      return (
        <div className='form-container'>
          <SB1_form1 />
        </div>
      );
    case 2:
      return (
        <div className='form-container'>
          <SB1_form2 />
        </div>
      );
    case 3:
      return (
        <div className='form-container'>
          <h1>Statement 3</h1>
        </div>
      );
    case 4:
      return (
        <div className='form-container'>
          <h1>Statement 4</h1>
        </div>
      );
    case 5:
      return (
        <div className='form-container'>
          <h1>Statement 5</h1>
        </div>
      );
    case 6:
      return (
        <div className='form-container'>
          <h1>Statement 6</h1>
        </div>
      );
    case 7:
      return (
        <div className='form-container'>
          <h1>Statement 7</h1>
        </div>
      );

    default:
      break;
  }
};
