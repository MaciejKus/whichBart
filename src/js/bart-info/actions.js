export const aThing = (url) => ({
  type: 'UPDATE_Something',
  url
})

//take "4:23 AM" format and
//return object with hours (24+ and minutes)
function to24Hour(sTime) {
  let am = sTime.substr(-2);
  let digits = sTime.match(/\d+/g);
  let hour = parseInt(digits[0]);
  let min = parseInt(digits[1]);
  if(am === 'PM' !== 12) {
    hour += 12; 
  //trains run until  2:27 am in a single day so replies are over 24 hours
  } else if (hour < 3) {
    hour += 24;
  //12 AM
  } else if (hour === 12) {
    hour = 24;
  }
  return {hour: hour, min: min};
};

export const updateStartTime = (time, stn) => {
  return function(dispatch) {
    let tripTime = Date.now() + time * 1000;
    tripTime = new Date(tripTime);
    let startHour = tripTime.getHours();
    let startMin = tripTime.getMinutes();

/*
//used if need depart data from api, but need a destination for that
    let tripHour = tripTime.getHours();
    let tripAM = 'am';
    if(tripHour > 12) {
      tripHour -= 12;
      tripAM = 'pm';
    }
    let tripTimeString = tripHour + ':' + tripTime.getMinutes() + '+' +  tripAM;
*/
  
  function handler() {
     if(this.status == 200 &&
       this.responseXML != null) { 
        //processData(this.responseXML.getElementById('test').textContent);
        let times = this.responseXML.getElementsByTagName('item');
        for(var i = 0; i < times.length; i++) {
          let time = times[i].getAttribute('origTime');
          let time24 = to24Hour(time);
          if(time24.hour > startHour ||
              (time24.hour === startHour && time24.min > startMin)) {
             console.log(time); 
          }
        }
     } else {
        console.error('error fetching bart data')
     }
  }; 
  
  //https://xhr.spec.whatwg.org/
  let xhr = new XMLHttpRequest();
  xhr.onload = handler;
  xhr.open("GET", "http://api.bart.gov/api/sched.aspx?cmd=stnsched&orig=" + stn + "&date=now&key=MW9S-E7SL-26DU-VV8V" );
  xhr.send();
    
    dispatch(aThing('fff'))
  }
}
