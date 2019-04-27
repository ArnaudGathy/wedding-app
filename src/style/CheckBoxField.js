import React from 'react'
import styled from 'styled-components'
import {fonts} from '../assets/constants/fonts'
import 'bulma-extensions/bulma-checkradio/dist/css/bulma-checkradio.min.css'

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  font: 1rem ${fonts.raleway};
  margin: 1rem 0;
`

export const CheckBoxField = ({
  name,
  title,
  input: {onChange, value},
  ...rest
}) => (
  <Container>
    <div className="field">
      <input
        className="is-checkradio is-danger is-large"
        id={title}
        type="checkbox"
        name="check"
        checked={value}
        onChange={() => onChange(!value)}
        {...rest}
      />
      <label htmlFor={title}>{title}</label>
    </div>
  </Container>
)
