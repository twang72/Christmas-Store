import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useMemo } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

export default function ContactScreen() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const center = useMemo(
    () => ({
      lat: 49.28083735596113,
      lng: -123.11565214474912,
    }),
    []
  ); //perform the calculation once the [] changed. because it's an empty array, it will calculate once and use every time.

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <div class="row">
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Email</h5>
              <p class="card-text">example@christmasstore.com</p>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Phone</h5>
              <p class="card-text">778-123-456</p>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Address</h5>
              <p class="card-text">410 West Georgia, Vancouver, BC</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <GoogleMap
          zoom={13}
          center={center}
          mapContainerClassName="map-container"
        >
          <MarkerF position={center} />
        </GoogleMap>
      </div>
    </div>
  );
}
