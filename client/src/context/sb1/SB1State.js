import React, { createContext, useReducer } from 'react';
import SB1Reducer from './SB1Reducer';

// Initial State
const sb1State = {
  step: 1,

  questionOneYesNo: '',
  questionOneCondition: '',
  questionOneDimension: '',
  questionOneComplete: false,

  questionTwoYesNo: '',
  questionTwoCondition: '',
  questionTwoDimension: '',
  questionTwoComplete: false,
};

// Create Context
export const SB1Context = createContext(sb1State);

// Provider Component
export const SB1Provider = ({ children }) => {
  const [state, dispatch] = useReducer(SB1Reducer, sb1State);

  // Actions will go here

  // Add step
  const addStep = () => {
    dispatch({
      type: 'ADD_STEP',
    });
  };

  //   Set Question One to Yes or No
  const setQuestionOneToYesOrNo = (yesOrNo) => {
    dispatch({
      type: 'QUESTION_ONE_YES_OR_NO',
      payload: yesOrNo,
    });
  };

  // Set Question One to complete
  const setQuestionOneComplete = (trueOrFalse) => {
    dispatch({
      type: 'QUESTION_ONE_COMPLETE',
      payload: trueOrFalse,
    });
  };

  //   Set Question Two to Yes or No
  const setQuestionTwoToYesOrNo = (yesOrNo) => {
    dispatch({
      type: 'QUESTION_TWO_YES_OR_NO',
      payload: yesOrNo,
    });
  };

  // Set Question Two to complete
  const setQuestionTwoComplete = (trueOrFalse) => {
    dispatch({
      type: 'QUESTION_TWO_COMPLETE',
      payload: trueOrFalse,
    });
  };

  return (
    <SB1Context.Provider
      value={{
        //   State
        step: state.step,

        questionOneYesNo: state.questionOneYesNo,
        questionOneCondition: state.questionOneCondition,
        questionOneDimension: state.questionOneDimension,
        questionOneComplete: state.questionOneComplete,

        questionTwoYesNo: state.questionTwoYesNo,
        questionTwoCondition: state.questionTwoCondition,
        questionTwoDimension: state.questionTwoDimension,
        questionTwoComplete: state.questionTwoComplete,

        // Actions
        addStep,

        setQuestionOneToYesOrNo,
        setQuestionOneComplete,

        setQuestionTwoToYesOrNo,
        setQuestionTwoComplete,
      }}
    >
      {children}
    </SB1Context.Provider>
  );
};
