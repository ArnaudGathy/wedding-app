import React from 'react'
import styled from 'styled-components'
import '../style/minicheckbox.css'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5em;
  padding: 0.5em;
  font: 24px/1.4 'RobotoDraft', sans-serif;
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
      <ins className="minicheck-ins">
        <i>{title}</i>
      </ins>
    </label>
  </Container>
)
