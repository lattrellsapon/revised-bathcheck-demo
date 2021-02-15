export default (state, action) => {
  switch (action.type) {
    // Add Step
    case 'ADD_STEP':
      return {
        ...state,
        step: state.step++,
      };
    // Question One
    case 'QUESTION_ONE_YES_OR_NO':
      return {
        ...state,
        questionOneYesNo: action.payload,
      };
    case 'QUESTION_ONE_COMPLETE':
      return {
        ...state,
        questionOneComplete: action.payload,
      };
    // Question Two
    case 'QUESTION_TWO_YES_OR_NO':
      return {
        ...state,
        questionTwoYesNo: action.payload,
      };
    case 'QUESTION_TWO_COMPLETE':
      return {
        ...state,
        questionTwoComplete: action.payload,
      };
    default:
      return state;
  }
};
