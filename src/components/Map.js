import React, {useState} from 'react'
import styled from 'styled-components'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps'
import map_marker from '../assets/images/map_marker.png'
import {fonts} from '../assets/constants/fonts'
import {colors} from '../assets/constants/colors'

const Anchor = styled.div`
  display: block;
  position: relative;
  top: calc(-80vh - 80px);
  visibility: hidden;
`

const Popup = styled.div`
  width: 400px;
  height: 100px;
  font-family: ${fonts.raleway};
  font-size: 1rem;
  font-weight: 300;

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${colors.pink};
    margin-bottom: 1rem;
  }
`

export const Map = withScriptjs(
  withGoogleMap(({isVToggled, vToggle, isCToggled, cToggle}) => {
    const villaLat = 50.800687
    const villaLong = 4.374869
    const communeLat = 50.841389
    const communeLong = 4.439319
    const centerLat = villaLat + (communeLat - villaLat) / 2 + 0.012
    const centerLong = villaLong + (communeLong - villaLong) / 2
    return (
      <div>
        <Anchor id="map" />
        <GoogleMap
          defaultZoom={12}
          defaultCenter={{lat: centerLat, lng: centerLong}}
        >
          <Marker
            position={{lat: villaLat, lng: villaLong}}
            title="VILLATITUDE"
            onClick={() => vToggle(true)}
            options={{icon: map_marker}}
          >
            {isVToggled && (
              <InfoWindow onCloseClick={() => vToggle(false)}>
                <Popup>
                  <h1>Villatitude</h1>
                  <p>Chaussée de Waterloo 1020, 1180 Uccle</p>
                  <p>Parking devant la villa</p>
                </Popup>
              </InfoWindow>
            )}
          </Marker>

          <Marker
            position={{lat: communeLat, lng: communeLong}}
            title="COMMUNE"
            onClick={() => cToggle(true)}
            options={{icon: map_marker}}
          >
            {isCToggled && (
              <InfoWindow onCloseClick={() => cToggle(false)}>
                <Popup>
                  <h1>Château Malou</h1>
                  <p>Allée Pierre Levie 2, 1200 Woluwe-Saint-Lambert</p>
                  <p>Parking devant le château</p>
                </Popup>
              </InfoWindow>
            )}
          </Marker>
        </GoogleMap>
      </div>
    )
  })
)
