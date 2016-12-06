const userAddress = (state = {address: 'init address', stat: ''}, action) => {
  switch(action.type) {
    case 'UPDATE_ADDRESS':
      return Object.assign({}, state, {
        address: action.address
        })
    case 'UPDATE_STATUS':
      return Object.assign({}, state, {
        stat: action.stat
        })
    case 'UPDATE_LATLNG':
      return Object.assign({}, state, {
        address: action.address,
        lat: action.lat,
        lng: action.lng
        })
    default:
      return state;
  }
};

export default userAddress
