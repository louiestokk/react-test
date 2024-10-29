import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import { getUserData } from '../redux/user/userSlice';
import Hotels from './Hotels';
import {
    GoogleMap,
    Marker,
    LoadScript,
    InfoWindow
  } from "@react-google-maps/api";

const MapComp = () => {
const {user} = useSelector(getUserData)
const [map, setMap] = useState(null);
const [showInfoWindow, setShowInfoWindow] = useState(false);
const mapCenter = {
    lat: Number(user?.[0]?.location.coordinates.latitude),
    lng: Number(user?.[0]?.location.coordinates.longitude)
};
const mapOptions = {
  styles: {},
  streetViewControl: true,
  fullscreenControl: true,
  mapTypeControl: false,
  draggable: true
};

  return (
    <div style={{marginTop:'50px'}}>
     <section>
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API}>
        {mapCenter.lat !== 'NaN' && mapCenter.lng !== 'NaN' &&  <GoogleMap zoom={5}
            defaultCenter={mapCenter}
            center={mapCenter}
            options={mapOptions}
            mapContainerStyle={{
              width: "100%",
              height: "340px"
            }} 
            onLoad={(map) => setMap(map)}
            >
            <Marker   position={{
                    lat: Number(user?.[0]?.location.coordinates.latitude),
                    lng: Number(user?.[0]?.location.coordinates.longitude)
                  }}
                  onClick={()=> setShowInfoWindow(!showInfoWindow)}
                  >
                   {showInfoWindow &&  <InfoWindow>
                    <div style={{width:'100px',height:'100px',padding:0}}>
                        <p><strong>Lat:</strong>  {Number(user?.[0]?.location.coordinates.latitude)}</p>
                        <p><strong>Lng:</strong>  {Number(user?.[0]?.location.coordinates.longitude)}</p>
                    </div>
                    </InfoWindow>}
                  </Marker>
        </GoogleMap>}
        </LoadScript>
     </section>
     <Hotels />
    </div>
  )
}

export default MapComp