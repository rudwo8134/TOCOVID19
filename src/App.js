import './App.css';
import styled from 'styled-components';
import {
  GoogleMap,
  useJsApiLoader,
  Polygon,
  OverlayView,
} from '@react-google-maps/api';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { regionData } from './Regiondata.jsx';
import moment from 'moment';
import Image5 from './img/VeryDanger.png';
import Image4 from './img/danger.png';
import Image3 from './img/medium.png';
import Image2 from './img/low.png';
import Image1 from './img/safe.png';
import { ClipLoader } from 'react-spinners';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  .infobox {
    width: 30vw;
    height: 25vh;
    background-color: white;
    position: absolute;
    z-index: 300;
    top: 1rem;
    left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #444;
    border-radius: 16px;
    color: white;
    @media screen and (max-width: 476px) {
      width: 70vw;
      height: 20vh;
    }
    h1 {
      font-size: 1.5rem;
      text-transform: uppercase;
      @media screen and (max-width: 476px) {
        font-size: 1rem;
      }
    }
    .boxcontainer {
      width: 90%;
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      @media screen and (max-width: 476px) {
        padding: 0 0.3rem;
      }
      .update {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        @media screen and (max-width: 476px) {
          margin-top: 0.4rem;
          line-height: 0.6rem;
        }
        h4 {
          flex: 1;
          text-align: center;
          font-size: 0.6rem;
          margin: 0;
          @media screen and (max-width: 476px) {
            font-size: 0.4rem;
          }
        }
      }
      span {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        @media screen and (max-width: 476px) {
          margin-bottom: 0.4rem;
          font-size: 0.9rem;
          .textc {
            font-size: 0.47rem;
          }
        }
        @media screen and (max-width: 375px) {
          margin-bottom: 0.4rem;
          font-size: 0.9rem;
          .textc {
            font-size: 0.41rem;
          }
        }
        @media screen and (max-width: 320px) {
          margin-bottom: 0.4rem;
          font-size: 0.7rem;
          .textc {
            font-size: 0.35rem;
          }
        }
        :last-child {
          margin-bottom: 0;
        }
        .text {
          flex: 1;
          text-align: center;
        }
        .textb {
          flex: 1;
          text-align: center;
          font-weight: 900;
        }
      }
    }
  }
`;

const containerStyle = {
  width: '100vw',
  height: '100vh',
};

const Loadingcontainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
`;

function App() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
  });
  const mapRef = useRef(null);
  const [position, setPosition] = useState({
    lng: -79.347015,
    lat: 43.65107,
  });
  const [loading, setLoading] = useState(false);
  const [canadaData, setCanadaData] = useState(null);
  const [Citydata, setCityData] = useState(null);
  const getOntarioData = async () => {
    const fetchdata = await axios.get(
      'https://api.opencovid.ca/summary?loc=ON&version=true'
    );
    setCanadaData(fetchdata?.data);
    getAllCityData();
  };

  const getAllCityData = async () => {
    const Fetchdata = regionData.map(async (data) => {
      const todayData = await moment(canadaData?.version).format('DD-MM-YYYY');
      const data2 = await axios.get(
        `https://api.opencovid.ca/summary?loc=${data?.code}&date=${todayData}&version=true`
      );
      const Finaldata = data2?.data?.summary[0];
      return { ...data, ...Finaldata };
    });
    const data3 = await Promise.all(Fetchdata);
    setCityData(data3);
  };

  useEffect(() => {
    setLoading(true);
    getOntarioData();
    setLoading(false);
  }, []);

  function handleLoad(map) {
    mapRef.current = map;
  }

  function handleCenter() {
    if (!mapRef.current) return;

    const newPos = mapRef.current.getCenter().toJSON();
    setPosition(newPos);
  }

  const getPixelPositionOffset = (offsetWidth, offsetHeight, labelAnchor) => {
    return {
      x: offsetWidth + labelAnchor.x,
      y: offsetHeight + labelAnchor.y,
    };
  };

  const defaultMapOptions = {
    fullscreenControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    minZoom: 8,
    maxZoom: 11,
  };

  if (Citydata === null || loading) {
    return (
      <Loadingcontainer>
        Wait for a moment!
        <ClipLoader loading={true} size={150}></ClipLoader>
      </Loadingcontainer>
    );
  }
  return (
    <Wrapper>
      <div className="infobox">
        <h1>Ontario CovidMap</h1>
        <div className="boxcontainer">
          <span>
            <div className="text textc">State/City</div>
            <div className="text textc" style={{ color: 'red' }}>
              Active
            </div>
            <div className="text textc" style={{ color: 'green' }}>
              Recover
            </div>
            <div className="text textc" style={{ color: '#ff5b00' }}>
              New Case(Today)
            </div>
          </span>
          <span>
            <div className="textb">Ontario</div>
            <div className="text">
              {canadaData?.summary[0]?.active_cases
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </div>
            <div className="text">
              {canadaData?.summary[0]?.recovered
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </div>
            <div className="text">
              {canadaData?.summary[0]?.cases
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </div>
          </span>
          <span>
            <div className="text textc"> </div>
            <div className="text textc" style={{ color: 'red' }}>
              Daeths (Today)
            </div>
            <div className="text textc" style={{ color: '#ffc302' }}>
              Testing (Today)
            </div>
            <div className="text textc" style={{ color: '#22bb33' }}>
              Vaccine (Today)
            </div>
          </span>
          <span>
            <div className="textb"></div>
            <div className="text">
              {canadaData?.summary[0]?.deaths
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </div>
            <div className="text">
              {canadaData?.summary[0]?.testing
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </div>
            <div className="text">
              {canadaData?.summary[0]?.dvaccine
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </div>
          </span>
          {canadaData && (
            <span className="update">
              <h4>
                Updated on{' '}
                {moment(canadaData?.version).format('HH:mm MM, DD, YYYY')}
                <br />
                any questions? rudwo8134@gmail.com
              </h4>
            </span>
          )}
        </div>
      </div>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={position}
          zoom={10}
          onLoad={handleLoad}
          onDragEnd={handleCenter}
          options={defaultMapOptions}
        >
          {Citydata &&
            Citydata.map((data) => {
              const Colorcode =
                data?.cases > 1500
                  ? '#bb2124'
                  : data?.cases > 1000
                  ? '#ff5b00'
                  : data?.cases > 500
                  ? '#ff8f00'
                  : data?.cases > 250
                  ? '#ffc302'
                  : data?.cases > 150
                  ? '#fff600'
                  : '#22bb33';
              const Imageicon =
                data?.cases > 1500
                  ? Image5
                  : data?.cases > 1000
                  ? Image4
                  : data?.cases > 500
                  ? Image3
                  : data?.cases > 250
                  ? Image2
                  : data?.cases > 150
                  ? Image2
                  : Image1;

              return (
                <>
                  <Polygon
                    key={data.id}
                    path={data?.Polygon}
                    options={{
                      fillColor: Colorcode,
                      fillOpacity: 0.6,
                      strokeColor: 'black',
                      strokeOpacity: 0.5,
                      strokeWeight: 0.5,
                      clickable: false,
                      draggable: false,
                      editable: false,
                      geodesic: false,
                      zIndex: `${data.cases * 1}`,
                    }}
                  />
                  <OverlayView
                    key="mwl"
                    position={data?.coordinate}
                    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                    getPixelPositionOffset={(x, y) =>
                      getPixelPositionOffset(x, y, { x: 0, y: -100 })
                    }
                  >
                    <div
                      style={{
                        background: `#203254`,
                        padding: `7px 12px`,
                        fontSize: '11px',
                        color: `white`,
                        borderRadius: '4px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: `${data.cases * 1}`,
                        border: `1px solid ${Colorcode}`,
                      }}
                    >
                      <img
                        style={{ width: '20px', height: '20px' }}
                        src={Imageicon}
                        alt="lol"
                      />
                      {data?.Region}
                      <br />

                      <span
                        style={{
                          color: `white`,
                          fontWeight: 900,
                          marginLeft: '3px',
                        }}
                      >
                        Today: {data?.cases}
                      </span>
                    </div>
                  </OverlayView>
                </>
              );
            })}
        </GoogleMap>
      )}
    </Wrapper>
  );
}

export default App;
