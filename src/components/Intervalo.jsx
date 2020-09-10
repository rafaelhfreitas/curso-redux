import './Intervalo.css'
import React from 'react'

import Card from './Card'


export default props => {
    return (
        <Card title="Intervalo de números" red>
            <div className="Intervalo">
                <span>
                    <strong>Minimo:</strong>
                    <input type="number" value={0} readOnly></input>
                </span>
                <span>
                    <strong>Maximo:</strong>
                    <input type="number" value={10} readOnly></input>
                </span>

            </div>
        </Card>

    )
}