import React from 'react'
import styled from 'styled-components'
import {fonts} from '../assets/constants/fonts'
import {RightArrow} from './RightArrow'
import {LeftArrow} from './LeftArrow'
import am from '../assets/images/am.jpg'
import Fade from 'react-reveal/Fade'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-bottom: 4rem;
  position: relative;
`

const EventContainer = styled.div`
  :before {
    background: none repeat scroll 0 0 #ececec;
    bottom: 15px;
    content: ' ';
    left: 50%;
    position: absolute;
    top: 15px;
    width: 1px;
  }
`

const Event = styled.div`
  display: flex;
  margin-bottom: 3rem;
`

const Box = styled.div`
  height: 300px;
  position: relative;
  flex: 1;
  ${({left}) => left && 'text-align: right;'}
  margin-${({left}) => (left ? 'right' : 'left')}: 4rem;
  
  font-family: ${fonts.raleway};
  font-size: 1rem;
  font-weight: 300;
  
  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 300;
  }
  
  img {
    height: 100%;
  }
  
  :after {
    ${({left}) =>
      left &&
      `
      background: none repeat scroll 0 0 #de037f;
      border: 3px solid #ececec;
      border-radius: 50%;
      content: "";
      height: 19px;
      width: 19px;
      position: absolute;
      top: 10px;
      right: -73px;
    `}
  }
`

const EventLine = ({invert}) => {
  if (invert) {
    return (
      <Event>
        <Box left>
          <LeftArrow />
          <h1>Départ pour Orlando</h1>
          <p>
            13 à 14h d'avion avec une escale nous attendent pour ralier Orlando,
            Floride
          </p>
        </Box>
        <Box>
          <Fade right>
            <img src={am} alt="am" />
          </Fade>
        </Box>
      </Event>
    )
  }
  return (
    <Event>
      <Box left>
        <Fade left>
          <img src={am} alt="am" />
        </Fade>
      </Box>
      <Box>
        <RightArrow />
        <h1>Départ pour Orlando</h1>
        <p>
          13 à 14h d'avion avec une escale nous attendent pour ralier Orlando,
          Floride
        </p>
      </Box>
    </Event>
  )
}

export const List = () => (
  <Content>
    <EventContainer>
      <EventLine />
      <EventLine invert />
      <EventLine />
      <EventLine invert />
    </EventContainer>
  </Content>
)
