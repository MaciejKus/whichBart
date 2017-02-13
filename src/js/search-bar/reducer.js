const userAddress = (state = {
      orgAddress: {
        address: '',
        lat: 37.7,
        lng: -122.2
      }, dstAddress: {
        address: '',
        lat: 37.7,
        lng: -122.2
      }, stat: ''}, action) => {
  switch(action.type) {
    case 'WAIT_ON_ORG':
      return Object.assign({}, state, {
        orgAddress: {
          address: state.orgAddress.address,
          lat: state.orgAddress.lat,
          lng: state.orgAddress.lng,
          status: 'waiting'
        }})
    case 'WAIT_ON_DST':
      return Object.assign({}, state, {
        dstAddress: {
          address: state.dstAddress.address,
          lat: state.dstAddress.lat,
          lng: state.dstAddress.lng,
          status: 'waiting'
        }})
    case 'UPDATE_DST':
      return Object.assign({}, state, {
        dstAddress: {
          address: action.dstAddress.address,
          lat: action.dstAddress.lat,
          lng: action.dstAddress.lng,
          status: 'done'
        }})
    case 'UPDATE_ORG':
      return Object.assign({}, state, {
        orgAddress: {
          address: action.orgAddress.address,
          lat: action.orgAddress.lat,
          lng: action.orgAddress.lng,
          status: 'done'
        }})
    case 'UPDATE_STATUS':
      return Object.assign({}, state, {
        stat: action.stat
        })
    default:
      return state;
  }
};

export default userAddress
