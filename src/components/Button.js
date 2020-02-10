import React from 'react'

const Button = ({children, clickHandler, hash}) => (
    <button className="drum-pad" onClick={clickHandler} id={hash}>
    {children}
    </button>
)

export default Button