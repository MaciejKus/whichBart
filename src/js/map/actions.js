var UPDATE_TIME_TO_BART = 'UPDATE_TIME_TO_BART'; 

export const addToBartTime = (value, text) => ({
    type: UPDATE_TIME_TO_BART,
    timeToBart: {
      value: value,
      text: text
    }
});

