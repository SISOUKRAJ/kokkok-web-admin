const { compose } = require("recompose");
const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } = require("react-google-maps");

  const MapWithAMarker = compose(
    withScriptjs,
    withGoogleMap
  )(props =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
      />
    </GoogleMap>

  );
  
  const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");
  
  const ShowMap=()=>{
    const apimap='AIzaSyBNctHAdz7P-KkAjCCOYagOcyBLwZn5jiw';
return(
    
    <>
    
    <MapWithAMarker
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBNctHAdz7P-KkAjCCOYagOcyBLwZn5jiw&v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
>

  </MapWithAMarker>

</>
)

  }
  
  export default ShowMap;