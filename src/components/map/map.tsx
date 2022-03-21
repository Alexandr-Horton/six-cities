import leaflet, { LayerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap/useMap';
import { Offers } from '../../types/offer';

enum UrlMarker {
  Default = 'img/pin.svg',
  Current = 'img/pin-active.svg'
}

enum Pin {
  Width = 27,
  Height = 39
}

type MapProps = {
  cards: Offers;
  activeCard?: number | null;
  className: string;
}

const defaultCustomIcon = leaflet.icon({
  iconUrl: UrlMarker.Default,
  iconSize: [Pin.Width, Pin.Height],
  iconAnchor: [Pin.Width / 2, Pin.Height],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: UrlMarker.Current,
  iconSize: [Pin.Width, Pin.Height],
  iconAnchor: [Pin.Width / 2, Pin.Height],
});

function Map({cards, activeCard, className }: MapProps): JSX.Element {
  const city = cards[0].city;
  const points = cards;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const markersLayer = useRef<LayerGroup>();

  useEffect(() => {
    if (map) {
      markersLayer.current?.clearLayers();

      markersLayer.current = new LayerGroup().addTo(map);

      points.forEach((point) => {
        const { location } = point;

        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude,
        });

        marker
          .setIcon(
            point.id === activeCard ? currentCustomIcon : defaultCustomIcon,
          )
          .addTo(markersLayer.current as LayerGroup);
      });
    }
  }, [activeCard, map, points]);

  return (
    <section
      className={`${className} map`}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
