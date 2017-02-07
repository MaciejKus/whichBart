import { connect } from 'react-redux'
//import React from 'react'
import BartInfo from './bart-info'
import { updateStartTime } from '../actions'

const mapStateToProps = (state) => {
  return {
    station: {
      name: state.station.name,
      abbr: state.station.abbr
    },
    time: state.toBart.timeToBart,
    times: state.bartInfo.times
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newTime: (time, abbr) => {
      dispatch(updateStartTime(time, abbr));
    }
  }
};

const BartInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BartInfo);

export default BartInfoContainer
