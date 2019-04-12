import React from 'react'
import styled from 'styled-components'
import Sticky from 'react-sticky-el'
import {colors} from '../assets/constants/colors'

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
  padding: 26px 16px;
  color: ${({active}) => (active ? colors.pink : colors.text)};
  transition: color 0.3s ease;

  :hover {
    color: ${colors.pink};
  }
`

export const Navbar = () => {
  return (
    <StickyContainer>
      <Container>
        <MenuItem href="#home">Home</MenuItem>
        <MenuItem href="#number2">Planning</MenuItem>
        <MenuItem href="#number3">Liste</MenuItem>
        <MenuItem href="#number4">Invitation</MenuItem>
      </Container>
    </StickyContainer>
  )
}