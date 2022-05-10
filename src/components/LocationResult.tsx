import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import { LatLngExpression } from 'leaflet';
import {  } from 'leaflet';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export type GeoJson = {
    data: {
    type: string,
    properties: {
        desc: string,
        session: string | number,
        ns: number,
        timestamp: number,
        beacons: []
    },
    geometry: {
        type: string,
        coordinates: [number, number]
    }
}
};

export function LeafletMap(props: GeoJson){
    const myJson = props.data;
    const position: LatLngExpression = [myJson.geometry.coordinates[0], myJson.geometry.coordinates[1]]

    return(
        <div>
        <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{ height: '40vh', width: '100wh' }}>
        <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
             />
        <Marker position={position!} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
        <Popup >
            - Devices: <br/>
            {myJson.properties.beacons.map(elem => (
                elem
            ))}
            <br/>
            - Timestamp: <br/>
            {myJson.properties.timestamp}
        </Popup>
        </Marker>
        </MapContainer>
        </div>  
    )
}