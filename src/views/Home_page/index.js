
import React from "react"
import './index.css'
import ShowGoogleMaps from './GoogleMaps'
import {faCar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ShowGoogleMaps1 from './GoogleMapShearch'
import TestGooglemap from './TestGoogle'
import MapPoint from './MapPoint'
import LabelShowMap from './LabelShowMap'
import ShowCurrentLocation from './ShowCurrentLocation'
import BoxSearchMap from './BoxSearchMap'
import AutoSecrch from './AutoSecrch'
import SearchAuto from './SearchAuto'
const homepage = () => {
    return (
        <div>

            <h1>Dashboard</h1>
            <div className="nav">

            <div className='card car1'>  
            <h3><FontAwesomeIcon icon={faCar} />   10 </h3>
                <h4>
                    Available Trips
                </h4>
                
                 </div>   
                 <div className='card car2'>  
                 <h3><FontAwesomeIcon icon={faCar} />    10 </h3>
                <h4>
                    Available Cars
                </h4>
                
                 </div>   
                  <div className='card car3'>  
                  <h3><FontAwesomeIcon icon={faCar} />    10 </h3>
                <h4>
                    waiting Passenger
                </h4>
                
                 </div>   
                 <div className='card car4'>  
                 <h3><FontAwesomeIcon icon={faCar} />    10 </h3>
                <h4>
                   Passenger
                </h4>
                
                 </div>   
                 <div className='card car5'>  
                 <h3><FontAwesomeIcon icon={faCar} />    10 </h3>
                <h4>
                   Complete Trips
                </h4>
                
                 </div>  
                 <div className='card car6'>  
                 <h3><FontAwesomeIcon icon={faCar} />    10 </h3>
                <h4>
                   Passenger Booking
                </h4>
                
                 </div>  
            </div>

   <SearchAuto/>

    <AutoSecrch/>

        </div>
    )
}

export default homepage