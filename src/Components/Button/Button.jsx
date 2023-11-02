import React from 'react'
import './style.css'

const Button = (props) => {
  return (
    <button className={props.style}>{props.desc}</button>
  )
}

export default Button