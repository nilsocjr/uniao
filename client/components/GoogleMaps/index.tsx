import React from 'react'

type Props = {
    center: google.maps.LatLngLiteral
    zoom: number
}

const MyMapComponent = ({ center, zoom }: Props) => {
    const ref = React.useRef()

    React.useEffect(() => {
        new window.google.maps.Map(ref.current, {
            center,
            zoom,
        })
    })

    return <div ref={ref} id="map" />
}

export default MyMapComponent
