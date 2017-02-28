import React from 'react';
import { connect } from 'react-redux';

class BartInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.orgTime.value !== this.props.orgTime.value || 
       nextProps.dstTime.value !== this.props.dstTime.value ||  
       nextProps.departTime !== this.props.departTime) {
      this.props.newTime(nextProps.orgTime.value, nextProps.orgStation.abbr, nextProps.dstStation.abbr, nextProps.departTime);
    }
  }

  render() {
    if(this.props.orgStation.name) {
      let triptime = '';
      if(this.props.times[0]) {
       let t= parseInt((this.props.dstTime.value / 60) + (this.props.orgTime.value / 60) + parseInt(this.props.times[0].tripTime))
//       t += 5; //wait time for a bart train
       let h = Math.floor(t/60);
       let m = t % 60;
       if( m < 10) m = '0' + m;
       triptime = 'The whole trip will take around ' + h + ':' + m + " hours";
      }
      return (
      <span>
        <a name="summary"></a>
      <div className="summary">
        <h2>Trip Summary</h2>
        The nearest BART station is <strong>{ this.props.orgStation.name }</strong>.
        <br />
        It will take about <strong>{ this.props.orgTime.text }</strong> to get there by bicycle. 
        <br />
        Take BART to <strong>{ this.props.dstStation.name }</strong> Station.
        <br />
        You can catch the following trains:
        <ol>
          {this.props.times.map( (t,i) =>
             <li key={t + i}>Depart: <strong>{t.orgTime}</strong>, Arrive: <strong>{t.dstTime}</strong>, Fare: {t.fare}, Trip Time: {t.tripTime}</li>
          )} 
        </ol>
        <br />
        From { this.props.dstStation.name } Station it will take another <strong>{ this.props.dstTime.text }</strong> by bicycle to get to your destination. 
        <br />
        { triptime }
        <br />
             
      </div>
      </span>
      )
    } else {
      return (
        <a name="summary"></a>
      )
    }
  }
}

export default BartInfo;
