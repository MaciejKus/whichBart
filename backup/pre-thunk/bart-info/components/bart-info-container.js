import { connect } from 'react-redux'
//import React from 'react'
import BartInfo from './bart-info'

const mapStateToProps = (state) => {
  return {
    station: {
      name: state.station.name
    },
    time: state.toBart.timeToBart.text
  }
}

/*
const mapDispatchToProps = (dispatch) => {
  return {
    addTime: (value, text) => {
      dispatch(addToBartTime(value, text));
    }
  }
};
*/

const BartInfoContainer = connect(
  mapStateToProps
)(BartInfo);

export default BartInfoContainer
