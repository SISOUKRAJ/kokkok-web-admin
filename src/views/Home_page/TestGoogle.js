import { GoogleMap,withScriptjs,withGoogleMap,Marker ,InfoWindow} from "react-google-maps";
import React from 'react'

function Map(){
const [selectedPark,setSelectedPark]=React.useState(null);

    return <GoogleMap defaultZoom={10} defaultCenter={{lat:45.421532,lng:-75.697189}}>


{/*parksData.features.map((park)=>(
    <Marker key={park.properties.PARK_ID} position={{
        lat:park.geometry.coordinates[1],
        lng:park.geometry.coordinates[0]  }}

        onClick={() =>{

            setSelectedPark(park);
        }} 
        icon={{
            url:'/skateboading.svg',
            scaledSize: new window.google.maps.Size(25,25)
        }}
        />

))*/
}

{selectedPark && (
    <InfoWindow position={{
        lat: selectedPark.geometry.coordinates[1],
        lng: selectedPark.geometry.coordinates[0]
    }}
    onCloseClick={()=>{
        setSelectedPark(null)
    }}
    >
        <div> 
            <h2> {selectedPark.properties.NAME}           </h2>
        <p>{selectedPark.properties.DESCRIPTION}</p>
        </div>
<div>park details</div>

    </InfoWindow>
)}


        </GoogleMap>

}


const PlaceJSON="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp"

const WrappedMap=withScriptjs(withGoogleMap(Map))



export default function App(){
    return <div style={{width:'100wv',height:"100vh"}}>map here
    
    <WrappedMap 
     googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyBNctHAdz7P-KkAjCCOYagOcyBLwZn5jiw&v=3.exp&
     libraries=geometry,drawing,places'
     loadingElement={<div style={{ height: `100%` }} />}
     containerElement={<div style={{ height: `400px` }} />}
     mapElement={<div style={{ height: `100%` }} />}
     ></WrappedMap>
    </div>
}