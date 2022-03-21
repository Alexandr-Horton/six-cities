import { MutableRefObject, useEffect, useState } from 'react';
import leaflet from 'leaflet';
import { City } from '../../types/offer';

const URL_TILE_LAYER = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const MAP_TEXT_COPYWRITING = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: City): leaflet.Map | null {
  const { location } = city;
  const [map, setMap] = useState< leaflet.Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: location.zoom,
      });

      leaflet
        .tileLayer(
          URL_TILE_LAYER,
          {
            attribution: MAP_TEXT_COPYWRITING,
          },
        )
        .addTo(instance);

      setMap(instance);
    }
    map?.flyTo({
      lat: location.latitude,
      lng: location.longitude,
    }, location.zoom);
  }, [mapRef, map, location]);

  return map;
}

export default useMap;
