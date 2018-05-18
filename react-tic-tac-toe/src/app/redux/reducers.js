import { CHANGE_SQUARE, CHANGE_STEP_NUMBER } from './actions';

const initialState = {
  stepNumber: 0,
  xIsNext: true
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SQUARE:
      return {
        stepNumber: action.payload.stepNumber,
        xIsNext: !state.xIsNext
      };
    case CHANGE_STEP_NUMBER:
      return {
        stepNumber: action.payload.stepNumber,
        xIsNext: action.payload.stepNumber % 2 === 0
      };
    default:
      return state;
  }
};

export default rootReducer;
