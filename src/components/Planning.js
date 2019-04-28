import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import {colors} from '../assets/constants/colors'
import Fade from 'react-reveal/Fade'
import withReveal from 'react-reveal/withReveal'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Map} from './Map'
import bg from '../assets/images/bg.png'
import 'rc-tooltip/assets/bootstrap_white.css'
import Tooltip from 'rc-tooltip'
import {media} from '../style/queries'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-bottom: 4rem;
  align-items: center;

  ${media.desktop`
      width: 100%;
      padding: 0 1.5rem;
  `}
`

const MapContent = styled.div`
  width: 100%;
  height: 60vh;
`

const Container = styled.div`
  display: flex;

  ${media.desktop`
      flex-direction: column-reverse;
  `}
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
    margin-top: 1rem;
    color: ${colors.pink};

    a {
      color: ${colors.pink};
      margin-left: 0.5rem;
      text-decoration: underline;
    }
  }

  ${media.desktop`
    text-align: center;
    margin: 0;
    padding: 1.5rem; 
  `}
`

const ListContainer = styled.div`
  position: relative;
  flex: 1;
  margin-left: 4rem;
  
  ${media.desktop`
      margin: 0;
  `}
`

const List = styled.div`
  flex: 1;
  color: ${colors.title};

  :before {
    background: none repeat scroll 0 0 #d2d2d2;
    bottom: 40px;
    content: '';
    left: 27px;
    position: absolute;
    top: 30px;
    width: 1px;
    z-index: 0;
  }

  ${media.desktop`
    display: flex;
    flex-direction: row;
    justify-content: center;
      
    :before {
      content: none;
    }
  `}
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

  ${media.desktop`
    height: 45px;
    width: 45px;
    font-size: 0.8rem;
    padding-top: 12px;
    margin: 0 0.5rem;
  `}
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
    y: -7,
    transition: {
      ease: 'backIn',
      duration: 800,
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

const DressCode = styled.div`
  width: 80%;
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 3rem;
  display: flex;
  background-image: url(${bg});
  ${media.desktop`
    width: 100%;
  `}
`

const DressText = styled.div`
  flex: 9;
  margin-left: 2rem;
  font-size: 0.9rem;
  font-weight: 300;

  span {
    color: ${colors.pink};
    font-weight: 300;
    text-decoration: underline;
  }

  ${media.desktop`
     margin-left: 0;
     text-align: center;
  `}
`

const DressImg = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.pink};
`

const events = [
  {title: 'Mariage civil', time: '11h00'},
  {title: 'Cérémonie laïque', time: '12h15'},
  {title: "Vin d'honneur", time: '13h00'},
  {title: 'Dîner & activités', time: '14h30'},
  {title: 'Fin des évènements', time: '20h00'},
]

const content = [
  {
    title: 'Mariage civil',
    text:
      'Nous te retrouverons pour débuter cette magnifique journée au Château Malou.\n' +
      'En effet, la commune de Woluwe-Saint-Lambert met à disposition ce cadre magique pour le mariage de ses riverains.\n' +
      'Rendez-vous donc à 11h00 pour nous accompagner lors de la montée de marches !\n',
    location: 'Château Malou',
  },
  {
    title: 'Cérémonie Laïque',
    text:
      'Puisque le mariage n’est pas qu’une question de signature de documents, nous avons décidé d’organiser une petite cérémonie laïque. Notre officiant (pas si officiel) sera chargé de nous unir dans un cadre moins formel et plus décontracté qui nous correspond. Vous aurez également l’occasion de nous faire verser une larme en prononçant quelques mots si vous le souhaitez.',
    location: 'Jardins @ Villatitude',
  },
  {
    title: 'Vin d’honneur',
    text:
      'Fini les sentiments et place à la fête !\n' +
      'Zakouskis et Champagne nous aideront à nous remettre de nos émotions et à honorer les invités qui ne sont pas conviés au dîner.\n' +
      'Dans le jardin de la Villa, autour de la piscine, seront installés des mange-debout qui permettront de profiter du magnifique cadre.\n',
    location: 'Poolside @ Villatitude',
  },
  {
    title: 'Dîner et activités',
    text:
      'Un buffet rempli de bonnes choses que l’on s’est fait un plaisir de choisir pour vous nous accueillera dès que les coupes de Champagne seront vides. \n' +
      'Dès que nos estomacs seront repus, nous pourrons passer aux activités (parfois loufoques, mais toujours amusantes !). Nous devrons malheureusement les interrompre pour couper le gâteau, mais est-ce vraiment un désagrément ?\n' +
      'Après tout ce sucre, on repartira pour la fiesta jusqu’à se faire jeter en dehors de la salle !\n',
    location: 'Salon @ Villatitude',
  },
  {
    title: 'Fin des évènements',
    text:
      'Cette journée est organisée à notre image, nous n’avons pas prévu de soirée dansante. Officiellement, la journée s’arrête là, mais nous aurons éventuellement la possibilité de continuer en after party dans notre appartement si la journée ne nous a pas trop éprouvés.',
    location: "Magathy's home",
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
  )
}

const ButtonBlock = ({title, time, selected, onClick}) => (
  <Block onClick={onClick}>
    <BlockNumber selected={selected}>{time}</BlockNumber>
    <BlockText
      pose={selected ? 'on' : 'off'}
      selected={selected}
      className="is-hidden-touch"
    >
      {title}
    </BlockText>
  </Block>
)

export const Planning = () => {
  const [selected, setSelected] = useState(1)

  const [isVToggled, vToggle] = useState(false)
  const [isCToggled, cToggle] = useState(false)
  const [isHToggled, hToggle] = useState(false)
  const toggleC = () => {
    cToggle(true)
    vToggle(false)
    hToggle(false)
  }
  const toggleV = () => {
    cToggle(false)
    vToggle(true)
    hToggle(false)
  }
  const toggleH = () => {
    cToggle(false)
    vToggle(false)
    hToggle(true)
  }
  const toggles = [toggleC, toggleV, toggleV, toggleV, toggleH]

  return (
    <>
      <Content>
        <DressCode>
          <DressImg className="is-hidden-touch">
            <FontAwesomeIcon icon="user-tie" size="3x" />
          </DressImg>
          <DressText>
            Il n'y a pas de dresscode strict, cependant n'oublie pas ta plus
            belle robe ou ton beau costume du dimanche. De plus, nous te
            demandons d'arborer un{' '}
            <Tooltip
              placement="top"
              trigger={['hover']}
              overlay={
                <span>
                  Boucles d'oreilles, broche, cravatte, collier, chausettes,
                  boutons de manchettes, pin's, ...
                </span>
              }
            >
              <span>accessoire vestimentaire</span>
            </Tooltip>{' '}
            issu de ton univers de{' '}
            <Tooltip
              placement="top"
              trigger={['hover']}
              overlay={
                <span>
                  Jeux vidéo, film, livre, manga, dessin animé, série, bande
                  dessinée, comics, ...
                </span>
              }
            >
              <span>culture populaire</span>
            </Tooltip>{' '}
            favori.
          </DressText>
        </DressCode>
        <Container>
          <TextBlock
            {...content[selected - 1]}
            toggle={toggles[selected - 1]}
          />
          <ListContainer>
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
          </ListContainer>
        </Container>
      </Content>
      <MapContent>
        <Map
          isVToggled={isVToggled}
          vToggle={vToggle}
          isCToggled={isCToggled}
          cToggle={cToggle}
          isHToggled={isHToggled}
          hToggle={hToggle}
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
