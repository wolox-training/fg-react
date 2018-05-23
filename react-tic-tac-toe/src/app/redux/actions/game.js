export const CHANGE_SQUARE = 'GAME@@CHANGE_SQUARE';
export const CHANGE_STEP_NUMBER = 'GAME@@CHANGE_SQUARE';

export const changeSquare = stepNumber => ({
  type: CHANGE_SQUARE,
  payload: {
    stepNumber
  }
});

export const changeStep = stepNumber => ({
  type: CHANGE_STEP_NUMBER,
  payload: {
    stepNumber
  }
});
