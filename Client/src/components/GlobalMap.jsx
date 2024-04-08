import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";

function GlobalMap({ places }) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [zoom] = useState(3);
    maptilersdk.config.apiKey = 'LLHeGkXCy8VGCxAPLYiB';
    useEffect(() => {
        if (map.current) return; // stops map from intializing more than once

        map.current = new maptilersdk.Map({
            container: mapContainer.current,
            style: 'https://api.maptiler.com/maps/cea6144b-d558-4da3-bff4-c7e346c01f25/style.json?key=LLHeGkXCy8VGCxAPLYiB',
            center: [75.857727, 22.719568],
            zoom: zoom
        })
       places.forEach(element => {
        console.log(element);
        const marker = new maptilersdk.Marker()
        .setLngLat([element.lon,element.lat])
        .addTo(map.current);
       });

    }, [zoom]);

    return (
        <div className="relative flex justify-center items-center h-96 w-96" >
            <div ref={mapContainer} className="relative h-100 w-80 lg:w-100"/>
        </div>
     )
}
export default GlobalMap