import { updateStation } from '../station/actions';
import bartDist from '../find-station/bart-dist';

export const updateAddress = (address) => ({
    type: 'UPDATE_ADDRESS',
    address
});

export const updateLatLng = (address, lat, lng) => ({
    type: 'UPDATE_LATLNG',
    address: address,
    lat: lat,
    lng: lng
});

export const updateStatus = (stat) => ({
    type: 'UPDATE_STATUS',
    stat
});

let prevAdd;
const getLatLng = (address, dispatch) => {
    dispatch(updateStatus('fetching data...'))
    address = address.trim(); //.replace(' ', '+');
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == 'OK') {
          var lat = results[0].geometry.location.lat();
          var lng = results[0].geometry.location.lng();
          var add = results[0].formatted_address;
          dispatch(updateStatus(''))
          if(add === prevAdd) return;
          dispatch(updateLatLng(add, lat, lng))
          dispatch(updateStation(bartDist(lat, lng)))
          prevAdd = add;
        } else {
          console.error('Geocode was not successful for the following reason: ' + status);
          dispatch(updateStatus('Geocode was not successful'))
        }
      });
};


export const fetchWithAddress = (address) => {
  if (!address.trim()) {
    return;
  }

  return function(dispatch) {
    dispatch(updateAddress(address))
    getLatLng(address, dispatch)   
  } 
}
