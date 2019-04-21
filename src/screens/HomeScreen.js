import React, {useState} from 'react'
import styled from 'styled-components'
import am from '../assets/images/am.jpg'
import heart from '../assets/images/heart.svg'
import Countdown from 'react-countdown-now'
import {Chevron} from '../components/Chevron'
import {Navbar} from '../components/Navbar'
import {Section} from '../components/Section'
import {fonts} from '../assets/constants/fonts'
import {colors} from '../assets/constants/colors'
import {Planning} from '../components/Planning'
import {List} from '../components/List'
import {RSVPScreen} from './RSVPScreen'
import {Field, Form} from 'react-final-form'
import {Button} from '../components/Button'
import {media} from '../style/queries'

const Container = styled.div`
  font-size: 1rem;
  font-family: ${fonts.raleway};
  color: ${colors.text};
`

const MainBanner = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${am});
  background-position: 0px 60%;
`

const MainBannerStripes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;
  background: repeating-linear-gradient(
    to right,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.4) 1px,
    rgba(0, 0, 0, 0.6) 1px,
    rgba(0, 0, 0, 0.6) 2px
  );
`

const MainBlock = styled.div`
  width: 60%;
  font-family: ${fonts.raleway};
  color: white;
  
  ${media.tablet`
      width: 100%;
  `}
`

const MainHeartBlock = styled.div`
  background: url(${heart}) no-repeat center center transparent;
  background-size: contain;
  opacity: 0.3;
  width: 60%;
  height: 380px;
  position: absolute;
  ${media.tablet`
    width: 100%;
    height: 150px;
  `}
`

const MainInfoBlock = styled.div`
  padding-top: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
`

const WeddingBlock = styled.div`
  font-family: ${fonts.dancing};
  font-size: 4rem;

  ::first-letter {
    color: ${colors.pink};
  }
`

const NameBlock = styled.div`
  font-size: 3rem;
  font-weight: 500;
`

const DateBlock = styled.div`
  font-family: ${fonts.roboto};
  font-weight: 300;
  font-size: 1.5rem;
`

const CountDownBlock = styled.div`
  margin-top: 8rem;
  display: flex;
  justify-content: space-around;
  width: 60%;
  ${media.tablet`
      width: 100%;
      padding: 0 1.5rem;
  `}
`

const MomentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const MomentTitle = styled.div`
  font-family: ${fonts.dancing};
  font-size: 2rem;
`
const MomentValue = styled.div`
  font-family: ${fonts.raleway};
  font-weight: 500;
  font-size: 3rem;
`

const RSVPContainer = styled.div`
  display: flex;
  width: 60%;
  margin-bottom: 4rem;
  position: relative;
  justify-content: center;
  text-align: center;
  
  ${media.tablet`
      width: 100%;
      padding: 0 1.5rem;
  `}
`

export const NoCode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.pink};
  border-radius: 10px;
  padding: 2rem;
  font-family: ${fonts.raleway};
  font-size: 1rem;
  font-weight: 300;

  span {
    color: ${colors.pink};
    font-weight: 500;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 400;
  }

  h2 {
    font-size: 1.25rem;
  }

  input {
    width: 100%;
    background-color: white;
    border: 1px solid ${colors.text};
    border-radius: 5px;
    padding: 0.5rem;
    margin: 1rem 0;
    font-size: 1rem;

    :focus {
      outline-width: 0;
    }
  }
`

const CountDownPart = ({value, title}) => (
  <MomentContainer>
    <MomentValue>{value}</MomentValue>
    <MomentTitle>{title}</MomentTitle>
  </MomentContainer>
)

export const HomeScreen = ({
  match: {
    params: {code},
  },
}) => {
  const [codeName, setCode] = useState(null)
  return (
    <Container>
      <MainBanner id="home">
        <MainBannerStripes>
          <MainBlock>
            <MainHeartBlock />
            <MainInfoBlock>
              <WeddingBlock>Mariage</WeddingBlock>
              <NameBlock>
                <div>Magaly & Arnaud</div>
              </NameBlock>
              <DateBlock>5 Octobre 2019</DateBlock>

              <Countdown
                date={new Date('2019-10-05T11:00:00')}
                renderer={({days, hours, minutes, seconds}) => (
                  <CountDownBlock>
                    <CountDownPart value={days} title="jours" />
                    <CountDownPart value={hours} title="heures" />
                    <CountDownPart value={minutes} title="minutes" />
                    <CountDownPart value={seconds} title="secondes" />
                  </CountDownBlock>
                )}
              />
              <Chevron />
            </MainInfoBlock>
          </MainBlock>
        </MainBannerStripes>
      </MainBanner>
      <Navbar />
      <Section
        id="planning"
        title1="La"
        title2="journée"
        subtitle="Nous avons choisi d'organiser le mariage à notre image et de se détacher un peu des conventions habituelles. Le thème sera centré sur la culture pop !"
        autoHeight
      >
        <Planning />
      </Section>
      <Section
        id="liste"
        title1="Voyage"
        title2="de noces"
        subtitle="Vivant ensemble depuis 9 ans, nous n'avons pas l'utilité d'un service en porcelaine ni d'argenterie. Nous souhaitons plutôt te proposer de participer à notre voyage de noces. Voici à quoi ressemblerait notre voyage de rêve."
        invert
        autoHeight
      >
        <List />
      </Section>
      <Section
        id="invitation"
        title1="Ton"
        title2="invitation"
        subtitle="Pour faciliter notre organisation, peux-tu répondre à notre invitation via l'outil ci-dessous avant le 1er juin 2019 ?"
      >
        <RSVPContainer>
          {code ? (
            <RSVPScreen codeName={code} />
          ) : codeName ? (
            <RSVPScreen codeName={codeName} reset={() => setCode(null)} />
          ) : (
            <NoCode>
              <h2>Indique ton code unique :</h2>
              <Form
                onSubmit={data => setCode(data.codeName)}
                render={({handleSubmit}) => (
                  <form onSubmit={handleSubmit}>
                    <Field
                      name="codeName"
                      component="input"
                      type="text"
                      placeholder="Code ultra secret"
                    />
                    <br />
                    <Button type="submit">Valider</Button>
                  </form>
                )}
              />
            </NoCode>
          )}
        </RSVPContainer>
      </Section>
    </Container>
  )
}
