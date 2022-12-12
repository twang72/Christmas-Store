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
      <Card
        style={{ width: '40rem' }}
        className="contact-card text-center mb-4"
      >
        <Card.Body>
          <Card.Title>Contact Us</Card.Title>
          <ListGroup horizontal className="contact-list">
            <ListGroup.Item>Phone: 604-123-456</ListGroup.Item>
            <ListGroup.Item>Email: example@email.com</ListGroup.Item>
            <ListGroup.Item>
              Address: 410 West Georgia, Vancouver, BC
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
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
