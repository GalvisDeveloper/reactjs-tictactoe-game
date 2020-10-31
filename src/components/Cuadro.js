

import React from 'react'

export const Cuadro = (props) => {
    return (
        <button className="cuadro" onClick={props.onClick}>
            {props.value}
        </button>
    )
}
