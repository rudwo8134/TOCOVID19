import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import {
  GoogleMap,
  useJsApiLoader,
  Autocomplete,
  LoadScript,
} from '@react-google-maps/api';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  { regionData } from './Regiondata.jsx';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const containerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: 43.65107,
  lng: -79.347015,
};

function App() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
  });
  const [map, setMap] = useState(null);
  const [loading, setLoading] = useState(false);
  const [canadaData, setCanadaData] = useState(null);
  const [Citydata, setCityData] = useState(null);
  const getOntarioData = async () => {
    const fetchdata = await axios.get(
      'https://api.opencovid.ca/summary?loc=ON&date=30-12-2021&version=true'
    );
    setCanadaData(fetchdata?.data);
  };

  const getAllCityData = async () => {
    
  };
  console.log(Citydata);
  console.log(canadaData);

  useEffect(() => {
    setLoading(true);
    getOntarioData();
    getAllCityData();
    setLoading(false);
  }, []);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const defaultMapOptions = {
    fullscreenControl: false,
    streetViewControl: false,
    mapTypeControl: false,
  };

  return (
    <Wrapper>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={(map) => onLoad(map)}
          onUnmount={() => onUnmount(map)}
          options={defaultMapOptions}
        />
      )}
    </Wrapper>
  );
}

export default App;
