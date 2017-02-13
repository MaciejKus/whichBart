import { connect } from 'react-redux'
import GMap from './map'
import React from 'react'
import { addToBartTime } from '../actions'

const mapStateToProps = (state) => {
  return {
    dst: {
      lat: state.station.orgStation.lat,
      lng: state.station.orgStation.lng,
      status: state.station.orgStation.status
    }, org: {
      lat: state.userAddress.orgAddress.lat,
      lng: state.userAddress.orgAddress.lng,
      status: state.userAddress.orgAddress.status
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTime: (value, text) => {
      dispatch(addToBartTime(value, text));
    }
  }
};

const GoogleMap = connect(
  mapStateToProps,
  mapDispatchToProps
)(GMap);

export default GoogleMap
/*
const GoogleMap = () => (
 <div>map</div>
)

export default GoogleMap
*/
