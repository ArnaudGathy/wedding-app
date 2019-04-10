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

const Container = styled.div`
  font-size: 1rem;
  font-family: ${fonts.default};
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

const Fakediv = styled.div`
  height: 400px;
  background-color: tomato;
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
      id="number2"
      title1="Notre"
      title2="Mariage"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis massa, scelerisque vel diam non."
    >
      CONTENT
    </Section>
    <Fakediv id="number3">HELLOU</Fakediv>
  </Container>
)
