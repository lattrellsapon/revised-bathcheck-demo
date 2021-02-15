import React, { useContext, useEffect, useState } from 'react';
import { SB1Context } from '../../context/sb1/SB1State';

export const SB1_form2AdditionalQuestion = () => {
  const { questionTwoYesNo, setQuestionTwoComplete } = useContext(SB1Context);

  const [width, setWidth] = useState('');
  const [result, setResult] = useState('');

  const onChange = (e) => {
    setWidth(e.target.value);
  };

  useEffect(() => {
    let currentWidth = parseInt(width);

    if (currentWidth < 630) {
      setResult('Sorry there is insufficient space for the chair.');
      setQuestionTwoComplete(false);
    } else if (currentWidth >= 630 && currentWidth < 745) {
      setResult(
        'That works if you use accessory shorter bridge BR20-SB1 and fold up the footrest. Users may need to tuck their feet sideways until connection to the bridge has occured and the transfer started.'
      );
      setQuestionTwoComplete(true);
    } else if (currentWidth >= 745 && currentWidth < 845) {
      setResult('That works if you use accessory shorter bridge BR20-SB1.');
      setQuestionTwoComplete(true);
    } else if ((currentWidth >= 845) & (currentWidth < 950)) {
      setResult('That works if you use accessory shorter bridge BR30-SB1.');
      setQuestionTwoComplete(true);
    } else if (currentWidth >= 950) {
      setResult(
        'That works, proceed to order now and enjoy an accessible bathroom again shortly.'
      );
      setQuestionTwoComplete(true);
    } else {
      setResult(``);
      setQuestionTwoComplete(false);
    }

    // eslint-disable-next-line
  }, [width]);

  if (questionTwoYesNo === 'Yes') {
    return (
      <div>
        <p>That works.</p>
      </div>
    );
  } else if (questionTwoYesNo === 'No') {
    return (
      <div>
        <form>
          <div>
            <label>What is that dimension?</label>
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
