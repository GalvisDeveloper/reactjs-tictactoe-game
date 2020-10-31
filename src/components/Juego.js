

import React, { Component } from 'react'
import { Tablero } from './Tablero';

export default class Juego extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sigueX: true,
            pasoNumero: 0,
            historial: [
                {
                    cuadros: Array(9).fill(null)
                }
            ],
        }
    }

    saltarA(paso) {
        this.setState({
            pasoNumero: paso,
            sigueX: (paso % 2) === 0,
            historial: this.state.historial.slice(0, paso + 1),
        })
    }

    handleClick(i) {
        const historial = this.state.historial.slice(0, this.state.pasoNumero + 1);
        const actual = historial[historial.length - 1];
        const cuadros = actual.cuadros.slice();
        const ganador = calcularGanador(cuadros);
        if (ganador || cuadros[i]) {
            return;
        }
        cuadros[i] = this.state.sigueX ? 'X' : 'O';
        this.setState({
            historial: historial.concat({
                cuadros: cuadros,
            }),
            sigueX: !this.state.sigueX,
            pasoNumero: historial.length,
        });
    }

    render() {

        const history = this.state.historial;
        const actual = history[history.length - 1];
        const ganador = calcularGanador(actual.cuadros);
        const movimientos = history.map((paso, mov) => {
            const desc = mov ? 'Ir a #' + mov : 'Empezar el juego';
            return (
                <li key={mov}>
                    <button onClick={() => { this.saltarA(mov) }}>
                        {desc}
                    </button>
                </li >
            )
        });

        let estado = ganador ? 'El ganador es: ' + ganador : 'El siguiente es ' + (this.state.sigueX ? 'X' : 'O');

        return (
            <div className="game">
                <div className="tablero_game">
                    <Tablero
                        onClick={(i) => this.handleClick(i)}
                        cuadros={actual.cuadros}
                    />
                </div>
                <div className="info_game">
                    <div><strong>{estado}</strong></div>
                    <ul>
                        {movimientos}
                    </ul>
                </div>
            </div>
        )
    }
}


function calcularGanador(cuadros) {
    const lineaGanadora = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lineaGanadora.length; i++) {
        const [a, b, c] = lineaGanadora[i];
        if (cuadros[a] && cuadros[a] === cuadros[b] && cuadros[b] === cuadros[c]) {
            return cuadros[a];
        }
    }
    return null;
}