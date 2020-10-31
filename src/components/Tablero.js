

import React from 'react'
import { Cuadro } from './Cuadro'

export const Tablero = (props) => {


    const renderCuadro = (i) => {
        return (
            <Cuadro
                value={props.cuadros[i]}
                onClick={() => props.onClick(i)}
            />
        );
    };

    return (
        <div className="tablero">
            <div className="fila">
                {renderCuadro(0)}
                {renderCuadro(1)}
                {renderCuadro(2)}
            </div>
            <div className="fila">
                {renderCuadro(3)}
                {renderCuadro(4)}
                {renderCuadro(5)}
            </div>
            <div className="fila">
                {renderCuadro(6)}
                {renderCuadro(7)}
                {renderCuadro(8)}
            </div>
        </div>
    )
}
