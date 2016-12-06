const toBart = (state = {timeToBart: {text: '', time: 0}}, action) => {
  switch(action.type) {
    case 'UPDATE_TIME_TO_BART':
      return Object.assign({}, state, {
        timeToBart: action.timeToBart
        })
    default:
      return state;
  }
};

export default toBart
