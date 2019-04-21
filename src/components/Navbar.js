import React from 'react'
import styled from 'styled-components'
import Sticky from 'react-sticky-el'
import {colors} from '../assets/constants/colors'
import {media} from '../style/queries'

const StickyContainer = styled(Sticky)`
  z-index: 9999;
`

const Container = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 10px 14px -10px rgba(0, 0, 0, 0.2);
`

const MenuItem = styled.a`
  padding: 26px 2rem;
  color: ${({active}) => (active ? colors.pink : colors.text)};
  transition: color 0.3s ease;
  
  ${media.tablet`
      padding: 0 1rem;
  `}

  :hover {
    color: ${colors.pink};
  }
`

export const Navbar = () => {
  return (
    <StickyContainer className="is-hidden-touch">
      <Container>
        <MenuItem href="#home">Home</MenuItem>
        <MenuItem href="#planning">Planning</MenuItem>
        <MenuItem href="#liste">Liste de mariage</MenuItem>
        <MenuItem href="#invitation">Invitation</MenuItem>
      </Container>
    </StickyContainer>
  )
}
