import React from "react";
import GoogleMapReact from "google-map-react";
import "./map.css";
import PlaceIcon from "../../static/icons/place.png";
const LocationPin = ({ text }) => (
  <div className="pin">
    <img width={50} src={PlaceIcon} className="pin-icon" alt="map-pin" />
    <p className="pin-text">{text}</p>
  </div>
);
const AboutUsMap = () => {
  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };
  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API }}
          defaultCenter={location}
          defaultZoom={10}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default AboutUsMap;
