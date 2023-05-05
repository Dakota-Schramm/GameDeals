import React from 'react'

const Button = ({onClick, children}) => (
  <button 
    className="flex items-center justify-center border border-blue-200 border-solid" 
    {...{onClick}}
  >
    {children}
  </button>
)

export default Button;
