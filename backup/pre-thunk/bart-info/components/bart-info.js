import React from 'react';
import { connect } from 'react-redux';

let BartInfo = (props) => {
  //THIS LO)GIX GOES SOMEWHERE ELSE
  function handler() {
     if(this.status == 200 &&
       this.responseXML != null) { //&&
//       this.responseXML.getElementById('test').textContent) {
        // success!
        //processData(this.responseXML.getElementById('test').textContent);
        console.log(this.responseText)
     } else {
        // something went wrong
console.log('error fetching bart data')
     }
  };
  
  //https://xhr.spec.whatwg.org/
  let xhr = new XMLHttpRequest();
  //second option is async (true or false)
  xhr.onload = handler;
  xhr.open("GET", "http://api.bart.gov/api/sched.aspx?cmd=depart&orig=24th&dest=rock&key=MW9S-E7SL-26DU-VV8V" );
  xhr.send();



  if(props.station.name) {
    return (
    <div>
      The nearest BART station is { props.station.name }.
      <br />
      It will take { props.time } to get there biking. You can try to catch the following trains:
       
XXX
    </div>
    )
  } else {
    return (<div>hh</div> )
  }
}

export default BartInfo;
