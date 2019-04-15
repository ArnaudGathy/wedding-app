import React from 'react'
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
`

const MainHeartBlock = styled.div`
  background: url(${heart}) no-repeat center center transparent;
  background-size: contain;
  opacity: 0.3;
  width: 60%;
  height: 380px;
  position: absolute;
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
`

const MomentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
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

const MapContainer = styled.div`
  position: relative;
  height: 60vh;
  width: 100%;

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`

const CountDownPart = ({value, title}) => (
  <MomentContainer>
    <MomentValue>{value}</MomentValue>
    <MomentTitle>{title}</MomentTitle>
  </MomentContainer>
)

export const HomeScreen = () => (
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
      subtitle="Un mariage à Bruxelles pour des Bruxellois. L’occasion de vous faire découvrir que notre ville aussi peut se faire belle si elle en a envie."
      autoHeight
    >
      <Planning />
    </Section>
    <Section
      id="liste"
      title1="Voyage"
      title2="de noces"
      subtitle="Vivant ensemble depuis 9 ans, nous n'avons guère besoin d'un service en porcelaine ni d'argenterie. Nous souhaitons plutôt vous proposer de participer à notre voyage de noces."
      invert
      autoHeight
    >
      <List />
    </Section>
    <Section
      id="invitation"
      title1="Ton"
      title2="invitation"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis massa, scelerisque vel diam non."
    >
      CONTENT
    </Section>
    <MapContainer>
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1zoaKtINBgOxWSvjlApdu8bAU2yhcLRqY"
        zoom="21"
        center="37.4218,-122.0840"
      />
    </MapContainer>
  </Container>
)
