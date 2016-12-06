import { connect } from 'react-redux'
import SearchBar from './search-bar'
import { updateAddress } from '../actions';
import { updateLatLng } from '../actions';
import { updateStatus } from '../actions';
import { updateStation } from '../station-actions';
import bartDist from '../../find-station/bart-dist';

const mapStateToProps = (state) => {
  return {
    stat: state.userAddress.stat,
    address: state.userAddress.address
  }
};

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

const mapDispatchToProps = (dispatch) => {
//show status, once the api call resolves update address/lat/lng/status
//if rejected update status and address
//move this to actions http://redux.js.org/docs/advanced/AsyncActions.html
  return {
    onClick: (address) => {
      if (!address.trim()) {
        return;
      }
      dispatch(updateAddress(address))
      getLatLng(address, dispatch)
    }
  }
};

const SearchAddress = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)

export default SearchAddress

