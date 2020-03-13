import React, { useState, useEffect  } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";
import L from 'leaflet';

import Button from '@material-ui/core/Button'

export default function Mymap(){
    const [state, setState] = useState({
        markers: []
    });

    const position = [44.559711, 6.087204];

    function addMarker(e){
        const {markers} = state;
        markers.push(Object.values(e.latlng));
        setState({markers});
    }

    function deleteMarker(idx){
        const {markers} = state;
        markers.splice(idx,1);
        setState({markers});
    }

    const myIcon = new L.Icon({
        iconUrl: 'pin.svg',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [45, 65],
        iconAnchor: [15, 65],
        popupAnchor: [14, -65],
        shadowSize: [-150, -150]
    });



    return (<>
        <div className={'cpt'}>Nombre de markers <strong>{state.markers.length}</strong></div>
        <Map center={position} zoom={13}
            style={{ height: '100vh', with: '100%'}}
            onClick={addMarker}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
            {state.markers.map((position, idx) =>
            <Marker icon={myIcon} key={`marker-${idx}`} position={position}>
                <Popup>
                    <span>{}</span>
                    <div>{position[0]}</div><br/>
                    <div>{position[1]}</div><br/>

                    <p className={'btn'}>
                        <Button onClick={() => deleteMarker(idx)}>Supprimer</Button>
                    </p>
                </Popup>
            </Marker>
            )}
        </Map>
    </>)
};
