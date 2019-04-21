import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 5vh;
    
    p {
      padding: 1rem;
      font-size: 1rem;
      font-weight: 300;
    }
`

export const Footer = () => (
  <Container>
    <p>© Arnaud Gathy 2019</p>
  </Container>
)