import React from 'react'
import styled from 'styled-components'
import '../style/minicheckbox.css'
import {fonts} from '../assets/constants/fonts'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font: 24px/1.4 ${fonts.raleway}, sans-serif;
`

export const CheckBoxField = ({
  name,
  title,
  input: {onChange, value},
  ...rest
}) => (
  <Container>
    <input
      id={title}
      type="checkbox"
      className="minicheck"
      checked={value}
      onChange={() => onChange(!value)}
      {...rest}
    />
    <label className="minicheck-label" htmlFor={title}>
      <span className="minicheck-span" />
      {title}
    </label>
  </Container>
)
