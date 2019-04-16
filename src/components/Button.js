import styled from 'styled-components'
import {fonts} from '../assets/constants/fonts'
import {colors} from '../assets/constants/colors'

export const Button = styled.button`
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  font-family: ${fonts.raleway};
  font-size: 1rem;
  font-weight: 700;
  background-color: ${colors.pink};
  color: white;
  border: 1px solid ${colors.pink};
  padding: 0.75rem;
  border-radius: 5px;
  vertical-align: center;
  text-align: center;
  align-items: center;
  margin-bottom: 1rem;
  display: block;

  :hover {
    background-color: white;
    color: ${colors.pink};
  }
`
