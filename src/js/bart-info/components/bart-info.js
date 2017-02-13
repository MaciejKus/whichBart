import React from 'react';
import { connect } from 'react-redux';

class BartInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.time.value !== this.props.time.value) {
      this.props.newTime(nextProps.time.value, nextProps.orgStation.abbr, nextProps.dstStation.abbr);
    }
  }

  render() {
    if(this.props.orgStation.name) {
      return (
      <div>
        The nearest BART station is { this.props.orgStation.name }. Get off at { this.props.dstStation.name }.
        <br />
        It will take { this.props.time.text } to get there biking. You can try to catch the following trains:
        <ol>
          {this.props.times.map( (t,i) =>
             <li key={t + i}>Depart: {t.orgTime}, Arrive: {t.dstTime}, Fare: {t.fare}</li>
          )} 
        </ol>
                
      </div>
      )
    } else {
      return (<div>bart station info</div> )
    }
  }
}

export default BartInfo;
