import React, {useEffect, useState} from 'react';
import useMediaQuery from '~/Hooks/useMediaQuery.js';
import icons from './icons';
import './styles.css';

function Map() {
    const [map, setMap] = useState();
    const [mobile] = useMediaQuery('(max-width: 600px)');
  
    const addLayerToMap = () => {
        if(!map) return;

        L.tileLayer(                                                          
            'https://tile.openstreetmap.org/{z}/{x}/{y}.png', 
          {maxZoom: 19}
        ).addTo(map);

        map.trackResize = true;          
    }

    const addMarkersToMap = () => {
        const icon = L.icon({
            iconUrl: icons['marker'],
            iconSize: [40, 48],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76],
        })

        L.marker([35.952461, -83.991531], {icon: icon}).addTo(map);             //Main Office lat and long
        L.marker([29.897430, -97.827507], {icon: icon}).addTo(map);             //Office II lat and long
    }


    /* Initializing Map*/
    useEffect(() => {
        setMap(L.map('map', {                                               
            center: [37.090240, -90.712891],
            zoom: 5
        }));
    },[])
    
    useEffect(() => {
        if(!map) return;

        addLayerToMap();
        addMarkersToMap();

        setTimeout(() => {
            map.invalidateSize(true)                  
        }, 200)

        return () => {                                                      
            map.off();
            map.remove();
        }
    }, [map])


    useEffect(() => {
        if(!mobile || !map) return;

        map.setZoom(4);
    }, [mobile, map])

    return(
            <div id={'map'}></div>                                          
        )
}

export default Map;