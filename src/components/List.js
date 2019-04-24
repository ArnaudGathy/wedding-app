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
import orlando from '../assets/images/orlando.jpg'
import bg from '../assets/images/bg.png'
import Fade from 'react-reveal/Fade'
import {Button} from './Button'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {colors} from '../assets/constants/colors'
import {media} from '../style/queries'
import Zoom from 'react-reveal'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-bottom: 4rem;
  position: relative;

  ${media.desktop`
      width: 100%;
      padding: 0 1.5rem;
      margin-bottom: 2rem;
  `}
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

  ${media.desktop`
    :before {
      content: none;
    }
  `}
`

const Event = styled.div`
  display: flex;
  margin-bottom: 3rem;
  ${media.desktop`
      margin-bottom: 2rem;
  `}
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
  
  a {
    color: ${colors.pink};
    text-decoration: underline;
  }
  
  span {
    font-weight: 500;
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
  
    ${media.desktop`

      text-align: center;
      margin: 0;
      height: auto;
      
      :after {
        content: none;
        position: static;
        border: none;
      }
  `}
`

const FullWidthContainer = styled.div`
  width: 100%;
  background-image: url(${bg});
  display: flex;
  justify-content: center;
`

const TextContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  font-size: 1em;
  font-family: ${fonts.raleway};
  font-weight: 300;
  padding: 4rem 0;
  border-radius: 10px;

  ${media.desktop`
    flex-direction: column;
    width: 100%;
    padding: 1.5rem;
  `}
`

const ListText = styled.div`
  flex: 1;
  text-align: right;
  margin-right: 4rem;

  p {
    font-size: 0.8rem;
    font-weight: 300;
    text-align: center;
  }

  ${media.desktop`
      margin-bottom: 2rem;
      text-align: center;
      margin-right: 0;
  `}
`

const ListButton = styled.div`
  flex: 1;
  text-align: left;
  margin-left: 4rem;

  p {
    font-size: 0.8rem;
    font-weight: 300;
    text-align: center;
  }

  ${media.desktop`
      text-align: center;
      margin-left: 0;
  `}
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
    title: 'AMERICA. FUCK. YEAH.',
    content: (
      <div>
        Pour notre voyage de noces nous allons nous rendre ...{' '}
        <span>AUX ETATS UNIS</span> ! Pays de la liberté, de la démocratie et du
        divertissement, nous voulons nous y rendre principalement pour visiter{' '}
        <span>Orlando en Floride</span> afin de visiter ses nombreux parcs
        d'attraction. Tant qu'à faire, on en profitera pour faire un petit road
        trip sur les routes mythiques américaines.
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
    title: 'Road trip au Keys',
    content: (
      <div>
        Nous profiterons de la proximité d'Orlando avec Miami et les Keys pour
        partir en road trip à bord d'une légende américaine : la{' '}
        <span>Ford Mustang cabriolet</span>. Nous rallierons Miami et ensuite
        les <span>Keys</span>, une série d'îles tropicale tout au sud de la
        Floride. Les îles des keys sont reliées par 42 ponts au dessus de la
        mer, le plus long faisant 11km de long ! Une vue à ne pas rater.
      </div>
    ),
    image: mustang,
  },
  {
    title: 'Miami',
    content: (
      <div>
        Après les parcs Disney et le road trip nous resterons un peu à{' '}
        <span>Miami</span> pour visiter la ville mais on en profitera aussi pour
        se reposer dans le plus bel hôtel de notre voyage sur{' '}
        <span>Miami Beach</span> : le Riu Plaza. Nous en profiterons pour faire
        une visite des Everglades (marécages proche de Miami) de nuit à la
        recherche d'aligators, le tout à bord d'un aéroglisseur !
      </div>
    ),
    image: miami,
  },
  {
    title: 'Orlando',
    content: (
      <div>
        Même si nous atterrissons dans la ville, on aura pour la 1re fois
        vraiment le temps de visiter <span>Orlando</span> plus en profondeur au
        retour du roadtrip. Une bonne occasion de découvrir une ville
        "ordinaire" américaine et de passer voir les légendaires{' '}
        <a
          href="http://www.peopleofwalmart.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          "Walmart people"
        </a>{' '}
        ou de tester un Baconator au <span>Wendy's</span>.
      </div>
    ),
    image: orlando,
  },
  {
    title: 'Universal Studio',
    content: (
      <div>
        Après le retour à Orlando, direction <span>Universal Studio</span>, deux
        parcs à thème sur les univers cinématographiques de ... Universal. Le
        clou du spectacle : le village <span>Harry Potter</span> reprenant une
        réplique de Poudlard, ainsi que le chemin de traverse et pré-au-lard le
        tout directement accessible à bord du Poudlard Express lui-même !
      </div>
    ),
    image: potter,
  },
]

const MapEventLine = () => (
  <Event>
    <Box left>
      <Fade left>
        <MapContainer>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1zoaKtINBgOxWSvjlApdu8bAU2yhcLRqY"
            zoom="21"
            center="37.4218,-122.0840"
            title="Map"
          />
        </MapContainer>
      </Fade>
    </Box>
    <Box className="is-hidden-touch">
      <Fade right>
        <RightArrow />
        <h1>Carte du voyage</h1>
        <p>
          Pour mieux visualiser le voyage, tu peux utiliser cette carte
          interactive qui reprend toutes les étapes de notre trip. Elle indique
          tous nos trajets ainsi que les lieux que nous allons visiter.
        </p>
      </Fade>
    </Box>
  </Event>
)

const EventLine = ({invert, image, title, content}) => {
  if (invert) {
    return (
      <Event>
        <Box left>
          <Fade left>
            <LeftArrow className="is-hidden-touch" />
            <h1>{title}</h1>
            {content}
          </Fade>
        </Box>
        <Box className="is-hidden-touch">
          <Fade right>
            <img src={image} alt="am" />
          </Fade>
        </Box>
      </Event>
    )
  }
  return (
    <Event>
      <Box left className="is-hidden-touch">
        <Fade left>
          <img src={image} alt="am" />
        </Fade>
      </Box>
      <Box>
        <Fade right>
          <RightArrow className="is-hidden-touch" />
          <h1>{title}</h1>
          {content}
        </Fade>
      </Box>
    </Event>
  )
}

export const List = () => (
  <>
    <Content>
      <EventContainer>
        {events.map((event, index) => (
          <EventLine key={event.title} invert={index % 2 === 1} {...event} />
        ))}
        <MapEventLine />
      </EventContainer>
    </Content>
    <FullWidthContainer>
      <TextContainer>
        <ListText>
          Si tu souhaites participer au voyage de noces, nous mettons à ta
          disposition la liste de mariage sur le site Kadolog. Le site te permet
          de participer financièrement à notre voyage de noces en "achetant" des
          activités et parties du voyage. C'est une manière ludique et pratique
          qui te permet de savoir à quoi serviront les dons !<br />
          <br />
          Tu peux soit offrir un cadeau entièrement, soit participer pour une
          partie au montant fixe soit participer pour une partie au montant
          libre.
        </ListText>
        <ListButton>
          <Zoom>
          <Button
            as="a"
            href="https://www.kadolog.com/fr/list/voyage-de-noces-disney-world-universal-studio-road-trip-miami-keys"
            target="_blank"
            rel="noreferrer noopener"
          >
            Liste de mariage <FontAwesomeIcon icon="chevron-right" />
          </Button>
          <p>
            Nous t'encourageons à payer par virement bancaire, les autres modes
            de paiement sont soumis à un prélèvement de 2,4% de la part site. Si
            te souhaites participer d'une autre manière, nous t'invitons à nous
            contacter directement.
          </p>
          </Zoom>
        </ListButton>
      </TextContainer>
    </FullWidthContainer>
  </>
)
