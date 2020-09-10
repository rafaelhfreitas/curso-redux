import './Intervalo.css'
import React from 'react'

import Card from './Card'


export default props => {
    const {min, max} = props
    return (
        <Card title="Intervalo de números" red>
            <div className="Intervalo">
                <span>
                    <strong>Minimo:</strong>
                    <input type="number" value={min} readOnly></input>
                </span>
                <span>
                    <strong>Maximo:</strong>
                    <input type="number" value={max} readOnly></input>
                </span>

            </div>
        </Card>

    )
}