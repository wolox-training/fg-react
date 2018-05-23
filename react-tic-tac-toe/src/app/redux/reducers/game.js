import { CHANGE_SQUARE, CHANGE_STEP_NUMBER } from '../actions/game';

const initialState = {
  stepNumber: 0,
  xIsNext: true
};

export default function game(state = initialState, action) {
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
}
