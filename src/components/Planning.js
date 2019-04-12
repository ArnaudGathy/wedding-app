import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import {colors} from '../assets/constants/colors'
import Fade from 'react-reveal/Fade'
import withReveal from 'react-reveal/withReveal'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Map} from './Map'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-bottom: 4rem;
`

const MapContent = styled.div`
  width: 100%;
  height: 60vh;
`

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`

const Text = styled.div`
  flex: 1;
  margin-right: 4rem;
  padding: 1.5rem 0;
  text-align: right;

  h2 {
    color: ${colors.title};
    font-weight: 300;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  div {
    margin-top: 2rem;
    color: ${colors.pink};

    a {
      color: ${colors.pink};
      margin-left: 0.5rem;
    }
  }
`

const ListContainer = styled.div`
  position: relative;
  flex: 1;
`

const List = styled.div`
  flex: 1;
  margin-left: 4rem;
  color: ${colors.title};

  :before {
    background: none repeat scroll 0 0 #d2d2d2;
    bottom: 40px;
    content: '';
    left: 91px;
    position: absolute;
    top: 30px;
    width: 1px;
    z-index: 0;
  }
`

const Block = withReveal(
  styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1.5rem 0;
    cursor: pointer;
  `,
  <Fade right />
)

const BlockNumber = styled.div`
  background-color: white;
  transition: all 0.5s ease;
  font-size: 1rem;
  font-weight: ${({selected}) => (selected ? '600' : '400')};
  border: 1px solid
    ${({selected}) => (selected ? colors.pink : 'rgb(210, 210, 210)')};
  color: ${({selected}) => (selected ? colors.pink : colors.title)};
  border-radius: 30px;
  height: 55px;
  width: 55px;
  text-align: center;
  margin-right: 1rem;
  padding-top: 14px;
  z-index: 1;
`

const MenuPose = posed.div({
  on: {
    x: 16,
    transition: {
      ease: 'linear',
      duration: 0.5,
    },
  },
  off: {
    x: 0,
    transition: {
      ease: 'linear',
      duration: 0.5,
    },
  },
})

const MapPose = posed.div({
  off: {
    y: -2,
  },
  on: {
    y: -5,
    transition: {
      ease: 'backOut',
      duration: 600,
      yoyo: Infinity,
    },
  },
})

const MapMarker = styled(MapPose)`
    display: inline-block;
`

const BlockText = styled(MenuPose)`
  color: ${({selected}) => (selected ? colors.pink : colors.title)};
  font-size: 1.25rem;
  transition: all 0.3s ease;

  :hover {
    color: ${colors.pink};
  }
`

const events = [
  {title: 'Mariage civil', time: '11h00'},
  {title: 'Cérémonie laïque', time: '12h15'},
  {title: "Vin d'honneur", time: '13h00'},
  {title: 'Dîner & activités', time: '15h00'},
  {title: 'Fin', time: '20h00'},
]

const content = [
  {
    title: 'Titre 1',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis massa,\n' +
      '      scelerisque vel diam non, tristique condimentum dui.\n' +
      '      venenatis porta mollis. Fusce quis tincidunt orci. Integer\n' +
      '      fermentum ante augue, sed accumsan purus ornare vitae. Ut accumsan ornare\n' +
      '      elit at maximus. Aliquam tincidunt ipsum ut nunc sollicitudin dapibus.',
    location: 'Château Malou',
  },
  {
    title: 'Titre 2',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis massa,\n' +
      '      scelerisque vel diam non, tristique condimentum dui.\n' +
      '      venenatis porta mollis. Fusce quis tincidunt orci. Integer\n' +
      '      fermentum ante augue, sed accumsan purus ornare vitae. Ut accumsan ornare\n' +
      '      elit at maximus. Aliquam tincidunt ipsum ut nunc sollicitudin dapibus.',
    location: 'Villatitude',
  },
  {
    title: 'Titre 3',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis massa,\n' +
      '      scelerisque vel diam non, tristique condimentum dui.\n' +
      '      venenatis porta mollis. Fusce quis tincidunt orci. Integer\n' +
      '      fermentum ante augue, sed accumsan purus ornare vitae. Ut accumsan ornare\n' +
      '      elit at maximus. Aliquam tincidunt ipsum ut nunc sollicitudin dapibus.',
    location: 'Villatitude',
  },
  {
    title: 'Titre 4',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis massa,\n' +
      '      scelerisque vel diam non, tristique condimentum dui.\n' +
      '      venenatis porta mollis. Fusce quis tincidunt orci. Integer\n' +
      '      fermentum ante augue, sed accumsan purus ornare vitae. Ut accumsan ornare\n' +
      '      elit at maximus. Aliquam tincidunt ipsum ut nunc sollicitudin dapibus.',
    location: 'Villatitude',
  },
  {
    title: 'Titre 5',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis massa,\n' +
      '      scelerisque vel diam non, tristique condimentum dui.\n' +
      '      venenatis porta mollis. Fusce quis tincidunt orci. Integer\n' +
      '      fermentum ante augue, sed accumsan purus ornare vitae. Ut accumsan ornare\n' +
      '      elit at maximus. Aliquam tincidunt ipsum ut nunc sollicitudin dapibus.',
    location: 'Villatitude',
  },
]

const TextBlock = ({title, text, location, toggle}) => {
  const [poseToggle, setToggle] = useState(false)
  useEffect(() => {
    setToggle(true)
  }, [])
  return (
  <Text>
    <Fade left>
      <h2>{title}</h2>
      <p>{text}</p>
      <div>
        <MapMarker pose={poseToggle ? 'on' : 'off'}>
          <FontAwesomeIcon icon="map-marker-alt" />
        </MapMarker>
        <a href="#map" onClick={toggle}>
          {location}
        </a>
      </div>
    </Fade>
  </Text>
)}

const ButtonBlock = ({title, time, selected, onClick}) => (
  <Block onClick={onClick}>
    <BlockNumber selected={selected}>{time}</BlockNumber>
    <BlockText pose={selected ? 'on' : 'off'} selected={selected}>
      {title}
    </BlockText>
  </Block>
)

export const Planning = () => {
  const [selected, setSelected] = useState(1)

  const [isVToggled, vToggle] = useState(false)
  const [isCToggled, cToggle] = useState(false)
  const toggleC = () => {
    cToggle(true)
    vToggle(false)
  }
  const toggleV = () => {
    cToggle(false)
    vToggle(true)
  }

  return (
    <>
      <Content>
        <Container>
          <TextBlock
            {...content[selected - 1]}
            toggle={selected === 1 ? toggleC : toggleV}
          />
          <ListContainer>
            <Fade duration={2000}>
              <List>
                {events.map(({title, time}, index) => (
                  <ButtonBlock
                    key={time}
                    selected={selected === index + 1}
                    time={time}
                    title={title}
                    onClick={() => setSelected(index + 1)}
                  />
                ))}
              </List>
            </Fade>
          </ListContainer>
        </Container>
      </Content>
      <MapContent>
        <Map
          isVToggled={isVToggled}
          vToggle={vToggle}
          isCToggled={isCToggled}
          cToggle={cToggle}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
            process.env.REACT_APP_GMAPS_API_KEY
          }&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{height: `100%`}} />}
          containerElement={<div style={{height: `60vh`}} />}
          mapElement={<div style={{height: `100%`}} />}
        />
      </MapContent>
    </>
  )
}
