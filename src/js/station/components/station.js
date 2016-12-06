import React from 'react';
import { connect } from 'react-redux';

//make choice of nearest bart station
let Station = (props) => {
  if(props.station.name) {
    return (
    <div>
      The nearest BART station is { props.station.name }.
    </div>
    )
  } else {
    return (<div></div> )
  }
}

export default Station;
