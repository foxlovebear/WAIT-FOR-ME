import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

// 24.157423335094677, 120.65518800000001


const nameDesign={
  fontSize:'20px',
  textAlign: "center",
  padding:'10px'
}







function Map( { data } ){

 
  const MapWithAMarker = withScriptjs(
    
    withGoogleMap((props) => (
      
       
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 24.150910020521685, lng: 120.65168652548991 }}
      >
        <Marker
          position={{ lat: 24.150910020521685, lng: 120.65168652548991}}
        />
      </GoogleMap>
    ))
  );
  return(
    <div>
        
        <div style={ nameDesign } >
          {data[0].name}:&nbsp;{data[0].address}
        </div>
    
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB_f60KggWXNeSKfNs26dG6yuM7susvnmo&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>

  )
}


export default Map;


