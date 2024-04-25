import React from 'react'
import "./style.css"

const Button = (props) => {
  return (
    <button type="button" className={`${props.variant} ${props.outline} btns`} {...props}>{props.name}</button>
   
  )
}

export default Button