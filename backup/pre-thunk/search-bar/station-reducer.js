const station = (state = {name: '', lat: 37.80, lng: -122.25},  action) => {
  switch(action.type) {
    case 'UPDATE_STATION':
      return Object.assign({}, state, {
        address: action.address,
        lat: action.lat,
        lng: action.lng,
        name: action.name
        })
    default:
      return state;
  }
};

export default station
