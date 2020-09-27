import React from "react";
import "./Map.css";
import { Map as LeafMap, TileLayer } from "react-leaflet";

function Map({ center, zoom }) {
  return (
    <div className="map">
      <LeafMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy;<a href="http://osm.org/copyright">OpenStreet</a> contributors'
        />
      </LeafMap>
    </div>
  );
}

export default Map;
