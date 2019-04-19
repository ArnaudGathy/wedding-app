import React from 'react'
import './check.scss'
import styled from 'styled-components'

const Container = styled.div`
    margin: 2rem 0;
`

export const CheckBox = ({ name, input: { onChange, value }, ...rest }) => (
  <Container>
    <input className="cb" type="checkbox" id="cbtest" checked={value} onChange={() => onChange(!value)} {...rest} />
    <label htmlFor="cbtest" className="check-box" ></label> 
  </Container>
)
