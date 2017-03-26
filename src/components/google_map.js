import React from 'react';
import {GoogleMap, GoogleMapLoader} from 'react-google-maps';

export default function (props) {
    return (
        <GoogleMapLoader
            containerElement={<div style={{height: "100%"}}/>}
            googleMapElement={
                <GoogleMap defaultZoom={11} defaultCenter={{lat: props.lat, lng: props.lon}}/>
            }
        />
    );
}