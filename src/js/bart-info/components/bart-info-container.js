import { connect } from 'react-redux'
//import React from 'react'
import BartInfo from './bart-info'
import { updateStartTime } from '../actions'

const mapStateToProps = (state) => {
  return {
    orgStation: {
      name: state.station.orgStation.name,
      abbr: state.station.orgStation.abbr
    },
    dstStation: {
      name: state.station.dstStation.name,
      abbr: state.station.dstStation.abbr
    },
    time: state.toBart.timeToBart,
    times: state.bartInfo.times
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newTime: (time, orgAbbr, dstAbbr) => {
      dispatch(updateStartTime(time, orgAbbr, dstAbbr));
    }
  }
};

const BartInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BartInfo);

export default BartInfoContainer
