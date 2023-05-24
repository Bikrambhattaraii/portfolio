import "./buttonstyles.css"

import React, { Children } from 'react'

const Button = () => {

  return (
    <div>
      <button className="reusable-button">
    {Children}
      </button>
    </div>
  )
}

export default Button
