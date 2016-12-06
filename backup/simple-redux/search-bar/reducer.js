const updateAdd = (state = {address: 'init address'}, action) => {
  switch(action.type) {
    case 'UPDATE_ADDRESS':
      console.log('address updating!')
      return Object.assign({}, state, {
        address: action.address })
    default:
      return state;
  }
};

export default updateAdd
