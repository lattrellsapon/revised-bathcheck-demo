import React, { useContext, useEffect, useState } from 'react';
import { SB1Context } from '../../context/sb1/SB1State';

export const SB1_form1AdditionalQuestion = () => {
  const { questionOneYesNo, setQuestionOneComplete } = useContext(SB1Context);

  const [width, setWidth] = useState('');
  const [result, setResult] = useState('');

  const onChange = (e) => {
    setWidth(e.target.value);
  };

  useEffect(() => {
    let currentWidth = parseInt(width);

    if (currentWidth < 460) {
      setResult('Sorry, but the chair will not fit through that doorway.');
      setQuestionOneComplete(false);
    } else if (currentWidth >= 460 && currentWidth < 515) {
      setResult(
        'That can work with both arms removed but they must be refitted after passing through the door. Chest and lap belts must be in-use.'
      );
      setQuestionOneComplete(true);
    } else if (currentWidth >= 515 && currentWidth < 575) {
      setResult(
        'That can work with one arm removed but that must be refitted after passing through the door. Chest and lap belts must be in-use.'
      );
      setQuestionOneComplete(true);
    } else if (currentWidth >= 575) {
      setResult('That works, proceed to the next dimension.');
      setQuestionOneComplete(true);
    } else {
      setResult(``);
      setQuestionOneComplete(false);
    }
    // eslint-disable-next-line
  }, [width]);

  if (questionOneYesNo === 'Yes') {
    return (
      <div>
        <p>That works.</p>
      </div>
    );
  } else if (questionOneYesNo === 'No') {
    return (
      <div>
        <form>
          <div>
            <label>How wide is the narrowest dimension?</label>
            <input
              type='text'
              className='input-field'
              name='width'
              value={width}
              onChange={onChange}
            />
          </div>
          <div className='mtb-20'>
            <p>{result}</p>
          </div>
        </form>
      </div>
    );
  } else {
    return <div></div>;
  }
};
