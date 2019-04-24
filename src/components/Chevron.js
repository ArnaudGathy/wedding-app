import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import posed from 'react-pose'
import styled from 'styled-components'

const ChevronPose = posed.div({
  off: {
    opacity: 0.7,
    y: 0,
    transition: {
      duration: 0,
    },
  },
  on: {
    opacity: 0,
    y: 30,
    transition: {
      ease: 'easeOut',
      duration: 2000,
      loop: Infinity,
    },
  },
})

const ChevronContainer = styled(ChevronPose)`
  margin-top: 70px;
`

export const Chevron = () => {
  const [toggle, setToggle] = useState(false)
  useEffect(() => {
      setToggle(true)
  }, [])

  return (
    <ChevronContainer pose={toggle ? 'on' : 'off'}>
      <a href="#planning"><FontAwesomeIcon icon="chevron-down" size="2x" /></a>
    </ChevronContainer>
  )
}
