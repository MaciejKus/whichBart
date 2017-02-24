import { connect } from 'react-redux'
import Directions from './directions'
import React from 'react'

const mapStateToProps = (state) => {
  return {
    directions: state.toBart.dstDirections
  }
}

/*
const mapDispatchToProps = (dispatch) => {
  return {
    addTime: (value, text) => {
//      dispatch(addToBartTime(value, text));
    },
    addDirections: (array) => {
      dispatch(addBartDirectionDsts(array, 'UPDATE_DIRECTIONS_DST'));
    }
  }
};
*/

const DstDirections = connect(
  mapStateToProps
)(Directions);

export default DstDirections
