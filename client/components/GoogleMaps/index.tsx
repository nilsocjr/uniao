import React from 'react'
import googlemaps from './googlemaps.module.css'
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api'

export interface MapPageProps {}
export const REACT_APP_GOOGLE_API_KEY = 'AIzaSyB6ruwZMg-TYGCSTLkgTFau-iIoWCrqZls'

const MapPage = () => {
    const [map, setMap] = React.useState<google.maps.Map>()

    const position = {
        lat: -25.38234,
        lng: -51.45399,
    }

    const onMapLoad = (map: google.maps.Map) => {
        setMap(map)
    }

    return (
        <div className="map">
            <LoadScript googleMapsApiKey={REACT_APP_GOOGLE_API_KEY} libraries={['places']}>
                <GoogleMap
                    onLoad={onMapLoad}
                    mapContainerStyle={{ width: '100%', height: '440px' }}
                    center={position}
                    zoom={15}
                >
                    <Marker
                        position={position}
                        options={{
                            label: {
                                color: 'red',
                                text: 'União - Retífica e Mecânica',
                                className: `${googlemaps.marker}`,
                            },
                        }}
                    />
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default MapPage
