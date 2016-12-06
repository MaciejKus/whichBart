import React from 'react';
import { connect } from 'react-redux';

class BartInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.time.value !== this.props.time.value) {
      this.props.newTime(nextProps.time.value, nextProps.station.abbr);
    }
  }

  render() {
    if(this.props.station.name) {
      return (
      <div>
        The nearest BART station is { this.props.station.name }.
        <br />
        It will take { this.props.time.text } to get there biking. You can try to catch the following trains:
       
      </div>
      )
    } else {
      return (<div>hh</div> )
    }
  }
}

export default BartInfo;
