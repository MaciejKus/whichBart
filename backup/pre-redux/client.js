import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './search-bar.js';
import BartDistance from './bart-distance.js';

class Main extends React.Component {
  constructor() {
    super();
    this.changeAddress = this.changeAddress.bind(this);
    this.state = {
      changeAddress: '0 drive',
      closestStation: ''
    };
  }

  getLatLng(address) {
    address = address.trim().replace(' ', '+');
    var newClose;
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == 'OK') {
          var lat = results[0].geometry.location.lat();
          var lng = results[0].geometry.location.lng();
          console.log(BartDistance(lat,lng));
        } else {
          console.error('Geocode was not successful for the following reason: ' + status);
        }
      });
}

  changeAddress(address) {
     this.setState({
       searchAddress: address
     });
     this.getLatLng(address);
  }

  render() {
    return (
      <div>
        <SearchBar
           searchAddress = {this.state.searchAddress}
	   changeAddress = {this.changeAddress}
        />
        <p>The address now is {this.state.searchAddress} </p>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);
