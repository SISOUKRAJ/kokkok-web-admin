/* eslint-disable react-hooks/exhaustive-deps */
import React, { Component } from 'react';
import { GoogleMap, LoadScript,Autocomplete ,Marker} from '@react-google-maps/api';
const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const onLoad = marker => {
    console.log('marker: ', marker)
  }
  const position = {
    lat: 37.772,
    lng: -122.214
  }
  
class MyComponents extends Component {
   
   
    tick() {
        this.setState({
          date: new Date()
        });
      }
    

    componentDidMount() {
        console.log("componentDidMount")
     
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );

          
    }
  
    componentWillUnmount() {
        console.log("componentWillUnmount")

        clearInterval(this.timerID);
    }


  render() {


    console.log("render")

  
  
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyBNctHAdz7P-KkAjCCOYagOcyBLwZn5jiw"
      >
        <GoogleMap  id="searchbox-example"
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >   
               <Marker
      onLoad={onLoad}
      position={position}

    />
        
          { /* Child components, such as markers, info windows, etc. 
       
          
          */ }

          <>
        
      
          
          </>
        </GoogleMap>
      </LoadScript>
    )
  }
}
export default MyComponents