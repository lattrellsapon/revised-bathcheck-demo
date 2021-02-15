import React, { useContext } from 'react';
import { SB1Context } from '../../context/sb1/SB1State';
import { SB1_formContainer } from '../sb1/SB1_formContainer';
import { SB1_formSwitcher } from '../sb1/SB1_formSwitcher';
import { SB1_openingStatements } from '../sb1/SB1_openingStatements';

export const SB1 = () => {
  return (
    <div>
      <SB1_openingStatements />
      <SB1_formSwitcher />
      <div>
        <SB1_formContainer />
      </div>
    </div>
  );
};
