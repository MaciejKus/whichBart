import { connect } from 'react-redux'
import GMap from './map'
import React from 'react'
import { addToBartTime } from '../actions'

const mapStateToProps = (state) => {
  return {
    station: {
      lat: state.station.lat,
      lng: state.station.lng
    }, add: {
      lat: state.userAddress.lat,
      lng: state.userAddress.lng
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
