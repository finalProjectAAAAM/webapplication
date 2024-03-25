import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Box, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function Map() {
    const [position, setPosition] = useState(null);
    const navigate=useNavigate()
    function SetPositionMarker() {
        const map = useMapEvents({
            click(e) {
                setPosition(e.latlng);
            },
        });

        return position === null ? null : (
            <Marker position={position} icon={customIcon}>
                <Popup>Latitude: {position.lat.toFixed(5)} <br /> Longitude: {position.lng.toFixed(5)}</Popup>
            </Marker>
        );
    }

    const customIcon = new L.Icon({
        iconUrl: 'path/to/your/icon.png',
        iconSize: [32, 32], 
        iconAnchor: [16, 32], 
        popupAnchor: [0, -32], 
    });

    const copyCoordinates = () => {
        if (position) {
            const { lat, lng } = position;
            const coordinatesString = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
            navigator.clipboard.writeText(coordinatesString);
            alert('Coordinates copied to clipboard!');
        }
    };

    return (
        <><div style={{ width: '400px', height: '400px', overflow: 'hidden', position: 'relative', marginLeft: '450px', marginTop: "100px" }}>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
                <MapContainer center={[0, 0]} zoom={2} style={{ width: '100%', height: '100%' }}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
                    <SetPositionMarker />
                </MapContainer>
            </div>
            {position && (
                <Button variant="outlined" onClick={copyCoordinates} style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1000 }}>
                    Copy Coordinates
                </Button>
            )}
        </div><div>
        <Box position="relative" mb={2}>
            <Button type="submit" color="secondary" variant="contained" onClick={() => navigate('/Offer')}> Return</Button>
        </Box></div></>
    );
}

export default Map;
