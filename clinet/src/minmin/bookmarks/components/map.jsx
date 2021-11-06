import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

// 24.157423335094677, 120.65518800000001

class Map extends React.Component {
  render() {
    const MapWithAMarker = withScriptjs(
      withGoogleMap((props) => (
        <GoogleMap
          defaultZoom={16}
          defaultCenter={{ lat: 24.157423335094677, lng: 120.65518800000001 }}
        >
          <Marker
            position={{ lat: 24.157423335094677, lng: 120.65518800000001 }}
          />
        </GoogleMap>
      ))
    );
    return (
      <div>
        &nbsp;
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB_f60KggWXNeSKfNs26dG6yuM7susvnmo&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Map;

// import React, { Component } from 'react';
// class Map  extends React.Component {
//     render() {
//         return <div>

//         </div>
//     }
// }

// export default  Map  ;
