import React from 'react'
import './check.scss'

export const CheckBox = ({ name, input: { onChange, value }, ...rest }) => (
  <>
    <input className="cb" type="checkbox" id="cbtest" checked={value} onChange={() => onChange(!value)} {...rest} />
    <label htmlFor="cbtest" className="check-box" ></label> 
  </>
)
