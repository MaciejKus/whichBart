import React from 'react';
import { connect } from 'react-redux';

class GMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { zoom: 12 };
  }

	render() {
// console.log(this.props)
    return <div><div className="GMap">
      <div className='GMap-canvas' ref="mapCanvas">
      </div>
    </div>
      { this.props.station.lat } and lng is { this.props.station.lng }
    </div>
  }

  //update centering of map
  componentWillReceiveProps(nextProps) {
    if(nextProps.station.lat !== this.props.station.lat || 
         nextProps.station.lng != this.props.station.lng) {
      let addTime = this.props.addTime;

//      this.map.setCenter(new google.maps.LatLng(nextProps.lat, nextProps.lng));
      var directionsService = new google.maps.DirectionsService;
      var directionsDisplay = new google.maps.DirectionsRenderer;
      directionsDisplay.setMap(this.map)

      directionsService.route({
        origin:  new google.maps.LatLng(nextProps.add.lat, nextProps.add.lng),
        destination: new google.maps.LatLng(nextProps.station.lat, nextProps.station.lng),
        travelMode: 'BICYCLING'
      }, function(res, status) {
         if(status === 'OK') {
           directionsDisplay.setDirections(res);
           addTime(res.routes[0].legs[0].duration.value, res.routes[0].legs[0].duration.text);
         } else {
           console.error('directions failed: ' + status)
         }
      });
    }
  }


  componentDidMount() {
    // create the map, marker and infoWindow after the component has
    // been rendered because we need to manipulate the DOM for Google =(
    this.map = this.createMap()
  
    // have to define google maps event listeners here too
    // because we can't add listeners on the map until its created
    google.maps.event.addListener(this.map, 'zoom_changed', ()=> this.handleZoomChange())
  }

  // clean up event listeners when component unmounts
  componentDidUnMount() {
    google.maps.event.clearListeners(map, 'zoom_changed')
  }

  createMap() {
    let mapOptions = {
      zoom: this.state.zoom,
      center: this.mapCenter()
    }
    return new google.maps.Map(this.refs.mapCanvas, mapOptions)
  }

  mapCenter() {
    return new google.maps.LatLng(
      this.props.station.lat,
      this.props.station.lng
    )
  }

/*
  createInfoWindow() {
    let contentString = "<div class='InfoWindow'>I'm a Window that contains Info Yay</div>"
    return new google.maps.InfoWindow({
      map: this.map,
      content: contentString
    })
  }
*/
  
  handleZoomChange() {
    this.setState({
      zoom: this.map.getZoom()
    })
  }
}

export default GMap;
