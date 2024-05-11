import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";

function PlaceMap({ place }) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [zoom] = useState(6);
    maptilersdk.config.apiKey = 'LLHeGkXCy8VGCxAPLYiB';

    useEffect(() => {
        if (map.current) return; // stops map from intializing more than once

        map.current = new maptilersdk.Map({
            container: mapContainer.current,
            style: 'https://api.maptiler.com/maps/cea6144b-d558-4da3-bff4-c7e346c01f25/style.json?key=LLHeGkXCy8VGCxAPLYiB',
            center: [place.lon, place.lat],
            zoom: zoom
        })
        const el = document.createElement("div");
        el.className = "custom-marker h-12 w-12 rounded-full bg-cover "
        el.style.backgroundImage =
            `url(${place.image[0].url})`;
        const marker = new maptilersdk.Marker({ element: el })
            .setLngLat([place.lon, place.lat])
            .setPopup(new maptilersdk.Popup()
                .setHTML(`<div><h1 style="font-size:15px;">${place.name}</h1>
                  <h1>${place.location}</h1>
                  </div>`))
            .addTo(map.current);

    }, [zoom]);
    return (
        <div className=" flex justify-center items-center h-full w-full" >
            <div ref={mapContainer} className="relative h-full min-w-full" />
        </div>
    )
}

export default PlaceMap