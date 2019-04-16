import React from 'react'
import styled from 'styled-components'
import {fonts} from '../assets/constants/fonts'
import {RightArrow} from './RightArrow'
import {LeftArrow} from './LeftArrow'
import disney from '../assets/images/disney.jpg'
import america from '../assets/images/america.jpg'
import potter from '../assets/images/potter.jpeg'
import miami from '../assets/images/miami.jpg'
import mustang from '../assets/images/mustang.jpg'
import Fade from 'react-reveal/Fade'
import {Button} from './Button'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {colors} from '../assets/constants/colors'

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
    bottom: 320px;
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
  
  span {
    color: ${colors.pink}
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

const TextContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  font-size: 1em;
  font-family: ${fonts.raleway};
  font-weight: 300;
  padding: 2rem;
  border: 1px solid ${colors.pink};
  border-radius: 10px;
  background-color: #fafafa;
`

const Description = styled.div`
  flex: 1;
  ${({left}) => left && 'text-align: right;'}
  margin-${({left}) => (left ? 'right' : 'left')}: 4rem;
  
  p {
    font-size: 0.8rem;
    font-weight: 300;
    text-align: center;
  }
`

const MapContainer = styled.div`
  position: relative;
  height: 300px;
  width: 100%;

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`

const events = [
  {
    title: 'AMERICA, FUCK YEAH',
    content: (
      <div>
        Pour notre voyage de noces nous allons nous rendre ...{' '}
        <span>AUX ETATS UNIS</span> ! Pays de la liberté, de la démocratie et du
        divertissement, nous souhaitons nous y rendre principalement pour
        visiter <span>Orlando en Floride</span> afin de visiter ses nombreux
        parcs d'attraction. Tant qu'à faire, on en profitera pour faire un petit
        road trip sur les routes mythiques américaines.
      </div>
    ),
    image: america,
  },
  {
    title: 'Disney World',
    content: (
      <div>
        En Floride se trouve un des plus grand parc du monde :{' '}
        <span>Disney World</span>. Il est composé de 4 à thème principaux, dont
        deux sont unique en Floride (les 2 autres sont semblables à ceux de
        Paris). Nous visiterons les parcs <span>Animal Kingdom</span> et{' '}
        <span>Epcot</span> tout en logeant dans un magnifique hôtel Disney.
      </div>
    ),
    image: disney,
  },
  {
    title: 'Road trip dans les Keys',
    content: (
      <div>
        Nous profiterons de la proximité d'Orlando avec Miami et les Keys pour
        partir en road trip à bord d'une légende américaine : la{' '}
        <span>Ford Mustang cabriolet</span>. Nous rallierons Miami et ensuite
        les <span>Keys</span>, une série d'île tropicale tout au sud de la
        Floride. Les îles des keys sont reliées par 42 ponts au dessus de la
        mer, le plus long faisant 11km de long !
      </div>
    ),
    image: mustang,
  },
  {
    title: 'Miami',
    content: (
      <div>
        Après les parcs Disney et le road trip nous resterons un peu à{' '}
        <span>Miami</span>
        pour visiter la ville mais aussi pour se reposer dans un bel hôtel sur
        <span>Miami Beach</span>. Nous en profiterons pour faire une visite des
        Everglades (marécages proche de Miami) de nuit à la recherche
        d'aligators, le tout à bord d'un aéroglisseur !
      </div>
    ),
    image: miami,
  },
  {
    title: 'Universal Studio',
    content: (
      <div>
        Retour à Orlando, direction <span>Universal Studio</span>, deux parcs à
        thème sur les univers cinématographiques de ... Universal. Le clou du
        spectacle : le village <span>Harry Potter</span> reprenant une réplique
        de Poudlard, ainsi que le chemin de traverse et pré-au-lard le tout
        accessible à bord du Poudlard Express !
      </div>
    ),
    image: potter,
  },
]

const MapEventLine = () => (
  <Event>
    <Box left>
      <LeftArrow />
      <h1>Carte du voyage</h1>
      <p>
        Pour mieux visualiser le voyage, vous pouvez utiliser cette carte
        interactive qui reprend toutes les étapes de notre trip.
      </p>
    </Box>
    <Box>
      <Fade right>
        <MapContainer>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1zoaKtINBgOxWSvjlApdu8bAU2yhcLRqY"
            zoom="21"
            center="37.4218,-122.0840"
          />
        </MapContainer>
      </Fade>
    </Box>
  </Event>
)

const EventLine = ({invert, image, title, content}) => {
  if (invert) {
    return (
      <Event>
        <Box left>
          <LeftArrow />
          <h1>{title}</h1>
          <p>{content}</p>
        </Box>
        <Box>
          <Fade right>
            <img src={image} alt="am" />
          </Fade>
        </Box>
      </Event>
    )
  }
  return (
    <Event>
      <Box left>
        <Fade left>
          <img src={image} alt="am" />
        </Fade>
      </Box>
      <Box>
        <RightArrow />
        <h1>{title}</h1>
        <p>{content}</p>
      </Box>
    </Event>
  )
}

export const List = () => (
  <>
    <Content>
      <EventContainer>
        {events.map((event, index) => (
          <EventLine invert={index % 2 === 1} {...event} />
        ))}
        <MapEventLine />
      </EventContainer>
    </Content>
    <TextContainer>
      <Description left>
        Si vous souhaitez participer au voyage de noces, nous mettons à votre
        disposition la liste de mariage sur le site Kadolog. Le site vous permet
        de participer financièrement à notre voyage de noces en "achetant" des
        activités et parties du voyage. C'est une manière ludique et pratique
        qui vous permet de savoir à quoi serviront les dons !
      </Description>
      <Description>
        <Button
          as="a"
          href="https://www.kadolog.com/fr/list/voyage-de-noces-disney-world-universal-studio-road-trip-miami-keys"
          target="_blank"
          rel="noreferrer noopener"
        >
          Liste de mariage <FontAwesomeIcon icon="chevron-right" />
        </Button>
        <p>
          Nous vous encourageons à payer par virement bancaire, les autres modes
          de paiement sont soumis à un prélèvement de 2,4% du site. Si vous
          souhaitez participer d'une autre manière, nous vous invitons à nous
          contacter directement.
        </p>
      </Description>
    </TextContainer>
  </>
)
