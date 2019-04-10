import React from 'react'
import styled from 'styled-components'

export const colors = {
  pink: 'rgb(222, 3, 127)',
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  box-shadow: 0 10px 14px -10px rgba(0, 0, 0, 0.2);
`

const MenuItem = styled.a`
padding: 26px 16px;
  color: black;

  :hover {
    color: ${colors.pink};
  }
`

export const Navbar = () => (
  <Container>
    <MenuItem href="#home">Home</MenuItem>
    <MenuItem href="#1">Menu 1</MenuItem>
    <MenuItem href="#2">Menu 2</MenuItem>
  </Container>
)
