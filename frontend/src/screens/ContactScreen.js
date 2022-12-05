import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import { Helmet } from 'react-helmet-async';
import { useMemo } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
// import dotenv from 'dotenv';

export default function ContactScreen() {
  // const dotenv = require('dotenv');
  // dotenv.config();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    // googleMapsApiKey: '',
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
      <h1>Contact Us</h1>
      <div className='contact'>
        <Row>Email: christmasstore5610@gmail.com</Row>
        <Row>Phone: 000-000-0000</Row>
        <Row>Address: 410 W Georgia St, Vancouver, BC V6B 1Z3</Row>
      </div>
      <div className='map-container'>
        <GoogleMap
          zoom={13}
          center={center}
          mapContainerClassName='map-container'
        >
          <MarkerF position={center} />
        </GoogleMap>
      </div>
    </div>
  );
}
