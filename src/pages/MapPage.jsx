import { Container, Typography } from "@mui/material"
import { Fragment } from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import SchoolIcon from '@mui/icons-material/School';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";

const MapPage = () => {


    return(
        <Fragment>
            <Container>

                <MapContainer center={[-25.4249238,-49.2748681]} zoom={13} scrollWheelZoom={false} style={{ height: "60vh" }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[-25.4249238,-49.2748681]}>
                        <Popup>
                            <Typography variant="h6">Senai Celso Charuri  <SchoolIcon/></Typography>
                        </Popup>
                    </Marker>
                </MapContainer>

            </Container>
        </Fragment>
    )
}

export default MapPage