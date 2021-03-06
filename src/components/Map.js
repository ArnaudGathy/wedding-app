import React from 'react'
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
import {media} from '../style/queries'

const Anchor = styled.div`
  display: block;
  position: relative;
  top: calc(-80vh - 80px);
  visibility: hidden;
`

const Popup = styled.div`
  width: 400px;
  height: auto;
  font-family: ${fonts.raleway};
  font-size: 1rem;
  font-weight: 300;

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${colors.pink};
    margin-bottom: 1rem;
  }
  
  .parking {
    margin-top: 1rem;
  }
  
  ${media.desktop`
      width: 250px;
      height: auto;
  `}
`

export const Map = withScriptjs(
  withGoogleMap(({isVToggled, vToggle, isCToggled, cToggle, isHToggled, hToggle}) => {
    const villaLat = 50.800687
    const villaLong = 4.374869
    const communeLat = 50.841389
    const communeLong = 4.439319
    const homeLat = 50.846278
    const homeLong = 4.422534
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
            title="Villatitude"
            onClick={() => vToggle(true)}
            options={{icon: map_marker}}
          >
            {isVToggled && (
              <InfoWindow onCloseClick={() => vToggle(false)}>
                <Popup>
                  <h1>Villatitude</h1>
                  <p>Chaussée de Waterloo 1020, 1180 Uccle</p>
                  <p className="parking">Parking privé devant la villa</p>
                </Popup>
              </InfoWindow>
            )}
          </Marker>

          <Marker
            position={{lat: communeLat, lng: communeLong}}
            title="Château Malou"
            onClick={() => cToggle(true)}
            options={{icon: map_marker}}
          >
            {isCToggled && (
              <InfoWindow onCloseClick={() => cToggle(false)}>
                <Popup>
                  <h1>Château Malou</h1>
                  <p>Allée Pierre Levie 2, 1200 Woluwe-Saint-Lambert</p>
                  <p className="parking">Parking devant le château</p>
                </Popup>
              </InfoWindow>
            )}
          </Marker>

          <Marker
            position={{lat: homeLat, lng: homeLong}}
            title="Home"
            onClick={() => hToggle(true)}
            options={{icon: map_marker}}
          >
            {isHToggled && (
              <InfoWindow onCloseClick={() => hToggle(false)}>
                <Popup>
                  <h1>Magathy's Home</h1>
                  <p>Rue Crocq 35, 1200 Woluwe-Saint-Lambert</p>
                  <p className="parking">Parking dans les rues (gratuit samedi soir et dimanche)</p>
                </Popup>
              </InfoWindow>
            )}
          </Marker>
        </GoogleMap>
      </div>
    )
  })
)
