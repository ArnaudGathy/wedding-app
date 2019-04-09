import React from 'react'
import styled from 'styled-components'
import am from '../assets/images/am.jpg'
import heart from '../assets/images/heart.svg'
import Countdown from 'react-countdown-now'
import {Chevron} from '../components/Chevron'

export const fonts = {
  raleway: '"Raleway", sans-serif',
  roboto: '"Roboto", sans-serif',
  dancing: '"Dancing Script", sans-serif',
}

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
    color: rgb(222, 3, 127);
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

const CountDownPart = ({value, title}) => (
  <MomentContainer>
    <MomentValue>{value}</MomentValue>
    <MomentTitle>{title}</MomentTitle>
  </MomentContainer>
)

export const HomeScreen = () => (
  <div>
    <MainBanner>
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
    <div>zizi</div>
    <div />
  </div>
)
