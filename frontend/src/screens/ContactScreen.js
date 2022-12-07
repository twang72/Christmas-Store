import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useMemo } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

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
      <h1>Contact Us</h1>
      <div className='contact'>
        <h6>Email</h6>
        <p>christmasstore5610@gmail.com</p>
        <h6>Phone</h6>
        <p>000-000-0000</p>
        <h6>Address</h6>
        <p>410 W Georgia St, Vancouver, BC V6B 1Z3</p>
      </div>
      <div>
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
