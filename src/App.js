import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import {
  GoogleMap,
  useJsApiLoader,
  Autocomplete,
  LoadScript,
  Polyline,
  Polygon,
  Circle,
} from '@react-google-maps/api';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  { regionData } from './Regiondata.jsx';
import { toronto } from './Polygon/toroto';
import { Peel } from './Polygon/peelregion';
import { Durham } from './Polygon/durhamregion';
import { Brant } from './Polygon/Brant';
import { Algoma } from './Polygon/Algoma';
import { Chathamkent } from './Polygon/chathamKent';
import { Northern } from './Polygon/Northern';
import { Greybruce } from './Polygon/Greybruce';
import { Haldimand } from './Polygon/Haldimand';
import { Haliburton } from './Polygon/Haliburton';
import { Holton } from './Polygon/Holton';
import { Hamilton } from './Polygon/Hamilton';
import { PrinceEdward } from './Polygon/princeedward';
import { Huron } from './Polygon/Huron';
import { Kingston } from './Polygon/Kingston';
import { Lambton } from './Polygon/lambton';
import { Leeds } from './Polygon/Leeds';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const containerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: -79.347015,
  lng: 43.65107,
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

  const options = {
    fillColor: 'lightblue',
    fillOpacity: 0.6,
    strokeColor: 'none',
    strokeOpacity: 0,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    geodesic: false,
    zIndex: 1,
  };

  return (
    <Wrapper>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{
            lat: 43.65107,
            lng: -79.347015,
          }}
          zoom={10}
          onLoad={(map) => onLoad(map)}
          onUnmount={() => onUnmount(map)}
          options={defaultMapOptions}
        >
          <Polygon
            path={Peel}
            onLoad={(e) => console.log(e)}
            options={options}
          />
          <Polygon
            path={toronto}
            onLoad={(e) => console.log(e)}
            options={options}
          />
          <Polygon
            path={Durham}
            onLoad={(e) => console.log(e)}
            option={options}
          />
          <Polygon
            path={Algoma}
            onLoad={(e) => console.log(e)}
            option={options}
          />
          <Polygon
            path={Brant}
            onLoad={(e) => console.log(e)}
            option={options}
          />
          <Polygon
            path={Chathamkent}
            onLoad={(e) => console.log(e)}
            option={options}
          />
          <Polygon
            path={Northern}
            onLoad={(e) => console.log(e)}
            option={options}
          />
          <Polygon
            path={Greybruce}
            onLoad={(e) => console.log(e)}
            option={options}
          />
          <Polygon
            path={Haldimand}
            onLoad={(e) => console.log(e)}
            option={options}
          />
          <Polygon
            path={Haliburton}
            onLoad={(e) => console.log(e)}
            option={options}
          />
          <Polygon
            path={Holton}
            onLoad={(e) => console.log(e)}
            option={options}
          />
          <Polygon
            path={Hamilton}
            onLoad={(e) => console.log(e)}
            option={options}
          />
          <Polygon
            path={PrinceEdward}
            onLoad={(e) => console.log(e)}
            options={options}
          />
          <Polygon
            path={Huron}
            onLoad={(e) => console.log(e)}
            option={options}
          />
          <Polygon
            path={Kingston}
            onLoad={(e) => console.log(e)}
            option={options}
          />
          <Polygon
            path={Lambton}
            onLoad={(e) => console.log(e)}
            option={options}
          />
          <Polygon
            path={Leeds}
            onLoad={(e) => console.log(e)}
            option={options}
          />
        </GoogleMap>
      )}
    </Wrapper>
  );
}

export default App;
