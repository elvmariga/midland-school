
// -1.3525940209369631, 36.951459742971196
import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css';
import { LocationPin } from './LocationPin';
import "./map.css"
// AIzaSyBUgoGz3BE95-vQjbeH9dwNmJYTxP86ZRk

export const Map = ({ location, zoomLevel }) => {
    
    return(
        <div className="map">
        <h2 className="map-h2">Come Visit Us At Our Campus</h2>
    
        <div className="google-map">
            <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBUgoGz3BE95-vQjbeH9dwNmJYTxP86ZRk' }}
            defaultCenter={location}
            defaultZoom={zoomLevel}
            >
            <LocationPin
                lat={location.lat}
                lng={location.lng}
                text={location.address}
            />
            </GoogleMapReact>
        </div>
        </div>
    )
}