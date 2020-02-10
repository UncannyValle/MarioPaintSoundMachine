import React from 'react'

const Button = ({children, clickHandler}) => (
    <button className="drum-pad" onClick={clickHandler}>
    {children}
    </button>
)

export default Button