import React from 'react'
import styled from 'styled-components'
import headline from '../assets/images/headline.svg'
import underline from '../assets/images/underline.svg'
import {fonts} from '../assets/constants/fonts'
import {colors} from '../assets/constants/colors'

const Container = styled.div`
  height: 100vh;
  padding-top: 80px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.div`
  width: 60%;
  margin: 88px 0 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Headline = styled.div`
  background: url(${headline}) no-repeat center center;
  width: 100%;
  height: 90px;
  position: absolute;
  z-index: -1;
`

const Title = styled.div`
  font-size: 3rem;
  line-height: 1em;
  font-family: ${fonts.dancing};
  color: black;
  margin: 24px 0 16px 0;

  span {
    color: ${colors.pink};
  }
`

const Underline = styled.img`
  width: 200px;
  margin-bottom: 16px;
`

const Subtitle = styled.div`
  font-size: 1.25em;
  line-height: 1.625em;
  font-family: ${fonts.raleway};
  font-weight: 300;
  color: ${colors.text};
  width: 60%;
  text-align: center;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`

export const Section = ({children, id, title1, title2, subtitle, invert}) => (
  <Container id={id}>
    <Header>
      <Headline />
      <Title>
        {invert ? (
          <>
            <span>{title1}</span> {title2}
          </>
        ) : (
          <>
            {title1}
            <span> {title2}</span>
          </>
        )}
      </Title>
      <div>
        <Underline alt="underline" src={underline} />
      </div>
      <Subtitle>
        <div>{subtitle}</div>
      </Subtitle>
    </Header>
    <Content>{children}</Content>
  </Container>
)
