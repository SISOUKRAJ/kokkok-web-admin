/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import {GoogleMap,useLoadScript,Marker,InfoWindow,BicyclingLayer} from '@react-google-maps/api'
import MapStyle from './mapStyle'
import logo from './kokok_256x256-01.png'
import { formatRelative } from 'date-fns'
import usePlacesAutocomplete,{getGeocode,getLatLng} from 'use-places-autocomplete'


import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
    ComboboxOptionText,
  } from "@reach/combobox";
  import "@reach/combobox/styles.css";
const Libraries=["places"]
const mapContainerStyle={
    width:'100%',
    height:'500px'
}
const options={
    styles:MapStyle,
 disableDefaultUI:true,
 zoomControl:true,
}
const center={

    lat:17.9989791,
lng:102.6331041
}
export default function App(){
const {isLoaded,loadError} =useLoadScript({
    googleMapsApiKey:'AIzaSyBNctHAdz7P-KkAjCCOYagOcyBLwZn5jiw',
Libraries,
});
const [markers,setMarkers]=React.useState([]);
const onMapCilck=React.useCallback((event) => {
    console.log(event)
    setMarkers(current=> [
        ...current,
        {
        lat:event.latLng.lat(),
        lng:event.latLng.lng(),
        time:new Date(),
    }])
},[]);
const mapRef=React.useRef();
const onMapLoad=React.useCallback((map)=>{
mapRef.current=map;

},[]);

const [selected,setSelected]=React.useState(null)

if(loadError) return "Error Loading maps";
if(!isLoaded)return "Loading MAps";

    return (
    <>
    
    <div>
        <h3>MapPoint</h3>
        
<Search />


<PlacesAutocomplete/>


<GoogleMap mapContainerStyle={mapContainerStyle}
zoom={9}
center={center}
options={options}
onClick={onMapCilck}  
>

{markers.map((marker)=>(
    <Marker key={marker.time.toISOString()}
     position={{lat:marker.lat,lng:marker.lng}}
  
  icon={{
  url:logo,
        scaledSize:new window.google.maps.Size(30,30),
        origin:new window.google.maps.Point(0,0),
        anchor:new window.google.maps.Point(15,15),
    }}


    onClick={() =>{
    setSelected(marker);
}
    }
    />
))}

{selected ? (<InfoWindow position={{lat:selected.lat,lng:selected.lng}}>

<div>

    <h2>
        Bear Spotted!
    </h2>
    <p>{formatRelative(selected.time,new Date())}</p>

</div>

</InfoWindow>):null}
<BicyclingLayer autoUpdate />
</GoogleMap>
    </div>

    </>
    )
}

    function  Search(){
        const parameter = {
            address: "Section 5, Xinyi Road, Xinyi District, Taipei City, Taiwan",
          };
          
          getGeocode(parameter)
            .then((results) => getLatLng(results[0]))
            .then((latLng) => {
              const { lat, lng } = latLng;
          
              console.log("Coordinates: ", { lat, lng });
            })
            .catch((error) => {
              console.log("Error: ", error);
            });
            
        const {
            ready,
            value,
            suggestions:{status,data},
            setValue,
            clearSuggestions
        } = usePlacesAutocomplete({
            requestOptions:{
                location:{
                    lat:()=> 17.9989791,lng:()=> 102.6331041}, 
radius:200*1000,

                }
            
        });
        return (
        <>
             <Combobox onSelect={
                 async (address)=>
        {
            
            try{
                const result=await getGeocode({address});
              const {lat,lng} =await getLatLng(result[0]);
              console.log(lat,lng)
                 console.log(result[0])

            }catch(error){
                console.log("error!:"+error)

            }
            
            
            console.log(address)
            }}
            >
            
            <ComboboxInput value={value} onChange={(e) =>{
                setValue(e.target.value);

            }}
          disabled={!ready}
            placeholder="Enter an Address"
            />
            <ComboboxPopover>
                {status === "OK" && data.map(({id,description})=>(
                    <ComboboxOption key={id} value={description}/>
                ))}
            </ComboboxPopover>
            </Combobox>
        </>
   )
    }
    const PlacesAutocomplete = () => {
        const {
          ready,
          value,
          suggestions: { status, data },
          setValue,
        } = usePlacesAutocomplete();
      
        const handleInput = (e) => {
          setValue(e.target.value);
        };
      
        const handleSelect = (val) => {
          setValue(val, false);
        };
      
        return (
          <Combobox onSelect={handleSelect} aria-labelledby="demo">
            <ComboboxInput value={value} onChange={handleInput} disabled={!ready} />
            <ComboboxPopover>
              <ComboboxList>
                {status === "OK" &&
                  data.map(({ place_id, description }) => (
                    <ComboboxOption key={place_id} value={description} />
                  ))}
              </ComboboxList>
            </ComboboxPopover>
          </Combobox>
        );
      };
 